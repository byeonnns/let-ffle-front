<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h4>관심 리스트</h4>
            </div>
            <div class="d-flex">
                <div class="col-10">
                    <div class="card mt-4 border-0">
                        <div class="row g-0">
                            <div class="col-md-3 align-content-center">
                                <img src="@/assets/imgSample3.jpg" class="img-fluid rounded-start card" width="200px" style="border: 2px solid black; height: 130px;">
                            </div>
                            <div class="col-md-8 align-content-center">
                                <div class="card-body">
                                    <h5 class="card-title">지용킴 x 삼성 뮤직 프레임</h5>
                                    <p class="m-0">템포러리 브랜드를 추구하며</p> 더그레이티스트만의 해석으로 트렌드와 개성의 양립을 지향합니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex col-2 justify-content-end">
                    <div class="align-content-center mt-4">
                        <RouterLink to="/Raffle/RaffleDetail"><button class="btn btn-outline-light mb-2" style="background-color: #F37551; color: white;">응모</button></RouterLink>
                        <button class="btn btn-outline-light border" style="background-color: white; color: black;" @click="deleteBtn">삭제</button>
                    </div>
                </div>
            </div>
            <div style="margin-top: 30px;">
                <div class="border-bottom mb-4"></div>
            </div>
            <div class="d-flex">
                <div class="col-10">
                    <div class="card mt-2 border-0">
                        <div class="row g-0">
                            <div class="col-md-3 align-content-center">
                                <img src="@/assets/imgSample2.jpg" class="img-fluid rounded-start card" width="200px" style="border: 2px solid black; height: 130px;">
                            </div>
                            <div class="col-md-8 align-content-center">
                                <div class="card-body">
                                    <h5 class="card-title">BLR 인기 티셔츠 리오더 & 신규 발매</h5>
                                    <p class="m-0">템포러리 브랜드를 추구하며</p> 더그레이티스트만의 해석으로 트렌드와 개성의 양립을 지향합니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex col-2 justify-content-end">
                    <div class="align-content-center mt-4">
                        <RouterLink to="/Raffle/RaffleDetail"><button class="btn btn-outline-light mb-2" style="background-color: #F37551; color: white;">응모</button></RouterLink>
                        <button class="btn btn-outline-light border" style="background-color: white; color: black;" @click="deleteBtn">삭제</button>
                    </div>
                </div>
            </div>
            <div style="margin-top: 30px;">
                <div class="border-bottom mb-4"></div>
            </div>
            
            <div class="d-flex justify-content-center">
                <RouterLink to="#" class="me-4" style="color: black;">이전</RouterLink>
                <RouterLink to="#" class="me-2" style="color: black;">1</RouterLink>
                <RouterLink to="#" class="me-2" style="color: black;">2</RouterLink>
                <RouterLink to="#" class="me-2" style="color: black;">3</RouterLink>
                <RouterLink to="#" class="me-2" style="color: black;">4</RouterLink>
                <RouterLink to="#" class="me-4" style="color: black;">5</RouterLink>
                <RouterLink to="#" class="me-2" style="color: black;">다음</RouterLink>
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
            <button class="btn btn-outline-light" data-bs-dismiss="modal" style="width: 20%;">예</button>
            <button class="btn btn-outline-light" data-bs-dismiss="modal" style="width: 20%;">아니오</button>
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

.btn {
    background-color: #F37551;
    border-radius: 0px;
    color: white;
    width: 100%;
}

</style>