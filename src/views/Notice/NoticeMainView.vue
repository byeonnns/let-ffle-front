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
                                    <RouterLink to="#">
                                        <span class="spanded">전체</span>
                                    </RouterLink>
                                </td>
                                <td style="width: 25%;">
                                    <RouterLink to="#">
                                        <span class="spanded">공지</span>
                                    </RouterLink>
                                </td>
                                <td style="width: 25%;">
                                    <RouterLink to="#">
                                        <span class="spanded">당첨자 발표</span>
                                    </RouterLink>
                                </td>
                                <td style="width: 25%;">
                                    <RouterLink to="#">
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
                                <td class="table_category text-cr" >공지</td>
                                <td class="table_title">
                                    <RouterLink to="/Notice/NoticeDetail" style="text-decoration: none; color: black">6월
                                        공휴일
                                        휴무에 따른 거래 및
                                        정산일정안내</RouterLink>
                                </td>
                                <td>2024-06-11</td>
                            </tr>
                            <tr>
                                <td class="table_category text-cr">당첨자 발표</td>
                                <td class="table_title">Draq-시엔느 응모</td>
                                <td>2024-06-11</td>
                            </tr>
                            <tr>
                                <td class="table_category text-cr">공지</td>
                                <td class="table_title">보관안내</td>
                                <td>2024-06-11</td>
                            </tr>
                            <tr>
                                <td class="table_category text-cr">서비스</td>
                                <td class="table_title">검수 지연안내</td>
                                <td>2024-06-11</td>
                            </tr>
                            <tr>
                                <td class="table_category text-cr">당첨자 발표</td>
                                <td class="table_title">보관 판매 신청 재개 안내</td>
                                <td>2024-06-11</td>
                            </tr>

                            <tr>
                                <td class="table_category text-cr">공지</td>
                                <td class="table_title">보관판매 불가능</td>
                                <td>2024-06-11</td>
                            </tr>
                            <tr>
                                <td class="table_category text-cr">공지</td>
                                <td class="table_title">우리조는 야삐</td>
                                <td>2024-06-11</td>
                            </tr>

                            <tr>
                                <td colspan="5" class="text-center">
                                    <button class="btn btn-outline-light btn-sm me-1" style="background-color: white; color:black;">처음</button>
                                    <button class="btn btn-outline-light btn-sm me-3" style="background-color: white; color:black;">이전</button>
                                    <button class="btn btn-outline-light btn-sm me-1" style="background-color: white; color:black;">1</button>
                                    <button class="btn btn-outline-light btn-sm me-1" style="background-color: white; color:black;">2</button>
                                    <button class="btn btn-outline-light btn-sm me-1" style="background-color: white; color:black;">3</button>
                                    <button class="btn btn-outline-light btn-sm me-1" style="background-color: white; color:black;">4</button>
                                    <button class="btn btn-outline-light btn-sm me-3" style="background-color: white; color:black;">5</button>
                                    <button class="btn btn-outline-light btn-sm me-1" style="background-color: white; color:black;"> 다음</button>
                                    <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">맨끝</button>
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
.text-cr{
    color: #F37551;
}
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
    color: black;

}

.btn{
    color: black;
    border: none;
}

.table_category {
    text-align: start;
}

.table_title {
    text-align: start;
}
</style>