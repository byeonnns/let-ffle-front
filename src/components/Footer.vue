<template>
    <footer>
        <div class="footer-margin" style="background-color: #F37551; color:white">
            <div class="d-lg-flex justify-content-between footer-div2">
                <div class="mt-4">
                    <ul class="d-flex gap-3 list-unstyled">
                        <li>이용약관</li>
                        <RouterLink to="/Notice">
                            <li class="list-group-item text-white">공지사항</li>
                        </RouterLink>
                        <li @click="toastTest">제휴제안</li>
                        <RouterLink to="/Member/MyPage/WriteInquiry">
                            <li class="list-group-item text-white">문의하기</li>
                        </RouterLink>
                    </ul>
                    <span class="d-none d-lg-block" style="font-size: 13px;">주식회사 렛플 대표 : 변성준 사업자등록번호 : 123-45-67890
                        통신판매업 : 제2024-가락시장A-0016호<br />
                        사업장 소재지 : 서울특별시 송파구 중대로 135 IT벤처타워, 16층 <br />호스팅 서비스 : 코사 클라우드 ㈜</span>
                    <span class="d-none d-lg-block mt-3" style="font-size: 13px;">렛플(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본
                        상품은 개별판매자가 등록한 상품으로 상품, 상품정보,
                        거래에 관한 의무와 책임은 각 판매자에게 있습니다. <br />
                        단, 이용약관 및 정책, 기타 거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하는 내용에 대한 책임은 렛플(주)에 있습니다.</span>
                </div>
                <div class="mt-4">
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-line"></i>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { useEventBus } from '@/utils/eventBus';
const eventBus = useEventBus();

function toastTest() {
  eventBus.showToast('This is a toast message!');
}
</script>

<style scoped>
.list-group-item {
    border: 0;
    /* #F37557 */
}

.list-group-item button {
    font-size: 14px;
}

.bi {
    font-size: 25px;
    margin-inline: 15px;
    color: black;
}

.footer-div {
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
    padding-bottom: 40px;
    padding-top: 50px;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;
}

.footer-div2 {
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
    padding-bottom: 40px;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;
}

.footer-margin {
    margin-top: 50px;
}

.list-group {
    font-size: 14px;
    font-weight: 100;
}

strong {
    font-size: 20px;
    padding-left: 6px;
    padding-bottom: 15px;
}
</style>