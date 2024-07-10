<template>
    <div>
        <div class="board-list container">
            <div
                style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; margin-top: 10px">
                <h3>자유 게시판</h3>
            </div>
            <div style="width: 100%; height:100%;">
                <div style="width: 100%; height:100%; ">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex mt-1">
                            <h6 class="me-3 freeHover" :class="sortType === '' ? 'activeColor' : ''"
                                @click="categorySearch('')">전체</h6>
                            <h6 class="me-3 freeHover" :class="sortType === '자유' ? 'activeColor' : ''"
                                @click="categorySearch('자유')">자유</h6>
                            <h6 class="freeHover" :class="sortType === '당첨후기' ? 'activeColor' : ''"
                                @click="categorySearch('당첨후기')">당첨 후기</h6>
                        </div>
                        <button v-if="$store.state.mid !== ''" class="btn btn-outline-light btn-sm ms-3 rounded-0"
                            style="background-color: #F37551;">
                            <RouterLink to="/Board/WriteBoard" style="color: white;">글쓰기</RouterLink>
                        </button>
                    </div>
                    <table class="table mt-2">
                        <thead style="border-bottom: 1px solid #ebebeb">
                            <th style="width:80px">글번호</th>
                            <th>제목</th>
                            <th style="width:170px">글쓴이</th>
                            <th style="width:200px">날짜</th>
                            <th style="width:80px">조회수</th>
                        </thead>
                        <tbody v-if="page.boards.length != 0">
                            <tr v-for="board in page.boards" :key="board.bno">
                                <td>{{ board.bno }}</td>
                                <RouterLink :to="`/Board/BoardDetail?bno=${board.bno}&pageNo=${pageNo}`"
                                    style="text-decoration: none;">
                                    <td>[{{ board.bcategory }}] {{ board.btitle }}</td>
                                </RouterLink>
                                <td> {{ board.mid }}</td>
                                <td> {{ formatDate(board.bcreatedat) }} </td>
                                <td> {{ board.bhitcount }} </td>
                            </tr>
                            <tr>
                                <td colspan="5" class="text-center">
                                    <button @click="changePageNo(1)" class="btn pagerbtn">처음</button>
                                    <button v-if="page.pager.groupNo > 1"
                                        @click="changePageNo(page.pager.startPageNo - 1)"
                                        class="btn pagerbtn">이전</button>
                                    <button v-for="pageNo in page.pager.pageArray" :key="pageNo"
                                        @click="changePageNo(pageNo)"
                                        :class="(page.pager.pageNo == pageNo) ? 'btn-danger' : 'btn-outline-success'"
                                        class="btn pagerbtn">{{ pageNo }}</button>
                                    <button v-if="page.pager.groupNo < page.pager.totalGroupNo"
                                        @click="changePageNo(page.pager.endPageNo + 1)" class="btn pagerbtn">다음</button>
                                    <button @click="changePageNo(page.pager.totalPageNo)"
                                        class="btn pagerbtn">맨끝</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div v-if="page.boards.length == 0" class="text-center align-content-center" style="height: 400px;">
                        <div>
                            등록된 게시글이 없습니다.
                        </div>
                    </div>
                    <div style="width: 32%; height:60px;" class="container">
                        <div class="input-group" style="align-content: center;">
                            <select id="selectOption" class="me-3" v-model="searchType">
                                <option value="title" selected>제목</option>
                                <option value="content">내용</option>
                                <option value="nickname">닉네임</option>
                                <option value="titleOrContet">제목 + 내용</option>
                            </select>
                            <input type="text" class="form-control" aria-label="Recipient's username"
                                aria-describedby="button-addon2" v-model="searchWord"
                                @keyup.enter="getBoardList(1, searchType, searchWord)">
                            <button class="btn btn-outline-light ms-2 rounded-0" type="button"
                                @click="getBoardList(1, searchType, searchWord)">검색</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import BoardAPI from '@/apis/BoardAPI';
import { useStore } from 'vuex';

const router = useRouter();
const route = useRoute();
const searchType = ref('title');
const searchWord = ref();
const store = useStore();

async function categorySearch(type) {
    try {
        if (type === '') {
            sortType.value = type;
            getBoardList(pageNo.value)
        }
        else {
            const response = await BoardAPI.categorySearch(type);
            page.value.boards = response.data.board;
            page.value.pager = response.data.pager;
            sortType.value = type;
        }
    } catch (error) {
        console.log(error);
    }
}

const pageNo = ref(route.query.pageNo || 1);
const page = ref({
    boards: [],
    pager: {}
});

async function getBoardList(pageNo, searchType = '', word = '') {
    try {
        const response = await BoardAPI.getBoardList(pageNo, searchType, word);
        page.value.boards = response.data.board;
        page.value.pager = response.data.pager;

    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getBoardList(pageNo.value);
})

function changePageNo(argPageNo) {
    router.push(`/Board/BoardList?pageNo=${argPageNo}`);
}

watch(
    route, (newRoute, oldRoute) => {
        if (newRoute.query.pageNo) {
            getBoardList(newRoute.query.pageNo);
            pageNo.value = newRoute.query.pageNo;

        } else {
            getBoardList(1);
            pageNo.value = 1;


        }
    }
);

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const sortType = ref('')

</script>


<style scoped>
.table td,
.table th,
.table tr {
    text-align: center;
    vertical-align: middle;
    /* 세로 중앙 정렬 */
    padding: 15px 5px;
    border: none;
}

.pagerbtn {
    color: black;
    margin-left: 7px;
    border: none;
    background-color: white;
}

.freeHover:hover {
    cursor: pointer;
    color: #FF5C35;
}

.activeColor {
    color: #FF5C35 !important
}
</style>