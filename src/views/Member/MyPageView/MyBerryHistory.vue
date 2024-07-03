<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>베리 변동 내역</h3>
            </div>
            <table class="table text-center">
                <thead>
                    <tr>
                    <th>적립 시간</th>
                    <th>래플 제목</th>
                    <th>변동 사유</th>
                    <th>개수</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="item in berry" :key="item.bhno">
                        <td>{{ formatDate(item.bhchangedat) }}<br>{{ formatTime(item.bhchangedat) }}</td>
                        <td>{{ item.bhno }} 제목 나올 부분</td>
                        <td>{{ item.bhreason }}</td>
                        <td><img src="@/assets/berry-icon.png" class="me-1" height="20px">
                            <strong>{{ item.bhchangevalue }} 개</strong></td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button class="btn border me-2"
                    style="color:black; background-color: white; border-radius: 15px;">전체</button>
                <button class="btn border me-2"
                    style="color:black; background-color: white; border-radius: 15px;">적립</button>
                <button class="btn border"
                    style="color:black; background-color: white; border-radius: 15px;">사용</button>
            </div>
        

            <!-- <div class="d-flex justify-content-between container mb-5">
                    <span>
                        <span style="margin-right: 30px;">06.18&emsp;23:00</span>
                        <span>Nike Air Max 래플 응모</span>
                        <div style="margin-inline-start: 130px;">베리 사용</div>
                    </span>
                    <span>
                        <img src="@/assets/berry-icon-bw.png" class="me-1" height="20px">
                        <strong>-10개</strong>
                    </span>
                </div> -->
        </div>
    </div>
    <div class="d-flex flex-grow-1 justify-content-center ms-5">
        <button class="btn btn-outline-light btn-sm me-1" style="background-color: white; color:black;">처음</button>
        <button class="btn btn-outline-light btn-sm me-3" style="background-color: white; color:black;">이전</button>
        <button class="btn btn-outline-light btn-sm me-1" style="background-color: white; color:black;">1</button>
        <button class="btn btn-outline-light btn-sm me-1" style="background-color: white; color:black;">2</button>
        <button class="btn btn-outline-light btn-sm me-1" style="background-color: white; color:black;">3</button>
        <button class="btn btn-outline-light btn-sm me-1" style="background-color: white; color:black;">4</button>
        <button class="btn btn-outline-light btn-sm me-3" style="background-color: white; color:black;">5</button>
        <button class="btn btn-outline-light btn-sm me-1" style="background-color: white; color:black;">다음</button>
        <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">맨끝</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import MemberAPI from '@/apis/MemberAPI';


const berry = ref([]);

async function getMyBerryHistory() {
    try {
        const response = await MemberAPI.myBerryHistory();
        berry.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

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

getMyBerryHistory()

</script>

<style scoped>
td {
    align-content: center;
}

.btn {
    border: none;
}
</style>