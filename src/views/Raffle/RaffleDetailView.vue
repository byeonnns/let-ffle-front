<template>
    <div>
        <GiftLottie v-if="giftLottieShow" />
        <RaffleToast ref="raffleToast" />
        <div v-if="raffleRequest.raffle" class="container">
            <div class="row">
                <div class="col-6">
                    <img :src="`${axios.defaults.baseURL}/raffle/raffleDetailAttach/${rno}`" class="w-100">
                    <img :src="`${axios.defaults.baseURL}/raffle/raffleGiftAttach/${rno}`" class="w-100 mt-5">
                </div>
                <div class="col-6 d-flex flex-column position-sticky h-100" style="top:142px">
                    <p class="text-secondary">Raffle > {{ raffleRequest.raffle.rcategory }}</p>
                    <div class="d-flex justify-content-between">
                        <h1 class="align-content-center"> {{ raffleRequest.raffle.rtitle }} </h1>
                        <div @click="likeIt">
                            <Vue3Lottie :animationData="HeartLottie" :loop="1" @on-animation-loaded="likeCheck"
                                ref="likeAnimation" :autoPlay="false" />
                        </div>
                    </div>
                    <h5>{{ raffleRequest.raffle.rstartedat }} 부터</h5>
                    <h5>{{ raffleRequest.raffle.rfinishedat }} 까지</h5>
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
                            <button class="btn flex-grow-1" :class="step !== 1 ? 'disabled' : ''">1.
                                응모하기</button>
                            <button class="btn flex-grow-1" :class="step === 2 || step === 3 ? '' : 'disabled'"
                                @click="step = 2">2.
                                미션참여</button>
                            <button class="btn flex-grow-1" :class="step === 2 || step === 3 ? '' : 'disabled'"
                                @click="step = 3">3.
                                베리사용</button>
                            <button class="btn flex-grow-1" :class="step !== 4 ? 'disabled' : ''">4.
                                당첨확인</button>
                        </div>

                        <div class="p-3 text-center" v-if="step === 1">
                            <p class="h6 text-start">
                                하단의 응모하기 버튼을 클릭하시면 응모가 완료됩니다. <br />
                                응모 전 반드시 아래 주의사항을 읽어주세요. <br /> <br />

                                ※ 응모 주의사항 <br />
                                • 응모한 이후에는 취소할 수 없습니다. <br />
                                • 응모는 일일 최대 3회까지만 가능합니다. <br />
                                • 미션 참여 및 베리 사용은 응모 마감 전까지만 가능합니다.
                            </p>
                            <button class="btn mt-2 w-100" @click="apply">응모하기</button>
                        </div>

                        <div class="p-3 text-start" v-if="step === 2">
                            <h4>Quiz</h4>
                            <p>{{ raffleRequest.quizMission.qcontent }}</p>
                            <form @submit.prevent="updateRdtMissionCleared">
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
                        <div class="p-3 text-start" v-if="step === 2">
                            <h4>Hot Time</h4>
                            <p>지정된 시간동안 하단의 미션 참여 버튼을 눌러주세요.</p>
                            <button class="btn mt-2 w-100" @click="raffleprocess()">미션
                                참여</button>
                        </div>
                        <div class="p-3 text-start" v-if="step === 3">
                            <h4>베리 사용 안내</h4>
                            <ul>
                                <li>베리를 사용하여 당첨 확률을 증가시킬 수 있습니다.</li>
                                <li>베리는 하나의 래플에 최대 10개까지 사용 가능합니다.</li>
                                <li>사용한 베리는 사용 취소 및 환불이 불가능합니다.</li>
                                <li>응모 기간 내에는 베리 추가 사용이 가능합니다.</li>
                                <li>해당 래플에 현재 베리를 0개 사용했습니다.</li>
                            </ul>

                            <label class="me-2">몇 개나 사용할까요?</label>
                            <select name="number">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>개
                            <button class="btn mt-2 w-100" @click="raffleprocess()">사용하기</button>
                        </div>
                        <div class="p-3 text-start" v-if="step === 4">
                            <button class="btn mt-2 w-100" @click="raffleprocess()">당첨 확인</button>
                        </div>
                    </div>
                    <br>
                    <div class="d-flex flex-column border mt-5">
                        <div class="d-flex">
                            <button class="btn flex-grow-1">래플안내</button>
                            <button class="btn flex-grow-1">미션안내</button>
                            <button class="btn flex-grow-1">당첨안내</button>
                        </div>

                        <div class="p-3 text-center">
                            <p class="h6 text-start">
                                {{ raffleRequest.raffle.rcontent }}
                            </p>
                        </div>
                        <div v-if="raffleRequest.raffle.rmissiontype == 'quiz'" class="p-3 text-center">
                            <p class="h6 text-start">
                                해당 래플의 미션은 퀴즈 미션입니다. <br /> 응모에 참여하신 뒤, 퀴즈를 풀고 정답을 맞혀주세요. <br /> <br />

                                ※ 퀴즈 미션 주의사항 <br />
                                • 답을 제출하면 정답 여부를 바로 확인하실 수 있습니다. <br />
                                • 한 번 정답을 제출한 뒤에는 제출한 답을 수정하거나 다시 풀 수 없습니다. 신중하게 풀어주세요! <br />
                            </p>
                        </div>
                        <div v-if="raffleRequest.raffle.rmissiontype == 'time'" class="p-3 text-center">
                            <p class="h6 text-start">
                                해당 래플의 미션은 핫타임 미션입니다. <br /> 응모에 참여하신 뒤, 정해진 시간동안 미션참여 탭의 미션 참여 버튼을 클릭해주세요! <br />
                                <br />
                                핫 타임 : 2024.06.24 19:00 PM ~ 2024.06.24 21:00 PM <br /> <br />

                                ※ 핫 타임 미션 주의사항 <br />
                                • 미션 참여 버튼을 클릭하시면 자동으로 미션 성공 처리됩니다. <br />
                                • 정해진 시간 외에는 버튼이 활성화되지 않습니다. <br />
                            </p>
                        </div>
                        <div class="p-3 text-center">
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
import { onMounted, ref } from 'vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import RaffleToast from '@/components/RaffleToast.vue'
import GiftLottie from '@/components/GiftLottie.vue'
import HeartLottie from '@/assets/lottie/likeHeart.json'
import { useRoute } from 'vue-router';
import RaffleAPI from '@/apis/RaffleAPI';
import MemberAPI from '@/apis/MemberAPI';

