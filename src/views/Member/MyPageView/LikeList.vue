<template>
    <div>
        <div class="d-flex flex-column">
            <div class="mb-2" style="border-bottom: 3px solid #F37551;">
                <h3>관심 리스트</h3>
            </div>
            <div v-for="item in likeList.RaffleRequest" :key="item.raffle.rno">
                <div class="d-flex justify-content-between mt-2">
                    
                    <div class="align-content-center" style="height: 154px; width:294px">
                        <img v-if="item.raffleImage.rthumbnailimgoname != null"
                            :src="`${axios.defaults.baseURL}/raffle/raffleThumbnailAttach/${item.raffle.rno}`"
                            class="rounded object-fit-cover w-100 h-100">
                    </div>
                    <div class="align-content-center">
                        <RouterLink :to="`/Raffle/RaffleDetail?rno=${item.raffle.rno}`">
                        <h5>{{ item.raffle.rtitle }}</h5>
                        <p class="m-0">{{ item.raffle.rsubtitle }}</p>
                        </RouterLink>
                    </div>
                    <button class="btn border-0" style="color: black;" @click="deleteBtn(item.raffle.rno)"><i class="bi bi-trash fs-2"></i></button>
                </div>
                <hr>
            </div>
            <div v-if="likeList.RaffleRequest.length === 0" class="non-center">
                <h4>등록된 리스트가 없습니다.</h4>
            </div>
            <div v-if="likeList.pager.totalPageNo > 0 && likeList.pager.totalPageNo.rno !== null"
                class="d-flex justify-content-center">
                <button @click="changePageNo(1)" class="btn pagerbtn">처음</button>
                <button v-if="likeList.pager.groupNo > 1" @click="changePageNo(likeList.pager.startPageNo - 1)"
                    class="btn pagerbtn">이전</button>
                <button v-for="pageNo in likeList.pager.pageArray" :key="pageNo" @click="changePageNo(pageNo)"
                    :class="(likeList.pager.pageNo == pageNo) ? 'thisPage' : ''" class="btn pagerbtn">{{ pageNo
                    }}</button>
                <button v-if="likeList.pager.groupNo < likeList.pager.totalGroupNo"
                    @click="changePageNo(likeList.pager.endPageNo + 1)" class="btn pagerbtn">다음</button>
                <button @click="changePageNo(likeList.pager.totalPageNo)" class="btn pagerbtn">맨끝</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import MemberAPI from '@/apis/MemberAPI';
import axios from "axios";
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const pageNo = ref(route.query.pageNo || 1);
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
getMyLikeList(pageNo.value);

function changePageNo(argPageNo) {
    router.push(`/Member/MyPage/LikeList?pageNo=${argPageNo}`);
}

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
            await MemberAPI.cancleLike(rno);
            if (likeList.value.pager.rowsPerPage <= 6)
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

.pagerbtn {
    color: black;
    margin-left: 7px;
    border: none;
    background-color: white;
}

.thisPage {
    color: #F37551;
}

/* 작성된 게시글이 없을때 나오게끔 처리 */
.non-center {
    text-align: center;
    /* colspan 속성을 고려하여 전체 너비 설정 */
    height: 100;
    /* 높이를 100px로 설정 (필요에 따라 조정 가능) */
    vertical-align: middle;
    /* 텍스트를 수직으로 가운데 정렬 */
    margin-top: 100px;
}
</style>