<template>
    <div>
        <GiftLottie v-if="giftLottieShow" />
        <div class="container">
            <div style="height:500px">
                <img src="@/assets/imgDetail1.jpg" class="w-100 h-100 object-fit-cover"
                    style="object-position:center top;">
            </div>
            <div class="d-flex justify-content-between">
                <div class="h1 align-content-center mt-2">
                    더그레이티스트<br>24 SUMMER 드랍 ~50%
                </div>
                <div style="width:100px; height:100px" @click="likeIt()">
                    <Vue3Lottie :animationData="HeartLottie" :loop="1" @on-animation-loaded="likeCheck"
                        ref="likeAnimation" :autoPlay="false" />
                </div>
            </div>
            <p class="h3 my-4">
                <!-- {{ nowDate }} -->
                2024.06.17(월) 15:00 ~ 2024.06.23(일) 15:00

            </p>
            <p class="h5">
                템포러리 브랜드를 추구하며 더그레이티스트만의 해석으로 트렌드와 개성의 양립을 지향합니다.
                <br>
                더그레이티스트만의 감성을 담은 24 SUMMER 드랍을 ~50% 혜택으로 만나보세요.
            </p>
            <p style="color: #4d8fd0">#패션 #데일리룩 #Fashoin #Raffle #like
                <br>#나만의 룩 #응모참여 # 응모미션 #Mession
            </p>
            <div class="d-flex flex-column px-5 mt-5">
                <div v-if="step > 1" class="d-flex justify-content-center mb-2">
                    <button class="btn btn-outline-light btn-lg me-2 flex-grow-1" @click="onQuiz">미션 확인</button>
                    <button class="btn btn-outline-light btn-lg  ms-2 flex-grow-1" @click="onModal">베리
                        사용</button>
                    <!-- border border-black -->
                </div>
                <button class="btn btn-outline-light btn-lg" @click="raffleprocess($event)">응모하기</button>
            </div>
        </div>

        <RaffleToast ref="raffleToast" />

        <RaffleModal ref="raffleModal">
            <template v-slot:modalHeader>
                ※ 베리 사용 안내 ※
            </template>
            <template v-slot:modalBody>
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

                </select>
                개
            </template>
            <template v-slot:modalFooter>
                <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">취소</button>
                <button type="button" class="btn btn-outline-light">완료</button>
            </template>
        </RaffleModal>

        <RaffleModal ref="raffleQuizModal">
            <template v-slot:modalHeader>
                <h5 class="modal-title">퀴즈 미션</h5>
            </template>
            <template v-slot:modalBody>
                <p>문제 : 다음 중 4팀의 팀원이 아닌 사람은 누구?</p>
                <div class="form-check" v-for="(person, index) in people" :key="index">
                    <input class="form-check-input" type="radio" name="flexRadioDefault"
                        :id="'flexRadioDefault' + index" :value="person" v-model="selectedPerson">
                    <label class="form-check-label" :for="'flexRadioDefault' + index">
                        {{ person }}
                    </label>
                </div>
                <br>
                <p class="m-0">제출 : {{ selectedPerson }}</p>
            </template>
            <template v-slot:modalFooter>
                <button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">취소</button>
                <button type="button" class="btn btn-outline-light">완료</button>
            </template>
        </RaffleModal>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import RaffleToast from '@/components/RaffleToast.vue'
import GiftLottie from '@/components/GiftLottie.vue'
import HeartLottie from '@/assets/lottie/likeHeart.json'
import RaffleModal from '@/components/RaffleModal.vue'

// let nowDate = ref(new Date());

onMounted(() => {
    const likeData = false;
    if (likeData === true) {
        like.value = true;
    }
});

/* 래플 프로세스 */
let step = ref(1);
function raffleprocess(event) {
    giftLottieShow.value = true;
    raffleToast.value.showToast("응모에 참여했습니다.");
    const button = event.target;
    if (step.value === 1) {
        button.innerText = '응모 완료';
        button.classList.remove('btn-success');
        button.classList.add('btn-info');
        button.classList.add('disabled');
        step.value = 2;
    } else if (step.value === 2) {
        step.value = 3;
    }
}

/* 모달 */
const raffleModal = ref(null);
const raffleQuizModal = ref(null);

const people = ['변성준', '이재원', '신메시', '김영주'];
const selectedPerson = ref('이재원'); // 초기 선택된 값

// function onQuiz() {
//     raffleQuizModal.value.showModal();
// }

const onQuiz = () => {
    raffleQuizModal.value.showModal();
}

function onModal() {
    raffleModal.value.showModal();
}

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
<style scoped></style>