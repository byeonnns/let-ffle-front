<template>
    <div class="board-list">

        <div>
            <BoardNavbar />
        </div>
        <div class="container"
            style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; margin-top: 30px">
            <h3 style="margin-right: 80%;">공지사항</h3>
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
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <RouterLink to="/Board/BoardList">
                                <button class="btn btn-outline-dark w-100" style="border: none;">전체
                                </button>
                            </RouterLink>
                        </td>
                        <td>
                            <RouterLink to="/Notice/BoardDetail">
                                <button class="btn btn-outline-dark w-100" style="border: none;"
                                    @click="sdfs">서비스</button>
                            </RouterLink>
                        </td>
                        <td>
                            <RouterLink to="/Board/BoardComment">
                                <button class="btn btn-outline-dark w-100"
                                    style="width: 100%;  border: none;outline:none; ">이벤트</button>
                            </RouterLink>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <button class="btn btn-outline-dark w-100"
                                style="width: 100%;  border: none;outline:none;">공지</button>
                        </td>
                        <td>

                            <button class="btn btn-outline-dark w-100"
                                style="width: 100%; border: none;outline:none;">기타</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>



        <div class="container" style="width: 100%; height:100%; margin-top: 30px; ">
            <!--  border:1px solid black; -->


            <div style="width: 100%; height:500px; ">
                
                
                <table class="table table-bordered mt-2">
                           <tbody>
                        <tr>
                            <td class="text-center">공지</td>
                            <td><RouterLink to="/Notice/BoardDetail">월 공휴일 휴무에 따른 거래 및 정산일정안내</RouterLink></td>
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

            </div> 

        </div>


    </div>





</template>


<script setup>
import BoardNavbar from '../Board/BoardNavbar.vue';
</script>


<style scoped></style>