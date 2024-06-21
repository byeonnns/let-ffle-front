<template>
    <div class="container-lg">
        <div class="d-flex justify-content-center">
            <!--아이디(이메일), 비밀번호, 이름, 주민번호, 전화번호, 주소를 입력받는다.-->
            <div class="d-flex flex-column" :style="responsiveSize">
                <p class="text-center fst-italic" style="font-size:50px; font-weight: 900">Let-<span
                        style="color:#FF5C35">FFle</span></p>
                <label for="memail">이메일 주소</label>
                <input v-model="memail" type="email" class="border-0 border-bottom input" @input="emailCheck(onBtn)">
                <p class="m-0" style="color:#FF5C35">{{ emailError }}</p>
                <label for="mpassword" class="mt-3">비밀번호</label>
                <input v-model="mpassword" type="password" class="border-0 border-bottom input" @input="passwordCheck(onBtn)">
                <p class="m-0" style="color: #FF5C35;">{{ passwordError }}</p>
                <button class="btn text-white btn-lg mt-4" :class="isPass ? '' : 'disabled'" style="background-color: #F37551;">로그인</button>
                <div class="row mt-3 text-center">
                    <div class="col-4 border-end">
                        <RouterLink to="/join">이메일 가입</RouterLink>
                    </div>
                    <div class="col-4">
                        <RouterLink to="/FindId">이메일 찾기</RouterLink>
                    </div>
                    <div class="col-4 border-start">
                        <RouterLink to="/FindPassword">비밀번호 찾기</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const memail = ref('');
const mpassword = ref('');
const passwordError = ref('');
const emailError = ref('');
const isPass = ref(false);
const emailRegExp = new RegExp("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}");

const emailCheck = (onBtn) => {
    if (!emailRegExp.test(memail.value)) {
        emailError.value = "이메일 주소를 정확히 입력해주세요."
    } else {
        emailError.value = "";
    }
    onBtn();
}

const passwordCheck = (onBtn) => {
    if (mpassword.value.length == 0) {
        passwordError.value = '비밀번호를 입력해주세요.';
    } else {
        passwordError.value = '';
    }
    onBtn();
}


function onBtn() {
    if (emailRegExp.test(memail.value) && mpassword.value.length > 0) {
        isPass.value = true;
    } else {
        isPass.value = false;
    }
}




/* 반응형 관련 코드 */
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
.input {
    outline: none;
}

p {
    font-size: 12px;
    min-height: 18px;
}

label {
    font-size: 14px;
}
</style>