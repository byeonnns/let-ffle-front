<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <!-- <div class="flex-grow-1 d-flex flex-column"></div> -->
                <div class="d-flex flex-column ms-5" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                        <h4>베리 변동 내역</h4>
                    </div>
                    <div class="mb-4">
                        <button class="btn btn-gory border me-2"
                            style="color:black; background-color: white; border-radius: 15px;">전체</button>
                        <button class="btn border me-2"
                            style="color:black; background-color: white; border-radius: 15px;">적립</button>
                        <button class="btn border"
                            style="color:black; background-color: white; border-radius: 15px;">사용</button>
                    </div>
                    <div class="container flex-column">
                        <div class="d-flex justify-content-between container mb-4">
                            <span>
                                <span style="margin-right: 30px;">06.17&emsp;22:52</span>
                                <span>{{ berryHistory.berry.bhreason }}</span>
                                <div v-if="berryHisroty.berry.bhchangevalue > 0" style="margin-inline-start: 130px;">적립
                                </div>
                                <div v-if="berryHisroty.berry.bhchangevalue < 0" style="margin-inline-start: 130px;">사용
                                </div>

                            </span>
                            <span>
                                <img src="@/assets/berry-icon.png" class="me-1" height="20px">
                                <strong>{{ berryHisroty.berry.bhchangevalue }}개</strong>
                            </span>
                        </div>
                        <div class="d-flex justify-content-between container mb-5">
                            <span>
                                <span style="margin-right: 30px;">06.18&emsp;23:00</span>
                                <span>Nike Air Max 래플 응모</span>
                                <div style="margin-inline-start: 130px;">베리 사용</div>
                            </span>
                            <span>
                                <img src="@/assets/berry-icon-bw.png" class="me-1" height="20px">
                                <strong>-10개</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-grow-1 justify-content-center ms-5">
                <button class="btn btn-outline-light btn-sm me-1"
                    style="background-color: white; color:black;">처음</button>
                <button class="btn btn-outline-light btn-sm me-3"
                    style="background-color: white; color:black;">이전</button>
                <button class="btn btn-outline-light btn-sm me-1"
                    style="background-color: white; color:black;">1</button>
                <button class="btn btn-outline-light btn-sm me-1"
                    style="background-color: white; color:black;">2</button>
                <button class="btn btn-outline-light btn-sm me-1"
                    style="background-color: white; color:black;">3</button>
                <button class="btn btn-outline-light btn-sm me-1"
                    style="background-color: white; color:black;">4</button>
                <button class="btn btn-outline-light btn-sm me-3"
                    style="background-color: white; color:black;">5</button>
                <button class="btn btn-outline-light btn-sm me-1"
                    style="background-color: white; color:black;">다음</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">맨끝</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const berryHistory = ref({
    berry: [],
    pager: {}
});
</script>

<style scoped>
td {
    text-align: center;
}

.btn {
    border: none;
}
</style>