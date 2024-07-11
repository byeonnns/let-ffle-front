<template>
    <div class="container"
        style="width: 100%; height:50px;border-bottom:3px solid #F37551; margin-bottom: 10px;margin-top: 30px ">
        <h3 style="margin-right: 80%; color: black">공지사항</h3>
    </div>
    <div class="container mb-5" style="width: 100%;  height:100%;">
        <div style="width: 100%;">
            <div class="mt-4" style="border-bottom:1px solid #ebebeb ;">
                <h2>{{ notice.ntitle }}</h2>
            </div>
            <div v-if="$store.state.mrole == 'ROLE_ADMIN'" class="text-end mt-2">
                <button class="btn btn-sm" @click="deleteNotice(notice.nno)">삭제</button>
            </div>
            <div style="background-color: #FAFAFA; white-space:pre;">
                <p class="mt-3" style="height: 100%;"> {{ notice.ncontent }} </p>
                <div class="text-center">
                    <button class="btn btn-outline-light btn-sm rounded-0" style="margin-top: 40px;"
                        @click="AnnouncementHandle()">목록 보기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import NoticeAPI from '@/apis/NoticeAPI';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const notice = ref({});
const nno = route.query.nno;

async function getNoticeDetail(nno) {
    try {
        const response = await NoticeAPI.noticeDetail(nno);
        notice.value = response.data;
    } catch (error) {
        console.log(error);
    }
}
getNoticeDetail(nno);

function AnnouncementHandle() {
    router.push("/Notice");
}

async function deleteNotice(nno) {
    try {
        await NoticeAPI.deleteNotice(nno);
        router.push("/Notice");
    } catch (error) {
        console.log(error);
    }
}
</script>

<style scoped>
.btn {
    background-color: #F37551;
    color: white;
}
</style>