const settingDate = new Date('2024-06-26T11:57:30');
const route = useRoute();
const store = useStore();
const serverTime = computed(() => {
    const diffMilliseconds = settingDate - store.getters['clientTime/getTimeForCalculate'];
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


onMounted(() => {
    const likeData = false;
    if (likeData === true) {
        like.value = true;
    }
});

/* 래플 프로세스 */
let step = ref(1);
function raffleprocess() {
    if (step.value === 1) {
        step.value = 2;
    } else if (step.value === 2) {
        step.value = 3;
    } else if (step.value === 3) {
        step.value = 4;
    } else {
        giftLottieShow.value = true;
    }
}

const people = ['변성준', '이재원', '신메시', '김영주'];
const selectedPerson = ref('이재원'); // 초기 선택된 값

/* 토스트 */
const raffleToast = ref(null);

/* 좋아요 */
const giftLottieShow = ref(false);
const likeAnimation = ref(null);
const like = ref(false);

const likeCheck = () => {
    if (like.value == true) {
        likeAnimation.value.goToAndStop(19);
    }
}

async function likeIt() {
    if (like.value === false) {
        const response = await MemberAPI.like(rno);
        raffleToast.value.showToast("좋아요를 눌렀습니다.");
        likeAnimation.value.playSegments([0, 19], true);
        like.value = true;
    } else {
        const response = await MemberAPI.cancleLike(rno);
        raffleToast.value.showToast("좋아요를 취소했습니다.");
        likeAnimation.value.playSegments([8, 0], true);
        like.value = false;
    }
}

const rno = route.query.rno;
const raffleRequest = ref({});

async function getRaffleRequest(argRno) {
    const response = await RaffleAPI.getRaffle(argRno);
    raffleRequest.value = response.data;
    console.log(raffleRequest.value);
}

getRaffleRequest(rno);

async function apply() {
    const response = await RaffleAPI.apply(rno);
    step.value = 2;
    raffleToast.value.showToast("응모가 완료되었습니다.");
}

const manswer = ref(null);

async function updateRdtMissionCleared() {
    // 라디오 버튼이 클릭된게 뭔지를 받아와서 manswer를 유저의 제출 답으로 저장
    // 백엔드에 manswer를 넘겨줌


    console.log(manswer.value);
    const response = await RaffleAPI.updateRdtMissionCleared(rno, manswer.value);

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