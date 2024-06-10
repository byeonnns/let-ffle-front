<template>
    <div>
        <div class="d-flex container">
            <div class="p-3 mt-3" style="width:180px">
                <BoardNavbar/>
            </div>
            <div class="d-flex flex-column flex-grow-1">
                <div style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; margin-top: 30px">
                    <h3 style="margin-right: 80%;">공지사항</h3>
                </div>
                <div style="width: 100%; height:60px;">
                    <!-- border:1px solid black; -->
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="search" aria-label="Recipient's username"
                            aria-describedby="button-addon2">
                        <button class="btn btn-outline-light" type="button" id="button-addon2">검색</button>
                    </div>

                </div>

                <div style="width: 100%; height:100px; margin-bottom: 10px;">
                    <!-- border:1px solid black; -->
                    <table class="table table-bordered">
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <RouterLink to="/Board/BoardList?category=service">
                                        <span class="spanded">전체</span>
                                    </RouterLink>
                                </td>
                                <td>
                                    <RouterLink to="/Notice/BoardDetail">
                                        <span class="spanded">서비스</span>
                                    </RouterLink>
                                </td>
                                <td>
                                    <RouterLink to="/Board/BoardComment">
                                        <span class="spanded">이벤트</span>
                                    </RouterLink>
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    <RouterLink to="/Board/BoardComment">
                                        <span class="spanded">공지</span>
                                    </RouterLink>
                                </td>
                                <td>

                                    <RouterLink to="/Board/BoardComment">
                                        <span class="spanded">기타</span>
                                    </RouterLink>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>



                <div style="width: 100%; height:100%; margin-top: 10px; ">
                    <!--  border:1px solid black; -->


                    <div style="width: 100%; height:100%; ">

                        <table class="table mt-2 linebd">

                            <tbody>
                                <tr>
                                    <td class="text-center">공지</td>
                                    <td>
                                        <RouterLink to="/Notice/BoardDetail"
                                            style="text-decoration: none; color: black">6월
                                            공휴일
                                            휴무에 따른 거래 및
                                            정산일정안내</RouterLink>
                                    </td>
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
                                        <button class="btn btn-outline-light btn-sm me-1">처음</button>
                                        <button class="btn btn-outline-light btn-sm me-1">이전</button>
                                        <button class="btn btn-outline-light btn-sm me-1">1,2,3,4,5 </button>
                                        <button class="btn btn-outline-light btn-sm me-1">다음</button>
                                        <button class="btn btn-outline-light btn-sm">맨끝</button>
                                    </td>


                                </tr>
                            </tbody>

                        </table>

                    </div>

                </div>

            </div>
        </div>

    </div>





</template>


<script setup>
import BoardNavbar from '../Board/BoardNavbar.vue';
</script>


<style scoped>
.table th,
.table tr {
    text-align: center;

}

.linebd th,
.linebd td {
    padding: 15px 5px;
}

.spanded {
    align-items: center;

    height: 100%;

}
</style>