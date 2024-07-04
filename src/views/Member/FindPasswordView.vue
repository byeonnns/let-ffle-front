<template>
    <div class="container-lg">
        <div ref="findIdView" class="d-flex justify-content-center">
            <div class="d-flex flex-column" :style="responsiveSize">
                <p class="text-center" style="font-size:32px; font-weight: 700;">비밀번호 찾기</p>
                <hr class="border-2 opacity-100 mt-2" />
                <div>
                    <p>가입 시 등록한 휴대폰 번호와<br>이름, 이메일을 입력해주세요.</p>
                </div>
                <label for="mte" class="mb-2" style="margin-top:44px">휴대폰 번호</label>
                <input id="mtel" type="text" class="border-0 border-bottom" v-model="member.mphone" @input="phCheck">
                <p style="font-size:12px; color:#FF5C35; min-height:20px;">{{ mphoneCheck }}</p>
                <label for="mte" class="mb-2" style="margin-top:44px">이메일</label>
                <input id="mtel" type="text" class="border-0 border-bottom" v-model="member.mid" @input="idCheck">
                <p style="font-size:12px; color:#FF5C35; min-height:20px;">{{ midCheck }}</p>

                <button class="btn text-white rounded-0 btn-lg mt-5" @click="findPassword"
                    style="background-color: #F37551;">비밀번호 찾기</button>
            </div>
        </div>

        <!-- 비밀번호 변경 모달 -->
        <RaffleModal ref="findModal">
            <template v-slot:modalHeader>
                <h3>새비밀번호 찾기</h3>
            </template>
            <template v-slot:modalBody>
                <div class="container">
                    <div class="div_form row mb-3">
                        <label>새 비밀번호</label>
                        <input v-model="NewPassword" type="password" placeholder="" class="border-0 border-bottom"
                            @input="chagnePw">
                        <span v-if="passwordResult == false" style="color: red;">{{ passwordSpan1 }}</span>
                        <span v-if="passwordResult == true" style="color: green;">{{ passwordSpan1 }}</span>
                    </div>

                    <div class="div_form row">
                        <label>비밀번호 확인</label>
                        <input v-model="RePassword" type="password" placeholder="" class="border-0 border-bottom"
                            @input="RechagnePw">
                        <span v-if="RepassowrdResult == false" style="color: red;">{{ passwordSpan2 }}</span>
                        <span v-if="RepassowrdResult == true" style="color: green;">{{ passwordSpan2 }}</span>
                    </div>
                </div>
            </template>
            <template v-slot:modalFooter>
                <button style="background-color: #F37551; color:white; border-radius: 0px; " type="button"
                    class="btn btn-outline-light " data-bs-dismiss="modal">닫기</button>

                <button style="background-color: #F37551; color:white; border-radius: 0px;" type="button"
                    class="btn btn-outline-light" data-bs-dismiss="modal" @click="updatePassword">완료</button>
            </template>
        </RaffleModal>

        <RaffleModal ref="noMatchModal">
            <template v-slot:modalHeader>
                <h3>일치하는 아이디가 없음</h3>
            </template>
        </RaffleModal>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import RaffleModal from '@/components/RaffleModal.vue';
import MemberAPI from '@/apis/MemberAPI';
import router from '@/router';


// 휴대폰번호 와 이메일 유효성
const mphoneCheck = ref(null);
const midCheck = ref(null);

const member = ref({
    mid: "",
    mphone:""
})

let userMphone = false;
let userMid = false;
var total = true;

const idCheck = () => {
    var midPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    userMid = midPattern.test(member.value.mid);
    if (!userMid) {
        midCheck.value ="이메일이 올바르지 않습니다.";
        total = false;
    } else {
        midCheck.value=""
    }
}
const phCheck = () => {
    var mphPattern = /^010\d{4}\d{4}$/;
    userMphone = mphPattern.test(member.value.mphone);
    if (!userMphone) {
        mphoneCheck.value = "하이픈(-)을 제외한 숫자만 입력해주세요.";
        total = false;
    } else {
        mphoneCheck.value = ""
    }
}

// 비밀번호 찾기 모달창 생성
const findModal = ref("");

const noMatchModal = ref("");

async function findPassword() {
    const response = await MemberAPI.findPassword(member.value.mphone, member.value.mid);
    console.log(response.data.result);

    if (response.data.result == 'success') {
        findModal.value.showModal();
    } else {
        noMatchModal.value.showModal();
    }
}

//비밀 번호 같은지 확인 유효성 검사
const findIdView = ref("");
const RePassword = ref("");
const passwordSpan1 = ref("");
const NewPassword = ref("");
const passwordSpan2 = ref("");
const fixNewPassword = ref("");

//새 비밀 번호 확인 유효성 검사
let passwordResult = true;
const chagnePw = () => {
    const NewPasswordPettern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,12}$/;
    if (NewPassword.value.length == 0) {
        passwordSpan1.value = '비밀번호를 입력해 주세요.';
        passwordResult = false;
    } else if (NewPassword.value.length < 8 || NewPassword.value.length > 12 || !NewPasswordPettern.test(NewPassword.value)) {
        passwordSpan1.value = '영문 포함 8자 이상 12자 이하로 입력해 주세요.';
        passwordResult = false;
    } else {
        passwordSpan1.value = '';
        passwordResult = true;
    }
}

//새 비밀번호와 동일한 유효성검사 다시 확인할 필요가 있음.
let RepassowrdResult = true;
const RechagnePw = () => {
    if (RePassword.value.length == 0) {
        passwordSpan2.value = '비밀번호를 입력해주세요.';
        RepassowrdResult = false;
    } else if (NewPassword.value != RePassword.value) {
        passwordSpan2.value = '비밀번호가 일치하지 않습니다.';
        RepassowrdResult = false;
    } else if (RePassword.value.length < 8 || RePassword.value.length > 12) {
        passwordSpan2.value = '영문 포함 8자 이상 12자 이하로 입력해 주세요.';
        RepassowrdResult = false;
    } else {
        passwordSpan2.value = '';
        RepassowrdResult = true;
        fixNewPassword.value = RePassword.value;
    }
}

// 비밀번호 수정 요청
async function updatePassword() {
    const response = await MemberAPI.updatePassword(member.value.mid, fixNewPassword.value);
    console.log(response.data);
    router.push("/login");
    findModal.value.hideModal();
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

/* 이메일 찾기 */
// const findId = () => {
//     findIdView.value.innerHTML = `
//     <div class="d-flex flex-column text-center" :style="responsiveSize">
//         <p class="text-center h3" style="font-weight: 700; margin-bottom:14px;">회원님의 비밀번호입니다.</p>
//         <hr class="border-2 opacity-100 my-4"/>
//         <div>
//             <h6>비밀번호</h6>
//         </div>
//         <h4>letffle4nerd</h4>
//         <div class="row mt-5">
//             <button class="btn text-white rounded-0 btn-lg flex-grow-1 col ms-2" style="background-color: #F37551;">로그인</button>
//         </div>
//     </div>
//     `;
// }
</script>

<style scoped>
input {
    outline: none;
}

</style>