<template>
    <div class="container-lg">
        <div class="d-flex justify-content-center">
            <!--아이디(이메일), 비밀번호, 이름, 주민번호, 전화번호, 주소를 입력받는다.-->
            <!-- <form @submit.prevent="handleSubmit"> -->
            <div class="d-flex flex-column" :style="responsiveSize">
                <p class="text-center fw-bold fst-italic" style="font-size:50px">Let-<span
                        style="color:#FF5C35">FFle</span></p>

                <label for="memail mb-2">이메일 주소*</label>
                <div class="d-flex justify-content-between">
                    <input id="memail" type="email" class="border-0 border-bottom flex-grow-1 input"
                        v-model="member.mid" @input="midCheck(onbtn)">
                    <button class="btn text-white btn-outline-light btn-sm">중복 확인</button>
                </div>
                <p style="color: red;">{{ checkMid }}</p>

                <label for="mpassword" class="mt-5 mb-2">비밀번호*</label>
                <input id="mpassword" type="password" class="border-0 border-bottom input" v-model="member.mpassword"
                    @input="mpasswordCheck(onbtn)">
                <p style="color: red;">{{ checkMpassword }}</p>

                <label for="mname" class="mt-5 mb-2 input">이름</label>
                <input id="mname" type="text" class="border-0 border-bottom input" v-model="member.mname"
                    @input="mnameCheck(onbtn)">
                <p style="color: red;">{{ checkMname }}</p>

                <label for="mnickname" class="mt-5 mb-2">닉네임</label>
                <div class="d-flex justify-content-between">
                    <input id="mnickname" type="text" class="border-0 border-bottom flex-grow-1 input"
                        v-model="member.mnickname" @input="mnickCheck(onbtn)">
                    <button class="btn text-white btn-outline-light btn-sm">중복 확인</button>
                </div>
                <p style="color: red;">{{ checkMnick }}</p>

                <label for="mte" class="mt-5 mb-2">전화번호</label>
                <input id="mphone" type="text" class="border-0 border-bottom input" v-model="member.mphone"
                    @input="mphoneCheck(onbtn)">
                <p style="color: red;"> {{ checkMphone }}</p>

                <label for="maddress" class="mt-5 mb-2">주소</label>
                <div class="d-flex justify-content-between">
                    <input v-model="zonecode" id="maddress" type="text"
                        class="border-0 border-bottom text-center flex-grow-1 input" placeholder="우편번호">
                    <button class="btn text-white btn-outline-light btn-sm">우편번호 찾기</button>
                </div>
                <input v-model="address" type="text" class="border-0 border-bottom mt-3 input" placeholder="주소">
                <input v-model="addressDetail" type="text" class="border-0 border-bottom mt-3 input" placeholder="상세주소">
                <button class="btn text-white btn-lg mt-5 w-100" :class="ispass ? '' : 'disabled'">가입하기</button>

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
            <!-- </form> -->
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import RaffleModal from '@/components/RaffleModal.vue';
import { VueDaumPostcode } from 'vue-daum-postcode'

// 유효성 검사시에 값이 맞는지 안맞는지
const checkMid = ref(null);
const checkMpassword = ref(null);
const checkMnick = ref(null);
const checkMname = ref(null);
const checkMphone = ref(null);
const ispass = ref(false);

// 

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
        postcodeModal.value.hideModal();

    } else {
        zonecode.value = data.zonecode;
        address.value = data.jibunAddress;
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
    maddress: ""
});

// function handleSubmit() {

//     var total = true;

//     var midPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
//     var userMid = midPattern.test(member.value.mid);
//     if (userMid) {
//         checkMid.value = "";
//     } else if (!userMid) {
//         total = false;
//         checkMid.value = "올바르지 않은 양식입니다";
//     }

//     var mpasswordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
//     var userPassword = mpasswordPattern.test(member.value.mpassword);
//     if (userPassword) {
//         checkMpassword.value = ""
//     } else if (!userPassword) {
//         total = false;
//         checkMpassword.value = "올바르지 않은 양식입니다"

//     }

//     var mnamePattern = /^[가-힣]+$/;
//     var userMname = mnamePattern.test(member.value.mname);
//     if (userMname) {
//         checkMname.value = "";
//     } else if(!userMname) {
//         total = false;
//         checkMname.value = "올바르지 않는 양식입니다."
//     }



//     var mphonePattern = /^010-\d{3,4}-\d{4}$/;
//     var userPhone = mphonePattern.test(member.value.mphone);
//     if (userPhone) {
//         checkMphone.value =" "
//     } else if ((!userPhone)) {
//         total = false;
//         checkMphone.value = "올바르지 않는 양식입니다."
//     }

//     if (total) {
//      member.submit
//      }

// }


// 유효성 검사
let userMid;
let userPassword;
let userMname;
let userPhone;
let userMnickname;

const midCheck = (onbtn) => {
    var midPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    userMid = midPattern.test(member.value.mid);
    if (!userMid) {
        checkMid.value = "이메일 주소를 정확히 입력해주세요."
    } else {
        checkMid.value = "";
    }
    onbtn();

}

const mpasswordCheck=(onbtn)=>{
    var mpasswordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
     userPassword = mpasswordPattern.test(member.value.mpassword);
    if (!userPassword) {
        checkMpassword.value="비밀번호를 입력해주세요"
    } else {
        checkMpassword.value=""
    }
    onbtn();
}

const mnameCheck = (onbtn) => {
    var mnamePattern = /^[가-힣]{2,4}$/;
    userMname = mnamePattern.test(member.value.mname);
    if (!userMname) {
    checkMname.value="이름을 입력해주세요"
    } else {
    checkMname.value=""
    }
    onbtn();
}

const mphoneCheck = (onbtn) => {
    var mphonePattern = /^010-\d{3,4}-\d{4}$/;
    userPhone = mphonePattern.test(member.value.mphone);
    if (!userPhone) {
        checkMphone.value="전화번호를 입력해주세요"
    } else {
        checkMphone.value=""
    }
    onbtn();
}

const mnickCheck = (onbtn) => {
    var mnicknamePattern = /^[가-힣a-zA-Z0-9_-]{2,15}$/
    userMnickname = mnicknamePattern.test(member.value.mnickname);
    if (!userMnickname) {
        checkMnick.value ="닉네임을 입력해주세요"
    } else {
        checkMnick.value=""
    }
    onbtn();
}
function onbtn(){
    if (userMid && userPassword && userMname && userPhone && userMnickname) {
        ispass.value="true"
    } else {
        ispass.value="false"
    }
}



</script>

<style scoped>
.input {
    outline: none;
}
</style>