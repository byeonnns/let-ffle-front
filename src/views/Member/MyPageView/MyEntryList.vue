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
                            <th class="col-2" scope="col">래플명</th>
                            <th class="col-2" scope="col">응모 시간</th>
                            <th class="col-2" scope="col">현재 상태</th>
                            <th class="col-2" scope="col">미션 완료</th>
                            <th class="col-2" scope="col">사용 베리</th>
                            <th class="col-2" scope="col">확률</th>
                            <th class="col-2" scope="col">이동</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="entryList in myRaffleDetail.RaffleDetailRequest" :key="entryList">
                            <td>{{ entryList.raffle.rtitle }}</td>
                            <td>{{ formatDate(entryList.raffleDetail.rdtcreatedat) }}</td>
                            <td>{{ entryList.nowStatus }}</td>
                            <td>{{ entryList.raffleDetail.rdtmissioncleared }}</td>
                            <td>{{ entryList.raffleDetail.rdtberryspend }}개</td>
                            <td>{{ entryList.probability }}%</td>
                            <td><button class="btn btn-sm">바로가기</button></td>
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
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
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

.btn {
    width: 100px;
    height: 40px;
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