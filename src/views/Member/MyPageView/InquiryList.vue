<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>문의 내역</h3>
            </div>
            <table class="table mb-0">
                <thead>
                    <tr class="d-none d-md-table-row text-center">

                        <th class="d-none d-md-table-cell" style="width: 4em;"><span>번호</span></th>
                        <th><span>제목</span></th>
                        <th class="d-none d-md-table-cell" style="width: 11em;"><span>글쓴이</span></th>
                        <th class="d-none d-md-table-cell" style="width: 8em;"><span>날짜</span></th>
                        <th class="d-none d-md-table-cell" style="width: 6em;"><span>답변상태</span></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="inquiry in page.inquirys" :key="inquiry.ino">
                                <td>{{inquiry.ino}}</td>
                                <td>
                                    <RouterLink :to="`/Member/Mypage/InquiryDetails?ino=${inquiry.ino}`">{{ inquiry.ititle }}</RouterLink>
                                </td>
                                <td>{{ inquiry.mid }}</td>
                                <td>{{ formatDate(inquiry.icreatedat) }}</td>
                                <td v-if="inquiry.ireply == null">대기중</td>
                                <td v-if="inquiry.ireply != null">답변완료</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-end mt-3 me-3">
                        <RouterLink to="/Member/MyPage/WriteInquiry"><button type="button" class="btn btn-light">글쓰기</button>
                        </RouterLink>
                    </div>
                    <div class="text-center">
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
        
    
</template>

<script setup>
import MemberAPI from '@/apis/MemberAPI';
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue';
const router = useRouter();
const route = useRoute();


const pageNo = ref(route.query.pageNo || 1);

const page = ref({
    inquirys: [],
    pager: {}
});

async function getmyInquiryList(pageNo) {
    try {
        console.log(pageNo.value + '알려저');
        const response = await MemberAPI.myInquiryList(pageNo);
        console.log(response + "나오나여?");
        
        page.value.inquirys = response.data.inquiry;
        page.value.pager = response.data.pager;
        console.log(page.value);
    } catch (error) {
        console.log(error);
    }
}

getmyInquiryList(pageNo.value);

function changePageNo(argPageNo) {
    router.push(`/Member/Mypage/InquiryList?pageNo=${argPageNo}`);
}

watch(
    route, (newRoute, oldRoute) => {
        if (newRoute.query.pageNo) {
            console.log(pageNo.value)
            getmyInquiryList(newRoute.query.pageNo);
            pageNo.value = newRoute.query.pageNo;
        } else {
            console.log()
            getmyInquiryList(1);
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
td {
    text-align: center;
}

.btn {
    background-color: #F37551;
    color: white;
    border-radius: 0px;
}
</style>