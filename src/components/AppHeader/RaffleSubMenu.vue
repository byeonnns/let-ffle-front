<template>
    <SubMenuTemplate>
        <template v-slot:menu1>
            <RouterLink to="/Raffle/Sports" class="nav-link" :class="{ 'active': nowPath === '/Raffle/Sports' }">SPORTS</RouterLink>
        </template>
        <template v-slot:menu2>
            <RouterLink to="/Raffle/Art" class="nav-link" :class="{ 'active': nowPath === '/Raffle/Art' }">ART</RouterLink>
        </template>
        <template v-slot:menu3>
            <RouterLink to="/Raffle/Fashion" class="nav-link" :class="{ 'active': nowPath === '/Raffle/Fashion' }">FASHION</RouterLink>
        </template>
    </SubMenuTemplate>
</template>

<script setup>
    import SubMenuTemplate from "./SubMenuTemplate.vue";
</script>

<style scoped>
</style>