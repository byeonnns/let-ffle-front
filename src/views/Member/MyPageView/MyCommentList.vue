<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <div class="d-flex flex-column ms-5" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                        <h4>내 댓글</h4>
                    </div>
                    <!-- <div style=" width: 100%; height: 500px;"> -->
                    <!-- border: 1px solid black;-->
                    <table class="table mb-0">
                        <thead>
                            <tr class="d-none d-md-table-row text-center">
                                <th class="d-none d-md-table-cell" style="width: 4em;">번호</th>
                                <th><span>게시글 제목</span></th>
                                <th class="d-none d-md-table-cell" style="width: 11em;">작성일자</th>
                                <th class="d-none d-md-table-cell" style="width: 8em;">바로가기</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr v-for="total in page.boards" :key="total.bno" class="center">
                                <td>{{ total.bno }}</td>
                                <td>{{ total.btitle }}</td>
                                <td>{{ total.bcreatedat }}</td>
                                <td>
                                    <RouterLink :to="`/Board/BoardDetail?bno=${total.bno}&pageNo=${pageNo}`"><button
                                            class="btn btn-outline-light btn-sm">이동하기</button>
                                    </RouterLink>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="5" class="text-center">
                                    <button @click="changePageNo(1)"
                                        class="btn btn-outline-light btn-sm me-1">처음</button>
                                    <button v-if="page.pager.groupNo > 1"
                                        @click="changePageNo(page.pager.startPageNo - 1)"
                                        class="btn btn-outline-light btn-sm me-1">이전</button>
                                    <button v-for="pageNo in page.pager.pageArray" :key="pageNo"
                                        @click="changePageNo(pageNo)"
                                        :class="(page.pager.pageNo == pageNo) ? 'btn-outline-light' : 'btn-outline-light'"
                                        class="btn btn-sm me-1">{{ pageNo }}</button>
                                    <button v-if="page.pager.groupNo < page.pager.totalGroupNo"
                                        @click="changePageNo(page.pager.endPageNo + 1)"
                                        class="btn btn-outline-light btn-sm me-1">다음</button>
                                    <button @click="changePageNo(page.pager.totalPageNo)"
                                        class="btn btn-outline-light btn-sm">맨끝</button>
                                </td>
                            </tr>


                        </tbody>
                    </table>

                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import MemberAPI from '@/apis/MemberAPI';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const pageNo = ref(route.query.pageNo || 1);

const  page = ref({
    boards : [],
    pager : {}

});

async function myCommentList(pageNo) {
    try {
        const response = await MemberAPI.myCommentList(pageNo);
        page.value.boards = response.data.total;
        console.log(page.value);
        page.value.pager = response.data.pager;
    }catch(error){
        console.log(error);
    
    }
}
myCommentList(pageNo.value);

function changePageNo(argPageNo) {

    router.push(`/Member/Mypage/MyCommentList?pageNo=${argPageNo}`);
}

watch(
    route, (newRoute, oldRoute) => {
        if (newRoute.query.pageNo) {
            console.log(pageNo.value)
            myCommentList(newRoute.query.pageNo);
            pageNo.value = newRoute.query.pageNo;
        } else {
            console.log()
            myCommentList(1);
            pageNo.value = 1;
        }
    }
);

</script>

<style scoped>
.center{
    text-align: center;
}

.btn {
    background-color: #F37551;
    color: white;
    border-radius: 0px;
}
</style>