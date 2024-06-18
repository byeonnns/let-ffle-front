<template>
    <div>
        <div class="board-list container">
            <div
                style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; margin-top: 10px">
                <h3>자유 게시판</h3>
            </div>
            <div style="width: 100%; height:100%;">
                <!--  border:1px solid black; -->
                <div style="width: 100%; height:100%; ">
                    <!-- border:1px solid black; -->
                    <div>
                        <button class="btn me-2" style="background-color: white; color:black;">일반</button>
                        <button class="btn" style="background-color: white; color:black;">당첨 후기</button>
                    </div>

                    <table class="table mt-2">
                        <thead style="border-bottom: 1px solid #ebebeb">
                            <!-- class="text-center" -->
                            <th style="width:80px">분류</th>
                            <th>제목</th>
                            <th style="width:150px">글쓴이</th>
                            <th style="width:120px">날짜</th>
                            <th style="width:70px">조회수</th>
                        </thead>
                        <tbody>
                            <!--class="text-center"  -->
                            <tr>
                                <td>자유</td>
                                <RouterLink to="./BoardDetail" style="text-decoration: none;">
                                    <td>현재 이런 상황에 대한 반응들</td>
                                </RouterLink>
                                <td>매번 긍정일순 없어</td>
                                <td>2024-06-05</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>자유</td>
                                <td>이 글을 보시게된다면 저에게...</td>
                                <td>나는야 나비</td>
                                <td>2024-06-05</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>자유</td>
                                <td>굉장한 메리트가 있는 이런거 보셨나요...</td>
                                <td>말왕 탕후루</td>
                                <td>2024-06-07</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>자유</td>
                                <td>강의실에서 인싸되는 방법</td>
                                <td>야삐</td>
                                <td>2024-06-04</td>
                                <td>206</td>
                            </tr>
                            <tr>
                                <td>자유</td>
                                <td>탕후루와 마라탕은 무슨관계인가..</td>
                                <td>탕후루루룩</td>
                                <td>2024-06-05</td>
                                <td>21</td>
                            </tr>

                            <tr>
                                <td>당첨후기</td>
                                <td>나 응모 당첨 100%인 썰 풀어본다..</td>
                                <td>응모왕</td>
                                <td>2024-06-05</td>
                                <td>603</td>
                            </tr>
                            <tr>
                                <td>당첨후기</td>
                                <td>미션에 관한 정답 모음집..</td>
                                <td>미션만 한다</td>
                                <td>2024-06-08</td>
                                <td>22</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-end mb-2">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-grow-1 justify-content-center ms-5">
                                <button class="btn btn-outline-light btn-sm me-1"
                                    style="background-color: white; color:black;">처음</button>
                                <button class="btn btn-outline-light btn-sm me-3"
                                    style="background-color: white; color:black;">이전</button>
                                <button class="btn btn-outline-light btn-sm me-1"
                                    style="background-color: white; color:black;">1</button>
                                <button class="btn btn-outline-light btn-sm me-1"
                                    style="background-color: white; color:black;">2</button>
                                <button class="btn btn-outline-light btn-sm me-1"
                                    style="background-color: white; color:black;">3</button>
                                <button class="btn btn-outline-light btn-sm me-1"
                                    style="background-color: white; color:black;">4</button>
                                <button class="btn btn-outline-light btn-sm me-3"
                                    style="background-color: white; color:black;">5</button>
                                <button class="btn btn-outline-light btn-sm me-1"
                                    style="background-color: white; color:black;">다음</button>
                                <button class="btn btn-outline-light btn-sm"
                                    style="background-color: white; color:black;">맨끝</button>
                            </div>
                            <button class="btn btn-outline-light btn-sm ms-3" style="background-color: #F37551;">
                                <RouterLink to="/Board/WriteBoard" style="color: white;">글쓰기</RouterLink>
                            </button>
                        </div>
                    </div>
                    <div style="width: 32%; height:60px;" class="container">
                        <!-- border:1px solid black; -->
                        <div class="input-group" style="align-content: center;">
                            <select id="selectOption" class="me-3">
                                <option value="title">제목</option>
                                <option value="content">내용</option>
                                <option value="nickname">닉네임</option>
                                <option value="title">제목 + 내용</option>
                            </select>
                            <input type="text" class="form-control" aria-label="Recipient's username"
                                aria-describedby="button-addon2">
                            <button class="btn btn-outline-light ms-2" type="button" id="button-addon2">검색</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>


<script setup>


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

.btn {
    color: black;
}
</style>