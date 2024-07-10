<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>당첨 내역</h3>
            </div>
            <div>
                <SearchPeriod ref="searchPeriod" @searchList="changeSearchPeriod" class="mt-5 mb-5">
                </SearchPeriod>
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th class="col-5">래플 이름</th>
                            <th class="col-2">당첨 일자</th>
                            <th class="col-3">상품</th>
                            <th class="col-2">배송 상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="win in winningList.list" :key="win.rno">
                            <td> {{ win.rtitle }}</td>
                            <td> {{ formatDate(win.rfinishedat) }}</td>
                            <td> {{ win.rgift }}</td>
                            <td v-if="win.rcontent == null"><button class="btn btn-outline-light btn-sm"
                                    @click="inputAddress(win.rno)"
                                    style="text-wrap: nowrap; text-align: center; border-radius: 0px; background-color: #F37551; color: white;">배송지
                                    입력</button>
                            </td>
                            <td v-if="win.rcontent != null">상품 준비중</td>
                        </tr>
                        <tr v-if="winningList.list.length === 0">
                            <td colspan="5" class="non-center">
                                <h4>당첨 내역이 없습니다.</h4>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div v-if="winningList.pager.totalPageNo > 0" class="d-flex justify-content-center">
                    <button @click="changePageOption(1)" class="btn pagerbtn">처음</button>
                    <button v-if="winningList.pager.groupNo > 1"
                        @click="changePageOption(winningList.pager.startPageNo - 1)"
                        class="btn pagerbtn">이전</button>
                    <button v-for="pageNo in winningList.pager.pageArray" :key="pageNo"
                        @click="changePageOption(pageNo)"
                        :class="(winningList.pager.pageNo == pageNo) ? 'thisPage' : ''"
                        class="btn pagerbtn">{{ pageNo }}</button>
                    <button v-if="winningList.pager.groupNo < winningList.pager.totalGroupNo"
                        @click="changePageOption(winningList.pager.endPageNo + 1)"
                        class="btn pagerbtn">다음</button>
                    <button @click="changePageOption(winningList.pager.totalPageNo)"
                        class="btn pagerbtn">맨끝</button>
                </div>
            </div>
        </div>
        <Modal ref="inputModal">
            <template v-slot:modalHeader>
                <div class="d-flex w-100">
                    <h4 class="m-0">배송지 입력</h4>
                    <button class="ms-auto btn btn-outline-light btn-sm"
                        style="text-align: center; border-radius: 0px; background-color: #F37551; color: white;"
                        @click="getAccountAddress()">내 주소 가져오기</button>
                </div>
            </template>
            <template v-slot:modalBody>
                <form id="receive" class="container" @submit.prevent="handleSubmit">
                    <div class="div_form row mb-3">
                        <label style="font-size: 14px">이름</label>
                        <input type="text" class="input" style="border-bottom: 1px solid #ebebeb"
                            v-model="wreceivername">
                    </div>
                    <div class="div_form row mb-3">
                        <label style="font-size: 14px">전화번호</label>
                        <input type="text" class="input"
                            style="border-bottom: 1px solid #ebebeb" v-model="wreceiverphone">
                    </div>
                    <div class="div_form row">
                        <label style="font-size: 14px">주소</label>
                        <input type="text" class="input" style="border-bottom: 1px solid #ebebeb"
                            v-model="wreceiveraddress">
                    </div>
                </form>
            </template>
            <template v-slot:modalFooter>
                <button class="btn btn-sm btn-outline-dark" data-bs-dismiss="modal" form="receive">완료</button>
                <button class="btn btn-sm btn-dark" data-bs-dismiss="modal">닫기</button>
            </template>
        </Modal>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import SearchPeriod from './Components/SearchPeriod.vue';
import Modal from '@/components/Modal.vue';
import RaffleAPI from "@/apis/RaffleAPI";
import { useRoute, useRouter } from 'vue-router';
import MemberAPI from '@/apis/MemberAPI';

const router = useRouter();
const route = useRoute();
const inputModal = ref(null);
const searchPeriod = ref(null);
const pageNo = ref(route.query.pageNo || 1);
const startDate = ref(route.query.start || null);
const endDate = ref(route.query.end || null);
const wreceivername = ref(null);
const wreceiverphone = ref(null);
const wreceiveraddress = ref(null);
const targetRno = ref(null);

function inputAddress(rno) {
    targetRno.value = rno;
    inputModal.value.showModal();
}

const winningList = ref({
    list: [],
    pager: {}
});

async function winnerList(pageNo, startDate, endDate) {
    try {
        const response = await RaffleAPI.myWinnerList(pageNo, startDate, endDate);
        winningList.value.list = response.data.list;
        winningList.value.pager = response.data.pager;
    } catch (error) {
        console.log(error);
    }
}

function changePageOption(pageNo) {
    router.push(`/Member/MyPage/WinningList?pageNo=${pageNo}&start=${startDate.value}&end=${endDate.value}`);
}

function changeSearchPeriod() {
    startDate.value = searchPeriod.value.getStartDate();
    endDate.value = searchPeriod.value.getEndDate();
    changePageOption(1);
}

async function getAccountAddress() {
    try {
        const response = await MemberAPI.myAddress();
        wreceivername.value = response.data.mname;
        wreceiverphone.value = response.data.mphone;
        wreceiveraddress.value = response.data.maddress;
    } catch (error) {
        console.log(error);
    }
}
winnerList(pageNo.value, startDate.value, endDate.value);

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("rno", targetRno.value);
    formData.append("wreceivername", wreceivername.value);
    formData.append("wreceiveraddress", wreceiveraddress.value);
    formData.append("wreceiverphone", wreceiverphone.value);
    try {
        await MemberAPI.updateWinner(formData);
        wreceivername.value = null;
        wreceiverphone.value = null;
        wreceiveraddress.value = null;
        winnerList(pageNo.value, startDate.value, endDate.value);
    } catch (error) {
        console.log(error)
    }
}

watch(route, (newRoute, oldRoute) => {
    if (newRoute.query.pageNo || newRoute.query.start || newRoute.query.end) {
        winnerList(newRoute.query.pageNo, newRoute.query.start, newRoute.query.end);
        pageNo.value = newRoute.query.pageNo;
    } else {
        winnerList(1);
        pageNo.value = 1;
    }
});
</script>

<style scoped>
.input {
    border-width: 0;
    outline: none;
}

td {
    align-content: center;
}

.pagerbtn {
    color: black;
    margin-left: 7px;
    border: none;
    background-color: white;
}

.thisPage {
    color: #F37551;
}

/* 작성된 게시글이 없을때 나오게끔 처리 */
.non-center {
    text-align: center;
    width: 100%;
    /* colspan 속성을 고려하여 전체 너비 설정 */
    height: 300px;
    /* 높이를 100px로 설정 (필요에 따라 조정 가능) */
    vertical-align: middle;
    /* 텍스트를 수직으로 가운데 정렬 */

}
</style>