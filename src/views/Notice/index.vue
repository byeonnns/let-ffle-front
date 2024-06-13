<template>
    <div>
        <div class="container">
            <div class="d-flex flex-column flex-grow-1">
                <div
                    style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; margin-top: 10px">
                    <h3>공지사항</h3>
                </div>

                <div style="width: 100%; height:60px; margin-bottom: 10px; margin-top: 10px;">
                    <!-- border:1px solid black; -->
                    <table class="table table-bordered">
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="width: 25%;">
                                    <RouterLink to="/Board/BoardList?category=service">
                                        <span class="spanded">전체</span>
                                    </RouterLink>
                                </td>
                                <td style="width: 25%;">
                                    <RouterLink to="/Notice/BoardDetail">
                                        <span class="spanded">공지</span>
                                    </RouterLink>
                                </td>
                                <td style="width: 25%;">
                                    <RouterLink to="/Board/BoardComment">
                                        <span class="spanded">당첨자 발표</span>
                                    </RouterLink>
                                </td>
                                <td style="width: 25%;">
                                    <RouterLink to="/Board/BoardComment">
                                        <span class="spanded">서비스</span>
                                    </RouterLink>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>



                <div style="width: 100%; height:100%;  ">
                    <!--  border:1px solid black; -->


                    <!-- <div style="width: 100%; height:100%; "> -->

                    <table class="table linebd">

                        <tbody>
                            <tr>
                                <td class="text-center">공지</td>
                                <td>
                                    <RouterLink to="/Notice/NoticeDetail" style="text-decoration: none; color: black">6월
                                        공휴일
                                        휴무에 따른 거래 및
                                        정산일정안내</RouterLink>
                                </td>
                                <td>2024-06-11</td>
                            </tr>
                            <tr>
                                <td class="text-center">당첨자 발표</td>
                                <td>[안내] Draq-시엔느 응모</td>
                                <td>2024-06-11</td>
                            </tr>
                            <tr>
                                <td class="text-center">공지</td>
                                <td>보관안내</td>
                                <td>2024-06-11</td>
                            </tr>
                            <tr>
                                <td class="text-center">서비스</td>
                                <td>검수 지연안내</td>
                                <td>2024-06-11</td>
                            </tr>
                            <tr>
                                <td class="text-center">당첨자 발표</td>
                                <td>보관 판매 신청 재개 안내</td>
                                <td>2024-06-11</td>
                            </tr>

                            <tr>
                                <td class="text-center">공지</td>
                                <td>보관판매 불가능</td>
                                <td>2024-06-11</td>
                            </tr>
                            <tr>
                                <td class="text-center">전체</td>
                                <td>우리조는 야삐</td>
                                <td>2024-06-11</td>
                            </tr>

                            <tr>
                                <td colspan="5" class="text-center">
                                    <button class="btn btn-outline-light btn-sm me-1">처음</button>
                                    <button class="btn btn-outline-light btn-sm me-3">이전</button>
                                    <button class="btn btn-outline-light btn-sm me-1">1</button>
                                    <button class="btn btn-outline-light btn-sm me-1">2</button>
                                    <button class="btn btn-outline-light btn-sm me-1">3</button>
                                    <button class="btn btn-outline-light btn-sm me-1">4</button>
                                    <button class="btn btn-outline-light btn-sm me-3">5</button>
                                    <button class="btn btn-outline-light btn-sm me-1"> 다음</button>
                                    <button class="btn btn-outline-light btn-sm">맨끝</button>
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

.btn{
    color: black;
}
</style>