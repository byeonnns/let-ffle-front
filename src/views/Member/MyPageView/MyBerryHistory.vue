<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>베리 변동 내역</h3>
            </div>
            <div style="border-bottom: 3px solid #F37551;">
                <div class="purchase_list_tab mt-2">
                    <div class="tab_item total d-flex justify-content-lg-start">
                        <!-- <button class="btn bg-transparent border-0 text-body" @click="changePageOption(1, 'Total')"> -->
                            <dl class="tab_box m-0">
                                <div class="mb-1">
                                    <button class="btn-span me-2" @click="changePageOption(1, 'Total')">전체</button>
                                    <button class="btn-span me-2" @click="changePageOption(1, 'Save')">적립</button>
                                    <button class="btn-span" @click="changePageOption(1, 'Use')">사용</button> 
                                </div>
                                <!-- <dt class="title" style="height: 50px;">전체</dt>
                                <dd class="count">{{ totalBH }}</dd> -->
                            </dl>
                        <!-- </button> -->
                    </div>
                    <div class="tab_item">
                        <!-- <button class="btn bg-transparent border-0 text-body" @click="changePageOption(1, 'Save')"> -->
                            <dl class="tab_box m-0">
                                <!-- <dt class="title" style="height: 50px;">적립</dt>
                                <dd class="count">{{ saveBH }}</dd> -->
                            </dl>
                        <!-- </button> -->
                    </div>
                    <div class="tab_item">
                        <!-- <button class="btn bg-transparent border-0 text-body" @click="changePageOption(1, 'Use')"> -->
                            <dl class="tab_box m-0">
                                <!-- <dt class="title" style="height: 50px;">사용</dt>
                                <dd class="count">{{ useBH }}</dd> -->
                            </dl>
                        <!-- </button> -->
                    </div>
                </div>  
            </div>
            <table class="table text-center">
                <thead>
                    <tr>
                        <th class="col-4">적립 시간</th>
                        <th class="col-4">변동 사유</th>
                        <th class="col-4">변동 개수</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in berry" :key="item.bhno">
                        <td>{{ formatDate(item.bhchangedat) }}</td>
                        <td class="text-nowrap">{{ item.bhreason }}</td>
                        <td>
                            <img v-if="item.bhchangevalue > 0" src="@/assets/berry-icon.png" class="me-1" height="20px">
                            <img v-else src="@/assets/berry-icon-bw.png" class="me-1" height="20px">
                            <strong>{{ item.bhchangevalue }} 개</strong>
                        </td>
                    </tr>
                    <tr v-if="berry.length === 0">
                        <td colspan="5" class="non-center">
                            <h4>사용한 베리가 없습니다.</h4>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div v-if="pager.totalPageNo > 0" class="d-flex justify-content-center">
        <button @click="changePageOption(1, option)" class="btn pagerbtn">처음</button>
        <button v-if="pager.groupNo > 1" @click="changePageOption(pager.startPageNo - 1)"
            class="btn pagerbtn">이전</button>
        <button v-for="pageNo in pager.pageArray" :key="pageNo" @click="changePageOption(pageNo, option)"
            :class="(pager.pageNo == pageNo) ? 'thisPage' : ''" class="btn pagerbtn">{{
                pageNo }}</button>
        <button v-if="pager.groupNo < pager.totalGroupNo" @click="changePageOption(pager.endPageNo + 1, option)"
            class="btn pagerbtn">다음</button>
        <button @click="changePageOption(pager.totalPageNo, option)" class="btn pagerbtn">맨끝</button>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import MemberAPI from '@/apis/MemberAPI';
import { useRoute, useRouter } from 'vue-router';

const berry = ref([]);
const pager = ref({});
const totalBH = ref(null);
const saveBH = ref(null);
const useBH = ref(null);
const router = useRouter();
const route = useRoute();
const pageNo = ref(route.query.pageNo || 1);
const option = ref(route.query.option || "Total");

async function getMyBerryHistory(pageNo, option) {
    try {
        const response = await MemberAPI.myBerryHistory(pageNo, option);
        berry.value = response.data.list;
        pager.value = response.data.pager;
        totalBH.value = response.data.totalBerryHistory;
        saveBH.value = response.data.saveBerryHistory;
        useBH.value = response.data.useBerryHistory;
    } catch (error) {
        console.log(error);
    }
}

function changePageOption(pageNo, option) {
    router.push(`/Member/MyPage/MyBerryHistory?pageNo=${pageNo}&option=${option}`);
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear()%100;
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
}

watch(route, (newRoute, oldRoute) => {
    if (newRoute.query.pageNo || newRoute.query.option) {
        getMyBerryHistory(newRoute.query.pageNo, newRoute.query.option);
        pageNo.value = newRoute.query.pageNo;
        option.value = newRoute.query.option;
    } else {
        getMyBerryHistory(1, 'Total');
        pageNo.value = 1;
        option.value = 'Total';
    }
});
getMyBerryHistory(pageNo.value, option.value);
</script>

<style scoped>
.title h3 {
    font-size: 24px;
}

.purchase_list_tab {
    display: flex;
}

.tab_item {
    flex: 1;
    text-align: center;
}

.tab_box {
    padding: 10px;
}

.title {
    font-size: 18px;
}

.count {
    font-size: 16px;
}

td {
    align-content: center;
}

.pagerbtn {
    color: black;
    margin-left: 7px;
    border: none;
    background-color: white;
}

.thisPage {
    color: #F37551;
}
.non-center {
    text-align: center;
    width: 100%;
    /* colspan 속성을 고려하여 전체 너비 설정 */
    height: 300px;
    /* 높이를 100px로 설정 (필요에 따라 조정 가능) */
    vertical-align: middle;
    /* 텍스트를 수직으로 가운데 정렬 */
}

.btn-span {
    background-color: white;
    border-radius: 15px;
    color: gray;
    border: 1px solid gray;
    height: 40px;
    width: 60px;
    
}
</style>