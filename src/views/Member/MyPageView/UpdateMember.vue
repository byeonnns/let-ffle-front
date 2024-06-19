<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <div class="d-flex flex-column ms-5" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                        <h4>회원 정보 수정</h4>
                    </div>
                    <div class="d-flex justify-content-center flex-column align-items-center mt-4">
                        <div class="mb-3" style="width: 50%;">
                            <span style="font-size: 25px;" class="fw-bold mb-3">내 계정</span>
                        </div>
                        <div style="width: 50%;" class="mt-3">
                            <h5 style="font-size: 13px;">이메일주소</h5>
                        </div>
                        <div class="w-50 position-relative">
                            <div style="align-content: end;">
                                <input type="email" placeholder="as***naver.com" class="input w-50">
                            </div>
                            <hr class="p-0 m-0 w-100">

                        </div>

                        <div style="width: 50%;" class="mt-3">
                            <h5 style="font-size: 13px;">닉네임</h5>
                        </div>
                        <div class="w-50 position-relative">
                            <div style="align-content: end;">
                                <input type="email" placeholder="Kosa" class="input w-50">
                            </div>
                            <hr class="p-0 m-0 w-100">ㅋ
                            <button class="btn btn-outline-light btn-sm"
                                style="position: absolute; bottom: 0; right: 0;" @click="NickChModal">변경</button>

                        </div>

                        <div class="mt-4" style="width: 50%;">
                            <h5 style="font-size: 13px;">비밀번호</h5>
                        </div>
                        <div class="w-50 position-relative">
                            <div style="align-content: end;">
                                <input type="password" placeholder="●●●●●●●●" class="input w-50">
                            </div>
                            <hr class="p-0 m-0 w-100">
                            <button class="btn btn-outline-light btn-sm"
                                style="position: absolute; bottom: 0; right: 0;" @click="seeModal">변경</button>
                        </div>
                        <div class="mt-4" style="width: 50%;">
                            <h5 style="font-size: 13px;">휴대폰 번호</h5>
                        </div>
                        <div class="w-50 position-relative">
                            <div style="align-content: end;">
                                <input v-model="changePhone" type="text" placeholder="010-8***-*798" class="input w-50">
                            </div>

                            <hr class="p-0 m-0 w-100">
                            <button class="btn btn-outline-light btn-sm"
                                style="position: absolute; bottom: 0; right: 0;" @click="lookModal">변경</button>
                        </div>
                        <div class="mt-4" style="width: 50%;">
                            <h5 style="font-size: 13px;">주소</h5>
                        </div>
                        <div class="w-50 position-relative">
                            <div style="align-content: end;">
                                <input type="text" placeholder="주소" class="input w-50">
                            </div>
                            <hr class="p-0 m-0 w-100">
                            <button class="btn btn-outline-light btn-sm"
                                style="position: absolute; bottom: 0; right: 0;" @click="addrModal">변경</button>
                        </div>
                        <div class="mt-4" style="width: 50%;">
                            <h5 style="font-size: 13px;">상세 주소</h5>
                        </div>
                        <div class="w-50 position-relative">
                            <div style="align-content: end;">
                                <input type="text" placeholder="상세 주소" class="input w-50">
                            </div>
                            <hr class="p-0 m-0 w-100">
                        </div>
                        <div class="w-50 position-relative">
                            <div class="mt-1 d-flex justify-content-end">
                                <RouterLink to="#"><button type="button" class="btn btn-sm"
                                        style="font-size: 14px; color: black; background-color: white; text-decoration: underline;"
                                        @click="checkhandle">회원탈퇴</button>
                                </RouterLink>
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
                    <label>기존 닉네임</label>
                    <input v-model="mNickChange" type="text" class="input" style="border-bottom: 1px solid #ebebeb">
                    <span>{{ falseNickname }}</span>
                </div>
            </template>

            <template v-slot:modalFooter>
                <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">닫기</button>
                <button type="button" class="btn btn-outline-light" @click="changeNickname">수정 완료</button>
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
                        <input type="password" placeholder="" class="input" style="border-bottom: 1px solid #ebebeb">
                    </div>

                    <div class="div_form row mb-3">
                        <label>새 비밀번호</label>
                        <input type="password" placeholder="" class="input" style="border-bottom: 1px solid #ebebeb">
                    </div>

                    <div class="div_form row">
                        <label>비밀번호 확인</label>
                        <input type="password" placeholder="" class="input" style="border-bottom: 1px solid #ebebeb">
                    </div>
                </div>
            </template>
            <template v-slot:modalFooter>
                <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">닫기</button>
                <button type="button" class="btn btn-outline-light">수정 완료</button>
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
                        <input v-model="changePhoneModal" type="text" placeholder="010-xxxx-xxxx" class="input"
                            style="border-bottom: 1px solid #ebebeb">
                        <span>{{ falsePhone }}</span>
                    </div>
                </div>
            </template>
            <template v-slot:modalFooter>
                <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">닫기</button>
                <button @click="changePhNum" type="button" class="btn btn-outline-light"
                    :data-bs-dismiss="isOk ? 'modal' : ''">수정
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
                        <button class="btn text-white btn-outline-light btn-sm ms-3" @click="DaumPostcode()">우편번호
                            찾기</button>
                    </div>
                    <div class="mt-3">
                        <input v-model="address" type="text" placeholder="주소" class="input w-50">
                        <hr class="p-0 m-0 w-100 mb-4">
                    </div>
                    <input v-model="addressDetail" type="text" placeholder="상세 주소" class="input w-50">
                    <hr class="p-0 m-0 w-100 mb-4">
                </div>
            </template>

            <template v-slot:modalFooter>
                <button class="btn btn-outline-light btn-sm" data-bs-dismiss="modal">완료</button>
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
    const mNickChangePattern = new RegExp("[a-zA-Z0-9가-힣]{2,8}");
    if (mNickChangePattern.test(mNickChange.value)) {
        nick.value = mNickChange.value;
        falseNickname.value = '';
        NickNameModal.value.hideModal();
    } else {
        falseNickname.value = '닉네임 형식에 맞지 않습니다.';
    }

}

const testModel = ref(null);

const PWModal = ref(null);
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
        PWCModal.value.hideModal();

    } else {
        falsePhone.value = '번호 형식에 맞지 않습니다.';
    }
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
.bottom-border {
    border-width: 0 0 1px;
}

.btn {
    margin-bottom: 20px;
    border-radius: 10px;
    font-size: 12px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 10px;
    padding-bottom: 6px;
    text-align: center;
    background-color: #F37551;
    color: white;
    margin-bottom: 0px;
}

.input {
    border-width: 0;
    /* input 라인 없애기 */
    outline: none;
    width: 76%;
}

h5 {
    color: gray;
}

input::placeholder {
    color: gray;
}
</style>