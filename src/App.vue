<template>
  <div>
    <Header class="sticky-top bg-white z-1" />
    <router-view />
    <Footer v-if="!$route.path.startsWith('/Admin')" />
    <FooterNav class="d-lg-none sticky-bottom container-fluid" />
  </div>
</template>

<script setup>
import Header from '@/components/Header';
import Footer from "@/components/Footer.vue";
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

#app a:hover {
  color: #FF5C35;
  transition: all 0.15s;
}

#app a.non-this {
  color: initial;
}

#app .router-link-exact-active {
  color: #FF5C35;
}

#app .nav-link {
  font-weight: bold;
}

/* #app .btn {
    background-color:#F37551;
    color:white;
    border-radius: 0;
}
#app .btn:hover {
    background-color:#F37551;
    opacity: 65%;
    transition: all 0.15s;
} */

body {
  overflow-y: scroll;
  overflow-x: hidden;
}


</style>
