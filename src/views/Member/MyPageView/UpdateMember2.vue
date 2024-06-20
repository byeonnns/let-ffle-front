<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <div class="d-flex flex-column ms-5" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                        <h4>회원 정보 수정</h4>
                    </div>
                    <div class="content">
                        <div>
                            <div>
                                <div class="form_table">
                                    <div class="tr">
                                        <div class="th">
                                            <p>이메일</p>
                                        </div>
                                        <div class="td">
                                            <div>
                                                <input type="text" readonly placeholder="asd@naver.com">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tr">
                                        <div class="th">
                                            <p>닉네임</p>
                                        </div>
                                        <div class="td">
                                            <div>
                                                <input v-model="nick" type="text" placeholder="신떙떙" readonly>
                                            </div>
                                        </div>
                                        <div class="td">
                                            <button @click="NickChModal" class="btn btn-ch btn-outline-light ms-4"
                                                style="width: 120px; font-size: 15px;">닉네임 변경</button>
                                        </div>
                                    </div>
                                    <div class="tr">
                                        <div class="th">
                                            <p>비밀번호</p>
                                        </div>
                                        <div class="td">
                                            <input v-model="changePw" type="password" placeholder="●●●●●●●●" readonly>
                                        </div>
                                        <div class="td">
                                            <button class="btn btn-ch btn-outline-light ms-4"
                                                style="width: 120px; font-size: 15px;" @click="seeModal">비밀번호
                                                변경</button>
                                        </div>
                                    </div>
                                    <div class="tr">
                                        <div class="th">
                                            <p>휴대폰 번호</p>
                                        </div>
                                        <div class="td">
                                            <div>
                                                <input v-model="changePhone" type="text" placeholder="010-1234-5678"
                                                    readonly>
                                            </div>
                                        </div>
                                        <div class="td">
                                            <button class="btn btn-ch btn-outline-light ms-4"
                                                style="width: 120px; font-size: 15px;" @click="lookModal">번호 변경</button>
                                        </div>
                                    </div>
                                    <div class="tr">
                                        <div class="th">
                                            <p>주소</p>
                                        </div>
                                        <div class="td">
                                            <div>
                                                <div>
                                                    <button class="btn btn-outline-light"
                                                        style="font-size: 15px; width: 110px;" @click="addrModal">주소
                                                        변경</button>
                                                    <div class="mt-2">
                                                        <input v-model="changeAdr" class="mb-2" type="text"
                                                            placeholder="도로명 주소"> <br />
                                                        <input v-model="changeReAdr" type="text" placeholder="상세 주소">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button type="button" class="btn btn-sm"
                                            style="font-size: 14px; width: 100px; color: black; background-color: white; text-decoration: underline;"
                                            @click="checkhandle">회원탈퇴</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>














        <!-- Modal 닉네임 변경 slot화 -->
        <RaffleModal ref="NickNameModal">
            <template v-slot:modalHeader>
                <h4>닉네임 수정</h4>
            </template>

            <template v-slot:modalBody>
                <div class="div_form row">
                    <label>변경할 닉네임</label>
                    <input v-model="mNickChange" type="text" class="input w-100" style="height: 40px;"
                        @input="nickNameCheck">
                    <span style="color: red;">{{ falseNickname }}</span>
                </div>
            </template>

            <template v-slot:modalFooter>
                <button style="width: 90px; font-size: 15px;" type="button" class="btn btn-outline-light"
                    data-bs-dismiss="modal">닫기</button>
                <button style="width: 90px; font-size: 15px;" type="button" class="btn btn-outline-light"
                    @click="changeNickname">수정 완료</button>
            </template>

        </RaffleModal>


        <!-- Modal 비밀번호 변경  Slot화-->
        <RaffleModal ref="PWModal">
            <template v-slot:modalHeader>
                <h4>비밀번호 수정</h4>
            </template>
            <template v-slot:modalBody>
                <div class="container">
                    <div class="div_form row mb-3">
                        <label>기존 비밀번호</label>
                        <input type="password" placeholder="" class="input">
                    </div>

                    <div class="div_form row mb-3">
                        <label>새 비밀번호</label>
                        <input v-model="NewPassword" type="password" placeholder="" class="input" style=""
                            @input="passwordCheck">
                        <span style="color: red;">{{ falsePassword }}</span>
                    </div>

                    <div class="div_form row">
                        <label>비밀번호 확인</label>
                        <input v-model="RePassword" type="password" placeholder="" class="input" style=""
                            @input="passwordReCheck">
                        <span style="color: red;">{{ samePassword }}</span>
                    </div>
                </div>
            </template>
            <template v-slot:modalFooter>
                <button style="width: 90px; font-size: 15px;" type="button" class="btn btn-outline-light"
                    data-bs-dismiss="modal">닫기</button>
                <button style="width: 90px; font-size: 15px;" type="button" class="btn btn-outline-light"
                    @click="changePassword">수정 완료</button>
            </template>
        </RaffleModal>

        <!-- Modal 휴대폰 번호 변경 Slot화-->
        <RaffleModal ref="PWCModal">
            <template v-slot:modalHeader>
                <h4>휴대폰 번호 수정</h4>
            </template>
            <template v-slot:modalBody>
                <div class="container">
                    <div class="div_form row">
                        <label>새 휴대폰 번호</label>
                        <input v-model="changePhoneModal" type="text" placeholder="010-xxxx-xxxx" class="input" style=""
                            @input="PhoneNumCheck">
                        <span style="color: red;">{{ falsePhone }}</span>
                    </div>
                </div>
            </template>
            <template v-slot:modalFooter>
                <button style="width: 90px; font-size: 15px;" type="button" class="btn btn-outline-light"
                    data-bs-dismiss="modal">닫기</button>
                <button style="width: 90px; font-size: 15px;" @click="changePhNum" type="button"
                    class="btn btn-outline-light" :data-bs-dismiss="isOk ? 'modal' : ''">수정
                    완료</button>
            </template>
        </RaffleModal>

        <!-- Modal 우편번호 입력 -->
        <RaffleModal ref="ADRModal">
            <template v-slot:modalHeader>
                우편번호 입력
            </template>

            <template v-slot:modalBody>
                <div>
                    <div class="">
                        <input v-model="zonecode" id="maddress" type="text"
                            class="border-0 border-bottom flex-grow-1 input" placeholder="우편번호">
                        <button class="btn text-white btn-outline-light btn-sm ms-3" style="width: 100px;"
                            @click="DaumPostcode()">우편번호
                            찾기</button>
                    </div>
                    <div class="mt-3">
                        <input v-model="address" type="text" placeholder="주소" class="input w-100">
                        <hr class="p-0 m-0 w-100 mb-4">
                    </div>
                    <input v-model="addressDetail" type="text" placeholder="상세 주소" class="input w-100">
                    <hr class="p-0 m-0 w-100 mb-4">
                </div>
            </template>

            <template v-slot:modalFooter>
                <button class="btn btn-outline-light btn-sm" data-bs-dismiss="modal" @click="addressCheck">완료</button>
                <button class="btn btn-outline-light btn-sm" data-bs-dismiss="modal">닫기</button>
            </template>

        </RaffleModal>

        <!-- 주소 API -->
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

        <!-- 회원 탈퇴 Slot화 -->
        <RaffleModal ref="Withdrawal">
            <template v-slot:modalHeader>
                <h4>탈퇴여부</h4>
            </template>
            <template v-slot:modalBody>
                정말로다가 탈퇴를 하시겠습니까?
            </template>
            <template v-slot:modalFooter>
                <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">닫기</button>
                <RouterLink to="/login">
                    <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">확인</button>
                </RouterLink>
            </template>
        </RaffleModal>


    </div>
