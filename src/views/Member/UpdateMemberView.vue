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
                            <button type="modal" data-bs-toggle="modal" data-bs-target="#changePW"
                                class="btn btn-white btn-sm"
                                style="position: absolute; bottom: 0; right: 0;">변경</button>
                        </div>
                        <div class="mt-4" style="width: 50%;">
                            <h5 style="font-size: 13px;">휴대폰 번호</h5>
                        </div>
                        <div class="w-50 position-relative">
                            <div style="align-content: end;">
                                <input type="email" placeholder="010-8***-*798" class="input w-50">

                            </div>
                            <hr class="p-0 m-0 w-100 mb-4 mt-3">
                            <button type="modal" data-bs-toggle="modal" data-bs-target="#changePH"
                                class="btn btn-white btn-sm mb-5"
                                style="position: absolute; bottom: 0; right: 0;">변경</button>
                        </div>
                        <div class="w-50 position-relative">
                            <div class="mt-1 d-flex justify-content-end">
                                <RouterLink to="#"><button type="button" data-bs-toggle="modal"
                                        data-bs-target="#Modaltest" class="btn btn-sm"
                                        style="font-size: 14px; color: black; background-color: white; text-decoration: underline;">회원탈퇴</button>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal 비밀번호 변경 -->
        <div class="modal fade" id="changePW" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">비밀번호 수정</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        <div class="container">
                            <div class="div_form row mb-3">
                                <label>기존 비밀번호</label>
                                <input type="password" placeholder="" class="input"
                                    style="border-bottom: 1px solid #ebebeb">
                            </div>

                            <div class="div_form row mb-3">
                                <label>새 비밀번호</label>
                                <input type="password" placeholder="" class="input"
                                    style="border-bottom: 1px solid #ebebeb">
                            </div>

                            <div class="div_form row">
                                <label>비밀번호 확인</label>
                                <input type="password" placeholder="" class="input"
                                    style="border-bottom: 1px solid #ebebeb">
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">닫기</button>
                        <button type="button" class="btn btn-outline-light">수정 완료</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal 휴대폰 번호 변경 -->
        <div class="modal fade" id="changePH" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">휴대폰 번호 수정</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="div_form row">
                                <label>새 휴대폰 번호</label>
                                <input type="text" placeholder="010-xxxx-xxxx" class="input"
                                    style="border-bottom: 1px solid #ebebeb">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">닫기</button>
                        <button type="button" class="btn btn-outline-light">수정 완료</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- Modal 탈퇴여부-->
        <div class="modal fade" id="Modaltest" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">탈퇴여부</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        정말로다가 탈퇴를 하시겠습니까??
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">닫기</button>
                        <!-- <RouterLink to="/login"> -->
                            <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal" @click="ReturnLog()">확인</button>
                        <!-- </RouterLink> -->
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function ReturnLog(){
    router.push ("/login")
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