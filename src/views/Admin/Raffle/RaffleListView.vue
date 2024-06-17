<template>
    <div class="container">
        <div class="d-flex">
            <div class="w-100">
                <div>
                    <!-- contents -->
                    <div class="main p-3">
                        <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                            <h4>래플 목록 조회</h4>
                        </div>
                        <div class="content-area">
                            <div id="order_list_div" class="section_block">
                                <div class="no_data type4">
                                    <table class="table table-col">
                                        <colgroup>
                                            <col style="width: 14.2%">
                                            <col style="width: 14.2%">
                                            <col style="width: 14.2%">
                                            <col style="width: 10.2%">
                                            <col style="width: 11%">
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th scope="col">래플 이름</th>
                                                <th scope="col">응모 기간</th>
                                                <th scope="col">당첨자</th>
                                                <th scope="col">수정</th>
                                            </tr>
                                        </thead>
                                        <tbody class="ordtable-tbody">
                                            <tr>
                                                <td>
                                                    <div class="n-prd-row">
                                                        <RouterLink to="/">래플1</RouterLink>
                                                    </div>
                                                </td>
                                                <td>
                                                    <fmt:formatDate value="" pattern="yyyy-MM-dd" />2024-06-04 ~
                                                    2024-06-10
                                                </td>
                                                <td>
                                                    발표 예정
                                                </td>
                                                <td>
                                                    <RouterLink to="/Admin/CreateRaffle"><button
                                                            class="btn update-raffle-btn">수정</button>
                                                    </RouterLink>
                                                    <button class="btn delete-raffle-btn ms-3"
                                                        @click="deleteRaffle">삭제</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="n-prd-row">
                                                        <RouterLink to="/">래플2</RouterLink>
                                                    </div>
                                                </td>
                                                <td>
                                                    <fmt:formatDate value="" pattern="yyyy-MM-dd" />2024-06-04 ~
                                                    2024-06-10
                                                </td>
                                                <td>
                                                    발표 완료
                                                </td>
                                                <td>
                                                    <RouterLink to="/Admin/WinnerList"><button class="btn update-raffle-btn">당첨자 확인</button></RouterLink>
                                                </td>
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
    </div>
    <RaffleModal ref="deleteModal">
        <template v-slot:modalHeader>
            알림
        </template>
        <template v-slot:modalBody>
            <div class="ms-3" style="font-size: 20px;">
                정말 삭제하시겠습니까?
            </div>
        </template>
        <template v-slot:modalFooter>
            <div class="modal-body d-flex justify-content-center">
                <button type="button" class="btn btn-modal me-3" data-bs-dismiss="modal">예</button>
                <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">아니오</button>
            </div>
        </template>
    </RaffleModal>
</template>

<script setup>
import RaffleModal from '@/components/RaffleModal.vue';
import { ref } from 'vue';
const deleteModal = ref(null);

function updateRaffle() {

}

function deleteRaffle() {
    deleteModal.value.showModal();
}
</script>

<style scoped>
.heading-area {
    border-bottom: 1px solid #ebebeb;
}

.content-area {
    margin-top: 30px;
}

.btn-modal {
    width: 70px;
}
</style>