</template>

<script setup>
import RaffleModal from '@/components/RaffleModal.vue';
import { ref } from 'vue'
import { VueDaumPostcode } from 'vue-daum-postcode';

const NickNameModal = ref(null); // 닉네임 모달창 상태 정의
const nick = ref(''); // 닉네임 양방향 상태 정의
const mNickChange = ref(''); // Modal 닉네임 양방향 상태 정의
const falseNickname = ref(''); // 닉네임이 잘못되었을 때 상태 정의

// 닉네임 유효성 검사 ( 2자 이상 8자 이하 영문 + 숫자 )
function changeNickname() {
    const mNickChangePattern = new RegExp("[가-힣a-zA-Z0-9_-]{2,15}");
    if (mNickChangePattern.test(mNickChange.value)) {
        nick.value = mNickChange.value;
        falseNickname.value = '';
        NickNameModal.value.hideModal();
        mNickChange.value = null;
    } else if (mNickChange.value == '') {
        falseNickname.value = '닉네임을 입력해주세요.';
    } else {
        falseNickname.value = '닉네임 형식이 올바르지 않습니다.';
    }

}
// 실시간 상태 검사
const nickNameCheck = () => {
    const mNickChangePattern = new RegExp("[가-힣a-zA-Z0-9_-]{2,15}");
    if (mNickChangePattern.test(mNickChange.value)) {
        nick.value = mNickChange.value;
        falseNickname.value = '';
    } else if (mNickChange.value == '') {
        falseNickname.value = '닉네임을 입력해주세요.';
    } else {
        falseNickname.value = '닉네임 형식이 올바르지 않습니다.';
    }
}

// 비밀번호 상태 정의
const NewPassword = ref(''); // 새 비밀번호 모달창 (양방향)
const RePassword = ref(''); // 비밀번호 확인 모달창 (양방향)
const PWModal = ref(null); // 비밀번호 변경 모달 상태 정의
const falsePassword = ref(''); // 새 비밀번호 span 태그 상태 정의
const changePw = ref(''); // 비밀번호 상태 정의 
const samePassword = ref(''); // 비밀번호 span 태그 상태 정의


