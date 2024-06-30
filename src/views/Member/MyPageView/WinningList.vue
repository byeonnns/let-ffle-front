<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <div class="d-flex flex-column ms-5" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="mb-4">
                        <h4>당첨 내역</h4>
                    </div>
                    <div class="content_area my-page-content">
                        <div class="my_purchase">
                            <div class="v-portal" style="display: none;"></div>
                            <SerachPeriod>
                            </SerachPeriod>
                            <hr class="mb-3" />
                            <div class="text-center">
                            </div>
                            <div>
                                <table class="w-100 text-center">
                                    <thead>
                                        <tr>
                                            <th>래플 이름</th>
                                            <th>당첨 일자</th>
                                            <th>상품</th>
                                            <th>배송 상태</th>
                                        </tr>
                                    </thead>
                                    
                                    
                                    <tbody class="table table-group-divider">
                                        <tr>
                                            <td>아이폰 뿌리는 이벤트</td>
                                            <td>2024.01.01</td>
                                            <td>아이폰 15Pro</td>
                                            <td><button class="btn btn-outline-light" @click="inputAddress"
                                                    style="font-size: 15px;">배송지 입력</button></td>
                                        </tr>
                                    
                                        <tr>
                                            <td>아이폰 뿌리는 이벤트</td>
                                            <td>2024.01.01</td>
                                            <td>아이폰 15Pro</td>
                                            <td>배송 완료</td>
                                        </tr>

                                        <tr>
                                            <td>{{ WinningList.rtitle }}</td>
                                            <td>{{ WinningList.rfinishedat }}</td>
                                            <td>{{ WinningList.rgift }}</td>
                                            <td>배송 완료</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <RaffleModal ref="inputModal">
        <template v-slot:modalHeader>
            배송지 입력
        </template>
        <template v-slot:modalBody>
            <div class="container">
                <div class="div_form row mb-3">
                    <label>이름</label>
                    <input type="text" placeholder="신우호" class="input" style="border-bottom: 1px solid #ebebeb">
                </div>

                <div class="div_form row mb-3">
                    <label>전화번호</label>
                    <input type="text" placeholder="010-8308-8798" class="input"
                        style="border-bottom: 1px solid #ebebeb">
                </div>

                <div class="div_form row">
                    <label>주소</label>
                    <input type="text" placeholder="경기도 시흥시 포동" class="input" style="border-bottom: 1px solid #ebebeb">
                </div>
            </div>
        </template>
        <template v-slot:modalFooter>
            <button class="btn btn-outline-light" data-bs-dismiss="modal" style="width: 15%;">닫기</button>
            <button class="btn btn-outline-light" data-bs-dismiss="modal" style="width: 15%">완료</button>
        </template>
    </RaffleModal>
</template>

<script setup>
import { ref } from 'vue';
import SerachPeriod from './Components/SearchPeriod.vue';
import RaffleModal from '@/components/RaffleModal.vue';

const inputModal = ref(null);

const WinningList = ref({
    rtitle:"제목",
    rfinishedat:"응모시간",
    rgift:"선물"
});

function inputAddress() {
    inputModal.value.showModal();
}

</script>

<style scoped>
/* .content_title {
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
*/
.btn {
    width: 100px;
    height: 40px;
    text-align: center;
    border-radius: 0px;
    background-color: #F37551;
    color: white;
}

.input {
    border-width: 0;
    /* input 라인 없애기 */
    outline: none;

}

/* .Status {
    display: flex;
}  */

td {
    align-content: center;
    padding: 5px;
}
</style>