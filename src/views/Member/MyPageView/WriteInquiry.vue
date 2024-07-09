<template>
    <div>
        <div class="d-flex">
            <!-- <div class="flex-grow-1 d-flex flex-column"></div> -->
            <div class="d-flex flex-column ms-5 container">
                <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                    <h4>문의 작성하기</h4>
                </div>
                <WriteForm ref="createWriteForm" />
                <div class="d-flex justify-content-end">
                    <input value="신청하기" class="input btn btn-outline-light me-2" @click="handleClick()" />
                    <RouterLink to="/Member/Mypage/InquiryList"><input value="취소" class="input btn btn-outline-light">
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import WriteForm from '@/components/WriteForm.vue';
import { ref } from 'vue';

const createWriteForm = ref(null);

// 신청하기를 클릭했을때 실행할 함수 
function handleClick() {
    createWriteForm.value.createInquiry();
    console.log("제대로 호출됨");
}
</script>

<style scoped>
.btn {
    background-color: #F37551;
    color: white;
    border-radius: 0px;
}

.input {
    width: 100px;
}
</style>