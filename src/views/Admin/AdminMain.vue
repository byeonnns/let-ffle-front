<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>Dashboard</h3>
            </div>
            <div class="d-flex text-center">
                <div class="col">
                    <h3>전체 래플</h3>
                    <h5>1</h5>
                </div>
                <div class="col">
                    <h3>진행 중인 래플</h3>
                    <h5>1</h5>
                </div>
                <div class="col">
                    <h3>종료된 래플</h3>
                    <h5>1</h5>
                </div>
            </div>
            <table class="table text-center table-bordered">
                <thead>
                    <tr>
                        <td colspan="4" class="text-white text-start px-3" style="background-color: #F37551;">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="m-0">
                                    래플 현황
                                </h5>
                                <h6 class="m-0">
                                    최종 업데이트 일시 : 2024-06-04 20:56
                                </h6>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="col">구분</th>
                        <th scope="col">래플 수</th>
                        <th scope="col">참여자 수</th>
                        <th scope="col">바로가기</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="bg-light">전체</td>
                        <td>12</td>
                        <td>12</td>
                        <td><button class="btn btn-sm">이동</button></td>
                    </tr>
                    <tr>
                        <td class="bg-light">Sports</td>
                        <td>34</td>
                        <td>34</td>
                        <td><button class="btn btn-sm">이동</button></td>
                    </tr>
                    <tr>
                        <td class="bg-light">Art</td>
                        <td>56</td>
                        <td>56</td>
                        <td><button class="btn btn-sm">이동</button></td>
                    </tr>
                    <tr>
                        <td class="bg-light">Fashion</td>
                        <td>78</td>
                        <td>78</td>
                        <td><button class="btn btn-sm">이동</button></td>
                    </tr>
                </tbody>
            </table>


            <div>
                <div class="w-100">
                    <div class="col-sm-8" style="background-color: #F37551;">
                        <div class="sub1 ms-4 mt-2">
                            <h5 class="subheading">래플 현황</h5>
                        </div>
                        <div class="sub2 mt-2">
                            <span class="subheading2">최종 업데이트 일시 : </span>
                            <span class="sub-update-date">2024-06-04 19:35</span>
                        </div>
                    </div>

                </div>

                <div class="title_block d-flex w-100">
                    <div class="col-sm-2 info">
                        <h6 class="sub_tit">구분</h6>
                    </div>
                    <div class="col-sm-2 info">
                        <h6 class="sub_tit">래플 수</h6>
                    </div>
                    <div class="col-sm-2 info">
                        <h6 class="sub_tit">참여자 수</h6>
                    </div>
                    <div class="col-sm-2 info">
                        <h6 class="sub_tit">바로가기</h6>
                    </div>
                </div>

                <div class="item1_block d-flex">
                    <div class="col-sm-2 item_tit">
                        <h6 class="sub_tit">스포츠/야구</h6>
                    </div>
                    <div class="col-sm-2 info">
                        <span>7</span>
                    </div>
                    <div class="col-sm-2 info">
                        <span>128</span>
                    </div>
                    <div class="col-sm-2 info">
                        <RouterLink to="/Raffle">
                            <button type="button" class="btn btn-outline-light" onclick="location.href='#'">
                                래플 바로가기
                            </button>
                        </RouterLink>
                    </div>
                </div>

                <div class="item2_block d-flex">
                    <div class="col-sm-2 item_tit">
                        <h6 class="sub_tit">스포츠/축구</h6>
                    </div>
                    <div class="col-sm-2 info">
                        <span>4</span>
                    </div>
                    <div class="col-sm-2 info">
                        <span>62</span>
                    </div>
                    <div class="col-sm-2 info">
                        <RouterLink to="/Raffle">
                            <button type="button" class="btn btn-outline-light" onclick="location.href='#'">
                                래플 바로가기
                            </button>
                        </RouterLink>
                    </div>
                </div>

                <div class="item3_block d-flex">
                    <div class="col-sm-2 item_tit">
                        <h6 class="sub_tit">패션/의류</h6>
                    </div>
                    <div class="col-sm-2 info">
                        <span>11</span>
                    </div>
                    <div class="col-sm-2 info">
                        <span>307</span>
                    </div>
                    <div class="col-sm-2 info">
                        <RouterLink to="/Raffle">
                            <button type="button" class="btn btn-outline-light" onclick="location.href='#'">
                                래플 바로가기
                            </button>
                        </RouterLink>
                    </div>
                </div>

                <div class="item3_block d-flex">
                    <div class="col-sm-2 item_tit">
                        <h6 class="sub_tit">패션/신발</h6>
                    </div>
                    <div class="col-sm-2 info">
                        <span>2</span>
                    </div>
                    <div class="col-sm-2 info">
                        <span>90</span>
                    </div>
                    <div class="col-sm-2 info">
                        <RouterLink to="/Raffle">
                            <button type="button" class="btn btn-outline-light" onclick="location.href='#'">
                                래플 바로가기
                            </button>
                        </RouterLink>
                    </div>
                </div>
            </div>

            <div class="desc_block mt-2">
                <h5 class="desc_title">
                    대시보드
                </h5>
                <h5 class="desc">
                    - 래플 유형 별로 등록된 래플 수, 참여자 수를 확인할 수 있습니다.
                </h5>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');


