<template>
    <div>
        <div class="d-flex justify-content-center align-content-center">
            <li class="month_item">
                <button class="month_link mx-1 bg-white" @click="setNull()">전체</button>
            </li>
            <li class="month_item">
                <button class="month_link mx-1 bg-white" @click="dateButton(2)">2개월</button>
            </li>
            <li class="month_item">
                <button class="month_link mx-1 bg-white" @click="dateButton(4)">4개월</button>
            </li>
            <li class="month_item">
                <button class="month_link mx-1 bg-white" @click="dateButton(6)">6개월</button>
            </li>
            <div class="d-flex justify-content-center align-content-center ms-4">
                    <input type="date" class="month_link" v-model="startDate">
                    <input type="date" class="month_link ms-2" :max="maxdate" v-model="endDate">
                    <button class="btn btn-sm ms-2" style="text-align: center;border-radius: 0px; background-color: #F37551; color: white;" @click="searchList()">조회</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const nowDate = ref('');
const startDate = ref(null);
const endDate = ref(null);
const maxdate = ref(nowDate);
const emits = defineEmits(['searchList']);

onMounted(() => {
    const now = new Date(); // 현재 날짜와 시간을 가진 Date 객체 생성
    const year = now.getFullYear(); // 연도 가져오기
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 월 가져오기 (0부터 시작하기 때문에 +1 필요)
    const day = String(now.getDate()).padStart(2, '0'); // 일 가져오기

    nowDate.value = `${year}-${month}-${day}`;
})

function dateButton(period) {
    endDate.value = nowDate.value;
    const tempDate = new Date(nowDate.value);
    const originalMonth = tempDate.getMonth();
    tempDate.setMonth(tempDate.getMonth() - period);
    if(originalMonth < tempDate.getMonth)
        tempDate.setFullYear(tempDate.getFullYear() - 1)
    const year = tempDate.getFullYear();
    const month = String(tempDate.getMonth() + 1).padStart(2, '0');
    const day = String(tempDate.getDate()).padStart(2, '0');
    
    startDate.value = `${year}-${month}-${day}`;
}

function getStartDate(){
    return startDate.value;
}

function getEndDate(){
    return endDate.value;
}

function setNull(){
    startDate.value = null;
    endDate.value = null;
}

function searchList() {
    emits('searchList');
}

defineExpose({
 getStartDate,
 getEndDate,
 setNull
});

</script>

<style scoped>
.month_item {
    display: inline-block;
}

.month_link {
    border: 1px solid darkgray;
    text-decoration-line: none;
    display: inline-block;
    padding: 5px 10px;
    font-size: 13px;
}
</style>