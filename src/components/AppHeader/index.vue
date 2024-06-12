<template>
    <div>
        <div class="container-lg">
            <div class="d-flex d-none d-lg-block text-end">
                <span class="d-none d-md-inline-block me-3"><img src="@/assets/berry-icon.png" class="me-1"
                        height="20px">300</span>
                <RouterLink to="/join" class="me-3"><span class="d-none d-md-inline-block">회원가입</span></RouterLink>
                <RouterLink to="/login" class="me-3"><span class="d-none d-md-inline-block">로그인</span></RouterLink>
                <RouterLink to="/Member/Mypage" class="me-3"><span class="d-none d-md-inline-block">마이페이지</span>
                </RouterLink>
                <RouterLink to="/Notice" class="me-3"><span class="d-none d-md-inline-block">고객센터</span></RouterLink>
                <RouterLink to="/Admin/Main" class="me-3"><span class="d-none d-md-inline-block">관리자</span></RouterLink>
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
                                <RouterLink to="/Raffle/Main" class="nav-link"
                                    :class="{ 'active': nowPath === '/Raffle/Main' }">RAFFLE</RouterLink>
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
            <component :is="currentComponent"></component>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import RaffleSubMenu from './RaffleSubMenu.vue';
import NoticeSubMenu from './NoticeSubMenu.vue';
import NullSubMenu from './NullSubMenu.vue';

const router = useRouter();
const nowPath = computed(() => router.currentRoute.value.path);

const CustomComponent = {
  template: '<div style="height:42px">zz</div>'
};


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

<style scoped></style>