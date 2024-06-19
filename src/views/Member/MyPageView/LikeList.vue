<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h4>찜 목록</h4>
            </div>
            <div class="d-flex">
                <div class="col-10">
                    <div class="card mt-2 border-0">
                        <div class="row g-0">
                            <div class="col-md-4 align-content-center">
                                <img src="@/assets/imgSample3.jpg" class="img-fluid rounded-start" width="170px">
                            </div>
                            <div class="col-md-8 align-content-center">
                                <div class="card-body">
                                    <h5 class="card-title">지용킴 x 삼성 뮤직 프레임</h5>
                                    <p class="m-0">우호야 공부좀 하자... 집에 일찍 들어가자...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex col-2 justify-content-end">
                    <div class="align-content-center">
                        <RouterLink to="/Raffle/RaffleDetail"><button class="btn me-2" style="background-color: #F37551; color: white;">응모</button></RouterLink>
                        <button class="btn border" style="background-color: white; color: black;" @click="deleteBtn">삭제</button>
                    </div>
                </div>
            </div>
            <div class="align-items-center">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <img src="@/assets/shoes.png" class="card-img-top" alt="..."
                            style="max-width: 6rem; height: auto;">
                        <div class="ms-3">
                            <div>Nike</div>
                            <div>Nike Air Force 1'07First Use White Team Red</div>
                        </div>
                    </div>
                    <div>
                        <RouterLink to="/Raffle/RaffleDetail"><button class="btn btm-sm me-2"
                                style="background-color: #F37551; color: white;">응모</button></RouterLink>
                        <button class="btn btm-sm" @click="deleteBtn"
                            style="background-color: white; color: black; border: 1px solid black;">삭제</button>
                    </div>
                </div>
                <div class="border-bottom mb-4"></div>
            </div>
            <div class="d-flex justify-content-center">
                <RouterLink to="#" class="fw-bold">1</RouterLink>
            </div>
        </div>
    </div>
    <RaffleModal ref="deleteModal">
        <template v-slot:modalHeader>
            알림
        </template>
        <template v-slot:modalBody>
            좋아요 목록에서 삭제됩니다.
        </template>
        <template v-slot:modalFooter>
            <button class="btn btn-modal btn-outline-light" data-bs-dismiss="modal">예</button>
            <button class="btn btn-outline-light" data-bs-dismiss="modal">아니오</button>
        </template>
    </RaffleModal>
</template>

<script setup>
import RaffleModal from '@/components/RaffleModal.vue';
import { ref } from 'vue';

const deleteModal = ref(null);

function deleteBtn() {
    deleteModal.value.showModal();
}
</script>

<style scoped>
.router {
    color: black;
}

.btn-modal {
    width: 70px;
}
</style>