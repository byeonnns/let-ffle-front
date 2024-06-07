<template>
    <div class="board-list">
        <div class="container" style="border:1px solid black; width: 10%;">
            <nav>
                <h5>게시판</h5>
                <ul>
                    <li>공지사항</li>
                    <li>질문</li>
                    <li>검수기준</li>
                </ul>
            </nav>
        </div>
            
        <div class="container" style="width: 100%; height:50px; border-bottom:3px solid orange; margin-bottom: 10px;">
            <h3 style="margin-right: 80%; color: white">공지사항</h3>
        </div>
        <div class="container" style="width: 100%; height:60px;">
            <!-- border:1px solid black; -->
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="search" aria-label="Recipient's username"
                    aria-describedby="button-addon2">
                <button class="btn btn-success" type="button" id="button-addon2">검색</button>
            </div>

        </div>

        <div class="container" style="width: 100%; height:100px; margin-bottom: 10px;">
            <!-- border:1px solid black; -->
            <table class="table table-bordered">
                <thead>
                <tbody>
                    <td>
                        <button class="btn btn-outline-dark btn-sm" style="width: 100%; border: none;outline:none;">전체
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-outline-dark btn-sm"
                            style="width: 100%; border: none;outline:none; ">서비스</button>
                    </td>
                    <td>
                        <button class="btn btn-outline-dark btn-sm"
                            style="width: 100%;  border: none;outline:none; ">이벤트</button>
                    </td>
                    <tr>

                        <td>
                            <button class="btn btn-outline-dark btn-sm"
                                style="width: 100%;  border: none;outline:none;">공지</button>
                        </td>
                        <td>
                            <button class="btn btn-outline-dark btn-sm"
                                style="width: 100%; border: none;outline:none; ">기타</button>
                        </td>
                        <td>
                            <button class="btn btn-outline-dark btn-sm"
                                style="width: 100%;  border: none;outline:none; ">글쓰기</button>
                        </td>
                    </tr>
                </tbody>
                </thead>
            </table>
        </div>



        <div class="container" style="width: 100%; height:500px;">
            <!--  border:1px solid black; -->

            <div style="width: 100%; height:500px; ">
                <!-- border:1px solid black; -->
                 <table class="table table-bordered mt-2">
                      <!-- <thead>
                         <th class="text-center" style="width:70px">번호</th>
                        <th class="text-center">제목</th> 
                         <th class="text-center" style="width:90px">글쓴이</th>
                                <th class="text-center" style="width:120px">날짜</th>
                                <th class="text-center" style="width:70px">조회수</th> 

                    </thead>    -->
                    <tbody>
                        <tr>
                            <td class="text-center">공지</td>
                            <td>6월 공휴일 휴무에 따른 거래 및 정산일정안내</td>
                        </tr>
                        <tr>
                            <td class="text-center">공지</td>
                            <td>[안내] Draq-시엔느 응모</td>
                        </tr>
                        <tr>
                            <td class="text-center">공지</td>
                            <td>보관안내</td>
                        </tr>
                        <tr>
                            <td class="text-center">공지</td>
                            <td>검수 지연안내</td>
                        </tr>
                        <tr>
                            <td class="text-center">공지</td>
                            <td>보관 판매 신청 재개 안내</td>
                        </tr>

                        <tr>
                            <td class="text-center">공지</td>
                            <td>보관판매 불가능</td>
                        </tr>
                        <tr>
                            <td class="text-center">공지</td>
                            <td>우리조는 야삐</td>
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
</script>


<style scoped></style>