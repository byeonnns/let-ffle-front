<template>
    <div>
        <div class="d-flex ms-5 mt-4">
            <div class="d-flex flex-column ms-5 container">
                <div class="mb-3" style="border-bottom: 3px solid #F37551;">
                    <h4>프로필 관리</h4>
                </div>
                <div class="d-flex justify-content-center flex-column align-items-center">
                    <div class="d-flex justify-content-between" style="width: 50%;">
                        <div class="mt-4">
                            <div class="mb-3">
                                <strong>gekx0m</strong>
                            </div>
                            <div class="">
                                <button class="btn btn-white btn-lg border rounded-3"
                                    style="font-size: 12px; margin-right: 8px;">정보 변경</button>
                                <button class="btn btn-white btn-lg border rounded-3"
                                    style="font-size: 12px;">삭제</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between mb-3" style="width: 50%;">
                        <h4 style="font-size: 18px;" class="fw-bold mb-2 mt-4">프로필 정보</h4>
                    </div>
                    <div style="width: 50%;">
                        <h5 style="font-size: 13px;" class="ms-1">프로필 이름</h5>
                    </div>
                    <div class="w-50 position-relative">
                        <div style="align-content: end;">
                            <input type="text" placeholder="gekx0m" class="input w-50">
                        </div>
                        <hr class="p-0 m-0 w-100 mt-3">
                        <button class="btn btn-white btn-sm"
                            style="position: absolute; bottom: 0; right: 0;">변경</button>
                    </div>
                    <div style="width: 50%;">
                        <h5 style="font-size: 13px;" class="ms-1 mt-4">이름</h5>
                    </div>
                    <div class="w-50 position-relative">
                        <div style="align-content: end;">
                            <input type="text" placeholder="신우호" class="input w-50">
                        </div>
                        <hr class="p-0 m-0 w-100 mt-3">
                        <button class="btn btn-white btn-sm"
                            style="position: absolute; bottom: 0; right: 0;">변경</button>
                    </div>
                    <div style="width: 50%;">
                        <h5 style="font-size: 13px;" class="ms-1 mt-4">소개</h5>
                    </div>
                    <div class="w-50 position-relative mb-4">
                        <div style="align-content: end;">
                            <input type="text" placeholder="나를 소개하세요." class="input w-50">
                        </div>
                        <hr class="p-0 m-0 w-100 mt-3">
                        <button class="btn btn-white btn-sm"
                            style="position: absolute; bottom: 0; right: 0;">변경</button>
                    </div>

                    <div class="d-flex justify-content-between" style="width: 50%;">
                        <h4 class="fw-bold" style="font-size: 18px;">프로필 차단/해제</h4>
                    </div>
                    <div class="w-50 d-flex justify-content-between align-items-center">
                        <p class="mt-4">차단한 프로필</p>
                    </div>
                    <hr class="p-0 m-0 w-50 mt-1">

                    <div class="d-flex justify-content-between mt-4" style="width: 50%;">
                        <h4 class="fw-bold mb-2" style="font-size: 18px;">프로필 공개 범위</h4>
                    </div>
                    <div class="w-50 d-flex justify-content-between align-items-center">
                        <p class="mt-4">관심 응모에서 숨기기</p>
                        <div class="form-check form-switch ms-3">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
                        </div>
                    </div>
                    <hr class="p-0 m-0 w-50 mt-1">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MypageNavBar from './MypageNavBar';
</script>

<style scoped>
.input {
    border-width: 0;
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
}

input::placeholder {
    color: black;
}

h5 {
    color: gray;
}

input[type="button"] {
    background-color: transparent;
}

.form-check {
    display: flex;
    align-items: center;

}

#flexSwitchCheckDefault {
    width: 50px;
    height: 25px;
}
</style>