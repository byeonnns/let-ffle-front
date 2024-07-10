<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <div class="d-flex flex-column ms-5" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                        <h4>내 게시글</h4>
                    </div>
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
                                <td> {{ formatDate(board.bcreatedat) }}</td>
                                <td>
                                    <RouterLink :to="`/Board/BoardUpdate?bno=${board.bno}&pageNo=${pageNo}`"><button
                                            class="btn btn-outline-light btn-sm me-2" style="background-color: #F37551; color: white;">수정</button>
                                    </RouterLink>
                                    <button class="btn btn-outline-light btn-sm" @click="deleteModal">삭제</button>
                                </td>
                            </tr>
                            <tr v-if="page.boards.length === 0">
                                <td colspan="5" class="non-center">
                                    <h4>작성된 게시물이 없습니다.</h4>
                                </td>
                            </tr>
                            <tr>
                                <td v-if="page.pager.totalPageNo > 0" colspan="5" class="text-center">
                                    <button @click="changePageNo(1)" class="btn pagerbtn">처음</button>
                                    <button v-if="page.pager.groupNo > 1"
                                        @click="changePageNo(page.pager.startPageNo - 1)"
                                        class="btn pagerbtn">이전</button>
                                    <button v-for="pageNo in page.pager.pageArray" :key="pageNo"
                                        @click="changePageNo(pageNo)"
                                        :class="(page.pager.pageNo == pageNo) ? 'thisPage' : ''"
                                        class="btn pagerbtn">{{ pageNo }}</button>
                                    <button v-if="page.pager.groupNo < page.pager.totalGroupNo"
                                        @click="changePageNo(page.pager.endPageNo + 1)" class="btn pagerbtn">다음</button>
                                    <button @click="changePageNo(page.pager.totalPageNo)"
                                        class="btn pagerbtn">맨끝</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- 삭제 모달 -->
    <Modal ref="DeleteBoardModal">
        <template v-slot:modalHeader>
            <h3>알림</h3>
        </template>

        <template v-slot:modalBody>
            정말 삭제하시겠습니까?
        </template>

        <template v-slot:modalFooter>
            <div v-for="board in page.boards" :key="board.bno">
                <button class="btn-modal btn btn-outline-light me-2" @click="deleteBoard(pageNo, board.bno)" data-bs-dismiss="modal">확인</button>
                <button class="btn-modal btn btn-outline-light" data-bs-dismiss="modal">닫기</button>
            </div>
        </template>
    </Modal>
    <RaffleToast ref="raffleToast" />
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BoardAPI from '@/apis/BoardAPI';
import MemberAPI from '@/apis/MemberAPI';
import RaffleToast from '@/components/RaffleToast.vue';
import Modal from '@/components/Modal.vue';

const raffleToast = ref(null);
const DeleteBoardModal = ref(null);
const route = useRoute();
const router = useRouter();
const pageNo = ref(route.query.pageNo || 1);
const page = ref({
    boards: [],
    pager: {}
});

function deleteModal() {
    DeleteBoardModal.value.showModal();
}

async function myBoardList(pageNo) {
    try {
        const response = await MemberAPI.myBoardList(pageNo);
        page.value.boards = response.data.board;
        page.value.pager = response.data.pager;

    } catch (error) {
        console.log(error);
    }
}
myBoardList(pageNo.value);

async function deleteBoard(pageNo, bno) {
    try {
        await BoardAPI.deleteBoard(bno);
        myBoardList(pageNo);
        raffleToast.value.showToast("게시글이 삭제되었습니다.");
    } catch (error) {
        console.log(error);
    }
}

// 페이저의 버튼을 클릭했을 때 해당 페이지로 이동하는 함수 정의
function changePageNo(argPageNo) {
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

</script>

<style scoped>
.center {
    text-align: center;
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

.table-cell {
    width: 25%;
    /* 모든 셀의 너비를 동일하게 설정 */
    text-align: center;
    /* 텍스트를 가운데 정렬 */
}

.no-boards {
    width: 100%;
    /* colspan 속성을 고려하여 전체 너비 설정 */
}

/* 작성된 게시글이 없을때 나오게끔 처리 */
.non-center {
    text-align: center;
    width: 100%;
    /* colspan 속성을 고려하여 전체 너비 설정 */
    height: 300px;
    /* 높이를 100px로 설정 (필요에 따라 조정 가능) */
    vertical-align: middle;
    /* 텍스트를 수직으로 가운데 정렬 */
}

.btn-modal {
    background-color: #f37551;
    color: white;
}
</style>