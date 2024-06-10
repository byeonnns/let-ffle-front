<template>
    <SubMenuTemplate>
        <template v-slot:menu1>
            <RouterLink to="/Faq" class="nav-link">전체</RouterLink>
        </template>
        <template v-slot:menu2>
            <RouterLink to="/Notice" class="nav-link">자유</RouterLink>
        </template>
        <template v-slot:menu3>
            <RouterLink to="/Notice" class="nav-link">당첨 후기</RouterLink>
        </template>
    </SubMenuTemplate>
</template>

<script setup>
    import SubMenuTemplate from "./SubMenuTemplate.vue";
</script>

<style scoped>
</style>