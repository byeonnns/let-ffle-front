<template>
    <div class="board-list">

        <div>
            <BoardNavbar />
        </div>
        <!--네비바 -->

        <!-- / -->
        <div class="container"
            style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; margin-top: 30px">
            <h3 style="margin-right: 80%;">자유 게시판</h3>
        </div>
        <div class="container" style="width: 100%; height:60px;">
            <!-- border:1px solid black; -->
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="search" aria-label="Recipient's username"
                    aria-describedby="button-addon2">
                <button class="btn btn-success" type="button" id="button-addon2">검색</button>
            </div>

        </div>



        <div class="container" style="width: 100%; height:500px;">
            <!--  border:1px solid black; -->
            <div class="text-end" style="width: 100%; height: 30px;">

                <RouterLink to="/Board/Write">
                    <button class="btn btn-success btn-sm"> 글쓰기</button>
                </RouterLink>
            </div>

            <div style="width: 100%; height:500px; ">
                <!-- border:1px solid black; -->
                <table class="table table-bordered mt-2">
                    <thead>
                        <th class="text-center" style="width:70px">번호</th>
                        <th class="text-center">제목</th>
                        <th class="text-center" style="width:150px">글쓴이</th>
                        <th class="text-center" style="width:120px">날짜</th>
                        <th class="text-center" style="width:70px">조회수</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-center">21309</td>
                            <td class="text-center">이 글을 보시게된다면 저에게...</td>
                            <td class="text-center">나는야 나비</td>
                            <td>2024-06-05</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td class="text-center">21100</td>
                            <td class="text-center">굉장한 메리트가 있는 이런거 보셨나요...</td>
                            <td class="text-center">말왕 탕후루</td>
                            <td>2024-06-07</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td class="text-center">21222</td>
                            <td class="text-center">강의실에서 인싸되는 방법</td>
                            <td class="text-center">야삐</td>
                            <td>2024-06-04</td>
                            <td>206</td>
                        </tr>
                        <tr>
                            <td class="text-center">21219</td>
                            <td class="text-center">탕후루와 마라탕은 무슨관계인가..</td>
                            <td class="text-center">탕후루루룩</td>
                            <td>2024-06-05</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td class="text-center">30120</td>
                            <td class="text-center">나 응모 당첨 100%인 썰 풀어본다..</td>
                            <td class="text-center">응모왕</td>
                            <td>2024-06-05</td>
                            <td>603</td>
                        </tr>

                        <tr>
                            <td class="text-center">29304</td>
                            <td class="text-center">미션에 관한 정답 모음집..</td>
                            <td class="text-center">미션만 한다</td>
                            <td>2024-06-08</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td class="text-center">21560</td>
                            <td class="text-center">현재 이런 상황에 대한 반응들</td>
                            <td class="text-center">매번 긍정일순 없어</td>
                            <td>2024-06-05</td>
                            <td>4</td>
                        </tr>

                        <tr>
                            <td colspan="5" class="text-end">
                                <button class="btn btn-outline-warning btn-sm me-1">처음</button>
                                <button class="btn btn-outline-dark btn-sm me-1">이전</button>
                                <button class="btn btn-sm me-1">1,2,3,4,5 </button>
                                <button class="btn btn-outline-dark btn-sm me-1">다음</button>
                                <button class="btn btn-outline-warning btn-sm">맨끝</button>
                            </td>


                        </tr>
                    </tbody>

                </table>




                <!-- <div style="margin-left: 55%">
                    <button class="btn btn-success btn-sm mt-2">글쓰기</button>
                </div> -->
            </div>

        </div>


    </div>





</template>


<script setup>
import BoardNavbar from './BoardNavbar.vue';

</script>


<style scoped></style>