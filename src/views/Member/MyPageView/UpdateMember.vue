<template>
    <div>
        <div class="d-flex flex-column">
            <RaffleToast ref="raffleToast" />
            <div style="border-bottom: 3px solid #F37551;">
                <h3>회원 정보 수정</h3>
            </div>
            <div class="form_table">
                <div class="tr">
                    <div class="th">
                        <p>이메일</p>
                    </div>
                    <div class="td">
                        <div>
                            <input class="placeColor" type="text" readonly :placeholder="member.mid"
                                v-model="member.mid">
                        </div>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p>닉네임</p>
                    </div>
                    <div class="td">
                        <div>
                            <input class="placeColor" v-model="nick" type="text" :placeholder="member.mnickname"
                                readonly>
                        </div>
                    </div>
                    <div class="td">
                        <button @click="NickChModal" class="btn btn-ch btn-outline-light ms-4"
                            style="width: 100px; font-size: 15px;">변경</button>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p>비밀번호</p>
                    </div>
                    <div class="td">
                        <input class="placeColor" type="password" placeholder="●●●●●●●●" readonly>
                    </div>
                    <div class="td">
                        <button class="btn btn-ch btn-outline-light ms-4" style="width: 100px; font-size: 15px;"
                            @click="seeModal">변경</button>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p>휴대폰 번호</p>
                    </div>
                    <div class="td">
                        <div>
                            <input class="placeColor" v-model="member.mphone" type="text" readonly>
                        </div>
                    </div>
                    <div class="td">
                        <button class="btn btn-ch btn-outline-light ms-4" style="width: 100px; font-size: 15px;"
                            @click="lookModal">변경</button>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p>주소</p>
                    </div>
                    <div class="td">
                        <div>
                            <div>
                                <div class="mt-2">
                                    <input style="width: 90px;" v-model="member.mzipcode"
                                        class="mb-2 me-2 text-center placeColor" type="text" readonly>
                                    <input class="placeColor" style="width: 200px;" v-model="member.maddress1"
                                        type="text" readonly>
                                    <button class="btn btn-outline-light ms-4" style="font-size: 15px; width: 100px;"
                                        @click="addrModal">변경</button> <br />
                                </div>
                                <input v-model="member.maddress2" style="width: 422px; color: gray;" class="mb-2" type="text"
                                    placeholder="상세 주소" readonly>
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
        <!-- 닉네임 변경 Modal -->
        <Modal ref="NickNameModal">
            <template v-slot:modalHeader>
                <h4>닉네임 수정</h4>
            </template>

            <template v-slot:modalBody>
                <div class="div_form row">
                    <label>새 닉네임</label>
                    <input :value="newMember.mnickname" type="text" class="input w-100" style="height: 40px;"
                        @input="nickNameCheck">
                    <span v-if="NickResult == false" style="color: red;">{{ falseNickname }}</span>
                    <span v-if="NickResult == true" style="color: green;">{{ falseNickname }}</span>
                </div>
            </template>

            <template v-slot:modalFooter>
                <button style="width: 90px; font-size: 15px;" type="button" class="btn btn-outline-light"
                    data-bs-dismiss="modal">닫기</button>
                <button style="width: 90px; font-size: 15px;" type="button" class="btn btn-outline-light"
                    @click="changeNickname" :class="{ 'disabled': NickResult == false }">수정 완료</button>
            </template>

        </Modal>

        <!-- 비밀번호 변경 Modal -->
        <Modal ref="passwordModal">
            <template v-slot:modalHeader>
                <h4>비밀번호 수정</h4>
            </template>
            <template v-slot:modalBody>
                <div class="container">
                    <div class="div_form row mb-3">
                        <label>기존 비밀번호</label>
                        <input :value="oldPassword" type="password" placeholder="" class="input"
                            @input="passwordMatchCheck">
                        <span v-if="passwordResult == false" style="color: red;">{{ oldPasswordSpan }}</span>
                        <span v-if="passwordResult == true" style="color: green;">{{ oldPasswordSpan }}</span>
                    </div>

                    <div class="div_form row mb-3">
                        <label>새 비밀번호</label>
                        <input v-model="NewPassword" type="password" placeholder="" class="input" style=""
                            @input="passwordCheck">
                        <span v-if="newPasswordResult == false" style="color: red;">{{ newPasswordSpan }}</span>
                        <span v-if="newPasswordResult == true" style="color: green;">{{ newPasswordSpan }}</span>
                    </div>

                    <div class="div_form row">
                        <label>비밀번호 확인</label>
                        <input v-model="RePassword" type="password" placeholder="" class="input" style=""
                            @input="passwordReCheck">
                        <span v-if="RepasswordResult == false" style="color: red;">{{ rePasswordSpan }}</span>
                        <span v-if="RepasswordResult == true" style="color: green;">{{ rePasswordSpan }}</span>
                    </div>
                </div>
            </template>
            <template v-slot:modalFooter>
                <button style="width: 90px; font-size: 15px;" type="button" class="btn btn-outline-light"
                    data-bs-dismiss="modal">닫기</button>
                <button style="width: 90px; font-size: 15px;" type="button" class="btn btn-outline-light"
                    @click="changePassword"
                    :class="{ 'disabled': RepasswordResult !== true || passwordResult !== true || newPasswordResult !== true }">수정
                    완료</button>
            </template>
        </Modal>

        <!-- 휴대폰 번호 변경 Modal -->
        <Modal ref="phoneModal">
            <template v-slot:modalHeader>
                <h4>휴대폰 번호 수정</h4>
            </template>
            <template v-slot:modalBody>
                <div class="container">
                    <div class="div_form row">
                        <label>새 휴대폰 번호</label>
                        <input v-model="newMember.mphone" type="text" class="input" @input="PhoneCheck">
                        <span v-if="phoneResult == false" style="color: red;">{{ phoneSpan }}</span>
                        <span v-if="phoneResult == true" style="color: green;">{{ phoneSpan }}</span>
                    </div>
                </div>
            </template>
            <template v-slot:modalFooter>
                <button style="width: 90px; font-size: 15px;" type="button" class="btn btn-outline-light"
                    data-bs-dismiss="modal">닫기</button>
                <button style="width: 90px; font-size: 15px;" type="button" class="btn btn-outline-light"
                    @click="changePhNum" :class="{ 'disabled': phoneResult !== true }">수정
                    완료</button>
            </template>
        </Modal>

        <!-- 주소 변경 Modal -->
        <Modal ref="addressModal">
            <template v-slot:modalHeader>
                우편번호 입력
            </template>

            <template v-slot:modalBody>
                <div>
                    <div class="">
                        <input v-model="newMember.mzipcode" id="maddress" type="text"
                            class="border-0 border-bottom flex-grow-1 input" placeholder="우편번호" readonly>
                        <button class="btn text-white btn-outline-light btn-sm ms-3" style="width: 100px;"
                            @click="DaumPostcode()">우편번호
                            찾기</button>
                    </div>
                    <div class="mt-3">
                        <input v-model="newMember.maddress1" type="text" placeholder="주소" class="input w-100" readonly>
                        <hr class="p-0 m-0 w-100 mb-4">
                    </div>
                    <input v-model="newMember.maddress2" type="text" placeholder="상세 주소" class="input w-100">
                    <hr class="p-0 m-0 w-100 mb-4">
                </div>
            </template>

            <template v-slot:modalFooter>
                <button class="btn btn-outline-light btn-sm" data-bs-dismiss="modal">닫기</button>
                <button class="btn btn-outline-light btn-sm" data-bs-dismiss="modal" @click="updateMaddress"
                    :class="{ 'disabled': !(newMember.mzipcode !== '' && newMember.maddress1 !== '' && newMember.maddress2 !== '') }">변경</button>
            </template>
        </Modal>

        <!-- 주소 API -->
        <Modal ref="postcodeModal">
            <template v-slot:modalHeader>
                주소 검색
            </template>
            <template v-slot:modalBody>
                <VueDaumPostcode :animation=true :max-suggest-items="3" :theme='{
                    textColor: "#000000",
                    postcodeTextColor: "#000000",
                    emphTextColor: "#FF5C35",
                    outlineColor: "#FF5C35"
                }' v-if="postcodeMount" @complete="addressSearched" />
            </template>
        </Modal>

        <!-- 회원 탈퇴 Modal -->
        <Modal ref="Withdrawal">
            <template v-slot:modalHeader>
                <h4>알림</h4>
            </template>
            <template v-slot:modalBody>
                탈퇴한 이후에는 복구되지 않으며, <br>동일한 아이디로 재가입이 불가능하니 신중하게 결정해주세요. <br><br>정말 탈퇴하시겠어요?
            </template>
            <template v-slot:modalFooter>
                <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">닫기</button>
                <RouterLink to="/login">
                    <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal"
                        @click="changeMenabled">확인</button>
                </RouterLink>
            </template>
        </Modal>
    </div>
