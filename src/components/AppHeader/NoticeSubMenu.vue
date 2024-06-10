<template>
    <SubMenuTemplate>
        <template v-slot:menu1>
            <RouterLink to="/Notice" class="nav-link">공지사항</RouterLink>
        </template>
        <template v-slot:menu2>
            <RouterLink to="/Faq" class="nav-link">자주 묻는 질문</RouterLink>
        </template>
    </SubMenuTemplate>
</template>

<script setup>
    import SubMenuTemplate from "./SubMenuTemplate.vue";
</script>

<style scoped>
</style>