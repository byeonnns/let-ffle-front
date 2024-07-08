<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>당첨자 조회</h3>
            </div>
            <table class="table">
                <thead>
                    <tr class="d-none d-md-table-row text-center">
                        <th class="d-none d-md-table-cell" style="width: 4em;"><span>래플명</span></th>
                        <th class="d-none d-md-table-cell" style="width: 11em;"><span>당첨자 ID</span></th>
                        <th class="d-none d-md-table-cell" style="width: 8em;"><span>수령인</span></th>
                        <th class="d-none d-md-table-cell" style="width: 6em;"><span>수령인 연락처</span></th>
                        <th class="d-none d-md-table-cell" style="width: 6em;"><span>수령 주소</span></th>
                        <th class="d-none d-md-table-cell" style="width: 6em;"><span>배송 상태</span></th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr v-for="winner in page.winners" :key="winner.rno">
                        <td>{{ winner.raffle.rtitle }}</td>
                        <td>{{ winner.winner.mid }}</td>
                        <td>{{ winner.winner.wreceivername }}</td>
                        <td>{{ winner.winner.wreceiverphone }}</td>
                        <td>{{ winner.winner.wreceiveraddress }}</td>
                        <td v-if="winner.winner.wreceiveraddress">배송 중</td>
                        <td v-else>배송 대기</td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-end">
                <div class="input-group input-group-sm w-auto">
                    <span class="input-group-text p-0">
                        <select class="form-select py-0 pe-3 border-0 rounded-end-0 z-1 w-auto" v-model="searchType">
                            <option value="mid">ID</option>
                            <option value="rtitle">래플</option>
                        </select></span>

                    <input type="text" class="form-control" v-model="searchWord" @keyup.enter="getWinnerList(1, searchType, searchWord)">
                    <button class="btn btn-sm" @click="getWinnerList(1, searchType, searchWord)">검색</button>
                </div>
            </div>
            <div class="text-center" v-if="page.winners.length > 0">
                <button @click="changePageNo(1)" class="btn btn-outline-light btn-sm me-1">처음</button>
                <button v-if="page.pager.groupNo > 1" @click="changePageNo(page.pager.startPageNo - 1)"
                    class="btn btn-outline-light btn-sm me-1">이전</button>
                <button v-for="pageNo in page.pager.pageArray" :key="pageNo" @click="changePageNo(pageNo)"
                    :class="(page.pager.pageNo == pageNo) ? 'btn-danger' : 'btn-outline-light'"
                    class="btn btn-outline-light btn-sm me-1">{{ pageNo }}</button>
                <button v-if="page.pager.groupNo < page.pager.totalGroupNo"
                    @click="changePageNo(page.pager.endPageNo + 1)" class="btn btn-outline-light btn-sm me-1">다음</button>
                <button @click="changePageNo(page.pager.totalPageNo)" class="btn btn-outline-light btn-sm">맨끝</button>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center align-items-center" style="height: 100%; font-size: 20px;" v-if="page.winners.length === 0">
        <span>당첨자 내역이 없습니다.</span>
    </div>
</template>

<script setup>
import MemberAPI from '@/apis/MemberAPI';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue';
const router = useRouter();
const route = useRoute();

const store = useStore();
const serverTime = computed(() => {
    const diffMilliseconds = store.getters['clientTime/getTimeForCalculate'];
    console.log(diffMilliseconds);
    return new Date(diffMilliseconds);
});

const searchType = ref("mid");
const pageNo = ref(route.query.pageNo || 1);

const page = ref({
    winners: [],
    pager: {}
});

async function getWinnerList(pageNo, searchType='', searchWord='') {
    try {
        const response = await MemberAPI.winnerList(pageNo, searchType, searchWord);
        console.log(response.data.winner);
        page.value.winners = response.data.winner;
        page.value.pager = response.data.pager;
    } catch (error) {
        console.log(error);
    }
}

getWinnerList(pageNo.value);

function changePageNo(argPageNo) {
    router.push(`/Admin/WinnerList?pageNo=${argPageNo}`);
}

watch(
    route, (newRoute, oldRoute) => {
        if (newRoute.query.pageNo) {
            console.log(pageNo.value)
            getWinnerList(newRoute.query.pageNo);
            pageNo.value = newRoute.query.pageNo;
        } else {
            console.log()
            getWinnerList(1);
            pageNo.value = 1;
        }
    }
);

</script>

<style scoped>
.btn {
    background-color: #F37551;
    color: white;
}
</style>