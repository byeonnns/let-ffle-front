<template>
    <div>
        <div class="d-flex flex-column">
            <div class="mb-2" style="border-bottom: 3px solid #F37551;">
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
                    <div class="d-flex flex-column" style="width:200px;">
                        <RouterLink to="/Raffle/RaffleDetail" class="btn btn-outline-light mt-3" style="background-color: #F37551; color: white;">
                            응모
                        </RouterLink>
                        <button class="btn btn-outline-light border mt-auto mb-3" style="background-color: white; color: black;" @click="deleteBtn(item.raffle.rno)">삭제</button>
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
                    @click="changePageNo(likeList.pager.endPageNo + 1)"
                    class="btn btn-outline-info btn-sm me-1">다음</button>
                <button @click="changePageNo(likeList.pager.totalPageNo)"
                    class="btn btn-outline-primary btn-sm">맨끝</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import MemberAPI from '@/apis/MemberAPI';
import axios from "axios";
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const likeList = ref({
    RaffleRequest: [],
    pager: {}
});

const router = useRouter();
const route = useRoute();
const pageNo = ref(route.query.pageNo || 1);
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
    router.push(`/Member/MyPage/LikeList?pageNo=${argPageNo}`);
}
getMyLikeList(pageNo.value);
watch(route, (newRoute, oldRoute) => {
    if (newRoute.query.pageNo) {
        getMyLikeList(newRoute.query.pageNo);
        pageNo.value = newRoute.query.pageNo;
    } else {
        getMyLikeList(1);
        pageNo.value = 1;
    }
});

async function deleteBtn(rno) {
    if (confirm("관심 목록에서 제거하시겠습니까?")) {
        try {
            await MemberAPI.deleteLikeList(rno);
            if(likeList.value.pager.rowsPerPage <= 6)
                getMyLikeList(1);
            else
                getMyLikeList(pageNo.value);
        } catch (error) {
            console.log(error);
        }
    }
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