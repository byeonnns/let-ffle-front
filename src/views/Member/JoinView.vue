<template>
    <div class="container-lg">
        <div class="d-flex justify-content-center">
            <!--아이디(이메일), 비밀번호, 이름, 주민번호, 전화번호, 주소를 입력받는다.-->
            <div class="d-flex flex-column" :style="responsiveSize">
                <p class="text-center fw-bold fst-italic m-5" style="font-family:'HY견고딕'; font-size:50px">Let-FFle</p>
                <h1 class="text-center mb-5">회원가입</h1>
                <label for="memail">이메일 주소*</label>
                <input id="memail" type="email" class="border-0 border-bottom">
                <label for="mpassword" class="mt-5">비밀번호*</label>
                <input id="mpassword" type="password" class="border-0 border-bottom">
                <label for="mname" class="mt-5">이름</label>
                <input id="mname" type="text" class="border-0 border-bottom">
                <label for="mrrn1" class="mt-5">주민번호</label>
                <div class="row">
                    <div class="col-5">
                        <input id="mrrn1" type="text" class="border-0 border-bottom w-100 text-center">
                    </div>
                    <div class="col align-content-center">
                        <hr class="m-0 text-dark border-3 opacity-100"/>
                    </div>
                    <div class="col-6">
                        <input id="mrrn2" type="text" class="border-0 border-bottom w-100 text-center">
                    </div>
                </div>
                <label for="mtel" class="mt-5">전화번호</label>
                <div class="row">
                    <div class="col-3">
                        <input id="mtel1" type="text" class="border-0 border-bottom w-100 text-center">
                    </div>
                    <div class="col align-content-center">
                        <hr class="m-0 text-dark border-3 opacity-100"/>
                    </div>
                    <div class="col-3">
                        <input id="mtel2" type="text" class="border-0 border-bottom w-100 text-center">
                    </div>
                    <div class="col align-content-center">
                        <hr class="m-0 text-dark border-3 opacity-100"/>
                    </div>
                    <div class="col-3">
                        <input id="mtel3" type="text" class="border-0 border-bottom w-100 text-center">
                    </div>
                </div>
                <label for="maddress" class="mt-5">주소</label>
                <div class="d-flex justify-content-between">
                    <input id="maddress" type="text" class="border-0 border-bottom text-center" placeholder="우편번호">
                    <button class="btn btn-dark btn-outline-light btn-sm">우편번호 찾기</button>
                </div>
                <input type="text" class="border-0 border-bottom mt-3" placeholder="주소">
                <input type="text" class="border-0 border-bottom mt-3" placeholder="상세주소">
                <button class="btn btn-dark btn-lg mt-5">가입하기</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const responsiveSize = reactive({
    width: window.innerWidth >= 992 ? '400px' : '100%'
});

const handleResize = () => {
    if (window.innerWidth >= 992) {
        responsiveSize.width = '400px';
    } else {
        responsiveSize.width = '100%';
    }
};

window.addEventListener('resize', handleResize);
</script>

<style scoped></style>