<template>
    <div class="container-lg">
        <div ref="findIdView" class="d-flex justify-content-center">
            <div class="d-flex flex-column" :style="responsiveSize">
                <p class="text-center" style="font-size:32px; font-weight: 700;">이메일 아이디 찾기</p>
                <hr class="border-2 opacity-100 mt-2" />
                <div>
                    <p>가입 시 등록한 휴대폰 번호를 입력하면<br>로그인 이메일을 알려드립니다.</p>
                </div>
                <label for="mte" class="mb-2" style="margin-top:44px">휴대폰 번호</label>
                <input id="mtel" type="text" class="border-0 border-bottom" v-model="member.mphone" @input="phcheck">
                <div v-if="member.mid !== ''">
                    <p>로그인 이메일 : {{ member.mid }}</p>
                </div>
                <button :class="ispass ? '' : 'disabled'" class="btn text-white rounded-0 btn-lg mt-5" @click="findId"
                    style="background-color: #F37551; ">이메일 아이디 찾기</button>
            </div>
        </div>
    </div>
    <RaffleModal ref="noMatchModal">
        <template v-slot:modalHeader>
            <h3>알림</h3>
        </template>
        <template v-slot:modalBody>
            <h5>일치하는 아이디가 존재하지 않습니다.</h5>
        </template>
        <template v-slot:modalFooter>
            <button class="btn btn-outline-light btn-sm" data-bs-dismiss="modal"
                style="background-color: #F37551; color: white;">닫기</button>
        </template>
    </RaffleModal>
</template>

<script setup>
import MemberAPI from '@/apis/MemberAPI';
import { reactive, ref } from 'vue';
import RaffleModal from '@/components/RaffleModal.vue';

const findIdView = ref(null);
const ispass = ref(false);
const noMatchModal = ref('');
const member = ref({
    mid: "",
    mphone: ""
});

const isphone = /^010\d{4}\d{4}$/;
const phcheck = () => {
    if (!isphone.test(member.value.mphone)) {
        ispass.value = false;
    } else {
        ispass.value = true;
    }
}

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

async function findId() {
    const response = await MemberAPI.findId(member.value.mphone);
    if (response.data.result == 'success') {
        member.value.mid = response.data.mid;
    } else {
        noMatchModal.value.showModal();
    }
}
</script>

<style scoped>
input {
    outline: none;
}
</style>