<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>당첨자 조회</h3>
            </div>
            <table class="table">
                <thead>
                    <tr class="d-none d-md-table-row text-center">
                        <th class="d-none d-md-table-cell" style="width: 35%;"><span>래플명</span></th>
                        <th class="d-none d-md-table-cell" style="width: 30%;"><span>당첨자 ID</span></th>
                        <th class="d-none d-md-table-cell" style="width: 18%;"><span>수령지 입력 여부</span></th>
                        <th class="d-none d-md-table-cell" style="width: 17%;"><span>배송 상태</span></th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr v-for="winner in page.winners" :key="winner.rno">
                        <td>{{ winner.raffle.rtitle }}</td>
                        <td>{{ winner.winner.mid }}</td>
                        <td v-if="winner.winner.wreceiverphone"><button class="btn btn-sm clear rounded-0"
                                @click="addrModal(winner.winner)">확인</button></td>
                        <td v-else>미입력</td>
                        <td v-if="winner.winner.wreceiveraddress">배송 중</td>
                        <td v-else>배송 대기</td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-end">
                <div class="input-group input-group-sm w-auto">
                    <span class="input-group-text p-0">
                        <select class="form-select py-0 border-0 rounded-end-0 z-1 w-auto" v-model="searchType">
                            <option value="mid">ID</option>
                            <option value="rtitle">래플</option>
                        </select></span>

                    <input type="text" class="form-control" v-model="searchWord"
                        @keyup.enter="getWinnerList(1, searchType, searchWord)">
                    <button class="btn btn-sm" @click="getWinnerList(1, searchType, searchWord)"
                        style="background-color: #F37551; color:white">검색</button>
                </div>
            </div>
            <div class="text-center" v-if="page.winners.length > 0">
                <button @click="changePageNo(1)" class="btn pagerbtn">처음</button>
                <button v-if="page.pager.groupNo > 1" @click="changePageNo(page.pager.startPageNo - 1)"
                    class="btn pagerbtn">이전</button>
                <button v-for="pageNo in page.pager.pageArray" :key="pageNo" @click="changePageNo(pageNo)"
                    :class="(page.pager.pageNo == pageNo) ? 'thisPage' : ''" class="btn pagerbtn">{{ pageNo }}</button>
                <button v-if="page.pager.groupNo < page.pager.totalGroupNo"
                    @click="changePageNo(page.pager.endPageNo + 1)" class="btn pagerbtn">다음</button>
                <button @click="changePageNo(page.pager.totalPageNo)" class="btn pagerbtn">맨끝</button>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center align-items-center" style="height: 100%; font-size: 20px;"
        v-if="page.winners.length === 0">
        <span>당첨자 내역이 없습니다.</span>
    </div>

    <Modal ref="addressModal">
        <template v-slot:modalHeader>
            수령지 정보
        </template>

        <template v-slot:modalBody>
            <div>
                <div class="mt-3">
                    <span>수령자 이름 </span>
                    <input v-model="winner.wreceivername" id=" text" type="text"
                        class="border-0 border-bottom flex-grow-1 input same-width mt-2" placeholder="이름" readonly>
                </div>
                <div class="mt-3">
                    <span>수령자 전화번호 </span>
                    <input v-model="winner.wreceiverphone" id=" text" type="text"
                        class="border-0 border-bottom flex-grow-1 input same-width mt-2" placeholder="전화번호" readonly>
                </div>
                <div class="mt-3">
                    <span>우편번호 </span>
                    <input v-model="winner.wreceiverzipcode" id=" maddress" type="text"
                        class="border-0 border-bottom flex-grow-1 input same-width mt-2" placeholder="우편번호" readonly>
                </div>
                <div class="mt-3">
                    <span>수령 주소</span>
                    <input v-model="winner.wreceiveraddress" type="text" placeholder="주소" class="input w-100" readonly>
                    <hr class="p-0 m-0 w-100 mb-4">
                </div>
            </div>
        </template>

        <template v-slot:modalFooter>
            <button class="btn btn-outline-light btn-sm clear rounded-0" data-bs-dismiss="modal">닫기</button>
        </template>
    </Modal>

</template>

<script setup>
import MemberAPI from '@/apis/MemberAPI';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import Modal from '@/components/Modal.vue';
const router = useRouter();
const route = useRoute();

const store = useStore();
const serverTime = computed(() => {
    const diffMilliseconds = store.getters['clientTime/getTimeForCalculate'];
    return new Date(diffMilliseconds);
});

const searchWord = ref(null);
const searchType = ref("mid");
const pageNo = ref(route.query.pageNo || 1);

const page = ref({
    winners: [],
    pager: {}
});


async function getWinnerList(pageNo, searchType = '', searchWord = '') {
    try {
        const response = await MemberAPI.winnerList(pageNo, searchType, searchWord);
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
            getWinnerList(newRoute.query.pageNo);
            pageNo.value = newRoute.query.pageNo;
        } else {
            getWinnerList(1);
            pageNo.value = 1;
        }
    }
);


const addressModal = ref(null);

function addrModal(param) {
    winner.value.wreceivername = param.wreceivername;
    winner.value.wreceiverphone = param.wreceiverphone;
    winner.value.wreceiverzipcode = param.wreceiverzipcode;
    winner.value.wreceiveraddress = param.wreceiveraddress;
    addressModal.value.showModal();
}


const winner = ref({
    wreceivername: "",
    wreceiverzipcode: "",
    wreceiveraddress: "",
    wreceiverphone: "",
});



</script>

<style scoped>
.pagerbtn {
    color: black;
    margin-left: 7px;
    border: none;
    background-color: white;
}

.thisPage {
    color: #F37551;
}

.same-width {
    width: 100%;
    /* 모든 입력 필드의 너비를 동일하게 설정 */
}
.clear{
    background-color: #F37551;
    color:white;
    
}
</style>