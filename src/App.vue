<template>
  <div>
    <AppHeader class="sticky-top bg-white" />
    <router-view />
    <AppFooter v-if="!$route.path.startsWith('/Admin')"/>
    <FooterNav class="d-lg-none sticky-bottom" />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppMenu from '@/components/AppMenu.vue';
import AppFooter from "@/components/AppFooter.vue";
import FooterNav from "@/components/FooterNav.vue";
</script>

<style>
@font-face {
  font-family: 'jamsil';
  src: url(/public/fonts/Jamsil_Regular.ttf);
}

#app {
  font-family: 'jamsil';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app a {
  color: black;
  text-decoration: none;
}

#app .router-link-exact-active {
  color: #FF5C35; 
}

#app .nav-link {
  font-weight: bold;
}
</style>
