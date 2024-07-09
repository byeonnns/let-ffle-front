<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <!-- <div class="flex-grow-1 d-flex flex-column"></div> -->
                <div class="d-flex flex-column ms-5" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                        <h4>문의 수정하기</h4>
                    </div>
                    <div class="container" style="width: 100%; height:100%;">
                        <div style="width: 100%; height:100%;">
                            <form @submit.prevent="handleSubmit">
                                <div>
                                    <div class="form-group row">
                                        <label for="ititle" class="col-sm-2 col-form-label">제목</label>
                                        <div class="col-sm-10">
                                            <input id="ititle" type="text" class="form-control"
                                                v-model="inquiry.ititle" />
                                        </div>
                                    </div>
                                    <div class="form-group row mt-4">
                                        <label for="icontent" class="col-sm-2 col-form-label">내용</label>
                                        <div class="col-sm-10">
                                            <textarea id="icontent" type="text" class="form-control"
                                                style="height:250px;" v-model="inquiry.icontent"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row mt-4">
                                        <label for="iattach" class="col-sm-2 col-form-label">첨부파일</label>
                                        <div class="col-sm-10">
                                            <input id="iattach" type="file" class="form-control-file" ref="iattach" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <div class="col-sm-12 d-flex justify-content-end">
                                            <input type="submit" class="btn btn-outline-light btn-sm me-2 rounded-0"
                                                value="수정하기" @click="updateInquiry" />
                                            <RouterLink to="/Member/Mypage/InquiryList">
                                                <input type="button" class="btn btn-outline-light btn-sm rounded-0"
                                                    value="취소" @click="deleteInquiry" />
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <RaffleToast ref="seeya" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import RaffleToast from "@/components/RaffleToast.vue";
import { useRouter, useRoute } from 'vue-router';
import MemberAPI from '@/apis/MemberAPI';

const router = useRouter();
const route = useRoute();
const inquiry = ref({});
const ino = route.query.ino;
const iattach = ref(null);
const seeya = ref(null);

async function getInquiryDetail(ino) {
    try {
        const response = await MemberAPI.myInquiryDetail(ino);
        inquiry.value = response.data;
    } catch (error) {
        console.log(error);
    }
}
getInquiryDetail(ino);

async function handleSubmit() {

    var total = true;

    var titlePattern = /^.{2,50}$/;
    var usertitle = titlePattern.test(inquiry.value.ititle)
    if (!usertitle) {
        total = false;
        seeya.value.showToast("제목을 2자 이상 작성 해주세요");
    }

    var contentPattern = /^.{10,1000}$/;
    var usercontent = contentPattern.test(inquiry.value.icontent);
    if (!usercontent) {
        total = false;
        seeya.value.showToast("내용을 10자 이상 작성 해주세요");
    }

    if (total) {
        // multipart/form-data 객체 생성
        const formData = new FormData();

        // 문자 파트 넣기
        formData.append("ino", inquiry.value.ino);
        formData.append("ititle", inquiry.value.ititle);
        formData.append("icontent", inquiry.value.icontent);

        // 파일 파트 넣기
        const elIattach = iattach.value;
        if (elIattach.files.length != 0) {
            formData.append("iattach", elIattach.files[0]);
        }

        // 게시물 쓰기 요청
        try {
            await MemberAPI.updateInquiry(formData);
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
    ;
    width: 100px;
    height: 40px;
}
</style>