<template>

    <div class="mt-5">
        <BoardNavbar/>
    </div>

    <div class="container"
        style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px;margin-top: 30px ">
        <h3 style="margin-right: 80%;">공지사항</h3>
    </div>


    <div class="container "
        style="width: 100%;  height:500px;">
        <!-- border:1px solid black  -->

        <div class="border border-dark border-2 rounded-3" style="width: 100%;  ">
            <!-- border:1px solid black -->
            <div class="card">
                <div class="card-header">
                    <p>공지 6월 공휴일 고객센터 운영 안내</p>
                </div>
                <div class="card-body">
                    <p class="mt-3"> 안녕하세요 크림입니다 </p>
                    <p>6월 공휴일 고객센터 운영시간 안내해 드립니다.</p>
                    <p>휴무 | 2024년 6월 6일 (목)</p>
                    <p>*휴무 기간 남겨주신 문의는 익일부터 순차적으로 답변 드릴 예정입니다.</p>
                    <p>감사합니둥.</p>

                    <!-- <div style="width: 100%; border:1px solid black; height:100px;"> -->
                    <button class="btn btn-success btn-sm" style="margin-top: 40px;" @click="AnnouncementHandle()">목록 보기</button>
                </div>
            </div>
        </div>

        <!-- </div> -->

    </div>




</template>

<script setup>
import BoardNavbar from './BoardNavbar.vue';
import {useRouter} from 'vue-router';
const router =useRouter();

function AnnouncementHandle() {
    router.push("/Board/Announcement");
}
</script>

<style scoped></style>