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
                                        <dd class="count">{{totalRaffle}}
                                        </dd>
                                    </dl>
                                </a>
                            </div>
                            <div class="tab_item">
                                <a href="#" class="tab_link">
                                    <dl class="tab_box">
                                        <dt class="title" style="height: 50px;">진행 중</dt>
                                        <dd class="count">{{applyingRaffle}}</dd>
                                    </dl>
                                </a>
                            </div>
                            <div class="tab_item">
                                <a href="#" class="tab_link">
                                    <dl class="tab_box">
                                        <dt class="title" style="height: 50px;">종료</dt>
                                        <dd class="count">{{closedRaffle}}</dd>
                                    </dl>
                                </a>
                            </div>
                        </div>

                        <div>
                            <SerachPeriod></SerachPeriod>
                        </div>

                        <hr class="mb-2" />

                        <div class="mb-2">
                            <table class="table text-center">
                                <thead>
                                    <tr>
                                        <th class="col-2" scope="col">래플명</th>
                                        <th class="col-2" scope="col">응모일</th>
                                        <th class="col-2" scope="col">현재 상태</th>
                                        <th class="col-2" scope="col">미션 완료</th>
                                        <th class="col-2" scope="col">사용 베리</th>
                                        <th class="col-2" scope="col">확률</th>
                                        <th class="col-2" scope="col">이동</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{ entryList.rtitle }}</td>
                                        <td>{{ entryList.rdtcreatedat }}</td>
                                        <td>{{ entryList.status }}</td>
                                        <td>{{ entryList.rdtmissioncleared }}</td>
                                        <td>{{ entryList.rdtberryspend }}</td>
                                        <td>{{ entryList.probability }}</td>
                                        <td><button class="btn btn-sm">바로가기</button></td>
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
import { ref } from 'vue';
import SerachPeriod from './Components/SearchPeriod.vue';

const entryList = ref({
    rtitle:"레플 이름",
    rdtcreatedat:"응모일",
    status:null,
    rdtmissioncleared:"미션 여부",
    rdtberryspend:0,
    probability:100 + " %"
});

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
    border-radius: 0px;
    background-color: #F37551;
    color: white;
}

.Status {
    display: flex;
}

td {
    align-content: center;
}
</style>