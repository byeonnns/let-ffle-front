<template>
    <div>
        <nav class="navbar navbar-expand bg-body-white p-0">
            <ul class="navbar-nav nav-underline">
                <li class="nav-item">
                    <RouterLink to="/Notice" class="nav-link" :class="{ 'active': nowPath.startsWith('/Notice')}">공지사항</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/Faq" class="nav-link" :class="{ 'active': nowPath.startsWith('/Faq')}">자주 묻는 질문</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const nowPath = computed(() => router.currentRoute.value.path);
</script>

<style scoped></style>