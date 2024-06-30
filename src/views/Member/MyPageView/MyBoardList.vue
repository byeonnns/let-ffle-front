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
                                    <RouterLink :to="`/Board/BoardDetail?bno=${board.bno}&pageNo=${pageNo}`" style="color: black;"> {{ board.btitle }}
                                    </RouterLink>
                                </td>
                                <td> {{ board.bcreatedat }}</td>
                                <td>
                                    <RouterLink to="/Board/BoardDetail"><button
                                            class="btn btn-outline-light btn-sm me-2">수정</button>
                                    </RouterLink>

                                    <RouterLink to="/Member"><button class="btn btn-outline-light btn-sm">삭제</button>
                                    </RouterLink>
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
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import BoardAPI from '@/apis/BoardAPI';

const store = useStore();
const route = useRoute();
const pageNo = ref(route.query.pageNo || 1);

const page = ref({
    boards: [],
    pager: {}
});

async function myBoardList(pageNo) {
    try {
        const response = await BoardAPI.myBoardList(pageNo);
        page.value.board = response.data.boards;
        page.value.pager = response.data.pager;

    } catch (error) {
        console.log(error);
    }
}

myBoardList(pageNo.value);

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