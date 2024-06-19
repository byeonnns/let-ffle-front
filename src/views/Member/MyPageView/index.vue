<template>
    <div>
        <div class="d-flex container-lg">
            <MypageNavBar />
            <div class="flex-grow-1 ps-5">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import MypageNavBar from '@/views/Member/MyPageView/Components/MypageSidebar.vue';
</script>

<style scoped></style>