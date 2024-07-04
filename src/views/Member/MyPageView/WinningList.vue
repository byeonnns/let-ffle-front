<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>당첨 내역</h3>
            </div>
            <div>
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th class="col-6">래플 이름</th>
                            <th class="col-2">당첨 일자</th>
                            <th class="col-3">상품</th>
                            <th class="col-1">배송 상태</th>
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
                            <td v-if="win.rcontent != null">배송 중</td>
                        </tr>
                    </tbody>
                </table>

                <div class="d-flex justify-content-center">
                    <button @click="changePageOption(1)" class="btn btn-outline-primary btn-sm me-1">처음</button>
                    <button v-if="winningList.pager.groupNo > 1"
                        @click="changePageOption(winningList.pager.startPageNo - 1)"
                        class="btn btn-outline-info btn-sm me-1">이전</button>
                    <button v-for="pageNo in winningList.pager.pageArray" :key="pageNo"
                        @click="changePageOption(pageNo)"
                        :class="(winningList.pager.pageNo == pageNo) ? 'btn-danger' : 'btn-outline-success'"
                        class="btn btn-sm me-1">{{ pageNo }}</button>
                    <button v-if="winningList.pager.groupNo < winningList.pager.totalGroupNo"
                        @click="changePageOption(winningList.pager.endPageNo + 1)"
                        class="btn btn-outline-info btn-sm me-1">다음</button>
                    <button @click="changePageOption(winningList.pager.totalPageNo)"
                        class="btn btn-outline-primary btn-sm">맨끝</button>
                </div>
                <SearchPeriod ref="searchPeriod" @searchList="changeSearchPeriod()" class="mt-2">
                </SearchPeriod>
            </div>
        </div>

        <RaffleModal ref="inputModal">
            <template v-slot:modalHeader>
                <div class="d-flex w-100">
                    <h4 class="m-0">배송지 입력</h4>
                    <button class="ms-auto btn btn-outline-light btn-sm"
                        style="text-align: center; border-radius: 0px; background-color: #F37551; color: white;" @click="getAccountAddress()">내 주소 가져오기</button>
                </div>
            </template>
            <template v-slot:modalBody>
                <form id="receive" class="container" @submit.prevent="handleSubmit">
                    <div class="div_form row mb-3">
                        <label style="font-size: 14px">이름</label>
                        <input type="text" placeholder="신우호" class="input" style="border-bottom: 1px solid #ebebeb"
                            v-model="wreceivername">
                    </div>

                    <div class="div_form row mb-3">
                        <label style="font-size: 14px">전화번호</label>
                        <input type="text" placeholder="010-1234-5678" class="input"
                            style="border-bottom: 1px solid #ebebeb" v-model="wreceiverphone">
                    </div>

                    <div class="div_form row">
                        <label style="font-size: 14px">주소</label>
                        <input type="text" placeholder="송파구 IT타워" class="input" style="border-bottom: 1px solid #ebebeb"
                            v-model="wreceiveraddress">
                    </div>
                </form>
            </template>
            <template v-slot:modalFooter>
                <button class="btn btn-sm btn-outline-dark" data-bs-dismiss="modal" form="receive">완료</button>
                <button class="btn btn-sm btn-dark" data-bs-dismiss="modal">닫기</button>
            </template>
        </RaffleModal>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import SearchPeriod from './Components/SearchPeriod.vue';
import RaffleModal from '@/components/RaffleModal.vue';
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
        const response = await MemberAPI.updateWinner(formData);
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
    /* input 라인 없애기 */
    outline: none;
}

td {
    align-content: center;
}
</style>