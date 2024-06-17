<template>
    <div class="container-lg">
        <div class="d-flex justify-content-center">
            <!--아이디(이메일), 비밀번호, 이름, 주민번호, 전화번호, 주소를 입력받는다.-->
            <div class="d-flex flex-column" :style="responsiveSize">
                <p class="text-center fw-bold fst-italic m-5" style="font-size:50px">Let-<span
                        style="color:#FF5C35">FFle</span></p>
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
                    <input v-model="zonecode" id="maddress" type="text"
                        class="border-0 border-bottom text-center flex-grow-1 input" placeholder="우편번호">
                    <button class="btn text-white btn-outline-light btn-sm" @click="DaumPostcode()">우편번호 찾기</button>
                </div>
                <input v-model="address" type="text" class="border-0 border-bottom mt-3 input" placeholder="주소">
                <input v-model="addressDetail" type="text" class="border-0 border-bottom mt-3 input" placeholder="상세주소">
                <RouterLink to="/" class="flex-grow-1"><button class="btn text-white btn-lg mt-5 w-100">가입하기</button>
                </RouterLink>
            </div>
            <RaffleModal ref="postcodeModal">
                <template v-slot:modalHeader>
                    주소 검색
                </template>
                <template v-slot:modalBody>
                    <VueDaumPostcode :animation=true :max-suggest-items="3" :theme='{
                        bgColor: "#F37551", //바탕 배경색
                        textColor: "#000000", //기본 글자색
                        postcodeTextColor: "#000000", //우편번호 글자색
                        emphTextColor: "#FF5C35", //강조 글자색
                        outlineColor: "#FF5C35" //테두리
                    }' v-if="postcodeMount" @complete="addressSearched" />
                </template>
            </RaffleModal>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import RaffleModal from '@/components/RaffleModal.vue';
import { VueDaumPostcode } from 'vue-daum-postcode'

const postcodeModal = ref(null);
const postcodeMount = ref(false);

const zonecode = ref('');
const address = ref('');
const addressDetail = ref('');

const DaumPostcode = () => {
    postcodeModal.value.showModal();
    postcodeMount.value = true;
}

const addressSearched = (data) => {
    if (data.userSelectedType === 'R') {
        zonecode.value = data.zonecode;
        address.value = data.address;
        postcodeMount.value = false;
        postcodeModal.value.hideModal();
    } else {
        zonecode.value = data.zonecode;
        address.value = data.jibunAddress;
        postcodeMount.value = false;
        postcodeModal.value.hideModal();
    }
}

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
</style>