</template>

<script setup>
import Modal from '@/components/Modal.vue';
import { ref } from 'vue'
import { VueDaumPostcode } from 'vue-daum-postcode';
import MemberAPI from '@/apis/MemberAPI';
import RaffleToast from '@/components/RaffleToast.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const NickNameModal = ref(null);
const nick = ref('');
const falseNickname = ref('');

/* 토스트 */
const raffleToast = ref(null);

const member = ref({
    mid: "",
    mnickname: "",
    mpassword: "",
    mphone: "",
    mzipcode: "",
    maddress: "",
    maddress1: "",
    maddress2: "",
})

const newMember = ref({
    mid: "",
    mnickname: "",
    mpassword: "",
    mphone: "",
    mzipcode: "",
    maddress: "",
    maddress1: "",
    maddress2: "",
})

// 처음 페이지 로드 시 로그인한 유저 정보를 바인딩하기 위해 정보를 가져옴
async function getMember() {
    const response = await MemberAPI.getMember();
    member.value = response.data;

    // ,를 기준으로 기본 주소와 상세 주소 구분해서 바인딩하기
    var splitAddress = member.value.maddress.split(",", 2);

    member.value.maddress1 = splitAddress[0];
    member.value.maddress2 = splitAddress[1];
}
getMember();

// 닉네임 변경 ( 2자 이상 8자 이하 영문 + 숫자 )
let NickResult = false;
async function changeNickname() {
    await MemberAPI.updateNickname(newMember.value.mnickname);
    member.value.mnickname = newMember.value.mnickname;
    NickNameModal.value.hideModal();
    raffleToast.value.showToast("닉네임 변경이 완료되었습니다.");
}

