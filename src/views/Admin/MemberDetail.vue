<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <!-- <div class="flex-grow-1 d-flex flex-column"></div> -->
                <div class="d-flex flex-column p-3" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                        <h4>회원 상세</h4>
                    </div>
                    <div>
                        <h6 class="fw-bold">회원 정보</h6>
                        <hr/>
                    </div>
                    <table class="table mb-5">
                        <thead>
                            <tr class="d-none d-md-table-row text-center">
                                <th class="d-none d-md-table-cell" style="width: 11em;"><span>ID</span></th>
                                <th class="d-none d-md-table-cell" style="width: 4em;"><span>이름</span></th>
                                <th class="d-none d-md-table-cell" style="width: 7em;"><span>전화번호</span></th>
                                <th class="d-none d-md-table-cell" style="width: 7em;"><span>주소</span></th>
                                <th class="d-none d-md-table-cell" style="width: 6em;"><span>보유 베리 수</span></th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr>
                                <td>{{ member.mid }}</td>
                                <td>{{ member.mname }}</td>
                                <td>{{ member.mphone }}</td>
                                <td>{{ member.maddress }}</td>
                                <td>{{ member.mberry }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                        <h4>래플 참여 현황</h4>
                    </div>
                    <table class="table mb-0">
                        <thead>
                            <tr class="d-none d-md-table-row text-center">
                                <th class="d-none d-md-table-cell" style="width: 11em;"><span>래플명</span></th>
                                <th class="d-none d-md-table-cell" style="width: 8em;"><span>응모 기간</span></th>
                                <th class="d-none d-md-table-cell" style="width: 4em;"><span>참여 시간</span></th>
                                <th class="d-none d-md-table-cell" style="width: 6em;"><span>사용한 베리 수</span></th>
                                <th class="d-none d-md-table-cell" style="width: 6em;"><span>당첨 여부</span></th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr v-for="r in raffleDetailList" :key="r.raffle.rno">
                                <td>{{ r.raffle.rtitle }}</td>
                                <td>{{ r.raffle.rstartedat }} ~ {{ r.raffle.rfinishedat }}</td>
                                <td>{{ r.raffleDetail.rdtcreatedat }} PM</td>
                                <td>{{ r.raffleDetail.rdtberryspend }}</td>
                                <td v-if="r.raffleDetail.mid == r.winner.mid">당첨</td>
                                <td v-if="r.raffleDetail.mid != r.winner.mid">미당첨</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MemberAPI from '@/apis/MemberAPI';
import RaffleAPI from '@/apis/RaffleAPI';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const member =ref({});
const route = useRoute();
const mid = route.query.mid
const raffleDetailList = ref([]);

async function getAdminRaffleDetailList(mid) {
    try {
        const response = await RaffleAPI.getAdminRaffleDetailList(mid);
        raffleDetailList.value = response.data;
        console.log(raffleDetailList.value);
    } catch(error) {
        console.log(error);
        console.log(raffleDetailList.value);
    }
}
getAdminRaffleDetailList(mid);

async function getMemberDetail(mid) {
    try {
        const response = await MemberAPI.AdminMemberDetail(mid);
        console.log(member.value);
        member.value = response.data;
    } catch(error) {
        console.log(error);
    }
    
}
getMemberDetail(mid);
</script>

<style scoped>
</style>