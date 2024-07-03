<template>
    <div class="container-lg">
        <div class="d-flex justify-content-center">
            <!--아이디(이메일), 비밀번호, 이름, 주민번호, 전화번호, 주소를 입력받는다.-->
            <form @submit.prevent="handleSubmit">
                <div class="d-flex flex-column" :style="responsiveSize">
                    <p class="text-center fw-bold fst-italic" style="font-size:50px">Let-<span
                            style="color:#FF5C35">FFle</span></p>

                    <label for="memail">이메일 주소*</label>
                    <div class="d-flex justify-content-between">
                        <input id="memail" type="email" class="border-0 border-bottom flex-grow-1 input"
                            v-model="member.mid" @input="midCheck(onbtn)">
                    </div>
                    <p style="font-size:12px; color:#FF5C35; min-height:20px;">{{ checkMid }}</p>

                    <label for="mpassword">비밀번호*</label>
                    <input id="mpassword" type="password" class="border-0 border-bottom input"
                        v-model="member.mpassword" @input="mpasswordCheck(onbtn)">
                    <p style="font-size:12px; color:#FF5C35; min-height:20px;">{{ checkMpassword }}</p>

                    <label for="mname">이름</label>
                    <input id="mname" type="text" class="border-0 border-bottom input" v-model="member.mname"
                        @input="mnameCheck(onbtn)">
                    <p style="font-size:12px; color:#FF5C35; min-height:20px;">{{ checkMname }}</p>

                    <label for="mnickname">닉네임</label>
                    <div class="d-flex justify-content-between">
                        <input id="mnickname" type="text" class="border-0 border-bottom flex-grow-1 input"
                            v-model="member.mnickname" @input="mnickCheck(onbtn)">
                    </div>
                    <p style="font-size:12px; color:#FF5C35; min-height:20px;">{{ checkMnick }}</p>

                    <label for="mte">전화번호</label>
                    <input id="mphone" type="text" class="border-0 border-bottom input" v-model="member.mphone"
                        @input="mphoneCheck(onbtn)">
                    <p style="font-size:12px; color:#FF5C35; min-height:20px;">{{ checkMphone }}</p>

                    <label for="maddress">주소</label>
                    <div class="d-flex justify-content-between">
                        <input v-model="member.mzipcode" id="maddress" type="text"
                            class="border-0 border-bottom flex-grow-1 input" placeholder="우편번호">
                        <button type="button" class="btn text-white btn-outline-light rounded-0 btn-sm" @click="DaumPostcode"
                            style="background-color: #F37551; margin-left: 10px;">우편번호 찾기</button>
                    </div>
                    <input v-model="member.maddress1" type="text" class="border-0 border-bottom mt-3 input" placeholder="주소">
                    <input v-model="member.maddress2" type="text" class="border-0 border-bottom mt-3 input"
                        placeholder="상세주소">
                    <button type="submit" class="btn text-white rounded-0 btn-lg mt-5 w-100"
                        :class="ispass ? '' : 'disabled'" style="background-color: #F37551;">가입하기</button>

                </div>
                <RaffleModal ref="postcodeModal">
                    <template v-slot:modalHeader>
                        주소 검색
                    </template>
                    <template v-slot:modalBody>
                        <VueDaumPostcode :animation=true :max-suggest-items="3" :theme='{
                            textColor: "#000000", //기본 글자색
                            postcodeTextColor: "#000000", //우편번호 글자색
                            emphTextColor: "#FF5C35", //강조 글자색
                            outlineColor: "#FF5C35" //테두리
                        }' v-if="postcodeMount" @complete="addressSearched" />
                    </template>
                </RaffleModal>
            </form>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import RaffleModal from '@/components/RaffleModal.vue';
import { VueDaumPostcode } from 'vue-daum-postcode'
import MemberAPI from '@/apis/MemberAPI';
import router from '@/router';

// 유효성 검사시에 값이 맞는지 안맞는지
const checkMid = ref(null);
const checkMpassword = ref(null);
const checkMnick = ref(null);
const checkMname = ref(null);
const checkMphone = ref(null);
const ispass = ref(false);

