<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <div class="d-flex flex-column ms-5" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                        <h4>내 게시글</h4>
                    </div>
                    <!-- <div style=" width: 100%; height: 500px;"> -->
                    <!-- border: 1px solid black;-->
                    <table class="table mb-0">
                        <thead>
                            <tr class="d-none d-md-table-row text-center">
                                <th class="d-none d-md-table-cell" style="width: 4em;">번호</th>
                                <th><span>제목</span></th>
                                <th class="d-none d-md-table-cell" style="width: 11em;">작성일자</th>
                                <th class="d-none d-md-table-cell" style="width: 8em;">수정</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr v-for="board in page.boards" :key="board.bno" class="center">
                                <td>{{ board.bno }}</td>
                                <td>
                                    <RouterLink :to="`/Board/BoardDetail?bno=${board.bno}&pageNo=${pageNo}`"
                                        style="color: black;"> {{ board.btitle }}
                                    </RouterLink>
                                </td>
                                <td> {{ board.bcreatedat }}</td>
                                <td>
                                    <RouterLink :to="`/Board/BoardUpdate?bno=${board.bno}&pageNo=${pageNo}`"><button
                                            class="btn btn-outline-light btn-sm me-2">수정</button>
                                    </RouterLink>

                                    <button class="btn btn-outline-light btn-sm"
                                        @click="deleteBoard(pageNo,board.bno)">삭제</button>

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
import { onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import BoardAPI from '@/apis/BoardAPI';
import MemberAPI from '@/apis/MemberAPI';

const store = useStore();
const route = useRoute();
const router = useRouter();
const pageNo = ref(route.query.pageNo || 1);

const page = ref({
    boards: [],
    pager: {}
});

async function myBoardList(pageNo) {
    try {
        console.log("myBoardList : " + pageNo);
        const response = await MemberAPI.myBoardList(pageNo);
        console.log(response.data.board);
        page.value.boards = response.data.board;
        page.value.pager = response.data.pager;

    } catch (error) {
        console.log(error);
    }
}

myBoardList(pageNo.value);

async function deleteBoard(pageNo,bno) {
    try {
        await BoardAPI.deleteBoard(bno);    
        myBoardList(pageNo);

    } catch (error) {
        console.log(error);
    }
}

// 페이저의 버튼을 클릭했을 때 해당 페이지로 이동하는 함수 정의
function changePageNo(argPageNo) {
    console.log(argPageNo);
    router.push(`/Member/MyPage/MyBoardList?pageNo=${argPageNo}`);
}

// 요청 경로 변경을 감시
watch(
    route, (newRoute, oldRoute) => {
        if (newRoute.query.pageNo) {
            myBoardList(newRoute.query.pageNo);
            pageNo.value = newRoute.query.pageNo;
        } else {
            myBoardList(1);
            pageNo.value = 1;
        }
    }
);
</script>

<style scoped>
.center {
    text-align: center;
}

.btn {
    background-color: #F37551;
    color: white;
    border-radius: 0px;
}
</style>