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
                        <thead >
                            <tr class="d-none d-md-table-row text-center">
                                <th class="d-none d-md-table-cell" style="width: 4em;">번호</th>
                                <th><span>게시글 제목</span></th>
                                <th class="d-none d-md-table-cell" style="width: 11em;">작성일자</th>
                                <th class="d-none d-md-table-cell" style="width: 8em;">바로가기</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr class="center">
                                <td>{{ boards.board.bno }}</td>
                                <td>{{ boards.board.btitle }}</td>
                                <td>{{ boards.board.bcreatedat }}</td>
                                <td>
                                    <RouterLink to="/Board/BoardDetail"><button
                                            class="btn btn-outline-light btn-sm">이동하기</button>
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
import { ref } from 'vue';


const boards = ref({
    board : [],
    pager : {}

});
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