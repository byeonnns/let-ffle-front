<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>응모 내역</h3>
            </div>
            <div class="purchase_list_tab mt-2">
                <div class="tab_item total">
                    <a href="#" class="tab_link">
                        <dl class="tab_box m-0">
                            <dt class="title" style="height: 50px;">전체</dt>
                            <dd class="count">{{ myRaffleDetail.totalRaffle }}</dd>
                        </dl>
                    </a>
                </div>
                <div class="tab_item">
                    <a href="#" class="tab_link">
                        <dl class="tab_box m-0">
                            <dt class="title" style="height: 50px;">진행 중</dt>
                            <dd class="count">{{ myRaffleDetail.ongoingRaffle }}</dd>
                        </dl>
                    </a>
                </div>
                <div class="tab_item">
                    <a href="#" class="tab_link">
                        <dl class="tab_box m-0">
                            <dt class="title" style="height: 50px;">종료</dt>
                            <dd class="count">{{ myRaffleDetail.closedRaffle }}</dd>
                        </dl>
                    </a>
                </div>
            </div>

            <hr class="mt-0" />

            <div>
                <SerachPeriod></SerachPeriod>
            </div>

            <hr />

            <div class="mb-2">
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th class="col-5" scope="col">래플명</th>
                            <th class="col-2" scope="col">현재 상태</th>
                            <th class="col-2" scope="col">종료일</th>
                            <th class="col-2" scope="col">응모 시간</th>
                            <th class="col-1" scope="col">상세</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="entryList in myRaffleDetail.RaffleDetailRequest" :key="entryList">
                            <td>{{ entryList.raffle.rtitle }}</td>
                            <td>{{ entryList.nowStatus }}</td>
                            <td>{{ formatDate(entryList.raffle.rfinishedat) }}</td>
                            <td>{{ formatDate(entryList.raffleDetail.rdtcreatedat) }} <br> {{
                                formatTime(entryList.raffleDetail.rdtcreatedat) }}</td>
                            <td>
                                <Popper :placement="'right'">
                                    <button class="btn btn-sm btn-design" @click="popper">상세</button>
                                    <template #content>
                                        <div class="d-flex flex-column bg-white border">
                                            <p class="text-center m-0" style="font-size: 16px;">래플 상세 내역</p>
                                            <div style="font-size: 12px; text-align: center;">
                                                <table class="table table-bordered m-0" style="width:200px">
                                                    <thead>
                                                        <th>미션 완료</th>
                                                        <th>사용 베리</th>
                                                        <th>당첨 확률</th>
                                                    </thead>
                                                    <tr>
                                                        <td>{{ entryList.raffleDetail.rdtmissioncleared }}</td>
                                                        <td>{{ entryList.raffleDetail.rdtberryspend }}개</td>
                                                        <td>{{ entryList.probability }}%</td>
                                                    </tr>
                                                </table>
                                                <button class="btn btn-white btn-sm">
                                                    <RouterLink to="/Member/MyPage/MyBerryHistory">래플로 이동 ▶</RouterLink>
                                                </button>
                                            </div>

                                        </div>
                                    </template>
                                </Popper>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import RaffleAPI from '@/apis/RaffleAPI';
import { ref } from 'vue';
import SerachPeriod from './Components/SearchPeriod.vue';
import Popper from "vue3-popper";


const myRaffleDetail = ref({
    totalRaffle: null,
    ongoingRaffle: null,
    closedRaffle: null,
    RaffleDetailRequest: []
});

async function getMyEntryList() {
    try {
        const response = await RaffleAPI.myEntryList();
        myRaffleDetail.value.totalRaffle = response.data.myTotalRaffle;
        myRaffleDetail.value.ongoingRaffle = response.data.myOngoingRaffle;
        myRaffleDetail.value.closedRaffle = response.data.myClosedRaffle;
        myRaffleDetail.value.RaffleDetailRequest = response.data.RaffleDetailRequest;
    } catch (error) {
        console.log(error);
    }
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

function formatTime(dateStr) {
    const date = new Date(dateStr);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

getMyEntryList();

</script>

<style scoped>
.title h3 {
    font-size: 24px;
}

.purchase_list_tab {
    display: flex;
}

.tab_item {
    flex: 1;
    text-align: center;
}

.tab_link {
    text-decoration: none;
}

.tab_box {
    padding: 10px;
}

.title {
    font-size: 18px;
}

.count {
    font-size: 16px;
}

.month_item {
    display: inline-block;
}

.month_item>.month_link {
    border: 1px solid darkgray;
    margin-right: 5px;
    text-decoration-line: none;
}

.month_link {
    display: inline-block;
    padding: 5px 10px;
    margin-top: 15px;
    font-size: 13px;
}

.btn-design {
    text-wrap: nowrap;
    text-align: center;
    border-radius: 0px;
    background-color: #F37551;
    color: white;
}

.Status {
    display: flex;
}

td {
    align-content: center;
}
</style>