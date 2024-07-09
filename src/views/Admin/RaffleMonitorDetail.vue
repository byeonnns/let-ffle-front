<template>
    <div>
        <div class="d-flex flex-column">
            <hr class="border-3 opacity-100 m-0" style="border-color: #F37551;" />
            <div class="my-3 text-center">
                <h3>{{ monitor.raffle.rtitle }}</h3>
                <h6 class="mb-0 text-secondary">{{ monitor.raffle.rsubtitle }}</h6>
            </div>
            <hr class="border-3 opacity-100 m-0" style="border-color: #F37551;" />
            <table class="table text-center table-borderless my-2">
                <thead>
                    <tr class="h5">
                        <th class="col-1" scope="col">번호</th>
                        <th class="col-2" scope="col">생성일</th>
                        <th class="col-2" scope="col">시작일</th>
                        <th class="col-2" scope="col">종료일</th>
                        <th class="col-1" scope="col">미션 타입</th>
                        <th class="col-1" scope="col">당첨 인원</th>
                        <th class="col-1" scope="col">현재 상태</th>
                        <th class="col-1" scope="col">참여 인원</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ monitor.raffle.rno }}</td>
                        <td>{{ formatDate(monitor.raffle.rcreatedat) }}<br>{{ formatTime(monitor.raffle.rcreatedat) }}
                        </td>
                        <td>{{ formatDate(monitor.raffle.rstartedat) }}<br>{{ formatTime(monitor.raffle.rstartedat) }}
                        </td>
                        <td>{{ formatDate(monitor.raffle.rfinishedat) }}<br>{{ formatTime(monitor.raffle.rfinishedat) }}
                        </td>
                        <td>{{ monitor.raffle.rmissiontype }}</td>
                        <td>{{ monitor.raffle.rwinnercount }}</td>
                        <td>{{ status }}</td>
                        <td>{{ monitor.raffleProcess }}</td>
                    </tr>
                </tbody>
            </table>
            <hr class="border-3 opacity-100 mt-0" style="border-color: #F37551;" />
            <div v-if="member.list.length !== 0">
                <h4 class="text-center">참여자 리스트</h4>
                <table class="table text-center">
                    <thead>
                        <tr>
                            <th class="col-3" scope="col">이메일</th>
                            <th class="col-2" scope="col">이름</th>
                            <th class="col-2" scope="col">응모 날짜</th>
                            <th class="col-2" scope="col">응모 시간</th>
                            <th class="col-1" scope="col">미션 완료</th>
                            <th class="col-1" scope="col">사용 베리</th>
                            <th class="col-1" scope="col">당첨 확률</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="member in member.list" :key="member.rno">
                            <td>{{ member.raffleDetail.mid }}</td>
                            <td>{{ member.nowStatus }}</td>
                            <td>{{ formatDate(member.raffleDetail.rdtcreatedat) }}</td>
                            <td>{{ formatTime(member.raffleDetail.rdtcreatedat) }}</td>
                            <td>{{ member.raffleDetail.rdtmissioncleared }}</td>
                            <td>{{ member.raffleDetail.rdtberryspend }}</td>
                            <td>{{ member.probability }}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else class="text-center my-4">
                <h1>참여자 모집중...</h1>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-grow-1 justify-content-center">
                    <div class="text-center" v-if="member.pager.totalPageNo > 1">
                        <button @click="changePage(1, winnerPage)" class="btn btn-outline-light btn-sm me-1">처음</button>
                        <button v-if="member.pager.groupNo > 1"
                            @click="changePage(member.pager.startPageNo - 1, winnerPage)"
                            class="btn btn-outline-light btn-sm me-1">이전</button>
                        <button v-for="pageNo in member.pager.pageArray" :key="pageNo"
                            @click="changePage(pageNo, winnerPage)"
                            :class="(member.pager.pageNo == memberPage) ? 'btn-danger' : 'btn-outline-light'"
                            class="btn btn-outline-light btn-sm me-1">{{ pageNo }}</button>
                        <button v-if="member.pager.groupNo < member.pager.totalGroupNo"
                            @click="changePage(member.pager.endPageNo + 1, winnerPage)"
                            class="btn btn-outline-light btn-sm me-1">다음</button>
                        <button @click="changePage(member.pager.totalPageNo, winnerPage)"
                            class="btn btn-outline-light btn-sm">맨끝</button>
                    </div>
                </div>
            </div>
            <hr class="border-3 opacity-100" style="border-color: #F37551;" />
            <div class="d-flex justify-content-around mt-3">
                <div class="col-8 d-flex justify-content-center align-items-center">
                    <div v-if="status === '마감'" class="flex-grow-1 text-center">
                        <h4 class="mb-4">당첨자 리스트</h4>
                        <table class="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">이메일</th>
                                    <th scope="col">이름</th>
                                    <th scope="col">배송 정보</th>
                                    <th scope="col">배송 상태</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="winner in winner.list" :key="winner.rno">
                                    <td>{{ winner.mid }}</td>
                                    <td>{{ winner.rtitle }}</td>
                                    <td v-if="winner.wrecivername != null"><button
                                            class="btn btn-sm rounded-0">확인</button>
                                    </td>
                                    <td v-else><button class="btn btn-sm rounded-0" disabled>미입력</button></td>
                                    <td v-if="winner.wrecivername != null">배송 대기</td>
                                    <td v-else>미발송</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-grow-1 justify-content-center">
                                <div class="text-center" v-if="winner.pager.totalPageNo > 1">
                                    <button @click="changePage(memberPage, 1)"
                                        class="btn btn-outline-light btn-sm me-1">처음</button>
                                    <button v-if="winner.pager.groupNo > 1"
                                        @click="changePage(memberPage, winner.pager.startPageNo - 1)"
                                        class="btn btn-outline-light btn-sm me-1">이전</button>
                                    <button v-for="pageNo in winner.pager.pageArray" :key="pageNo"
                                        @click="changePage(memberPage, pageNo)"
                                        :class="(winner.pager.pageNo == pageNo) ? 'btn-danger' : 'btn-outline-light'"
                                        class="btn btn-outline-light btn-sm me-1">{{ pageNo }}</button>
                                    <button v-if="winner.pager.groupNo < winner.pager.totalGroupNo"
                                        @click="changePage(memberPage, winner.pager.endPageNo + 1)"
                                        class="btn btn-outline-light btn-sm me-1">다음</button>
                                    <button @click="changePage(memberPage, winner.pager.totalPageNo)"
                                        class="btn btn-outline-light btn-sm">맨끝</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="text-center">
                        <div>
                            <h3 class="mb-5">남은 시간</h3>
                            <div class="d-flex justify-content-center">
                                <h1 class="dayCount">{{ remainTime.days }}</h1>
                                <h1 class="mx-4">:</h1>
                                <h1 class="hourCount">{{ remainTime.hours }}</h1>
                                <h1 class="mx-4">:</h1>
                                <h1 class="minutesCount">{{ remainTime.minutes }}</h1>
                                <h1 class="mx-4">:</h1>
                                <h1 class="secondsCount">{{ remainTime.seconds }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 d-flex text-center align-items-center justify-content-center">
                    <div>
                        <h5>지급 상품</h5>
                        <div>
                            <img v-if="giftImage != null" :src="giftImage" style="width:200px;" />
                            <p class="card-text mt-2">{{ monitor.raffle.rgift }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="border-3 opacity-100 mt-4" style="border-color: #F37551;" />
            <button class="btn mb-5 rounded-0">{{ rno }}래플 바로가기</button>
        </div>
    </div>
</template>

<script setup>
import RaffleAPI from '@/apis/RaffleAPI';
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore();
const status = ref(null);

const rno = ref(route.query.rno);
const memberPage = ref(route.query.mPage || 1);
const winnerPage = ref(route.query.wPage || 1);
const giftImage = ref(null);

const winner = ref({
    list: [],
    pager: {}
});

const member = ref({
    list: [],
    pager: {}
});

const monitor = ref({
    raffle: {},
    raffleProcess: null
});

const remainTime = computed(() => {
    const nowTime = store.getters['clientTime/getTimeForCalculate'];
    const diffMilliseconds = new Date(monitor.value.raffle.rfinishedat).getTime() - nowTime;
    nowStatus(new Date(monitor.value.raffle.rstartedat).getTime(), new Date(monitor.value.raffle.rfinishedat).getTime());
    console.log(status.value);
    if (diffMilliseconds < 0) {
        const remain = {
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00"
        }
        return remain;
    } else {
        const seconds = Math.floor(diffMilliseconds / 1000) % 60;
        const minutes = Math.floor(diffMilliseconds / (1000 * 60)) % 60;
        const hours = Math.floor(diffMilliseconds / (1000 * 60 * 60)) % 24;
        const days = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
        const remain = {
            days: days.toString().padStart(2, '0'),
            hours: hours.toString().padStart(2, '0'),
            minutes: minutes.toString().padStart(2, '0'),
            seconds: seconds.toString().padStart(2, '0')
        }
        return remain;
    }
});

async function getRaffleMonitor(rno) {
    const response = await RaffleAPI.getRaffleMonitor(rno);
    try {
        monitor.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

async function getMemberList(rno, pageNo) {
    try {
        const response = await RaffleAPI.getMonitorMemberList(rno, pageNo);
        member.value.list = response.data.member;
        member.value.pager = response.data.pager;
    } catch (error) {
        console.log(error);
    }
}

async function getWinnerList(rno, pageNo) {
    try {
        const response = await RaffleAPI.getMonitorWinnerList(rno, pageNo);
        winner.value.list = response.data.winner;
        winner.value.pager = response.data.pager;
    } catch (error) {
        console.log(error);
    }
}

async function getGiftImage(rno) {
    try {
        const response = await RaffleAPI.raffleGiftAttachDownload(rno);
        const blob = response.data;
        giftImage.value = URL.createObjectURL(blob);
    } catch (error) {
        console.log(error);
    }
}

const nowStatus = (start, end) => {
    const date = Date.now();
    if (date < start) {
        status.value = "대기 중";
    } else if (start < date && date < end) {
        status.value = "진행 중";
    } else if (end < date) {
        status.value = "마감";
    }
}

function changePage(mPage, wPage) {
    router.push(`/Admin/RaffleMonitorDetail?rno=${rno.value}&mPage=${mPage}&wPage=${wPage}`)
}


getMemberList(rno.value, memberPage.value);
getWinnerList(rno.value, winnerPage.value);
getRaffleMonitor(rno.value);
getGiftImage(rno.value);

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

watch(route, (newRoute, oldRoute) => {
    if (newRoute.query.wPage) {
        getWinnerList(rno.value, newRoute.query.wPage)
        winnerPage.value = newRoute.query.wPage;
    } else {
        getWinnerList(rno.value, 1);
        winnerPage.value = 1;
    }
    if (newRoute.query.mPage) {
        getMemberList(rno.value, newRoute.query.mPage)
        memberPage.value = newRoute.query.mPage;
    } else {
        getMemberList(rno.value, 1);
        memberPage.value = 1;
    }
});
</script>

<style scoped>
td {
    align-content: center;
}

.btn {
    background-color: #F37551;
    color: white;
}

h4 {
    align-content: center;
    margin-bottom: 0px;
}

.dayCount::after {
    font-size: 16px;
    content: "DAYS";
    display: block;
    text-align: center;
}

.hourCount::after {
    font-size: 16px;
    content: "HOURS";
    color: black;
    display: block;
    text-align: center;
}

.minutesCount::after {
    font-size: 16px;
    content: "MINUTES";
    color: black;
    display: block;
    text-align: center;
}

.secondsCount::after {
    font-size: 16px;
    content: "SECONDS";
    color: black;
    display: block;
    text-align: center;
}
</style>