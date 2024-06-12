<template>
    <div>
        <div class="container">
            <div style="height:500px">
                <img src="@/assets/imgDetail1.jpg" class="w-100 h-100 object-fit-cover"
                    style="object-position:center top;">
            </div>
            <p class="h1">
                제목 제목<i class="bi bi-heart fs-3"></i>
            </p>
            <p class="h3">
                시간 시간
            </p>
            <p class="h5">
                글 내용 글 내용
            </p>
            <p>태그를 적는 부분</p>
            <div class="d-flex flex-column px-5 mt-5">
                <div v-if="step > 1" class="d-flex justify-content-center mb-2">
                    <button class="btn btn-dark btn-lg me-2" @click="mission($event)">미션 확인</button>
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

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Modal } from 'bootstrap';

let step = ref(1);

let modalTest = null;

//컴포넌트가 생성되고, DOM에 부착될 때 자동으로 실행되는 콜백
onMounted(() => {
    modalTest = new Modal(document.querySelector("#modalTest"), { backdrop: false });
});

function onModal() {
    modalTest.show();
}

function mission(event) {
    const button = event.target;
    button.innerText = '미션 완료';
    button.classList.remove('btn-dark');
    button.classList.add('btn-white', 'border', 'border-black', 'disabled');
}

function raffleprocess(event) {
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

</script>
<style scoped></style>