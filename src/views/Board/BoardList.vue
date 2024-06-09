<template>
    <div class="board-list">


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



        <div class="container" style="width: 100%; height:100%;">
            <!--  border:1px solid black; -->
            <div class="text-end" style="width: 100%; height: 30px;">

                <RouterLink to="/Board/Write">
                    <button class="btn btn-success btn-sm"> 글쓰기</button>
                </RouterLink>
            </div>

            <div style="width: 100%; height:100%; ">
                <!-- border:1px solid black; -->

                <table class="table mt-2">
                    <thead style="border-bottom: 1px solid black">
                        <!-- class="text-center" -->
                        <th style="width:70px">번호</th>
                        <th >제목</th>
                        <th  style="width:150px">글쓴이</th>
                        <th  style="width:120px">날짜</th>
                        <th  style="width:70px">조회수</th>
                    </thead>
                    <tbody>
                        <!--class="text-center"  -->
                        <tr >
                            <td >21560</td>
                            <RouterLink to="./BoardComment" style="text-decoration: none;">
                                <td >현재 이런 상황에 대한 반응들</td>
                            </RouterLink>
                            <td >매번 긍정일순 없어</td>
                            <td>2024-06-05</td>
                            <td>4</td>
                        </tr>
                         <tr>
                            <td>21309</td>
                            <td>이 글을 보시게된다면 저에게...</td>
                            <td >나는야 나비</td>
                            <td>2024-06-05</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td >21100</td>
                            <td >굉장한 메리트가 있는 이런거 보셨나요...</td>
                            <td >말왕 탕후루</td>
                            <td>2024-06-07</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td >21222</td>
                            <td>강의실에서 인싸되는 방법</td>
                            <td >야삐</td>
                            <td>2024-06-04</td>
                            <td>206</td>
                        </tr>
                        <tr>
                            <td >21219</td>
                            <td >탕후루와 마라탕은 무슨관계인가..</td>
                            <td >탕후루루룩</td>
                            <td>2024-06-05</td>
                            <td>21</td>
                        </tr>

                        <tr>
                            <td >30120</td>
                            <td >나 응모 당첨 100%인 썰 풀어본다..</td>
                            <td >응모왕</td>
                            <td>2024-06-05</td>
                            <td>603</td>
                        </tr>
                        <tr>
                            <td >29304</td>
                            <td >미션에 관한 정답 모음집..</td>
                            <td >미션만 한다</td>
                            <td>2024-06-08</td>
                            <td>22</td>
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

            </div>

        </div>


    </div>





</template>


<script setup>


</script>


<style scoped>
.table td, .table th,.table tr {
    text-align: center;
    vertical-align: middle; /* 세로 중앙 정렬 */
    padding: 15px 5px;
    border: none;
}
</style>