.headingArea {
    position: relative;
    padding: 22px 0 0;
    margin: 0 0 20px;
}

.headingArea .title {
    border-bottom: 2px solid #2a3954;
}

#itemTitle {
    font-weight: 900;
    font-size: 1.6rem;
}


.contents {
    padding: 15px 14px;
    border: 1px solid #d9dadc;
}

.sub1 {
    width: 150px;
    display: inline-block;
}

.sub2 {
    width: 300px;
    display: inline-block;
}

.subheading {
    font-weight: 700;
    color: white;
}

.subheading2 {
    font-weight: 500;
    color: white;
    font-size: 0.9rem;
    text-align: right;
}

.sub-update-date {
    color: white;
    text-align: right
}

.sub {
    display: flex;
    background-color: dark;
    min-height: 5vh;
}

.title_block .info {
    padding: 5px;
    border: 1px solid #8d8d8d;
    text-align: center;
    background-color: #d8dce3;
}

/* item1 block ------------------------------ */
.item1_block .item_tit {
    padding: 20px;
    border: 1px solid #8d8d8d;
    background-color: #f5f5f5;
    text-align: center;
}

.item1_block .info {
    padding: 10px;
    border: 1px solid #8d8d8d;
    text-align: center;
}

.item1_block1 .sub_tit {
    margin-top: 13px;
    display: block;
    color: black;
    font-weight: 400;
}

.item1_block .order_todayTotal {
    border-bottom: 1px solid #db4416;
    line-height: 2;
    color: #db4416;
    font-weight: 600;
    font-size: 1.7rem;
}

.item1_block .order_monthTotal {
    border-bottom: 1px solid #0660cf;
    line-height: 2;
    color: #0660cf;
    font-weight: 600;
    font-size: 1.7rem;
}

.item1_block .order_totalSub {
    color: #8d8d8d;
    font-size: 0.9rem;
}

/* item2 block ------------------------------ */
.item2_block .item_tit {
    padding: 20px;
    border: 1px solid #8d8d8d;
    background-color: #f5f5f5;
    text-align: center;
}

.item2_block .info {
    padding: 10px;
    border: 1px solid #8d8d8d;
    text-align: center;
}

.item2_block .sub_tit {
    margin-top: 13px;
    display: block;
    color: black;
    font-weight: 400;
}

.item2_block .order_todayPayTotal {
    border-bottom: 1px solid #db4416;
    line-height: 2;
    color: #db4416;
    font-weight: 600;
    font-size: 1.7rem;
}

.item2_block .order_monthPayTotal {
    border-bottom: 1px solid #0660cf;
    line-height: 2;
    color: #0660cf;
    font-weight: 600;
    font-size: 1.7rem;
}

.item2_block .order_totalSub {
    color: #8d8d8d;
    font-size: 0.9rem;
}

/* item3 block ------------------------------ */
.item3_block .item_tit {
    padding: 20px;
    border: 1px solid #8d8d8d;
    background-color: #f5f5f5;
    text-align: center;
}

.item3_block .info {
    padding: 10px;
    border: 1px solid #8d8d8d;
    text-align: center;
}

.item3_block .sub_tit {
    margin-top: 13px;
    display: block;
    color: black;
    font-weight: 400;
}

.item3_block .order_todayCancelTotal {
    border-bottom: 1px solid #db4416;
    line-height: 2;
    color: #db4416;
    font-weight: 600;
    font-size: 1.7rem;
}

.item3_block .order_monthCancelTotal {
    border-bottom: 1px solid #0660cf;
    line-height: 2;
    color: #0660cf;
    font-weight: 600;
    font-size: 1.7rem;
}

.item3_block .order_totalSub {
    color: #8d8d8d;
    font-size: 0.9rem;
}

/* desc -----------------------------*/
.desc_block .desc_title {
    font-weight: 700;
    font-size: 1.1rem;
}

.desc_block .desc {
    font-weight: 400;
    font-size: 0.9rem;
}

td {
    align-content: center;
}

th {
    background-color: #d8dce3;
}
</style>