<template>
    <div class="container-lg">
        <div class="d-flex justify-content-center">
            <!--아이디(이메일), 비밀번호, 이름, 주민번호, 전화번호, 주소를 입력받는다.-->
            <div class="d-flex flex-column" :style="responsiveSize">
                <p class="text-center fw-bold fst-italic m-5" style="font-size:50px">Let-<span style="color:#FF5C35">FFle</span></p>
                <label for="memail mb-2">이메일 주소*</label>
                <div class="d-flex justify-content-between">
                    <input id="memail" type="email" class="border-0 border-bottom flex-grow-1 input">
                    <button class="btn text-white btn-outline-light btn-sm">중복 확인</button>
                </div>
                <label for="mpassword" class="mt-5 mb-2">비밀번호*</label>
                <input id="mpassword" type="password" class="border-0 border-bottom input">
                <label for="mname" class="mt-5 mb-2 input">이름</label>
                <input id="mname" type="text" class="border-0 border-bottom input">
                <label for="mnickname" class="mt-5 mb-2">닉네임</label>
                <div class="d-flex justify-content-between">
                    <input id="mnickname" type="text" class="border-0 border-bottom flex-grow-1 input">
                    <button class="btn text-white btn-outline-light btn-sm">중복 확인</button>
                </div>
                <label for="mte" class="mt-5 mb-2">전화번호</label>
                <input id="mtel" type="text" class="border-0 border-bottom input" v-model="tel">
                <label for="maddress" class="mt-5 mb-2">주소</label>
                <div class="d-flex justify-content-between">
                    <input id="maddress" type="text" class="border-0 border-bottom text-center flex-grow-1 input" placeholder="우편번호">
                    <button class="btn text-white btn-outline-light btn-sm">우편번호 찾기</button>
                </div>
                <input type="text" class="border-0 border-bottom mt-3 input" placeholder="주소">
                <input type="text" class="border-0 border-bottom mt-3 input" placeholder="상세주소">
                <button class="btn text-white btn-lg mt-5">가입하기</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

/* 전화번호 하이픈 자동 추가 JS(미완성)
const tel = ref("");
let preTel;
function previousTel() {
    preTel = tel.value.length;
}
function telHyphen() {
    // 사용자가 입력 값을 지우는 경우
    if (preTel === 5 && tel.value.length === 4 || preTel === 10 && tel.value.length === 9) {
        tel.value = tel.value.slice(0, tel.value.length - 1);
    }

    // 사용자가 숫자를 입력하는 경우
    if (tel.value.length === 3 || tel.value.length === 8) {
        tel.value += '-';
    }
}*/

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
.input{
    outline: none;
}
</style>