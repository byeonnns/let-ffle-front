<template>
    <div>
        <div class="container-lg">
            <div class="d-flex d-none d-lg-block text-end">
                <RouterLink to="/join" class="me-3"><span class="d-none d-md-inline-block">회원가입</span></RouterLink>
                <RouterLink to="/login" class="me-3"><span class="d-none d-md-inline-block">로그인</span></RouterLink>
                <a href="#" class="me-3"><span class="d-none d-md-inline-block">주문조회</span></a>
                <a href="#" class="me-3"><span class="d-none d-md-inline-block">고객센터</span></a>
                <RouterLink to="/admin/Main" class="me-3"><span class="d-none d-md-inline-block">관리자</span></RouterLink>
            </div>
            <nav class="navbar navbar-expand-lg bg-body-white">
                <div class="container-fluid">
                    <RouterLink to="/"><a class="fw-bold fst-italic h3">Let-FFle</a></RouterLink>
                    <div class="navbar-toggler bi bi-bell fs-3 border-0" @click="clickCheck">
                    </div>
                    <div class="d-none d-lg-inline-block">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <RouterLink to="/" class="nav-item me-3">HOME</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Raffle/Main" class="nav-item me-3">RAFFLE</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Notice" class="nav-item me-3">NOTICE</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Board/BoardList" class="nav-item me-3">COMUNNITY</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div v-if="nowPath !== '/login' && nowPath !== '/join'">
                <nav class="navbar navbar-expand bg-body-white">
                    <ul class="navbar-nav nav-underline">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-item">HOME</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Raffle/Sports" class="nav-item">SPORTS</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Raffle/Art" class="nav-item">ART</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Raffle/Fashion" class="nav-item">FASHION</RouterLink>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

function clickCheck() {
    console.log("클릭 체크");
    console.log(nowPath.value);
}

const router = useRouter();
const nowPath = computed(() => router.currentRoute.value.path);
</script>

<style scoped>
a {
    text-decoration-line : none;
    color: #000000;
}

.router-link-active {
  color: #FF5C35; 
}
</style>