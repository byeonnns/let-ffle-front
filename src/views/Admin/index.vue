<template>
    <div>
        <div class="container-lg d-flex">
            <AdminSidebar style="min-width:150px"/>
            <div class="flex-grow-1 ps-5">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup>
import AdminSidebar from '@/views/Admin/Components/AdminSidebar.vue';
import { RouterView } from 'vue-router';

</script>

<style scoped>
</style>