<template>
    <div class="container" style="width: 100%; height:500px; ">
            <form @submit.prevent="handleSubmit">
            <div style="width: 100%; height:500px;">
                <div class="form-group row">
                    <label for="btitle" class="col-sm-2 col-form-label">분류</label>
                    <div class="col-sm-10 align-content-center">
                        <select>
                            <option>공지사항</option>
                            <option>자주 묻는 질문</option>
                        </select>
                    </div>
                </div>

                <div class="form-group row mt-2">
                    <label for="btitle" class="col-sm-2 col-form-label">제목</label>
                    <div class="col-sm-10">
                        <input id="btitle" type="text" class="form-control" v-model="notice.ntitle" />
                    </div>
                </div>

                <div class="form-group row mt-4">
                    <label for="bcontent" class="col-sm-2 col-form-label">내용</label>
                    <div class="col-sm-10">
                        <textarea v-model="notice.ncontent" type="text" class="form-control"
                            style="height:250px;"></textarea>
                    </div>
                </div>

                <div class="form-group row mt-4">
                    <label for="battach" class="col-sm-2 col-form-label">첨부파일</label>
                    <div class="col-sm-10">
                        <input id="battach" type="file" class="form-control-file" ref="battach" />
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



</template>

<script setup>
import { ref } from 'vue';
import RaffleToast from '@/components/RaffleToast.vue';

const seeya = ref("");
const childText = ref('');
const seetitle = ref("");
const seeContent = ref("");
const notice = ref({
    ntitle: "",
    ncontent: "",
    nattach: null

});


function handleSubmit() {
    var total = true;

    var ntitlepattern = /^.{2,50}$/;
    var noticetitle = ntitlepattern.test(notice.value.ntitle)
    if (!noticetitle) {
        seeya.value.showToast("제목을 입력 해주세요");
    } else  (noticetitle) 
    seetitle.value = "";

    var ncontentpattern = /^.{2,100}$/;
    var ncontent = ncontentpattern.test(notice.value.ncontent)
    if (!ncontent) {
        seeya.value.showToast("내용을 입력 해주세요");
    } else (ncontent)
    seeContent.value =""
}




defineExpose({
    childText,
    notice
});
</script>

<style scoped>
.btn {
    background-color: #F37551;
    color: white;
}
</style>