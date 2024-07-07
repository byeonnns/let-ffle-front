<template>
    <div>
        <div class="container">
            <div class="d-flex flex-column flex-grow-1">
                <div
                    style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; margin-top: 10px">
                    <h3>공지사항</h3>
                </div>
                <div style="width: 100%; height:60px; margin-bottom: 10px; margin-top: 10px;">
                    <!-- border:1px solid black; -->
                    <table class="table table-bordered">
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="width: 25%;">
                                    <button class="btn btn-outline-light" @click="changeSubcategory('전체')">
                                        <span class="spanded">전체</span>
                                    </button>
                                </td>
                                <td style="width: 25%;">
                                    <button class="btn btn-outline-light" @click="changeSubcategory('공지')">
                                        <span class="spanded">공지</span>
                                    </button>
                                </td>
                                <td style="width: 25%;">
                                    <button class="btn btn-outline-light" @click="changeSubcategory('당첨자 발표')">
                                        <span class="spanded">당첨자 발표</span>
                                    </button>
                                </td>
                                <td style="width: 25%;">
                                    <button class="btn btn-outline-light" @click="changeSubcategory('서비스')">
                                        <span class="spanded">서비스</span>
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div style="width: 100%; height:100%;  ">

                    <!--  border:1px solid black; -->
                    <!-- <div style="width: 100%; height:100%; "> -->

                    <table class="table linebd">
                        <tbody>
                            <tr v-for="notice in page.notices" :key="notice.nno">
                                <td class="table_category text-cr">{{ notice.nsubcategory }}</td>
                                <td class="table_title">
                                    <RouterLink :to="`/Notice/NoticeDetail?nno=${notice.nno}`" style="text-decoration: none; color: black">{{ notice.ntitle }}</RouterLink>
                                </td>
                                <td>{{ formatDate(notice.ncreatedat) }}</td>
                            </tr>
                            <tr>
                                <td colspan="5" class="text-center">
                                    <button @click="changePageNo(1)"
                                        class="btn btn-outline-light btn-sm me-1">처음</button>
                                    <button v-if="page.pager.groupNo > 1"
                                        @click="changePageNo(page.pager.startPageNo - 1)"
                                        class="btn btn-outline-light btn-sm me-1">이전</button>
                                    <button v-for="pageNo in page.pager.pageArray" :key="pageNo"
                                        @click="changePageNo(pageNo)"
                                        :class="(page.pager.pageNo == pageNo) ? 'btn-danger' : 'btn-outline-light'"
                                        class="btn btn-outline-light btn-sm me-1">{{ pageNo }}</button>
                                    <button v-if="page.pager.groupNo < page.pager.totalGroupNo"
                                        @click="changePageNo(page.pager.endPageNo + 1)"
                                        class="btn btn-outline-light btn-sm me-1">다음</button>
                                    <button @click="changePageNo(page.pager.totalPageNo)"
                                        class="btn btn-outline-light btn-sm">맨끝</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- </div> -->
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

console.log("BBB",route.query.subcategory);
const category = ref({
    subcategory:route.query.subcategory||"전체"
});
const pageNo = ref(route.query.pageNo || 1);
const page = ref({
    notices: [],
    pager: {}
});

console.log("aaa",category.value.subcategory);

async function getNoticeList(pageNo) {
    try {
        console.log("cccc",category.value.subcategory);
        const response = await NoticeAPI.noticeList(pageNo,category.value.subcategory);
        page.value.notices = response.data.Notice;
        page.value.pager = response.data.Pager;
        console.log(page.value);
    } catch (error) {
        console.log(error);
    }
}

getNoticeList(pageNo.value, category.value.subcategory);

function changePageNo(argPageNo) {
    router.push(`/Notice?pageNo=${argPageNo}`);
}

watch(
    route, (newRoute, oldRoute) => {
        if (newRoute.query.pageNo) {
            console.log(pageNo.value)
            getNoticeList(newRoute.query.pageNo);
        } else {
            console.log()
            getNoticeList(1);
            pageNo.value = 1;
        }
        
    }
);

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function changeSubcategory(nsubcategory) {
    category.value.subcategory=nsubcategory;
    router.push(`/Notice?subcategory=${nsubcategory}`);
}

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

.btn {
    color: black;
    border: none;
    
}

.table_category {
    text-align: start;
}

.table_title {
    text-align: start;
}

:hover {
    background-color: transparent;
}

:hover > :active {
    background-color: transparent;
}


</style>