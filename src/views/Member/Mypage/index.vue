<template>
    <div>
        <div class="d-flex">
            <div class style="width:180px">
                <MypageNavBar/>
            </div>
            <div class="flex-grow-1">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup>
import MypageNavBar from '@/views/Mypage/MypageNavBar.vue';
</script>

<style scoped>
</style>

