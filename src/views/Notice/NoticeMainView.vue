<template>
    <div>
        <div class="container">
            <div class="d-flex flex-column flex-grow-1">
                <div
                    style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; margin-top: 10px">
                    <h3>공지사항</h3>
                </div>
                <div style="width: 100%; height:60px; margin-bottom: 10px; margin-top: 10px;">
                    <table class="table table-bordered">
                        <tbody>
                            <tr style="height: 55px;">
                                <td class="col-3" @click="changeSubcategory('전체')">
                                    <h6 :class="sortType === '전체' ? 'activeColor' : ''">전체</h6>
                                </td>
                                <td class="col-3" @click="changeSubcategory('공지')">
                                    <h6 :class="sortType === '공지' ? 'activeColor' : ''">공지</h6>
                                </td>
                                <td class="col-3" @click="changeSubcategory('당첨자 발표')">
                                    <h6 :class="sortType === '당첨자 발표' ? 'activeColor' : ''">당첨자 발표</h6>
                                </td>
                                <td class="col-3" @click="changeSubcategory('서비스')">
                                    <h6 :class="sortType === '서비스' ? 'activeColor' : ''">서비스</h6>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="page.notices.length != 0" style="width: 100%; height:100%;  ">
                    <table class="table linebd">
                        <tbody>
                            <tr v-for="notice in page.notices" :key="notice.nno">
                                <td class="table_category text-cr" style="width: 160px;">{{ notice.nsubcategory }}</td>
                                <td class="table_title">
                                    <RouterLink :to="`/Notice/NoticeDetail?nno=${notice.nno}`"
                                        style="text-decoration: none; color: black">{{ notice.ntitle }}</RouterLink>
                                </td>
                                <td style="width: 315px;">{{ formatDate(notice.ncreatedat) }}</td>
                            </tr>
                            <tr>
                                <td v-if="page.notices.length != 0" colspan="5" class="text-center">
                                    <button @click="changePageNo(1)" class="btn pagerbtn">처음</button>
                                    <button v-if="page.pager.groupNo > 1"
                                        @click="changePageNo(page.pager.startPageNo - 1)"
                                        class="btn pagerbtn">이전</button>
                                    <button v-for="pageNo in page.pager.pageArray" :key="pageNo"
                                        @click="changePageNo(pageNo)"
                                        :class="(page.pager.pageNo == pageNo) ? 'thisPage' : ''" class="btn pagerbtn">{{
                                        pageNo
                                        }}</button>
                                    <button v-if="page.pager.groupNo < page.pager.totalGroupNo"
                                        @click="changePageNo(page.pager.endPageNo + 1)" class="btn pagerbtn">다음</button>
                                    <button @click="changePageNo(page.pager.totalPageNo)"
                                        class="btn pagerbtn">맨끝</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else class="d-flex justify-content-center align-content-center align-items-center"
                    style="height: 300px; font-size: 20px;">
                    <p>조회된 글이 없습니다.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import NoticeAPI from '@/apis/NoticeAPI';

const route = useRoute();
const router = useRouter();
const category = ref({
    mainCatagory: "공지사항",
    subcategory: route.query.subcategory || "전체"
});
const pageNo = ref(route.query.pageNo || 1);
const page = ref({
    notices: [],
    pager: {}
});

async function getNoticeList(pageNo) {
    try {
        const response = await NoticeAPI.noticeList(pageNo, category.value.mainCatagory, category.value.subcategory);
        page.value.notices = response.data.Notice;
        page.value.pager = response.data.Pager;
    } catch (error) {
        console.log(error);
    }
}
getNoticeList(pageNo.value);

function changePageNo(argPageNo) {
    router.push(`/Notice?pageNo=${argPageNo}`);
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

function changeSubcategory(nsubcategory) {
    category.value.subcategory = nsubcategory;
    router.push(`/Notice?subcategory=${nsubcategory}`);
}

watch(
    route, (newRoute, oldRoute) => {
        if (newRoute.query.pageNo) {
            getNoticeList(newRoute.query.pageNo);
            sortType.value = route.query.subcategory;
        } else {
            getNoticeList(1);
            pageNo.value = 1;
            sortType.value = route.query.subcategory;
        }

    }
);

const sortType = ref(route.query.subcategory);

</script>


<style scoped>
.text-cr {
    color: #F37551;
}

.table th,
.table tr {
    text-align: center;

}

.linebd th,
.linebd td {
    padding: 15px 5px;
}

.spanded {
    align-items: center;
    height: 100%;
    color: black;

}

.table_category {
    text-align: start;
}

.table_title {
    text-align: start;
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

td {
    text-align: center;
    align-content: center;
}


td:hover {
    cursor: pointer;
    color: #FF5C35;
}

.activeColor {
    color: #FF5C35 !important
}

h6 {
    margin: 0px;
}
</style>