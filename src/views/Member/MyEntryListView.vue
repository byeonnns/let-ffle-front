<template>
    <div>
        <div class="container">
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

                        <div>
                            <SerachPeriod></SerachPeriod>
                        </div>

                        <hr class="mb-3" />

                        <div>
                            <table class="w-100 text-center">
                                <thead>
                                    <tr>
                                        <th>래플 이름</th>
                                        <th>응모 기간</th>
                                        <th>응모 상품</th>
                                        <th>바로가기</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>아이폰 뿌리는 이벤트</td>
                                        <td>2024.01.01 ~ 2024.02.02</td>
                                        <td>아이폰 11Pro</td>
                                        <td><button class="btn w-50">랫플바로 가기</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SerachPeriod from './Components/SearchPeriod.vue';
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
    background-color: #F37551;
    color: white;
}

.Status {
    display: flex;
}
</style>