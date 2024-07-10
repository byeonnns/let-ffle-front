<template>
    <div>
        <div class="container ">
            <div class="d-flex flex-column flex-grow-1">
                <div class="header"
                    style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; margin-top: 10px">
                    <h3 style="margin-right: 80%;">자주 묻는 질문</h3>
                </div>
                <div style="width: 100%; height:100%; margin-bottom: 10px; margin-top: 10px;">
                    <table class="table table-bordered">
                        <thead>
                        </thead>
                        <tbody>
                            <tr style="height: 55px;">
                                <td class="col-3" @click="changeSubcategory('전체')">
                                    <h6 :class="sortType === '전체' ? 'activeColor' : ''"> 전체</h6>
                                </td>

                                <td class="col-3" @click="changeSubcategory('일반')">
                                    <h6 :class="sortType === '일반' ? 'activeColor' : ''">일반</h6>
                                </td>

                                <td class="col-3" @click="changeSubcategory('이용정책')">
                                    <h6 :class="sortType === '이용정책' ? 'activeColor' : ''">이용정책</h6>
                                </td>

                                <td class="col-3" @click="changeSubcategory('래플')">
                                    <h6 :class="sortType === '래플' ? 'activeColor' : ''">래플</h6>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style="height:100%;">
                    <div v-for="faq in page.faqs" :key="faq.nno" class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h3 class="accordion-header">
                                <button class="accordion-button custom-accordion-button" type="button"
                                    data-bs-toggle="collapse" :data-bs-target="`#collapse${faq.nno}`"
                                    aria-expanded="true" :aria-controls="`#collapse${faq.nno}`">
                                    <p class="custom-title" style="color: #F37551; width: 60px;"> {{ faq.nsubcategory }}
                                    </p>
                                    <p class="custom-text">{{ faq.ntitle }}</p>
                                </button>
                            </h3>
                            <div :id="`collapse${faq.nno}`" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="container"
                                        style="height:100%; background-color: #FAFAFA; padding: 30px;">
                                        <div style="white-space:pre;">
                                            {{ faq.ncontent }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="page.faqs.length != 0" colspan="5" class="text-center">
                    <button @click="changePageNo(1)" class="btn pagerbtn">처음</button>
                    <button v-if="page.pager.groupNo > 1" @click="changePageNo(page.pager.startPageNo - 1)"
                        class="btn pagerbtn">이전</button>
                    <button v-for="pageNo in page.pager.pageArray" :key="pageNo" @click="changePageNo(pageNo)"
                        :class="(page.pager.pageNo == pageNo) ? 'btn-danger' : 'btn-outline-light'"
                        class="btn pagerbtn">{{ pageNo }}</button>
                    <button v-if="page.pager.groupNo < page.pager.totalGroupNo"
                        @click="changePageNo(page.pager.endPageNo + 1)" class="btn pagerbtn">다음</button>
                    <button @click="changePageNo(page.pager.totalPageNo)" class="btn pagerbtn">맨끝</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import NoticeAPI from '@/apis/NoticeAPI';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const category = ref({
    mainCatagory: "자주묻는질문",
    subcategory: route.query.subcategory || "전체"
});
const pageNo = ref(route.query.pageNo || 1);
const page = ref({
    faqs: [],
    pager: {}
});

async function getNoticeList(pageNo) {
    try {
        const response = await NoticeAPI.noticeList(pageNo, category.value.mainCatagory, category.value.subcategory);
        page.value.faqs = response.data.Notice;
        page.value.pager = response.data.Pager;
    } catch (error) {
        console.log(error);
    }
}
getNoticeList(pageNo.value);

function changePageNo(argPageNo) {
    router.push(`/Faq?pageNo=${argPageNo}`);
}

function changeSubcategory(nsubcategory) {
    category.value.subcategory = nsubcategory;
    router.push(`/Faq?subcategory=${nsubcategory}`);
}
watch(
    route, (newRoute, oldRoute) => {
        if (newRoute.query.pageNo) {
            getNoticeList(newRoute.query.pageNo);
            sortType.value = route.query.subcategory
        } else {
            getNoticeList(1);
            pageNo.value = 1;
            sortType.value = route.query.subcategory
        }

    }
);

const sortType = ref(route.query.subcategory);




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

td {
    text-align: center;
    align-content: center;
    

}

/* 전체, 이용정책 글자 색 */


.pagerbtn {
    color: black;
    margin-left: 7px;
    border: none;
    background-color: white;
}

td:hover {
    cursor: pointer;
    color: #FF5C35;
}

.activeColor {
    color: #FF5C35 !important
}

</style>