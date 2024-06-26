<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>래플 리스트</h3>
            </div>
            <table class="table text-center">
                <thead>
                    <tr>
                        <th class="col-1" scope="col">번호</th>
                        <th class="col-4" scope="col">래플 이름</th>
                        <th class="col-2" scope="col">개시일</th>
                        <th class="col-2" scope="col">마감일</th>
                        <th class="col-1" scope="col">상태</th>
                        <th class="col-2" scope="col">관리</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>더그레이티스트24 SUMMER 드랍 ~50%</td>
                        <td>2024-06-04</td>
                        <td>2024-06-10</td>
                        <td>진행 중</td>
                        <td>
                                <RouterLink class="btn btn-sm rounded-0 text-white me-1" to="/Admin/CreateRaffle">수정
                                </RouterLink>
                                <button class="btn btn-sm rounded-0 ms-1" @click="deleteRaffle">삭제</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>더그레이티스트24 SUMMER 드랍 ~50%</td>
                        <td>2024-06-04</td>
                        <td>2024-06-10</td>
                        <td>종료</td>
                        <td>
                            <RouterLink to="/Admin/WinnerList"><button class="btn btn-sm rounded-0">확인</button>
                            </RouterLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="d-flex flex-column">
            <div class="text-end">
                <button class="btn btn-outline-ligh rounded-0" style="background-color: #F37551;">
                    <RouterLink to="/Admin/CreateRaffle" style="color: white;">등록
                    </RouterLink>
                </button>
            </div>
            <div class="text-center">
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">처음</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">이전</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">1</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">2</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">3</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">4</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">5</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">다음</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">맨끝</button>
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
                <button type="button" class="btn" data-bs-dismiss="modal">예</button>
                <button type="button" class="btn" data-bs-dismiss="modal" aria-label="Close">아니오</button>
            </template>
        </RaffleModal>
    </div>
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
td {
    align-content: center;
}

.btn {
    background-color: #F37551;
    color: white;
}
</style>