<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>문의 내역</h3>
            </div>

            <div class="accordion" id="accordionExample">
                <div v-for="Inquiry in page.Inquirys" :key="Inquiry.ino" class="accordion-item">
                    <h3 class="accordion-header">
                        <button class="accordion-button custom-accordion-button" type="button" data-bs-toggle="collapse"
                            :data-bs-target="'#collapse' + Inquiry.ino" aria-expanded="true"
                            :aria-controls="'collapse' + Inquiry.ino">
                            <p class="custom-title me-5" style="width: 30px;">{{ Inquiry.ino }}</p>
                            <p class="custom-title me-5" style="width: 80px; color: #F37551"
                                v-if="Inquiry.ireply == null">답변 대기중</p>
                            <p class="custom-title me-5" style="width: 80px; color: #F37551"
                                v-if="Inquiry.ireply != null">답변 완료</p>
                            <p class="custom-text">{{ Inquiry.ititle }}</p>
                        </button>
                    </h3>
                    <div :id="'collapse' + Inquiry.ino" class="accordion-collapse collapse container"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div class="container " style="width: 100%; background-color: #FAFAFA; padding: 30px;">
                                <!-- border:1px solid black  -->
                                <div style="width: 100%; ">
                                    <!-- border:1px solid black -->
                                    <div v-if="Inquiry.iattachoname != null" >
                                        <img width=" 300px"
                                        :src="`${axios.defaults.baseURL}/member/iattach/${Inquiry.ino}`">
                                    </div>
                                    <p>{{ Inquiry.icontent }}</p>
                                </div>
                            </div>
                            <!-- 답변 등록 폼 -->
                            <form @submit.prevent="updateInquiry(Inquiry.ino)">
                                <div class=" form-group row mt-3" v-if="Inquiry.ireply == null">
                                    <div style="margin-bottom: 30px">
                                        <textarea id="bcontent" type="text" class="form-control" style="height:100px;"
                                            v-model="adminReply[Inquiry.ino]"></textarea>
                                    </div>
                                </div>
                                <div v-if="Inquiry.ireply == null"
                                    class="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button type="submit" class="btn btn-outline-light rounded-0 mt-1"
                                        style="background-color: #F37551; color: white;">등록</button>
                                </div>
                            </form>
                            <div class=" form-group row mt-3" v-if="Inquiry.ireply != null">
                                <h3>등록된 답변</h3>
                                <div>
                                    <p>{{ Inquiry.ireply }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center" v-if="page.Inquirys.length > 0">
                <button @click="changePageNo(1)" class="btn pagerbtn">처음</button>
                <button v-if="page.pager.groupNo > 1" @click="changePageNo(page.pager.startPageNo - 1)"
                    class="btn pagerbtn">이전</button>
                <button v-for="pageNo in page.pager.pageArray" :key="pageNo" @click="changePageNo(pageNo)"
                    :class="(page.pager.pageNo == pageNo) ? 'thisPage' : ''" class="btn pagerbtn">{{ pageNo }}</button>
                <button v-if="page.pager.groupNo < page.pager.totalGroupNo"
                    @click="changePageNo(page.pager.endPageNo + 1)" class="btn pagerbtn">다음</button>
                <button @click="changePageNo(page.pager.totalPageNo)" class="btn pagerbtn">맨끝</button>
            </div>
            <RaffleToast ref="look" />
        </div>
    </div>
    <div class="d-flex justify-content-center align-items-center" style="height: 100%; font-size: 20px;"
        v-if="page.Inquirys.length == 0">
        <span>문의 내역이 없습니다.</span>
    </div>
</template>

<script setup>
import { ref, watch } from "vue"
import RaffleToast from '@/components/RaffleToast.vue';
import MemberAPI from "@/apis/MemberAPI";
import { useRouter, useRoute } from 'vue-router';
import axios from "axios";

const router = useRouter();
const route = useRoute();
const pageNo = ref(route.query.pageNo || 1);
const adminReply = ref([]);
const look = ref(null);

const page = ref({
    Inquirys: [],
    pager: {}
});

async function getUserInquiryList(pageNo) {
    try {
        const response = await MemberAPI.getUserInquiryList(pageNo)
        page.value.Inquirys = response.data.inquiry;
        page.value.pager = response.data.pager;
    } catch (error) {
        console.log(error);
    }
}
getUserInquiryList(pageNo.value);

async function updateInquiry(ino) {
    await MemberAPI.inquiryReply(ino, adminReply.value[ino]);
    getUserInquiryList(pageNo.value);
    look.value.showToast("답변이 등록되었습니다.");
}

function changePageNo(argPageNo) {
    router.push(`/Admin/InquiryList?pageNo=${argPageNo}`);
}

watch(
    route, (newRoute, oldRoute) => {
        if (newRoute.query.pageNo) {
            getUserInquiryList(newRoute.query.pageNo);
            pageNo.value = newRoute.query.pageNo;
        } else {
            getUserInquiryList(1);
            pageNo.value = 1;
        }
    }
);
</script>

<style scoped>
.custom-accordion-button {
    background-color: white;
    /* 원하는 배경 색상 */
    color: black;
    /* 텍스트 색상 */
    border: none;
    /* 버튼 테두리 제거 */
}

.custom-accordion-button:not(.collapsed) {
    background-color: white;
    /* 아코디언이 확장된 상태의 배경 색상 */
}

.custom-accordion-button:focus {
    box-shadow: none;
    /* 버튼 포커스 시 그림자 제거 */
}

.custom-accordion-button .custom-title,
.custom-accordion-button .custom-text {
    margin: 0;
    /* 모든 방향의 마진을 제거 */
    padding: 0;
    /* 모든 방향의 패딩을 제거 */
    display: inline;
    /* 인라인 요소로 변경하여 같은 줄에 표시 */
}

.custom-accordion-button .custom-text {
    margin-left: 30px;
    /* 필요한 경우 추가 간격을 조정  */
}

.accordion-item {
    border: none;
}

.accordion-header {
    border-bottom: 1px solid #ebebeb;
}

/* 위에 있는 전체 서비스 이벤트 공지 기타칸 정렬 */
.table th,
.table tr {
    text-align: center;

}

/* 전체, 이용정책 글자 색 */
.spanded {
    color: black;
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
</style>