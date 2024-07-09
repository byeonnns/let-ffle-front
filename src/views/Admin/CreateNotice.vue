<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>공지사항 등록</h3>
            </div>
            <div class="container" style="width: 100%; height:500px;">
                <form @submit.prevent="handleSubmit">
                    <div style="width: 100%; height:500px;">
                        <div class="form-group row">
                            <label for="nmaincategory" class="col-sm-2 col-form-label">분류</label>
                            <div class="col-sm-10 align-content-center">
                                <select v-model="notice.nmaincategory">
                                    <option value="공지사항">공지사항</option>
                                    <option value="자주묻는질문">자주 묻는 질문</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="nsubcategory" class="col-sm-2 col-form-label">소분류</label>
                            <div class="col-sm-10 align-content-center">
                                <select v-if="notice.nmaincategory == '공지사항'" v-model="notice.nsubcategory">
                                    <option value="공지">공지</option>
                                    <option value="당첨자 발표">당첨자 발표</option>
                                    <option value="서비스">서비스</option>
                                </select>
                                <select v-if="notice.nmaincategory == '자주묻는질문'" v-model="notice.nsubcategory">
                                    <option value="일반">일반</option>
                                    <option value="이용정책">이용정책</option>
                                    <option value="래플">래플</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row mt-2">
                            <label for="ntitle" class="col-sm-2 col-form-label">제목</label>
                            <div class="col-sm-10">
                                <input id="ntitle" type="text" class="form-control" v-model="notice.ntitle" />
                            </div>
                        </div>

                        <div class="form-group row mt-4">
                            <label for="ncontent" class="col-sm-2 col-form-label">내용</label>
                            <div class="col-sm-10">
                                <textarea v-model="notice.ncontent" id="ncontent" class="form-control"
                                    style="height:250px;"></textarea>
                            </div>
                        </div>

                        <div class="form-group row mt-4">
                            <label for="nattach" class="col-sm-2 col-form-label">첨부파일</label>
                            <div class="col-sm-10">
                                <input id="nattach" type="file" class="form-control-file" ref="nattach" />
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-sm-12 d-flex justify-content-end">
                                <input type="submit" class="btn btn-outline-light btn-sm me-2 rounded-0" value="등록" />
                                <RouterLink to="/Board/BoardList">
                                    <input type="button" class="btn btn-outline-light btn-sm rounded-0" value="취소" />
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </form>
                <RaffleToast ref="seeya" />
            </div>

            <!-- <RaffleToast ref="seeya"/> -->
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import RaffleToast from '@/components/RaffleToast.vue';
import NoticeAPI from '@/apis/NoticeAPI';
import { useRouter } from 'vue-router';

const seeya = ref("");
const router = useRouter();

const notice = ref({
    nmaincategory: "공지사항",
    nsubcategory: "공지",
    ntitle: "",
    ncontent: ""
});

const nattach = ref(null);

async function handleSubmit() {
    let total = true;

    const titlepattern = /^.{2,50}$/;
    const yourtitle = titlepattern.test(notice.value.ntitle);
    if (!yourtitle) {
        total = false;
        seeya.value.showToast("제목을 입력 해주세요");
    }

    console.log(notice.value.ncontent);
    const contentpattern = /^[\s\S]{3,9999}$/;
    const yourcontent = contentpattern.test(notice.value.ncontent);
    if (!yourcontent) {
        total = false;
        seeya.value.showToast("내용을 입력 해주세요");
    }

    if (total) {
        const formData = new FormData();
        formData.append("ntitle", notice.value.ntitle);
        formData.append("ncontent", notice.value.ncontent);
        formData.append("nsubcategory", notice.value.nsubcategory);
        formData.append("nmaincategory", notice.value.nmaincategory);

        const elNattach = nattach.value;
        if (elNattach.files.length != 0) {
            formData.append("nattach", elNattach.files[0]);
        }

        try {
            await NoticeAPI.createNotice(formData);
            router.back();
        } catch (error) {
            console.log(error);
        }
    }
}

</script>

<style scoped>
.btn {
    background-color: #F37551;
    color: white;
}
</style>