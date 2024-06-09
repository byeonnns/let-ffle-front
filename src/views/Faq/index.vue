<template>
    <div class="board-list">

        <div class="mt-4">
            <BoardNavbar />
        </div>

        <div class="container" style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px;">
            <h3 style="margin-right: 80%; ">자주 묻는 질문</h3>
        </div>
        <div class="container" style="width: 100%; height:60px;">
            <!-- border:1px solid black; -->
            <!-- <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="search" aria-label="Recipient's username"
                    aria-describedby="button-addon2">
                <button class="btn btn-success" type="button" id="button-addon2">검색</button>
            </div> -->

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

                    </tr>
                </tbody>
                </thead>
            </table>
        </div>



        <div class="container" style="width: 100%; height:100%;">
            <!--  border:1px solid black; -->

          
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                            이용정책 패널티 정책
                        </button>
                    </h2>
                    <div id="collapse1" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="container " style="width: 100%;  height:500px;">
                                <!-- border:1px solid black  -->

                                <div class="border border-dark border-2 rounded-3" style="width: 100%;">
                                    <!-- border:1px solid black -->
                                    <div class="card">
                                        <div class="card-header">
                                            <p>공지 6월 공휴일 고객센터 운영 안내</p>
                                        </div>
                                        <div class="card-body">
                                            <p class="mt-3"> 안녕하세요 크림입니다 </p>
                                            <p>6월 공휴일 고객센터 운영시간 안내해 드립니다.</p>
                                            <p>휴무 | 2024년 6월 6일 (목)</p>
                                            <p>*휴무 기간 남겨주신 문의는 익일부터 순차적으로 답변 드릴 예정입니다.</p>
                                            <p>감사합니둥.</p>

                                            <!-- <div style="width: 100%; border:1px solid black; height:100px;"> -->
                                            <button class="btn btn-success btn-sm" style="margin-top: 40px;"
                                                @click="AnnouncementHandle()">목록 보기</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                          <p></p>  이용정책
                        </button>
                    </h2>
                    <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="container " style="width: 100%;  height:500px;">
                                <!-- border:1px solid black  -->

                                <div class="border border-dark border-2 rounded-3" style="width: 100%;">
                                    <!-- border:1px solid black -->
                                    <div class="card">
                                        <div class="card-header">
                                            <p>공지 6월 공휴일 고객센터 운영 안내</p>
                                        </div>
                                        <div class="card-body">
                                            <p class="mt-3"> 안녕하세요 크림입니다 </p>
                                            <p>6월 공휴일 고객센터 운영시간 안내해 드립니다.</p>
                                            <p>휴무 | 2024년 6월 6일 (목)</p>
                                            <p>*휴무 기간 남겨주신 문의는 익일부터 순차적으로 답변 드릴 예정입니다.</p>
                                            <p>감사합니둥.</p>

                                            <!-- <div style="width: 100%; border:1px solid black; height:100px;"> -->
                                            <button class="btn btn-success btn-sm" style="margin-top: 40px;"
                                                @click="AnnouncementHandle()">목록 보기</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    </div>





</template>


<script setup>
import BoardNavbar from '../Board/BoardNavbar.vue';
</script>


<style scoped></style>