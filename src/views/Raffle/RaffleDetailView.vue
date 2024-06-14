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
                    제목 제목
                </div>
                <div style="width:100px; height:100px" @click="likeIt()">
                    <Vue3Lottie :animationData="HeartLottie" :loop="1" @on-animation-loaded="likeCheck"
                        ref="likeAnimation" :autoPlay="false" />
                </div>
            </div>
            <p class="h3">
                시간 시간
            </p>
            <p class="h5">
                글 내용 글 내용
            </p>
            <p>태그를 적는 부분</p>
            <div class="d-flex flex-column px-5 mt-5">
                <div v-if="step > 1" class="d-flex justify-content-center mb-2">
                    <button class="btn btn-dark btn-lg me-2" @click="onQuiz()">미션 확인</button>
                    <button class="btn btn-white btn-lg border border-black ms-2" @click="onModal()"> 사용한 베리<br> <img
                            src="@/assets/berry-icon.png" width="25px"> : 0 </button>
                </div>
                <button class="btn btn-success btn-lg flex-grow-1" @click="raffleprocess($event)">응모하기</button>
            </div>
        </div>
        <div id="modalTest" class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">모달 테스트</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>테스트입니다</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                        <button type="button" class="btn btn-primary">완료</button>
                    </div>
                </div>
            </div>
        </div>
        <ToastComponent ref="childToast">
            테스트
        </ToastComponent>
        <div class="toast-container position-fixed top-0 start-50 translate-middle-x p-3 z-2">
            <div ref="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true"
                data-bs-autohide="true">
                <div class="toast-header">
                    <strong class="me-auto">토스트 메시지</strong>
                    <small>시간을 표시할까?</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    토스트 만드느라 개힘들었다
                </div>
            </div>
        </div>

        <div ref="modal" class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">퀴즈 미션</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
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
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
                        <button type="button" class="btn btn-primary">완료</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Modal, Toast } from 'bootstrap';
import { Vue3Lottie } from 'vue3-lottie'
import ToastComponent from '@/components/ToastComponent.vue'
import GiftLottie from '@/components/GiftLottie.vue'
import HeartLottie from '@/assets/lottie/likeHeart.json'

onMounted(() => {
    const likeData = false;
    modalTest = new Modal(document.querySelector("#modalTest"), { backdrop: false });
    bootstrapModalInstance = new Modal(modal.value);
    toastBootstrap = Toast.getOrCreateInstance(liveToast.value);
    if (likeData === true) {
        like.value = true;
    }
});
/* 래플 프로세스 */
let step = ref(1);
function raffleprocess(event) {
    giftLottieShow.value = true;
    childToast.value.showToast();
    toastBootstrap.show();
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
const people = ['변성준', '이재원', '신메시', '김영주'];
const selectedPerson = ref('이재원'); // 초기 선택된 값
let modalTest = null;
const modalQuiz = ref(null);
const modal = ref(null);
let bootstrapModalInstance = null;

function onQuiz() {
    bootstrapModalInstance.show();
}

function onModal() {
    modalTest.show();
}


/* 토스트 */
const liveToast = ref(null);
let toastBootstrap = null;

const childToast = ref(null);

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
        likeAnimation.value.playSegments([0, 19], true);
        toastBootstrap.show();
        like.value = true;
    } else {
        likeAnimation.value.playSegments([8, 0], true);
        toastBootstrap.show();
        like.value = false;
    }
}
</script>
<style scoped></style>