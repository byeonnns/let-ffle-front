<template>

    <div>
        <div class="d-flex ms-5 mt-4">
            <MypageNavBar style="width:180px" />
            <div class="d-flex flex-column ms-5 container">
                <div class="">
                    <h4>로그인 정보</h4>
                    <hr style="border-width: 3px; color: #F37551; height: 20px;" />
                </div>
                <div class="d-flex justify-content-between mb-3" style="width: 100%;">
                    <span style="font-size: 18px;" class="fw-bold mb-3">내 계정</span>
                </div>
                <h5 style="font-size: 13px;">이메일주소</h5>
                <div class="w-50 position-relative">
                    <div style="align-content: end;">
                        <input type="email" placeholder="as***naver.com" class="input w-50">
                    </div>
                    <hr class="p-0 m-0 w-100 mb-4 mt-3">
                </div>
                <h5 style="font-size: 13px;">닉네임</h5>
                <div class="w-50 position-relative">
                    <div style="align-content: end;">
                        <input type="email" placeholder="gekx0m" class="input w-50">
                    </div>
                    <hr class="p-0 m-0 w-100 mb-4 mt-3">
                    <button class="btn btn-white btn-sm mb-5"
                        style="position: absolute; bottom: 0; right: 0;">변경</button>
                </div>
                <h5 style="font-size: 13px;">비밀번호</h5>
                <div class="w-50 position-relative">
                    <div style="align-content: end;">
                        <input type="password" placeholder="●●●●●●●●" class="input w-50">
                    </div>
                    <hr class="p-0 m-0 w-100 mt-3">
                    <button class="btn btn-white btn-sm" style="position: absolute; bottom: 0; right: 0;">변경</button>
                </div>

                <div class="d-flex justify-content-between mb-3" style="width: 100%;">
                    <span style="font-size: 18px;" class="fw-bold mb-3 mt-5">개인 정보</span>
                </div>
                <h5 style="font-size: 13px;">휴대폰 번호</h5>
                <div class="w-50 position-relative">
                    <div style="align-content: end;">
                        <input type="email" placeholder="010-8***-*798" class="input w-50">
                    </div>
                    <hr class="p-0 m-0 w-100 mb-4 mt-3">
                    <button class="btn btn-white btn-sm mb-5"
                        style="position: absolute; bottom: 0; right: 0;">변경</button>
                </div>
                <div class="mt-5">
                    <RouterLink to="#" style="font-size: 13px; color: black;">회원탈퇴</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MypageNavBar from './MypageNavBar';
</script>

<style scoped>
.bottom-border {
    border-width: 0 0 1px;
}

.btn {
    margin-bottom: 20px;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 12px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 10px;
    padding-bottom: 6px;
    text-align: center;
}

.input {
    border-width: 0;
}

h5 {
    color: gray;
}

input::placeholder {
    color: black;
}
</style>