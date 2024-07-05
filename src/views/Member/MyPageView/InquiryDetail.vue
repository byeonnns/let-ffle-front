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
                                {{ inquiry.icreatedat }}
                            </div>
                            <div>
                                {{ inquiry.istatus }}
                            </div>
                        </div>
                        <hr/>
                        <div class="inquiry-content p-3">
                            {{ inquiry.icontent }}
                        </div>

                        <div class="inquiry-answer mt-5">
                            <div>
                                <h5>답변</h5>
                            </div>
                            <hr/>
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
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();
const inquiry = ref({});
const ino = route.query.ino;
async function myInquiryDetail(ino) {
    const response = await MemberAPI.myInquiryDetail(ino);
    inquiry.value = response.data;
}

myInquiryDetail(ino);
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