<template>


    <div class="container"
        style="width: 100%; height:50px;border-bottom:3px solid #F37551; margin-bottom: 10px;margin-top: 30px ">
        <h3 style="margin-right: 80%; color: black">공지사항</h3>
    </div>


    <div class="container " style="width: 100%;  height:500px;">
        <!-- border:1px solid black  -->

        <div style="width: 100%;">
            <!-- border:1px solid black -->
            <div class="mt-4" style="border-bottom:1px solid #ebebeb ;">
                <h2>6월 공휴일 휴무에 따른 거래 및 정산일정안내</h2>
            </div>
            <div style=" background-color: #FAFAFA;">
                <p class="mt-3"> 안녕하세요 LET-FFle입니다 </p>
                <p>휴무 | 2024년 6월 6일 (목)</p>
                <p>*휴무 기간 남겨주신 문의는 익일부터 순차적으로 답변 드릴 예정입니다.*</p>
                <p>감사합니다.</p>


                <div class="text-center">
                    <button class="btn btn-outline-light btn-sm rounded-0" style="margin-top: 40px;"
                        @click="AnnouncementHandle()">목록
                        보기</button>
                </div>
            </div>
        </div>
    </div>



</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function AnnouncementHandle() {
    router.push("/Notice");
}
</script>

<style scoped>
.btn{
    background-color: #F37551;
    color: white;
}
</style>