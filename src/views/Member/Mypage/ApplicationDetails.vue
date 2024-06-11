<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <div class="d-flex flex-column ms-5" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                        <h4>응모 내역</h4>
                    </div>
                    <div class="content_area my-page-content">
                        <div class="my_purchase">
                            <div class="v-portal" style="display: none;"></div>
                            <div class="purchase_list_tab detail_tab flex-container">
                                <div class="tab_item total">
                                    <a href="#" class="tab_link">
                                        <dl class="tab_box">
                                            <dt class="title" style="height: 50px;">전체</dt>
                                            <dd class="count">1</dd>
                                        </dl>
                                    </a>
                                </div>
                                <div class="tab_item">
                                    <a href="#" class="tab_link">
                                        <dl class="tab_box">
                                            <dt class="title" style="height: 50px;">진행 중</dt>
                                            <dd class="count">1</dd>
                                        </dl>
                                    </a>
                                </div>
                                <div class="tab_item">
                                    <a href="#" class="tab_link">
                                        <dl class="tab_box">
                                            <dt class="title" style="height: 50px;">종료</dt>
                                            <dd class="count">0</dd>
                                        </dl>
                                    </a>
                                </div>
                            </div>
                            <div class="period_search">
                                <div class="period_month border mt-2">
                                    <ul class="month_list container d-flex justify-content-center">
                                        <li class="month_item">
                                            <a href="#" class="month_link">전체</a>
                                        </li>
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
                                                    style="color: white; background-color: #F37551;">조회</a>
                                            </li>
                                        </span>
                                    </ul>
                                </div>
                            </div>
                            <div class="mb-4 mt-2">
                                <p style="color: gray; font-size: 15px;">●한 번에 조회 가능한 기간은 최대 6개월입니다.</p>
                            </div>
                            <hr class="mb-3" />
                            <div class="text-center">
                                <table class="table mb-4">
                                    <thead>
                                        <tr class="d-none d-md-table-row text-center">
                                            <th class="d-none d-md-table-cell" style="width: 4em;"><span>래플 이름</span>
                                            </th>
                                            <th class="d-none d-md-table-cell" style="width: 11em;"><span>응모 기간</span>
                                            </th>
                                            <th class="d-none d-md-table-cell" style="width: 8em;"><span>종료일</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>래플 1번</td>
                                            <td>2024.06.10~2024.06.22</td>
                                            <td>2024.06.23</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button class="btn btn-white btn-sm border">응모하러 가기</button>
                            </div>
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
.content_title {
    margin-bottom: 20px;
    text-align: center;
}

.title h3 {
    font-size: 24px;
}

.purchase_list_tab {
    display: flex;
}

.tab_item {
    flex: 1;
    text-align: center;
    padding: 10px;
}

.tab_link {
    text-decoration: none;
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
}

.btn {
    width: 100px;
    height: 40px;
    text-align: center;
    border-radius: 10px;
}

.Status {
    display: flex;
}
</style>