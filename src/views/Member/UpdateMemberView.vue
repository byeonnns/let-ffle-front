<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <div class="d-flex flex-column ms-5" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                        <h4>회원 정보 수정</h4>
                    </div>
                    <div class="d-flex justify-content-center flex-column align-items-center mt-4">
                        <div class="mb-3" style="width: 50%;">
                            <span style="font-size: 25px;" class="fw-bold mb-3">내 계정</span>
                        </div>
                        <div style="width: 50%;" class="mt-3">
                            <h5 style="font-size: 13px;">이메일주소</h5>
                        </div>
                        <div class="w-50 position-relative">
                            <div style="align-content: end;">
                                <input type="email" placeholder="as***naver.com" class="input w-50">
                            </div>
                            <hr class="p-0 m-0 w-100 mb-4 mt-3">
                        </div>
                        <div style="width: 50%;">
                            <h5 style="font-size: 13px;" class="mt-1">비밀번호</h5>
                        </div>
                        <div class="w-50 position-relative">
                            <div style="align-content: end;">
                                <input type="password" placeholder="●●●●●●●●" class="input w-50">
                            </div>
                            <hr class="p-0 m-0 w-100 mt-3">
                            <button class="btn btn-outline-light btn-sm"
                                style="position: absolute; bottom: 0; right: 0;" @click="seeModal()">변경</button>


                        </div>
                        <div class="mt-4" style="width: 50%;">
                            <h5 style="font-size: 13px;">휴대폰 번호</h5>
                        </div>
                        <div class="w-50 position-relative">
                            <div style="align-content: end;">
                                <input type="email" placeholder="010-8***-*798" class="input w-50">

                            </div>
                            <hr class="p-0 m-0 w-100 mb-4 mt-3">
                            <button class="btn btn-white btn-sm mb-5" style="position: absolute; bottom: 0; right: 0;"
                                @click="lookModal()">변경</button>
                        </div>
                        <div class="w-50 position-relative">
                            <div class="mt-1 d-flex justify-content-end">
                                <RouterLink to="#"><button type="button" class="btn btn-sm"
                                        style="font-size: 14px; color: black; background-color: white; text-decoration: underline;"
                                        @click="checkhandle()">회원탈퇴</button>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal 비밀번호 변경  Slot화-->
        <RaffleModal ref="PWModal">
            <template v-slot:modalHeader>
                <h4>비밀번호 수정</h4>
            </template>
            <template v-slot:modalBody>
                <div class="container">
                    <div class="div_form row mb-3">
                        <label>기존 비밀번호</label>
                        <input type="password" placeholder="" class="input" style="border-bottom: 1px solid #ebebeb">
                    </div>

                    <div class="div_form row mb-3">
                        <label>새 비밀번호</label>
                        <input type="password" placeholder="" class="input" style="border-bottom: 1px solid #ebebeb">
                    </div>

                    <div class="div_form row">
                        <label>비밀번호 확인</label>
                        <input type="password" placeholder="" class="input" style="border-bottom: 1px solid #ebebeb">
                    </div>
                </div>
            </template>
            <template v-slot:modalFooter>
                <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">닫기</button>
                <button type="button" class="btn btn-outline-light">수정 완료</button>
            </template>
        </RaffleModal>

        <!-- Modal 휴대폰 번호 변경 Slot화-->
        <RaffleModal ref="PWCModal">
            <template v-slot:modalHeader>
                <h4>휴대폰 번호 수정</h4>
            </template>
            <template v-slot:modalBody>
                <div class="container">
                    <div class="div_form row">
                        <label>새 휴대폰 번호</label>
                        <input type="text" placeholder="010-xxxx-xxxx" class="input"
                            style="border-bottom: 1px solid #ebebeb">
                    </div>
                </div>
            </template>
            <template v-slot:modalFooter>
                <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">닫기</button>
                <button type="button" class="btn btn-outline-light">수정 완료</button>
            </template>
        </RaffleModal>

        <!-- 회원 탈퇴 Slot화 -->
        <RaffleModal ref="Withdrawal">
            <template v-slot:modalHeader>
                <h4>탈퇴여부</h4>
            </template>
            <template v-slot:modalBody>
                정말로다가 탈퇴를 하시겠습니까??
            </template>
            <template v-slot:modalFooter>
                <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">닫기</button>
                 <RouterLink to="/login">
                <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">확인</button>
                 </RouterLink> 
            </template>
        </RaffleModal>


    </div>
</template>

<script setup>
import RaffleModal from '@/components/RaffleModal.vue';
import { ref } from 'vue'

const PWModal = ref(null);
const PWCModal = ref(null);
const Withdrawal = ref(null);

function seeModal() {
    PWModal.value.showModal();
}
function lookModal() {
    PWCModal.value.showModal();
}
function checkhandle() {
    Withdrawal.value.showModal();


}





</script>

<style scoped>
.bottom-border {
    border-width: 0 0 1px;
}

.btn {
    margin-bottom: 20px;
    border-radius: 10px;
    font-size: 12px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 10px;
    padding-bottom: 6px;
    text-align: center;
    background-color: #F37551;
    color: white;
}

.input {
    border-width: 0;
    /* input 라인 없애기 */
    outline: none;

}

h5 {
    color: gray;
}

input::placeholder {
    color: gray;
}
</style>