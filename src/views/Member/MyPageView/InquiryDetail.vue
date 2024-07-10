<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <div class="d-flex flex-column ms-5 inquiry-details" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="mb-3 header">
                        <h4>문의 상세 보기</h4>
                    </div>
                    <div>
                        <div class="inquiry-title">
                            <h2>{{ inquiry.ititle }}</h2>
                        </div>
                        <div class="inquiry-info d-flex justify-content-between">
                            <div>
                                {{ formatDate(inquiry.icreatedat) }}
                                {{ formatTime(inquiry.icreatedat) }}
                            </div>
                            <div>
                                {{ inquiry.istatus }}
                            </div>
                        </div>
                        <hr />
                        <div class="inquiry-content p-3">
                            {{ inquiry.icontent }}
                            <div>
                               <img width="300px" :src="`${axios.defaults.baseURL}/member/iattach/${inquiry.ino}`">
                            </div>
                        </div>
                        <div class="inquiry-answer mt-5">
                            <div>
                                <h5>답변</h5>
                            </div>
                            <hr />
                            <div class="p-2">
                                {{ inquiry.ireply }}
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 text-center">
                        <RouterLink to="/Member/Mypage/InquiryList">
                            <button class="btn btn-outline-light btn-sm" style="color: white;">목록</button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import MemberAPI from '@/apis/MemberAPI';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const inquiry = ref({});
const ino = route.query.ino;

async function myInquiryDetail(ino) {
    const response = await MemberAPI.myInquiryDetail(ino);
    inquiry.value = response.data;
}
myInquiryDetail(ino);

/* 시간 출력 포맷 */
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

function formatTime(dateStr) {
    const date = new Date(dateStr);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}
</script>

<style scoped>
.btn {
    width: 100px;
    height: 35px;
    background-color: #F37551;
    border: none;
    font-size: 16px;
    transition: background-color 0.3s ease;
    border-radius: 0px;
}

.inquiry-content {
    background-color: #f5f5f5;
}
</style>