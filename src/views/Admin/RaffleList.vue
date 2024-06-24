<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>래플 목록 조회</h3>
            </div>
            <table class="table text-center">
                <thead>
                    <tr>
                        <th scope="col">번호</th>
                        <th scope="col">래플 이름</th>
                        <th scope="col">개시일</th>
                        <th scope="col">마감일</th>
                        <th scope="col">상태</th>
                        <th scope="col">관리</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <RouterLink to="/">1</RouterLink>
                        </td>
                        <td>
                            <RouterLink to="/">더그레이티스트24 SUMMER 드랍 ~50%</RouterLink>
                        </td>
                        <td>
                            2024-06-04
                        </td>
                        <td>
                            2024-06-10
                        </td>
                        <td>
                            진행 중
                        </td>
                        <td>
                            <RouterLink to="/Admin/CreateRaffle"><button
                                    class="btn update-raffle-btn rounded-0">수정</button>
                            </RouterLink>
                            <button class="btn delete-raffle-btn ms-3 rounded-0" @click="deleteRaffle">삭제</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <RouterLink to="/">2</RouterLink>
                        </td>
                        <td>
                            <RouterLink to="/">더그레이티스트24 SUMMER 드랍 ~50%</RouterLink>
                        </td>
                        <td>
                            2024-06-04
                        </td>
                        <td>
                            2024-06-10
                        </td>
                        <td>
                            종료
                        </td>
                        <td>
                            <RouterLink to="/Admin/WinnerList"><button
                                    class="btn rounded-0">확인</button>
                            </RouterLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex flex-grow-1 justify-content-center ms-5">
                <button class="btn btn-outline-light btn-sm me-1"
                    style="background-color: white; color:black;">처음</button>
                <button class="btn btn-outline-light btn-sm me-3"
                    style="background-color: white; color:black;">이전</button>
                <button class="btn btn-outline-light btn-sm me-1"
                    style="background-color: white; color:black;">1</button>
                <button class="btn btn-outline-light btn-sm me-1"
                    style="background-color: white; color:black;">2</button>
                <button class="btn btn-outline-light btn-sm me-1"
                    style="background-color: white; color:black;">3</button>
                <button class="btn btn-outline-light btn-sm me-1"
                    style="background-color: white; color:black;">4</button>
                <button class="btn btn-outline-light btn-sm me-3"
                    style="background-color: white; color:black;">5</button>
                <button class="btn btn-outline-light btn-sm me-1"
                    style="background-color: white; color:black;">다음</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">맨끝</button>
            </div>
            <button class="btn btn-outline-light ms-3 rounded-0" style="background-color: #F37551;">
                <RouterLink to="/Admin/CreateRaffle" style="color: white;">래플 등록
                </RouterLink>
            </button>
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