// 실시간 상태 검사
const nickNameCheck = async (event) => {
    const mNickChangePattern = new RegExp("[가-힣a-zA-Z0-9_-]{2,15}");
    newMember.value.mnickname = event.target.value;
    if (mNickChangePattern.test(newMember.value.mnickname)) {
        const response = await MemberAPI.nicknameDuplicationCheck(newMember.value.mnickname);
        if (response.data.result == 'success') {
            falseNickname.value = '사용 가능한 닉네임입니다.';
            NickResult = true;
        } else {
            falseNickname.value = '이미 사용중인 닉네임입니다.';
            NickResult = false;
        }
    } else if (newMember.value.mnickname == '') {
        falseNickname.value = '닉네임을 입력해주세요.';
        NickResult = false;
    } else {
        falseNickname.value = '닉네임 형식이 올바르지 않습니다.';
        NickResult = false;
    }
}

// 비밀번호 상태 정의
let passwordResult = false;
let newPasswordResult = false;
const NewPassword = ref('');
const RePassword = ref('');
const passwordModal = ref(null);
const oldPasswordSpan = ref('');
const newPasswordSpan = ref('');
const rePasswordSpan = ref('');
const oldPassword = ref('');

async function passwordMatchCheck(event) {
    oldPassword.value = event.target.value;
    const NewPasswordPettern = new RegExp("(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}");
    if (NewPasswordPettern.test(oldPassword.value)) {
        const response = await MemberAPI.passwordMatchCheck(oldPassword.value);
        if (response.data.result == 'success') {
            oldPasswordSpan.value = '비밀번호가 일치합니다.';
            passwordResult = true;
        } else {
            oldPasswordSpan.value = '비밀번호를 확인해주세요.';
            passwordResult = false;
        }
    } else if (oldPassword.value.length == 0) {
        oldPasswordSpan.value = '비밀번호를 입력해 주세요.';
        passwordResult = false;
    } else if (oldPassword.value.length < 8 || oldPassword.value.length > 15 || !NewPasswordPettern.test(oldPassword.value)) {
        oldPasswordSpan.value = '영문 포함 8자 이상 15자 이하로 입력해 주세요.';
        passwordResult = false;
    }
}

