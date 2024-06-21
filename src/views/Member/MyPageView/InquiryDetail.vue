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

const inquiry = ref({
    ititle: "안녕하세요",
    icontent: "베리를 많이 얻고 싶은데 지금 5개밖에 없어서요. 당첨되고 싶은 래플이 있는데 10개를 다 사용해서 확률을 올리고 싶어요. 어떻게 하면 베리를 얻을 수 있는건가요?",
    icreatedat: "2024.06.20",
    ireply: "안녕하세요. 렛플(Let-FFle)은 현재 매일 베리를 획득할 수 있는 일일 퀘스트가 있습니다. 매일 첫 로그인 시 베리 1개가 지급되며, 하루에 3개의 래플에 응모하시면 베리 1개를 추가 지급합니다. 3개의 래플 응모 참여와 미션까지 모두 완료하시면 베리 1개를 획득하실 수 있으니, 이용에 참고 부탁드립니다. 감사합니다.",
    istatus: "답변완료"
});

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