const postcodeModal = ref(null);
const postcodeMount = ref(false);

const DaumPostcode = () => {
    postcodeModal.value.showModal();
    postcodeMount.value = true;
}

const addressSearched = (data) => {
    if (data.userSelectedType === 'R') {
        member.value.mzipcode = data.zonecode;
        member.value.maddress1 = data.address;
        postcodeModal.value.hideModal();

    } else {
        member.value.mzipcode = data.zonecode;
        member.value.maddress1 = data.jibunAddress;
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


// 유효성 검사
const member = ref({
    mid: "",
    mpassword: "",
    mname: "",
    mnickname: "",
    mphone: "",
    mzipcode: "",
    maddress: "",
    maddress1: "",
    maddress2: ""
});


// 유효성 검사
let userMid = false;
let userPassword = false;
let userMname = false;
let userPhone = false;
let userMnickname = false;

const midCheck = async (onbtn) => {
    var midPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    userMid = midPattern.test(member.value.mid);
    if (!userMid) {
        checkMid.value = "이메일 주소를 정확히 입력해주세요."
    } else {
        const response = await MemberAPI.idDuplicationCheck(member.value.mid);
        if ( response.data.result == 'fail' ) {
         checkMid.value = "이미 사용중인 이메일입니다.";
        } else {
         checkMid.value = "";
        }
    }
    onbtn();
}

const mpasswordCheck = (onbtn) => {
    var mpasswordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,12}$/;
    userPassword = mpasswordPattern.test(member.value.mpassword);
    if (!userPassword) {
        checkMpassword.value = "영어, 숫자를 포함한 8~12자로 작성해주세요."
    } else {
        checkMpassword.value = ""
    }
    onbtn();
}

const mnameCheck = (onbtn) => {
    var mnamePattern = /^[가-힣]{2,4}$/;
    userMname = mnamePattern.test(member.value.mname);
    if (!userMname) {
        checkMname.value = "이름을 입력해주세요."
    } else {
        checkMname.value = ""
    }
    onbtn();
}

const mphoneCheck = async (onbtn) => {
    var mphonePattern = /^010\d{4}\d{4}$/;
    userPhone = mphonePattern.test(member.value.mphone);
    if (!userPhone) {
        checkMphone.value = "하이픈('-')을 제외한 숫자만 입력해주세요."
    } else {
        const response = await MemberAPI.phoneDuplicationCheck(member.value.mphone);
        if ( response.data.result == 'fail' ) {
            checkMphone.value = "이미 등록된 전화번호입니다.";
        } else {
            checkMphone.value = "";
        }
    }
    onbtn();
}

const mnickCheck = async (onbtn) => {
    var mnicknamePattern = /^[가-힣a-zA-Z0-9_-]{2,15}$/
    userMnickname = mnicknamePattern.test(member.value.mnickname);
    if (!userMnickname) {
        checkMnick.value = "한글, 영문, 숫자를 사용하여 2~15자 사이로 입력해주세요."
    } else {
        const response = await MemberAPI.nicknameDuplicationCheck(member.value.mnickname);
        if ( response.data.result == 'fail' ) {
            checkMnick.value = "이미 사용중인 닉네임입니다.";
        } else {
            checkMnick.value = "";
        }
    }
    onbtn();
}

function onbtn() {
    // console.log(userMid, userPassword);
    if (userMid && userPassword && userMname && userPhone && userMnickname) {
        ispass.value = true
    } else {
        ispass.value = false
    }
    console.log(ispass.value);
}

async function handleSubmit() {
    console.log(member.value.mid)
    console.log(member.value.mpassword)
    console.log(member.value.mname)
    member.value.maddress = member.value.maddress1 + ", " + member.value.maddress2;
    console.log(member.value.maddress);
    try {
        const data = JSON.parse(JSON.stringify(member.value));
        const response = await MemberAPI.join(data);
        console.log(response.data);
        router.push("/");
    } catch (error) {
        console.log(error)
    }
}



</script>

<style scoped>
.input {
    outline: none;
}
</style>