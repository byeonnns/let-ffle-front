<template>
    
    <div>
        <div class="d-flex ms-5 mt-4">
            <MypageNavBar style="width:180px" />
            <div class="d-flex flex-column container" style="width: 100%; margin-left: 150px; margin-right: 150px;">
                <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                    <h4>로그인 정보</h4> 
                </div>
                <div class="d-flex justify-content-center flex-column align-items-center">
                    <div class="mb-3" style="width: 50%;">
                        <span style="font-size: 22px;" class="fw-bold mb-3">내 계정</span>
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
                        <h5 style="font-size: 13px;" class="mt-3">비밀번호</h5>
                    </div>
                    <div class="w-50 position-relative">
                        <div style="align-content: end;">
                            <input type="password" placeholder="●●●●●●●●" class="input w-50">
                        </div>
                        <hr class="p-0 m-0 w-100 mt-3">
                        <button class="btn btn-white btn-sm"
                            style="position: absolute; bottom: 0; right: 0;">변경</button>
                    </div>

                    <div class="mb-3 mt-4" style="width: 50%;">
                        <span style="font-size: 22px;" class="fw-bold mb-3 mt-5">개인 정보</span>
                    </div>
                    <div style="width: 50%;">
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
                    <div style="width: 50%;">
                        <h5 style="font-size: 13px;">신발 사이즈</h5>
                    </div>
                    <div class="w-50 position-relative">
                        <div style="align-content: end;">
                            <input type="email" placeholder="260" class="input w-50">
                        </div>
                        <hr class="p-0 m-0 w-100 mt-3">
                        <button class="btn btn-white btn-sm"
                            style="position: absolute; bottom: 0; right: 0;">변경</button>
                    </div>

                    <div class="mb-3 mt-4" style="width: 50%;">
                        <span style="font-size: 18px;" class="fw-bold mb-3 mt-5">광고성 정보 수신</span>
                    </div>
                    <div class="w-50 position-relative">
                        <div class="d-flex justify-content-between">
                            <p>문자 메세지</p>
                            <div>
                                <label for="radioButton">수신동의</label>
                                <input type="checkbox" id="radioButton1" placeholder="라디오 버튼" class="input me-2">
                                <label for="radioButton">수신거부</label>
                                <input type="checkbox" id="radioButton2" placeholder="라디오 버튼" class="input">
                            </div>
                        </div>
                        <hr class="p-0 m-0 w-100 mt-3" style="position: absolute; bottom: 0;">
                    </div>
                    <div class="w-50 position-relative">
                        <div class="d-flex justify-content-between mt-4">
                            <p>이메일</p>
                            <div>
                                <label for="radioButton">수신동의</label>
                                <input type="checkbox" id="radioButton3" placeholder="라디오 버튼" class="input me-2">
                                <label for="radioButton">수신거부</label>
                                <input type="checkbox" id="radioButton4" placeholder="라디오 버튼" class="input">
                            </div>
                        </div>
                        <hr class="p-0 m-0 w-100">
                        <div class="mt-3 d-flex justify-content-end">
                            <RouterLink to="#"><button class="btn btn-lg" style="font-size: 14px;">회원탈퇴</button>
                            </RouterLink>
                        </div>
                    </div>
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