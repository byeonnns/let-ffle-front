<template>
  <div>
    <AppHeader class="sticky-top bg-white"/>
    <AppMenu/>
    <router-view />
    <AppFooter/> 
    <FooterNav class="d-lg-none sticky-bottom"/>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppMenu from '@/components/AppMenu.vue';
import AppFooter from "@/components/AppFooter.vue";
import FooterNav from "@/components/FooterNav.vue";
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