// 비밀번호 유효성 검사
function changePassword() {
    const NewPasswordPettern = new RegExp("(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}");
    if (NewPassword.value.length == 0) {
        falsePassword.value = '비밀번호를 입력해 주세요.';
    } else if (NewPassword.value.length < 8 || NewPassword.value.length > 15 || !NewPasswordPettern.test(NewPassword.value)) {
        falsePassword.value = '영문 포함 8자 이상 15자 이하로 입력해 주세요.';
    } else {
        falsePassword.value = '';
    }

    if (RePassword.value.length == 0) {
        samePassword.value = '비밀번호를 입력해 주세요.';
    } else if (NewPassword.value != RePassword.value) {
        samePassword.value = '비밀번호가 일치하지 않습니다.';
    } else if (RePassword.value.length < 8 || RePassword.value.length > 15) {
        samePassword.value = '영문 포함 8자 이상 15자 이하로 입력해 주세요.';
    } else {
        samePassword.value = '';
        changePw.value = NewPassword.value;
        PWModal.value.hideModal();
        NewPassword.value = null;
        RePassword.value = null;
    }
}

const passwordCheck = () => {
    const NewPasswordPettern = new RegExp("(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}");
    if (NewPassword.value.length == 0) {
        falsePassword.value = '비밀번호를 입력해 주세요.';
    } else if (NewPassword.value.length < 8 || NewPassword.value.length > 15 || !NewPasswordPettern.test(NewPassword.value)) {
        falsePassword.value = '영문 포함 8자 이상 15자 이하로 입력해 주세요.';
    } else {
        falsePassword.value = '';
    }
}
const passwordReCheck = () => {
    if (RePassword.value.length == 0) {
        samePassword.value = '비밀번호를 입력해주세요.';
    } else if (NewPassword.value != RePassword.value) {
        samePassword.value = '비밀번호가 일치하지 않습니다.';
    } else if (RePassword.value.length < 8 || RePassword.value.length > 15) {
        samePassword.value = '영문 포함 8자 이상 15자 이하로 입력해 주세요.';
    } else {
        samePassword.value = '';
        changePw.value = NewPassword.value;
        // PWModal.value.hideModal();
    }
}


const PWCModal = ref(null);
const changePhone = ref('');
const changePhoneModal = ref('');
const falsePhone = ref('');

// 휴대폰 번호 유효성 검사
function changePhNum() {
    const changePhoneModalPattern = new RegExp("010-\\d{4}-\\d{4}");
    if (changePhoneModalPattern.test(changePhoneModal.value)) {
        changePhone.value = changePhoneModal.value;
        falsePhone.value = '';
        changePhoneModal.value = null;
        PWCModal.value.hideModal();
    } else if (changePhoneModal.value == '') {
        falsePhone.value = '휴대폰 번호를 입력해주세요.';
    } else {
        falsePhone.value = '번호 형식에 맞춰 입력해주세요.';
    }
}

const PhoneNumCheck = () => {
    const changePhoneModalPattern = new RegExp("010-\\d{4}-\\d{4}");
    if (changePhoneModalPattern.test(changePhoneModal.value)) {
        changePhone.value = changePhoneModal.value;
        falsePhone.value = '';
        // PWCModal.value.hideModal();
    } else if (changePhoneModal.value == '') {
        falsePhone.value = '휴대폰 번호를 입력해주세요.';
    } else {
        falsePhone.value = '번호 형식에 맞춰 입력해주세요.';
    }
}
const changeAdr = ref('');
const changeReAdr = ref('');
// 주소 유효성 검사
function addressCheck() {
    changeAdr.value = "(" + zonecode.value + ")" + " " + address.value;
    changeReAdr.value = addressDetail.value;

}


const Withdrawal = ref(null);
const ADRModal = ref(null);
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

function seeModal() {
    PWModal.value.showModal();
}
function lookModal() {
    PWCModal.value.showModal();
}
function checkhandle() {
    Withdrawal.value.showModal();
}

function addrModal() {
    ADRModal.value.showModal();
}

function NickChModal() {
    NickNameModal.value.showModal();
}

</script>

<style scoped>
.tr>.th {
    align-content: center;
}

p {
    margin: 0px;
}

input[type="text"] {
    width: 300px;
    /* 너비 조절 */
    height: 45px;
    /* 높이 조절 */
    padding: 10px;
    /* 내부 여백 */
    font-size: 16px;
    /* 글꼴 크기 */
}

input[type="password"] {
    width: 300px;
    /* 너비 조절 */
    height: 45px;
    /* 높이 조절 */
    padding: 10px;
    /* 내부 여백 */
    font-size: 16px;
    /* 글꼴 크기 */
}

.btn {
    width: 60px;
    height: 46px;
}













/*


*/
.form_table {
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: table;
    width: 100%;
    border-collapse: collapse;
}


.form_table .tr {
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    border-bottom: 1px solid #f2f2f2;
}

.tr .th {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    display: table-cell;
    width: 160px;
}

.tr .td {
    font-size: 14px;
    padding: 20px 0;
    margin: 0;
    align-content: center;

}
</style>