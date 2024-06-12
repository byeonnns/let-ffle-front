<template>
    <div>
        <div class="container-lg">
            <div class="d-flex d-none d-lg-block text-end">
                <div class="d-inline-block">
                    <Popper :show="showPopper" :placement="'left'">
                        <span class="me-3"><img src="@/assets/berry-icon.png" class="me-1" height="20px"
                                @click="popper">300</span>
                        <template #content>
                            <div class="d-flex flex-column bg-white border">
                                <p class="text-center">베리 변동 내역</p>
                                <table class="p-0 table-bordered">
                                    <tr>
                                        <td class="pe-2">06-12 20:45</td>
                                        <td>획득</td>
                                        <td class="pe-2">+1</td>
                                        <td>미션 성공</td>
                                    </tr>
                                    <tr>
                                        <td class="pe-2">06-13 17:30</td>
                                        <td>소비</td>
                                        <td class="pe-2">-1</td>
                                        <td>확률 상승</td>
                                    </tr>
                                </table>
                            </div>
                        </template>
                    </Popper>
                </div>
                <RouterLink to="/join" class="me-3"><span class="d-inline-block">회원가입</span></RouterLink>
                <RouterLink to="/login" class="me-3"><span class="d-inline-block">로그인</span></RouterLink>
                <RouterLink to="/Member" class="me-3"><span class="d-inline-block">마이페이지</span>
                </RouterLink>
                <RouterLink to="/Notice" class="me-3"><span class="d-inline-block">고객센터</span></RouterLink>
                <RouterLink to="/Admin" class="me-3"><span class="d-inline-block">관리자</span></RouterLink>
            </div>
            <nav class="navbar navbar-expand-lg bg-body-white">
                <div class="container-fluid">
                    <RouterLink to="/" class="fw-bold fst-italic non-this" style="font-size:28px">Let-<span
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
                                <RouterLink to="/Raffle" class="nav-link" :class="{ 'active': nowPath === '/Raffle' }">
                                    RAFFLE</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Notice" class="nav-link"
                                    :class="{ 'active': nowPath === '/Notice' || nowPath === '/Faq', 'router-link-exact-active': nowPath === '/Faq' }">
                                    NOTICE</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Board/BoardList" class="nav-link"
                                    :class="{ 'active': nowPath === '/Board/BoardList' }">COMUNNITY</RouterLink>
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

const popper = () => ({
    showPopper: true
});

</script>

<style scoped></style>