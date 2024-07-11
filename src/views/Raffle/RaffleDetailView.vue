<template>
    <div>
        <GiftLottie ref="lottie" class="pe-none" />
        <div v-if="raffleRequest.raffle" class="container">
            <div class="row">
                <div class="col-6">
                    <div class="position-relative">
                        <img :src="`${axios.defaults.baseURL}/raffle/raffleGiftAttach/${rno}`" class="w-100">
                        <div v-if="raffleDetail.raffleStatus === '당첨 발표' || raffleDetail.raffleStatus === '미참여 래플 종료'"
                            class="position-absolute bg-white bg-opacity-75 w-100 h-100 top-0 start-0 text-center align-content-center"
                            style="font-size: 100px;"><span class="text-dark fw-bold">CUT - OFF</span></div>
                    </div>
                    <img :src="`${axios.defaults.baseURL}/raffle/raffleDetailAttach/${rno}`" class="w-100">
                </div>
                <div class="col-6 d-flex flex-column position-sticky h-100" style="top:142px">
                    <p class="text-secondary">Raffle > {{ raffleRequest.raffle.rcategory }}</p>
                    <div class="d-flex justify-content-between">
                        <h1 class="align-content-center"> {{ raffleRequest.raffle.rtitle }} </h1>
                        <div @click="likeIt">
                            <Vue3Lottie :animationData="HeartLottie" :loop="1" :noMargin="true"
                                @on-animation-loaded="likeCheck" ref="likeAnimation" :autoPlay="false"
                                style="width:100px; height:100px" />
                        </div>
                    </div>
                    <h5>{{ dateFormat(raffleRequest.raffle.rstartedat) }} 부터</h5>
                    <h5>{{ dateFormat(raffleRequest.raffle.rfinishedat) }} 까지</h5>
                    <div class="d-flex text-center">
                        <h1 class="dayCount">{{ serverTime.days }}</h1>
                        <h1 class="mx-4">:</h1>
                        <h1 class="hourCount">{{ serverTime.hours }}</h1>
                        <h1 class="mx-4">:</h1>
                        <h1 class="minutesCount">{{ serverTime.minutes }}</h1>
                        <h1 class="mx-4">:</h1>
                        <h1 class="secondsCount">{{ serverTime.seconds }}</h1>
                    </div>
                    <div class="d-flex flex-column border mt-5">
                        <div class="d-flex">
                            <button class="btn flex-grow-1"
                                :class="raffleDetail.raffleStatus === '래플 미참여' ? '' : 'disabled'">1.
                                응모하기</button>

                            <button class="btn flex-grow-1" :class="raffleDetail.raffleStatus === '미션 대기' || raffleDetail.raffleStatus === '미션 성공' ||
                                raffleDetail.raffleStatus === '미션 실패' ? '' : 'disabled'" @click="tab = '미션 참여'">2.
                                미션참여</button>

                            <button class="btn flex-grow-1" :class="raffleDetail.raffleStatus === '미션 대기' || raffleDetail.raffleStatus === '미션 성공' ||
                                raffleDetail.raffleStatus === '미션 실패' ? '' : 'disabled'" @click="tab = '베리 사용'">3.
                                베리사용</button>

                            <button class="btn flex-grow-1"
                                :class="raffleDetail.raffleStatus === '당첨 발표' || raffleDetail.raffleStatus === '미참여 래플 종료' ? '' : 'disabled'">4.
                                당첨확인</button>
                        </div>
                        <div class="p-3 text-center" v-if="raffleDetail.raffleStatus === '래플 미참여'">
                            <p class="h6 text-start">
                                하단의 응모하기 버튼을 클릭하시면 응모가 완료됩니다. <br />
                                응모 전 반드시 아래 주의사항을 읽어주세요. <br /> <br />

                                ※ 응모 주의사항 <br />
                                • 응모한 이후에는 취소할 수 없습니다. <br />
                                • 응모는 일일 최대 3회까지만 가능합니다. <br />
                                • 미션 참여 및 베리 사용은 응모 마감 전까지만 가능합니다.
                            </p>
                            <button class="btn mt-4 w-100" @click="apply(rno)">응모하기</button>
                        </div>

                        <div class="p-3 text-start"
                            v-if="raffleDetail.raffleStatus === '미션 대기' && raffleRequest.raffle.rmissiontype === 'quiz' && tab == '미션 참여'">
                            <h4>Quiz</h4>
                            <p>{{ raffleRequest.quizMission.qcontent }}</p>
                            <form @submit.prevent="updateRdtMissionCleared(rno)">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" id="opt1" name="manswer"
                                        v-model="manswer" :value="raffleRequest.quizMission.qoption1">
                                    <label for="opt1">{{ raffleRequest.quizMission.qoption1 }}</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" id="opt2" name="manswer"
                                        v-model="manswer" :value="raffleRequest.quizMission.qoption2">
                                    <label for="opt2">{{ raffleRequest.quizMission.qoption2 }}</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" id="opt3" name="manswer"
                                        v-model="manswer" :value="raffleRequest.quizMission.qoption3">
                                    <label for="opt3">{{ raffleRequest.quizMission.qoption3 }}</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" id="opt4" name="manswer"
                                        v-model="manswer" :value="raffleRequest.quizMission.qoption4">
                                    <label for="opt4">{{ raffleRequest.quizMission.qoption4 }}</label>
                                </div>
                                <button type="submit" class="btn mt-2 w-100">정답 제출</button>
                            </form>
                        </div>

                        <div class="p-3 text-start"
                            v-if="raffleDetail.raffleStatus === '미션 대기' && raffleRequest.raffle.rmissiontype === 'time' && tab == '미션 참여'">
                            <h4>Hot Time</h4>
                            <p>지정된 시간동안 하단의 미션 참여 버튼을 눌러주세요.</p>
                            <button v-if="!passTime" class="btn mt-2 w-100 disabled">핫 타임이 아닙니다.</button>
                            <button v-if="passTime" class="btn mt-2 w-100" @click="updateRdtMissionCleared(rno)">미션
                                참여</button>
                        </div>

                        <div class="p-3 text-center" v-if="raffleDetail.raffleStatus === '미션 성공' && tab == '미션 참여'">
                            <Vue3Lottie :animationData="correctLottie" :loop="1" style="width:300px" />
                            <h1>미션 성공!</h1>
                            <h3>당첨 확률이 올라갔습니다</h3>
                            베리를 사용해 당첨 확률을 더 올려보세요
                        </div>

                        <div class="p-3 text-center" v-if="raffleDetail.raffleStatus === '미션 실패' && tab == '미션 참여'">
                            <Vue3Lottie :animationData="wrongLottie" :loop="1" style="width:300px" />
                            <h1>미션 실패...</h1>
                            베리를 사용해 당첨 확률을 올려보세요
                        </div>


                        <div class="p-3 text-start"
                            v-if="(raffleDetail.raffleStatus === '미션 대기' || raffleDetail.raffleStatus === '미션 성공' || raffleDetail.raffleStatus === '미션 실패') && tab == '베리 사용'">
                            <h4>베리 사용 안내</h4>
                            <ul>
                                <li>베리를 사용하여 당첨 확률을 증가시킬 수 있습니다.</li>
                                <li>베리는 하나의 래플에 최대 10개까지 사용 가능합니다.</li>
                                <li>사용한 베리는 사용 취소 및 환불이 불가능합니다.</li>
                                <li>응모 기간 내에는 베리 추가 사용이 가능합니다.</li>
                                <li>현재 베리를 {{ myBerry }}개 보유하고 있습니다.</li>
                                <li>해당 래플에 현재 베리를 {{ raffleDetail.raffleDetail.rdtberryspend }}개 사용했습니다.</li>
                            </ul>
                            <div v-if="raffleDetail.raffleDetail.rdtberryspend < 10">
                                <label class="me-2">몇 개나 사용할까요?</label>
                                <select name="number" v-model="selectBerry">
                                    <template v-for="n in 10" :key="n">
                                        <option
                                            v-if="raffleDetail.raffleDetail.rdtberryspend <= 10 - n && n <= myBerry">{{
                                                n }}
                                        </option>
                                    </template>
                                </select>개
                                <button class="btn mt-2 w-100"
                                    @click="updateRdtBerrySpend(rno, selectBerry)">사용하기</button>
                            </div>
                            <div v-else>
                                베리를 최대로 사용했습니다!
                            </div>
                        </div>
                        <div class="p-3 text-start" v-if="raffleDetail.raffleStatus === '당첨 발표'">
                            <button class="btn mt-2 w-100" @click="winnerCreate(rno)">당첨 확인</button>
                        </div>
                        <div class="p-3 text-start" v-if="raffleDetail.raffleStatus === '미참여 래플 종료'">
                            <h1>너 참여 안했잖아</h1>
                            돌아가 인마
                        </div>
                    </div>
                    <br>
                    <div class="d-flex flex-column border mt-5">
                        <div class="d-flex">
                            <button class="btn flex-grow-1" @click="selectGuide('raffle')">래플안내</button>
                            <button class="btn flex-grow-1" @click="selectGuide('mission')">미션안내</button>
                            <button class="btn flex-grow-1" @click="selectGuide('winning')">당첨안내</button>
                        </div>
                        <div v-if="shift == 'raffle'" class="p-3 text-center">
                            <p class="h6 text-start">
                                {{ raffleRequest.raffle.rcontent }}
                            </p>
                        </div>
                        <div v-if="raffleRequest.raffle.rmissiontype == 'quiz' && shift == 'mission'"
                            class="p-3 text-center">
                            <p class="h6 text-start">
                                해당 래플의 미션은 퀴즈 미션입니다. <br /> 응모에 참여하신 뒤, 퀴즈를 풀고 정답을 맞혀주세요. <br /> <br />

                                ※ 퀴즈 미션 주의사항 <br />
                                • 답을 제출하면 정답 여부를 바로 확인하실 수 있습니다. <br />
                                • 한 번 정답을 제출한 뒤에는 제출한 답을 수정하거나 다시 풀 수 없습니다. 신중하게 풀어주세요! <br />
                            </p>
                        </div>
                        <div v-if="raffleRequest.raffle.rmissiontype == 'time' && shift == 'mission'"
                            class="p-3 text-center">
                            <p class="h6 text-start">
                                해당 래플의 미션은 핫타임 미션입니다. <br /> 응모에 참여하신 뒤, 정해진 시간동안 미션참여 탭의 미션 참여 버튼을 클릭해주세요! <br />
                                <br />
                                핫 타임 : {{ raffleRequest.timeMission.tstartedat }} ~ {{
                                    raffleRequest.timeMission.tfinishedat }} <br /> <br />
                                ※ 핫 타임 미션 주의사항 <br />
                                • 미션 참여 버튼을 클릭하시면 자동으로 미션 성공 처리됩니다. <br />
                                • 정해진 시간 외에는 버튼이 활성화되지 않습니다. <br />
                            </p>
                        </div>
                        <div v-if="shift == 'winning'" class="p-3 text-center">
                            <p class="h6 text-start">
                                ※ 당첨자 유의사항 <br />
                                • 당첨 여부는 마이페이지 > 당첨 내역 조회 에서 확인하실 수 있습니다. <br />
                                • 경품을 수령하실 배송지와 수령인 정보를 추가로 입력해주세요. <br />
                                • 배송지 및 수령인 정보 입력은 마이페이지 > 당첨 내역 > 배송지 입력 버튼을 통해 가능합니다. <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref, watch } from 'vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import wrongLottie from '@/assets/lottie/wrong.json'
