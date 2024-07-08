<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>응모 내역</h3>
            </div>
            <div class="purchase_list_tab mt-2">
                <div class="tab_item total">
                    <button class="btn bg-transparent border-0 text-body" @click="changePageOption(1, 'Total')">
                        <dl class="tab_box m-0">
                            <dt class="title" style="height: 50px;">전체</dt>
                            <dd class="count">{{ myRaffleDetail.totalRaffle }}</dd>
                        </dl>
                    </button>
                </div>
                <div class="tab_item">
                    <button class="btn bg-transparent border-0 text-body" @click="changePageOption(1, 'Ongoing')">
                        <dl class="tab_box m-0">
                            <dt class="title" style="height: 50px;">진행 중</dt>
                            <dd class="count">{{ myRaffleDetail.ongoingRaffle }}</dd>
                        </dl>
                    </button>
                </div>
                <div class="tab_item">
                    <button class="btn bg-transparent border-0 text-body" @click="changePageOption(1, 'Closed')">
                        <dl class="tab_box m-0">
                            <dt class="title" style="height: 50px;">종료</dt>
                            <dd class="count">{{ myRaffleDetail.closedRaffle }}</dd>
                        </dl>
                    </button>
                </div>
            </div>

            <hr class="mt-0" />

            <div>
                <SearchPeriod ref="searchPeriod" @searchList="changeSearchPeriod()">
                </SearchPeriod>
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
                        <tr v-if="myRaffleDetail.RaffleDetailRequest.length === 0">
                            <td colspan="5" class="non-center">
                                <h4>응모한 내역이 없습니다.</h4>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div v-if="myRaffleDetail.pager.totalPageNo > 0" class=" d-flex justify-content-center ">
                    <button @click=" changePageOption(1, status)"
                        class="btn btn-outline-light btn-sm me-1 btn-design ">처음</button>
                    <button v-if="myRaffleDetail.pager.groupNo > 1"
                        @click="changePageOption(myRaffleDetail.pager.startPageNo - 1, status)"
                        class="btn btn-outline-light btn-sm me-1 btn-design">이전</button>
                    <button v-for="pageNo in myRaffleDetail.pager.pageArray" :key="pageNo"
                        @click="changePageOption(pageNo, status)"
                        :class="(myRaffleDetail.pager.pageNo == pageNo) ? 'btn-outline-light btn-design' : 'btn-outline-light btn-design'"
                        class="btn btn-sm me-1 btn-design">{{ pageNo }}</button>
                    <button v-if="myRaffleDetail.pager.groupNo < myRaffleDetail.pager.totalGroupNo"
                        @click="changePageOption(myRaffleDetail.pager.endPageNo + 1, status)"
                        class="btn btn-outline-light btn-sm me-1 btn-design">다음</button>
                    <button @click="changePageOption(myRaffleDetail.pager.totalPageNo, status)"
                        class="btn btn-outline-light btn-sm btn-design">맨끝</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import RaffleAPI from '@/apis/RaffleAPI';
import { ref, watch } from 'vue';
import SearchPeriod from './Components/SearchPeriod.vue';
import Popper from "vue3-popper";
import { useRoute, useRouter } from 'vue-router';

const myRaffleDetail = ref({
    totalRaffle: null,
    ongoingRaffle: null,
    closedRaffle: null,
    RaffleDetailRequest: [],
    pager: {}
});

const searchPeriod = ref(null);

const router = useRouter();
const route = useRoute();
const pageNo = ref(route.query.pageNo || 1);
const status = ref(route.query.status || 'Total');
const startDate = ref(route.query.start || null);
const endDate = ref(route.query.end || null);

async function getMyEntryList(pageNo, status, startDate, endDate) {
    try {
        const response = await RaffleAPI.myEntryList(pageNo, status, startDate, endDate);
        myRaffleDetail.value.totalRaffle = response.data.myTotalRaffle;
        myRaffleDetail.value.ongoingRaffle = response.data.myOngoingRaffle;
        myRaffleDetail.value.closedRaffle = response.data.myClosedRaffle;
        myRaffleDetail.value.RaffleDetailRequest = response.data.RaffleDetailRequest;
        myRaffleDetail.value.pager = response.data.pager;
    } catch (error) {
        console.log(error);
    }
}

function changePageOption(pageNo, status) {
    router.push(`/Member/MyPage/MyEntryList?pageNo=${pageNo}&status=${status}&start=${startDate.value}&end=${endDate.value}`);
}

function changeSearchPeriod(){
    startDate.value = searchPeriod.value.getStartDate();
    endDate.value = searchPeriod.value.getEndDate();
    changePageOption(1, status.value);
}

watch(route, (newRoute, oldRoute) => {
    if (newRoute.query.pageNo || newRoute.query.status || newRoute.query.start || newRoute.query.end) {
        getMyEntryList(newRoute.query.pageNo, newRoute.query.status, newRoute.query.start, newRoute.query.end);
        pageNo.value = newRoute.query.pageNo;
        status.value = newRoute.query.status;
    } else {
        getMyEntryList(1);
        pageNo.value = 1;
        status.value = "Total";
    }
});

getMyEntryList(pageNo.value, status.value, startDate.value, endDate.value);

/* 시간 출력 포맷 */
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