<template>
    <div>
        <div class="d-flex">
            <MypageNavBar style="width: 180px;" />
            <div class="border d-flex flex-column" style="min-width: calc(100% - 180px);">
                <h3>당첨 내역</h3>
                <div class="content_area my-page-content flex-grow-1">
                    <div class="my_purchase">
                        <div class="v-portal" style="display: none;"></div>
                        <div class="purchase_list_tab detail_tab flex-container">
                            <div class="tab_item total">
                                <a href="#" class="tab_link">
                                    <dl class="tab_box">
                                        <dt class="title">전체</dt>
                                        <dd class="count">0</dd>
                                    </dl>
                                </a>
                            </div>
                            <div class="tab_item">
                                <a href="#" class="tab_link">
                                    <dl class="tab_box">
                                        <dt class="title">진행 중</dt>
                                        <dd class="count">0</dd>
                                    </dl>
                                </a>
                            </div>
                            <div class="tab_item">
                                <a href="#" class="tab_link">
                                    <dl class="tab_box">
                                        <dt class="title">종료</dt>
                                        <dd class="count">0</dd>
                                    </dl>
                                </a>
                            </div>
                        </div>
                        <div class="period_search">
                            <div class="period_month border mt-2">
                                <ul class="month_list container d-flex justify-content-center">
                                    <li class="month_item">
                                        <a href="#" class="month_link">최근 2개월</a>
                                    </li>
                                    <li class="month_item">
                                        <a href="#" class="month_link">4개월</a>
                                    </li>
                                    <li class="month_item">
                                        <a href="#" class="month_link">6개월</a>
                                    </li>
                                    <span class="ms-3">
                                        <li class="month_item">
                                            <input type="date" class="month_link">
                                        </li>
                                        <li class="month_item">
                                            <input type="date" class="month_link">
                                        </li>
                                        <li class="month_item">
                                            <a href="#" class="month_link"
                                                style="color: white; background-color: darkgray">조회</a>
                                        </li>
                                    </span>
                                </ul>
                            </div>
                        </div>
                        <div class="mb-4 mt-2">
                            <p style="color: gray; font-size: 15px;">●한 번에 조회 가능한 기간은 최대 6개월입니다.</p>
                        </div>
                        <div class="Status d-flex justify-content-between">
                            <button class="btn btn-white btn-sm border">전체</button>
                            <a href="#" class="Status_link">
                                <span class="mt-2 me-2" style="font-size: 15px; color: gray;">상태</span>
                            </a>
                        </div>
                        <hr class="mb-5" />
                        <div class="text-center">
                            <p style="color: darkgray;">응모내역이 없습니다.</p>
                            <button class="btn btn-white btn-sm border">응모하러 가기</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MypageNavBar from './MypageNavBar';
</script>

<style scoped>
.content_title {
    margin-bottom: 20px;
    text-align: center;
}

.title h3 {
    color: #333;
    font-size: 24px;
}

.purchase_list_tab {
    display: flex;
}

.tab_item {
    flex: 1;
    text-align: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
}

.tab_link {
    text-decoration: none;
    color: rgb(100, 100, 100);
}

.tab_box {
    padding: 10px;
}

.title {
    font-size: 18px;
}

.count {
    font-size: 16px;
}

.month_item {
    display: inline-block;
}

.month_item>.month_link {
    border: 1px solid darkgray;
    margin-right: 5px;
    text-decoration-line: none;
}

.month_link {
    display: inline-block;
    padding: 5px 10px;
    margin-top: 15px;
    font-size: 13px;
    color: rgb(125, 124, 124);
}

.btn {
    width: 100px;
    height: 40px;
    text-align: center;
    border-radius: 10px;
    color: rgb(104, 104, 104);

}

.Status {
    display: flex;
}


</style>