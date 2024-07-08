<template>
    <div>
        <div class="container-lg">
            <div class="d-flex d-none d-lg-block text-end">
                <div class="d-inline-block">
                    <Popper :placement="'left'">
                        <span class="me-3"><img src="@/assets/berry-icon.png" class="me-1" height="20px"
                                @click="popper">300</span>
                        <template #content>
                            <div class="d-flex flex-column bg-white border" style="width: 300px;">
                                <p class="text-center" style="font-size: 22px;">베리 변동 내역</p>
                                <div style="font-size: 10px; text-align: left;">
                                    ※ 베리 변동 내역은 최근 10개 까지만 조회됩니다. <br/>
                                    ※ 자세한 내역은 마이페이지에서 확인 가능합니다. <button class="btn btn-sm" style="background-color: white; color: black;"><RouterLink to="/Member/MyPage/MyBerryHistory">→ 마이페이지 이동</RouterLink></button>
                                </div>
                                <table class="p-0 table-bordered">
                                    <thead >
                                        <th>시간</th>
                                        <th>적립/사용</th>
                                        <th>사유</th>
                                    </thead>
                                    <tr>
                                        <td>2024.06.13  17:30</td>
                                        <td>10개 사용</td>
                                        <td>당첨 확률 상승</td>
                                    </tr>
                                    <tr>
                                        <td>2024.06.12  20:45</td>
                                        <td>1개 적립</td>
                                        <td>일일 3회 미션 성공</td>
                                    </tr>
                                </table>
                            </div>
                        </template>
                    </Popper>
                </div>
                <RouterLink to="/join" class="me-3"><span class="d-inline-block">회원가입</span></RouterLink>
                <RouterLink to="/login" class="me-3"><span class="d-inline-block">로그인</span></RouterLink>
                <RouterLink to="/Member/MyPage" class="me-3"><span class="d-inline-block">마이페이지</span></RouterLink>
                <RouterLink to="/Notice" class="me-3"><span class="d-inline-block">고객센터</span></RouterLink>
                <RouterLink to="/Admin" class="me-3"><span class="d-inline-block">관리자</span></RouterLink>
            </div>
            <nav class="navbar navbar-expand-lg bg-body-white">
                <div class="container-fluid">
                    <RouterLink to="/" class="fw-bold fst-italic non-this" style="font-size:40px">Let-<span
                            style="color:#FF5C35">FFle</span></RouterLink>
                    <div class="navbar-toggler bi bi-bell fs-3 border-0" @click="clickCheck">
                    </div>
                    <div class="d-none d-lg-inline-block">
                        <ul class="navbar-nav nav-underline">
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-link" :class="{ 'active': nowPath === '/' }">HOME
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Raffle?category=all&sortType=popular" class="nav-link" :class="{ 'active': nowPath === '/Raffle' }">
                                    RAFFLE</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Notice" class="nav-link"
                                    :class="{ 'active': nowPath === '/Notice' || nowPath === '/Faq', 'router-link-exact-active': nowPath === '/Faq' }">
                                    NOTICE</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Board/BoardList" class="nav-link"
                                    :class="{ 'active': nowPath === '/Board/BoardList' }">COMMUNITY</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <component :is="currentComponent" :nowPath="nowPath"></component>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import RaffleSubMenu from './RaffleSubMenu.vue';
import NoticeSubMenu from './NoticeSubMenu.vue';
import NullSubMenu from './NullSubMenu.vue';
import Popper from "vue3-popper";

const router = useRouter();
const nowPath = computed(() => router.currentRoute.value.path);

const currentComponent = computed(() => {
    // 현재 경로에 따라 다른 컴포넌트를 반환
    if (nowPath.value.startsWith('/Raffle')) {
        return RaffleSubMenu;
    } else if (nowPath.value.startsWith('/Notice')) {
        return NoticeSubMenu;
    } else if (nowPath.value.startsWith('/Faq')) {
        return NoticeSubMenu;
    } else {
        return NullSubMenu;
    }
});

</script>

<style scoped>
thead {
    text-align: center;
}

tr {
    font-size: 12px; 
    text-align: center;
}
</style>