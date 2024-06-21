<template>
    <div>
        <GiftLottie v-if="giftLottieShow" />
        <RaffleToast ref="raffleToast" />
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <img src="@/assets/img2_detail.png" width="100%">
                </div>
                <div class="col-6 d-flex flex-column position-sticky h-100" style="top:142px">
                    <p class="text-secondary">Raffle > Fashion</p>
                    <div class="d-flex justify-content-between">
                        <h1 class="align-content-center">Raffle Name</h1>
                        <div @click="likeIt()">
                            <Vue3Lottie :animationData="HeartLottie" :loop="1" @on-animation-loaded="likeCheck"
                                ref="likeAnimation" :autoPlay="false" />
                        </div>
                    </div>
                    <h5>2024-06-22 @ 18:00 부터</h5>
                    <h5>2024-06-22 @ 18:00 까지</h5>
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
                            <button class="btn btn-dark flex-grow-1" :class="step !== 1 ? 'disabled' : ''">1.
                                응모하기</button>
                            <button class="btn btn-dark flex-grow-1" :class="step === 2 || step === 3 ? '' : 'disabled'"
                                @click="step = 2">2.
                                미션참여</button>
                            <button class="btn btn-dark flex-grow-1" :class="step === 2 || step === 3 ? '' : 'disabled'"
                                @click="step = 3">3.
                                베리사용</button>
                            <button class="btn btn-dark flex-grow-1" :class="step !== 4 ? 'disabled' : ''">4.
                                당첨확인</button>
                        </div>

                        <div class="p-3 text-center" v-if="step === 1">
                            <p class="h5 text-start">
                                응모하는건 자유지만 취소할땐 아니란다
                                <br>
                                당첨 안된다고 뭐라하지 말것
                                <br>
                                나도 모르겠다 이젠
                            </p>
                            <button class="btn mt-2 btn-outline-dark w-100" @click="raffleprocess()">응모하기</button>
                        </div>

                        <div class="p-3 text-start" v-if="step === 2">
                            <h4>퀴즈 미션</h4>
                            <p>문제 : 다음 중 4팀의 팀원이 아닌 사람은 누구?</p>
                            <div class="form-check" v-for="(person, index) in people" :key="index">
                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                    :id="'flexRadioDefault' + index" :value="person" v-model="selectedPerson">
                                <label class="form-check-label" :for="'flexRadioDefault' + index">
                                    {{ person }}
                                </label>
                            </div>
                            <button class="btn mt-2 btn-outline-dark w-100" @click="raffleprocess()">정답
                                제출</button>
                        </div>
                        <div class="p-3 text-start" v-if="step === 2">
                            <h4>핫 타임 미션</h4>
                            <p>지정된 시간 내에 참여 버튼 눌러주세요라 ㅓㅜㅈ궘ㄴㅇ러ㅣㄴ</p>
                            <button class="btn mt-2 btn-outline-dark w-100" @click="raffleprocess()">미션
                                참여</button>
                        </div>
                        <div class="p-3 text-start" v-if="step === 3">
                            <h4>베리 사용</h4>
                            <ul>
                                <li>베리는 하나의 래플에 최대10개까지 사용할수 있습니다.</li>
                                <li>한번 등록시에는 다시 반환 할수 없습니다.</li>
                                <li>베리는 중복으로 사용이 가능합니다</li>
                                <li>베리를 사용하게 되면 당첨확률이 UP↑</li>
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
                            <button class="btn mt-2 btn-outline-dark w-100" @click="raffleprocess()">사용 하기</button>
                        </div>
                        <div class="p-3 text-start" v-if="step === 4">
                            <h4>당첨 확인</h4>
                            <p>네 운을 시험해봐라!</p>
                            <button class="btn mt-2 btn-outline-dark w-100" @click="raffleprocess()">당첨 확인</button>
                        </div>
                    </div>
                    <br>
                    <div class="d-flex flex-column border mt-5">
                        <div class="d-flex">
                            <button class="btn btn-dark flex-grow-1">래플안내</button>
                            <button class="btn btn-dark flex-grow-1">미션안내</button>
                            <button class="btn btn-dark flex-grow-1">당첨안내</button>
                        </div>

                        <div class="p-3 text-center" v-if="step === 1">
                            <p class="h5 text-start">
                                응모하는건 자유지만 취소할땐 아니란다
                                <br>
                                당첨 안된다고 뭐라하지 말것
                                <br>
                                나도 모르겠다 이젠
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import RaffleToast from '@/components/RaffleToast.vue'
import GiftLottie from '@/components/GiftLottie.vue'
import HeartLottie from '@/assets/lottie/likeHeart.json'

const settingDate = new Date('2024-06-23T15:57:30')
const store = useStore();
const serverTime = computed(() => {
    const diffMilliseconds = settingDate - store.getters['clientTime/getTimeForCalculate'];
    if (diffMilliseconds < 0) {
        return "Cut-off";
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

function likeIt() {
    if (like.value === false) {
        raffleToast.value.showToast("좋아요를 눌렀습니다.");
        likeAnimation.value.playSegments([0, 19], true);
        like.value = true;
    } else {
        raffleToast.value.showToast("좋아요를 취소했습니다.");
        likeAnimation.value.playSegments([8, 0], true);
        like.value = false;
    }
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
    border-radius: 0%;
}
</style>