<template>
    <div>
        <div class="d-flex">
            <MypageNavBar style="width: 180px;"/>
            <div class="flex-grow-1 d-flex flex-column mb-2">
                <div class="mb-2">
                    <h4 class="fw-bold">프로필 관리</h4>
                </div>
                <div class="fw-bold border-bottom border-3 border-black mb-5"></div>
                <div class="d-flex">
                    <div class="circle-border">
                        <img src="/images/photos/4.png" alt="photo" class="img-circle"
                            style="width: 90px; height: 90px;" />
                    </div>
                    <div class="mt-1 ms-3">
                        <div class="mb-3">
                            <strong>gekx0m</strong>
                        </div>
                        <div class="mb-5">
                            <button class="btn btn-white btn-lg border rounded-3"
                                style="font-size: 10px; margin-right: 8px;">이미지 변경</button>
                            <button class="btn btn-white btn-lg border rounded-3" style="font-size: 10px;">삭제</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="d-flex justify-content-between mb-3" style="width: 100%;">
                    <h4 style="font-size: 18px;" class="fw-bold mb-2 mt-4">프로필 정보</h4>
                </div>
                <h5 style="font-size: 13px;" class="ms-1">프로필 이름</h5>
                <div class="w-50 position-relative">
                    <div style="align-content: end;">
                        <input type="text" placeholder="gekx0m" class="input w-50">
                    </div>
                    <hr class="p-0 m-0 w-100 mt-3">
                    <button class="btn btn-white btn-sm" style="position: absolute; bottom: 0; right: 0;">변경</button>
                </div>
                <h5 style="font-size: 13px;" class="ms-1 mt-4">이름</h5>
                <div class="w-50 position-relative">
                    <div style="align-content: end;">
                        <input type="text" placeholder="신우호" class="input w-50">
                    </div>
                    <hr class="p-0 m-0 w-100 mt-3">
                    <button class="btn btn-white btn-sm" style="position: absolute; bottom: 0; right: 0;">변경</button>
                </div>
                <h5 style="font-size: 13px;" class="ms-1 mt-4">소개</h5>
                <div class="w-50 position-relative">
                    <div style="align-content: end;">
                        <input type="text" placeholder="나를 소개하세요." class="input w-50">
                    </div>
                    <hr class="p-0 m-0 w-100 mt-3">
                    <button class="btn btn-white btn-sm" style="position: absolute; bottom: 0; right: 0;">변경</button>
                </div>

                <div class="mt-5">
                    <h4 class="fw-bold mb-2" style="font-size: 14px;">프로필 차단/해제</h4>
                </div>
                <div class="w-50 d-flex justify-content-between align-items-center">
                    <p class="mt-4">차단한 프로필</p>
                </div>
                <hr class="p-0 m-0 w-50 mt-1">

                <div class="mt-5">
                    <h4 class="fw-bold mb-2" style="font-size: 14px;">프로필 공개 범위</h4>
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
    border: 1px solid black;
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