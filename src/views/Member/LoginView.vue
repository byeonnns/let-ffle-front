<template>
    <div class="container-lg">
        <div class="d-flex justify-content-center">
            <!--아이디(이메일), 비밀번호, 이름, 주민번호, 전화번호, 주소를 입력받는다.-->
            <div class="d-flex flex-column" :style="responsiveSize">
                <p class="text-center fw-bold fst-italic m-5" style="font-family:'HY견고딕'; font-size:50px">Let'FFle</p>
                <label for="memail">이메일 주소*</label>
                <input id="memail" type="email" class="border-0 border-bottom" placeholder="예) letfle@let.fle">
                <label for="mpassword" class="mt-5">비밀번호*</label>
                <input id="mpassword" type="password" class="border-0 border-bottom">
                <button class="btn btn-dark btn-lg mt-5">로그인</button>
                <div class="row mt-3 text-center">
                    <div class="col-4 border-end">이메일 가입</div>
                    <div class="col-4">이메일 찾기</div>
                    <div class="col-4 border-start">비밀번호 찾기</div>
                </div>
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

<style scoped>

</style>