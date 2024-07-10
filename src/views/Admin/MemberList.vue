<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>회원 조회</h3>
            </div>
            <table class="table text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>닉네임</th>
                        <th>상세</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="member in page.members" :key="member.mid">
                        <td>{{ member.mid }}</td>
                        <td>{{ member.mname }}</td>
                        <td>{{ member.mnickname }}</td>
                        <td>
                            <RouterLink :to="`/Admin/MemberDetail?mid=${member.mid}`"><button
                                    class="btn btn-sm text-white rounded-0"
                                    style="background-color: #F37551;">상세</button>
                            </RouterLink>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-end">
                <div class="input-group input-group-sm w-auto">
                    <span class="input-group-text p-0">
                        <select class="form-select py-0 border-0 rounded-end-0 z-1 w-auto" v-model="searchType">
                            <option value="mid" selected>ID</option>
                            <option value="mname">이름</option>
                            <option value="mnickname">닉네임</option>
                        </select>
                    </span>
                    <input type="text" class="form-control" v-model="searchWord"
                        @keyup.enter="getMemberList(1, searchType, searchWord)">
                    <button class="btn btn-sm text-white" @click="getMemberList(1, searchType, searchWord)"
                        style="background-color: #F37551;">검색</button>
                </div>
            </div>

            <div class="text-center" v-if="page.members.length > 0">
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
        v-if="page.members === 0">
        <span>조회 가능한 회원이 없습니다.</span>
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
    members: [],
    pager: {}
});

async function getMemberList(pageNo, searchType = '', searchWord = '') {
    try {
        const response = await MemberAPI.memberList(pageNo, searchType, searchWord);
        page.value.members = response.data.member;
        page.value.pager = response.data.pager;
    } catch (error) {
        console.log(error);
    }
}

getMemberList(pageNo.value);

function changePageNo(argPageNo) {
    router.push(`/Admin/MemberList?pageNo=${argPageNo}`);
}

watch(
    route, (newRoute, oldRoute) => {
        if (newRoute.query.pageNo) {
            console.log(pageNo.value)
            getMemberList(newRoute.query.pageNo);
            pageNo.value = newRoute.query.pageNo;
        } else {
            console.log()
            getMemberList(1);
            pageNo.value = 1;
        }
    }
);

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

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
</style>