import correctLottie from '@/assets/lottie/correct.json'
import GiftLottie from '@/components/GiftLottie.vue'
import HeartLottie from '@/assets/lottie/likeHeart.json'
import { useRoute, useRouter } from 'vue-router';
import RaffleAPI from '@/apis/RaffleAPI';
import MemberAPI from '@/apis/MemberAPI';
import { useEventBus } from '@/utils/eventBus';

const settingDate = ref(null);
const passTime = ref(false);
const startHotTime = ref(null);
const endHotTime = ref(null);
const selectBerry = ref(1);
const eventBus = useEventBus();

const lottie = ref(null);
const route = useRoute();
const router = useRouter();
const store = useStore();

function dateFormat(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const serverTime = computed(() => {
    const nowTime = store.getters['clientTime/getTimeForCalculate'];
    const diffMilliseconds = settingDate.value - nowTime;
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

watch(serverTime, (newVal, oldVal) => {
    const nowTime = store.getters['clientTime/getTimeForCalculate'];
    if (startHotTime.value < nowTime && nowTime < endHotTime.value) {
        passTime.value = true;
    } else {
        passTime.value = false;
    }
})

/* 래플 프로세스 */
const raffleDetail = ref({
    raffleDetail: {},
    raffleStatus: '래플 미참여'
});
const tab = ref('미션 참여');
const shift = ref('raffle');
const myBerry = ref(null);

/* 좋아요 */
const likeAnimation = ref(null);
const like = ref(false);
const rno = route.query.rno;
const raffleRequest = ref({});

const likeCheck = () => {
    if (like.value == true) {
        likeAnimation.value.goToAndStop(19);
    }
}

async function getLikeStatus(rno) {
    const response = await MemberAPI.getLikeStatus(rno);
    like.value = response.data;
}

async function likeIt() {
    if (like.value === false) {
        const response = await MemberAPI.like(rno);
        eventBus.showToast("좋아요를 눌렀습니다.");
        likeAnimation.value.playSegments([0, 19], true);
        like.value = true;
    } else {
        const response = await MemberAPI.cancleLike(rno);
        eventBus.showToast("좋아요를 취소했습니다.");
        likeAnimation.value.playSegments([8, 0], true);
        like.value = false;
    }
}

async function getRaffleDetail(rno) {
    const response = await RaffleAPI.getRaffleDetail(rno);
    raffleDetail.value.raffleDetail = response.data.raffleDetail;
    raffleDetail.value.raffleStatus = response.data.raffleStatus;
    myBerry.value = response.data.mberry;
}

async function getRaffleRequest(argRno) {
    const response = await RaffleAPI.getRaffle(argRno);
    raffleRequest.value = response.data;
    settingDate.value = new Date(response.data.raffle.rfinishedat);
    if (response.data.raffle.rmissiontype == 'time') {
        startHotTime.value = new Date(response.data.timeMission.tstartedat.replace(' ', 'T'));
        endHotTime.value = new Date(response.data.timeMission.tfinishedat.replace(' ', 'T'));
    }
}

async function updateRdtBerrySpend(rno, rdtberryspend) {
    await RaffleAPI.updateRdtBerrySpend(rno, rdtberryspend);
    eventBus.showToast("베리를 " + rdtberryspend + "개 사용했습니다!");
    getRaffleDetail(rno);
}

async function winnerCreate(rno) {
    const response = await RaffleAPI.winnerCreate(rno);
    if (response.data == "당첨") {
        eventBus.showToast("래플에 당첨되셨습니다!");
        lottie.value.winLottieOn();
    } else if (response.data == "낙첨") {
        eventBus.showToast("당첨에 실패했습니다...");
        lottie.value.defeatLottieOn();
    }
    getRaffleRequest(rno);
}

getRaffleRequest(rno);
if (store.state.mid !== '') {
    getLikeStatus(rno);
    getRaffleDetail(rno);
}

async function apply(rno) {
    try {
        const response = await RaffleAPI.apply(rno);
        if (response.data === "success") {
            eventBus.showToast("응모가 완료되었습니다.");
        } else if (response.data === "berry") {
            eventBus.showToast("(베리 지급)일일 3회 응모 완료!");
        } else {
            eventBus.showToast("응모는 하루에 3번만 가능합니다.");
        }
        getRaffleDetail(rno);
    } catch(error) {
        if(error.response.status === 403){
            eventBus.showToast("응모에 참여하려면 로그인이 필요합니다.");
            router.push('/login');
        }
    }
}


const manswer = ref(null);

async function updateRdtMissionCleared(rno) {
    // 라디오 버튼이 클릭된게 뭔지를 받아와서 manswer를 유저의 제출 답으로 저장
    // 백엔드에 manswer를 넘겨줌
    try {
        const response = await RaffleAPI.updateRdtMissionCleared(rno, manswer.value);
        if (response.data === "berry") {
            eventBus.showToast("(베리 지급)일일 응모 미션 올 클리어!");
        }
        getRaffleDetail(rno);
    } catch (error) {
        console.log(error);
    }
}

function selectGuide(param) {
    shift.value = param;
}
</script>

<style scoped>
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

.btn {
    border: 0;
    background-color: #FF5C35;
    border-radius: 0%;
}
</style>