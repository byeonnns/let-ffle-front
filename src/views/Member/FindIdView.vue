<template>
    <div>
        <div v-if="findingSuccess" class="d-flex justify-content-center">
            <div class="d-flex flex-column" :style="responsiveSize">
                <p class="text-center" style="font-size:28px; font-weight: 700;">아이디 찾기에 성공했습니다</p>
                <hr class="border-2 opacity-100 mt-2" />
                <div class="text-center">
                    <p>이메일 주소</p>
                    <h4>{{ member.mid }}</h4>
                </div>
                <div class="d-flex">
                <button class="col-6 btn btn-outline-light border-secondary text-dark rounded-0 btn-lg mt-5 me-1" @click="move('FindPassword')">비밀번호 찾기</button>
                <button class="col-6 btn btn-dark rounded-0  border-dark btn-lg mt-5 ms-1" @click="move('login')">로그인</button>
                </div>
            </div>
        </div>
        <div v-else class="d-flex justify-content-center">
            <div class="d-flex flex-column" :style="responsiveSize">
                <p class="text-center" style="font-size:32px; font-weight: 700;">이메일 아이디 찾기</p>
                <hr class="border-2 opacity-100 mt-2" />
                <div>
                    <p>가입 시 등록한 휴대폰 번호를 입력하면<br>로그인 이메일을 알려드립니다.</p>
                </div>
                <label for="mname" class="mb-2" style="margin-top:44px">이름</label>
                <input id="mname" type="text" class="border-0 border-bottom" v-model="member.mname" @input="namecheck">
                <label for="mtel" class="mb-2" style="margin-top:44px">휴대폰 번호</label>
                <input id="mtel" type="text" class="border-0 border-bottom" v-model="member.mphone" @input="phcheck">
                <div v-if="member.mid !== ''">
                    <p>로그인 이메일 : {{ member.mid }}</p>
                </div>
                <button :class="isphpass && isnamepass ? '' : 'disabled'" class="btn text-white rounded-0 btn-lg mt-5"
                    @click="findId" style="background-color: #F37551; ">이메일 아이디 찾기</button>
            </div>
        </div>
        
        <Modal ref="noMatchModal">
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
        </Modal>
    </div>
</template>

<script setup>
import MemberAPI from '@/apis/MemberAPI';
import { reactive, ref } from 'vue';
import Modal from '@/components/Modal.vue';
import { useRouter } from 'vue-router';

const isnamepass = ref(false);
const isphpass = ref(false);
const noMatchModal = ref('');
const findingSuccess = ref(false);
const member = ref({
    mid: "",
    mname: "",
    mphone: ""
});

const router = useRouter();

const isname = /^[가-힣]{2,4}$/;
const namecheck = () => {
    if (!isname.test(member.value.mname)) {
        isnamepass.value = false;
    } else {
        isnamepass.value = true;
    }
}

const isphone = /^010\d{4}\d{4}$/;
const phcheck = () => {
    if (!isphone.test(member.value.mphone)) {
        isphpass.value = false;
    } else {
        isphpass.value = true;
    }
}

function move(link) {
    router.push(`/${link}`);
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
    const response = await MemberAPI.findId(member.value.mname, member.value.mphone);
    if (response.data.result == 'success') {
        member.value.mid = response.data.mid;
        findingSuccess.value = true;
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