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
import { useRoute, useRouter } from 'vue-router';
import { watch } from 'vue';
import { useStore } from 'vuex';

const route = useRoute();
const router = useRouter();
const store = useStore();

watch (route, (newRoute, oldRoute) => {
  if (newRoute.path.startsWith('/Admin')) {
    if (store.state.mrole != 'ROLE_ADMIN') {
      
      router.push("/");
    }
  }

})
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
  cursor: pointer;
  transition: all 0.15s;
}

#app a.non-this {
  color: initial;
}

#app .router-link-active {
  color: #FF5C35;
}

#app .login-active-router-link-exact-active {
  color: #FF5C35;
}

#app .my-page-active.router-link-exact-active {
  color: #FF5C35;
}

#app .nav-link {
  font-weight: bold;
}

body {
  overflow-y: scroll;
  overflow-x: hidden;
}

.pagerbtn {
    color: black;
    margin-left: 7px;
    border: none;
    background-color: white;
}


</style>
