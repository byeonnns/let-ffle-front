<template>

    <div class="container" style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; ">
        <h3 style=" margin-top: 30px">게시글쓰기</h3>
    </div>
    <div class="container" style="width: 100%; height:500px;">
        <div style="width: 100%; height:500px;">
            <div class="form-group row">
                <label for="btitle" class="col-sm-2 col-form-label">유형</label>
                <div class="col-sm-10 text">
                    <select>
                        <option>자유</option>
                        <option>당첨후기</option>
                    </select>
                </div>
            </div>
            <form @submit.prevent="handleSubmit">
                <WriteForm ref="writeFormRef" />
                <div class="form-group row">
                    <div class="col-sm-12 d-flex justify-content-end">
                        <input type="submit" class="btn btn-outline-light btn-sm me-2 rounded-0" value="등록" />
                        <RouterLink to="/Board/BoardList">
                            <input type="button" class="btn btn-outline-light btn-sm rounded-0" value="취소" />
                        </RouterLink>
                    </div>
                </div>

            </form>
        </div>
        <RaffleToast ref="seeya" />

    </div>
</template>

<script setup>
import WriteForm from "@/components/WriteForm.vue";
import { ref } from "vue";
import RaffleToast from "@/components/RaffleToast.vue";

const checkTitle = ref(null);
const checkContent = ref(null);
const writeFormRef = ref(null);
const seeya = ref(null);


function handleSubmit() {

    var total = true;

    var titlePattern = /^.{2,50}$/;
    var usertitle = titlePattern.test(writeFormRef.value.board.btitle)
    console.log()
    if (usertitle) {
        checkTitle.value = "";
    } else if (!usertitle) {
        total = false;
        seeya.value.showToast("제목을 2자 이상 작성 해주세요");
       
    }

    var contentPattern = /^.{10,1000}$/;
    var usercontent = contentPattern.test(writeFormRef.value.board.bcontent);
    console.log(writeFormRef.value.board.bcontent);
    if (!usercontent) {
        total = false;
        seeya.value.showToast("내용을 10자 이상 작성 해주세요");
      
    }
}


</script>

<style scoped>
.text {
    align-content: center;
}
.btn{
    background-color: #F37551;
    color: white;
}
</style>
