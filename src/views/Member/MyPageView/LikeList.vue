<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>관심 리스트</h3>
            </div>
            <div v-for="item in likeList.RaffleRequest" :key="item.raffle.rno">
                <div class="d-flex justify-content-between mt-2">
                    <div class="align-content-center">
                        <img v-if="item.raffleImage.rthumbnailimgoname != null"
                            :src="`${axios.defaults.baseURL}/raffle/raffleAttach/${item.raffle.rno}`" class="rounded"
                            width="200px" height="130px;">
                    </div>
                    <div class="align-content-center">
                        <h5>{{ item.raffle.rtitle }}</h5>
                        <p class="m-0">{{ item.raffle.rsubtitle }}</p>
                    </div>
                    <div class="align-content-center">
                        <RouterLink to="/Raffle/RaffleDetail"><button class="btn btn-outline-light mb-2"
                                style="background-color: #F37551; color: white;">응모</button></RouterLink>
                        <button class="btn btn-outline-light border" style="background-color: white; color: black;"
                            @click="deleteBtn">삭제</button>
                    </div>
                </div>
                <hr>
            </div>
            <div class="d-flex justify-content-center">
                <button @click="changePageNo(1)" class="btn btn-outline-primary btn-sm me-1">처음</button>
                <button v-if="likeList.pager.groupNo > 1" @click="changePageNo(likeList.pager.startPageNo - 1)"
                    class="btn btn-outline-info btn-sm me-1">이전</button>
                <button v-for="pageNo in likeList.pager.pageArray" :key="pageNo" @click="changePageNo(pageNo)"
                    :class="(likeList.pager.pageNo == pageNo) ? 'btn-danger' : 'btn-outline-success'"
                    class="btn btn-sm me-1">{{ pageNo }}</button>
                <button v-if="likeList.pager.groupNo < likeList.pager.totalGroupNo"
                    @click="changePageNo(likeList.pager.endPageNo + 1)" class="btn btn-outline-info btn-sm me-1">다음</button>
                <button @click="changePageNo(likeList.pager.totalPageNo)" class="btn btn-outline-primary btn-sm">맨끝</button>

                <button class="btn btn-outline-light btn-sm ms-3 rounded-0" style="background-color: #F37551;">
                    <RouterLink to="/Board/WriteBoard" style="color: white;">글쓰기</RouterLink>
                </button>
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
import MemberAPI from '@/apis/MemberAPI';
import axios from "axios";
import { ref } from 'vue';

const deleteModal = ref(null);

const likeList = ref({
    RaffleRequest: [],
    pager: {}
});

async function getMyLikeList(pageNo) {
    try {
        const response = await MemberAPI.myLikeList(pageNo);
        likeList.value.RaffleRequest = response.data.RaffleRequest;
        likeList.value.pager = response.data.pager;
    } catch (error) {
        console.log(error);
    }
}
function changePageNo(argPageNo) {
    getMyLikeList(argPageNo);
}

getMyLikeList();

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