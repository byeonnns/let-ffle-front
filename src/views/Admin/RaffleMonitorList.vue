<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>래플 모니터</h3>
            </div>
            <div class="d-flex justify-content-end mt-4 mb-3">
                <div class="input-group input-group-sm w-auto">
                    <div class="me-3">
                        래플 이름 :
                    </div>
                    <input type="text" class="form-control" v-model="searchWord"
                        @keyup.enter="getRaffleList(1, searchWord)">
                    <button class="btn btn-sm text-white" @click="getRaffleList(1, searchWord)"
                        style="background-color: #F37551;">검색</button>
                </div>
            </div>
            <table class="table text-center">
                <thead>
                    <tr>
                        <th class="col-1" scope="col">번호</th>
                        <th class="col-4" scope="col">래플 이름</th>
                        <th class="col-2" scope="col">개시일</th>
                        <th class="col-2" scope="col">마감일</th>
                        <th class="col-1" scope="col">상태</th>
                        <th class="col-2" scope="col">관리</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="raffle in page.raffles" :key="raffle.rno">
                        <td>
                            {{ raffle.rno }}
                        </td>
                        <td>
                            <RouterLink :to="`/raffle/raffleDetail?rno=${raffle.rno}`">{{ raffle.rtitle }}</RouterLink>
                        </td>
                        <td>
                            {{ formatDate(raffle.rstartedat) }}
                            <br>
                            {{ formatTime(raffle.rstartedat) }}
                        </td>
                        <td>
                            {{ formatDate(raffle.rfinishedat) }}
                            <br>
                            {{ formatTime(raffle.rfinishedat) }}
                        </td>
                        <td v-if="serverTime > new Date(raffle.rfinishedat)">마감</td>
                        <td v-if="serverTime < new Date(raffle.rstartedat)">진행 예정</td>
                        <td
                            v-if="serverTime <= new Date(raffle.rfinishedat) && new Date(raffle.rstartedat) <= serverTime">
                            진행 중</td>
                        <td>
                            <RouterLink :to="`/Admin/RaffleMonitorDetail?rno=${raffle.rno}`"><button
                                    class="btn btn-sm text-white rounded-0"
                                    style="background-color: #F37551;">모니터링</button>
                            </RouterLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="text-center" v-if="page.raffles.length > 0">
            <button @click="changePageNo(1)" class="btn pagerbtn">처음</button>
            <button v-if="page.pager.groupNo > 1" @click="changePageNo(page.pager.startPageNo - 1)"
                class="btn pagerbtn">이전</button>
            <button v-for="pageNo in page.pager.pageArray" :key="pageNo" @click="changePageNo(pageNo)"
                :class="(page.pager.pageNo == pageNo) ? 'thisPage' : ''" class="btn pagerbtn">{{ pageNo }}</button>
            <button v-if="page.pager.groupNo < page.pager.totalGroupNo" @click="changePageNo(page.pager.endPageNo + 1)"
                class="btn pagerbtn">다음</button>
            <button @click="changePageNo(page.pager.totalPageNo)" class="btn pagerbtn">맨끝</button>
        </div>
    </div>
    <div class="d-flex justify-content-center align-items-center" style="height: 100%; font-size: 20px;"
        v-if="page.raffles === 0">
        <span>래플 내역이 없습니다.</span>
    </div>
</template>

<script setup>
import RaffleAPI from '@/apis/RaffleAPI';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue';
const router = useRouter();
const route = useRoute();

const searchWord = ref(null);
const store = useStore();
const serverTime = computed(() => {
    const diffMilliseconds = store.getters['clientTime/getTimeForCalculate'];
    return new Date(diffMilliseconds);
});

const pageNo = ref(route.query.pageNo || 1);

const page = ref({
    raffles: [],
    pager: {}
});

async function getRaffleMonitorList(pageNo) {
    try {
        const response = await RaffleAPI.getAdminRaffleList(pageNo);
        page.value.raffles = response.data.Raffle;
        page.value.pager = response.data.pager;
    } catch (error) {
        console.log(error);
    }
}
getRaffleMonitorList(pageNo.value);

async function getRaffleList(pageNo, word = '') {
    try {
        const response = await RaffleAPI.getAdminRaffleList(pageNo, word);

        page.value.raffles = response.data.Raffle;
        page.value.pager = response.data.pager;
    } catch (error) {
        console.log(error);
    }
}

function changePageNo(argPageNo) {
    router.push(`/Admin/RaffleMonitorList?pageNo=${argPageNo}`);
}

watch(
    route, (newRoute, oldRoute) => {
        if (newRoute.query.pageNo) {
            getRaffleMonitorList(newRoute.query.pageNo);
            pageNo.value = newRoute.query.pageNo;
        } else {
            getRaffleMonitorList(1);
            pageNo.value = 1;
        }
    }
);

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
</style>