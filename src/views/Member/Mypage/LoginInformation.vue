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
                            <button class="btn btn-white btn-sm mb-5"
                                style="position: absolute; bottom: 0; right: 0;">변경</button>
                        </div>
                        <div style="width: 50%;">
                            <h5 style="font-size: 13px;" class="mt-1">비밀번호</h5>
                        </div>
                        <div class="w-50 position-relative">
                            <div style="align-content: end;">
                                <input type="password" placeholder="●●●●●●●●" class="input w-50">
                            </div>
                            <hr class="p-0 m-0 w-100 mt-3">
                            <button class="btn btn-white btn-sm"
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
                            <button class="btn btn-white btn-sm mb-5"
                                style="position: absolute; bottom: 0; right: 0;">변경</button>
                        </div>
                        <div class="w-50 position-relative">
                            <div class="mt-1 d-flex justify-content-end">
                                <RouterLink to="#"><button class="btn btn-sm" style="font-size: 12px; color: black; background-color: white; text-decoration: underline;">회원탈퇴</button>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
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