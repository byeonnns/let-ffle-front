<template>
    <div class="container-lg">
        <div ref="findIdView" class="d-flex justify-content-center">
            <div class="d-flex flex-column" :style="responsiveSize">
                <p class="text-center" style="font-size:32px; font-weight: 700;">이메일 아이디 찾기</p>
                <hr class="border-2 opacity-100 mt-2" />
                <div>
                    <p>가입 시 등록한 휴대폰 번호를 입력하면<br>이메일 주소의 일부를 알려드립니다.</p>
                </div>
                <label for="mte" class="mb-2" style="margin-top:44px">휴대폰 번호</label>
                <input id="mtel" type="text" class="border-0 border-bottom" v-model="tel">
                <button class="btn text-white btn-lg mt-5" @click="findId">이메일 아이디 찾기</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const findIdView = ref(null);

/* 반응형 UI */
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

/* 이메일 찾기 */
const findId = () => {
    findIdView.value.innerHTML = `
    <div class="d-flex flex-column text-center" :style="responsiveSize">
        <p class="text-center h3" style="font-weight: 700; margin-bottom:14px;">이메일 주소 찾기에 성공했습니다.</p>
        <hr class="border-2 opacity-100 my-4"/>
        <div>
            <h6>이메일 주소</h6>
        </div>
        <h4>a*******h@kosa.com</h4>
        <div class="row mt-5">
            <button class="btn text-white btn-lg flex-grow-1 col me-2">비밀번호 찾기</button>
            <button class="btn text-white btn-lg flex-grow-1 col ms-2">로그인</button>
        </div>
    </div>
    `;
}
</script>

<style scoped>
input {
    outline: none;
}
</style>