// 비밀번호 유효성 검사
async function changePassword() {
    await MemberAPI.updatePassword(RePassword.value);
    passwordModal.value.hideModal();
    raffleToast.value.showToast("비밀번호 변경이 완료되었습니다.");
}

const passwordCheck = () => {
    const NewPasswordPettern = new RegExp("(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}");
    if (NewPassword.value.length == 0) {
        newPasswordSpan.value = '비밀번호를 입력해 주세요.';
        newPasswordResult = false;
    } else if (NewPassword.value.length < 8 || NewPassword.value.length > 15 || !NewPasswordPettern.test(NewPassword.value)) {
        newPasswordSpan.value = '영문 포함 8자 이상 15자 이하로 입력해 주세요.';
        newPasswordResult = false;
    } else {
        newPasswordSpan.value = '';
        newPasswordResult = true;
    }
}

let RepasswordResult = false;
const passwordReCheck = () => {
    if (RePassword.value !== NewPassword.value) {
        rePasswordSpan.value = '비밀번호가 일치하지 않습니다.';
        RepasswordResult = false;
    } else {
        rePasswordSpan.value = '';
        RepasswordResult = true;
    }
}

const phoneModal = ref(null);
const phoneSpan = ref('');
let phoneResult = false;

// 휴대폰 번호 변경
async function changePhNum() {
    const response = MemberAPI.updateMphone(newMember.value.mphone);
    member.value.mphone = newMember.value.mphone;
    phoneModal.value.hideModal();
    raffleToast.value.showToast("비밀번호 변경이 완료되었습니다.");
}

const PhoneCheck = () => {
    const phonePattern = new RegExp("010\\d{4}\\d{4}");
    if (phonePattern.test(newMember.value.mphone)) {
        phoneSpan.value = '';
        phoneResult = true;
    } else if (newMember.value.mphone == '') {
        phoneSpan.value = '휴대폰 번호를 입력해주세요.';
        phoneResult = false;
    } else {
        phoneSpan.value = '하이픈(-)을 제외한 숫자만 입력해주세요.';
        phoneResult = false;
    }
}

// 주소 변경
const addressModal = ref(null);
const postcodeModal = ref(null);
const postcodeMount = ref(false);

const DaumPostcode = () => {
    postcodeModal.value.showModal();
    postcodeMount.value = true;
}

const addressSearched = (data) => {
    if (data.userSelectedType === 'R') {
        newMember.value.mzipcode = data.zonecode;
        newMember.value.maddress1 = data.address;
        postcodeModal.value.hideModal();

    } else {
        newMember.value.mzipcode = data.zonecode;
        newMember.value.maddress1 = data.jibunAddress;
        postcodeModal.value.hideModal();
    }
}

async function updateMaddress() {
    newMember.value.maddress = newMember.value.maddress1 + ", " + newMember.value.maddress2;
    await MemberAPI.updateMaddress(newMember.value.mzipcode, newMember.value.maddress);
    member.value.mzipcode = newMember.value.mzipcode;
    member.value.maddress = newMember.value.maddress;
    member.value.maddress1 = newMember.value.maddress1;
    member.value.maddress2 = newMember.value.maddress2;
    raffleToast.value.showToast("주소 변경이 완료되었습니다.");
}

// 회원 탈퇴
const Withdrawal = ref(null);
const store = useStore();
const router = useRouter();

async function changeMenabled() {
    await MemberAPI.changeMenabled();
    store.dispatch("deleteAuth");
    router.push("/");
}

function seeModal() {
    passwordModal.value.showModal();
}
function lookModal() {
    phoneModal.value.showModal();
}
function checkhandle() {
    Withdrawal.value.showModal();
}

function addrModal() {
    addressModal.value.showModal();
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
    background-color: #F37551;
    color: white;
    border-radius: 0px;
}

.form_table {
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
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

label {
    padding: 0;
}

.placeColor{
    color: #878787;
}
</style>