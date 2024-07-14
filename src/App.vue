<template>
  <div class="d-flex flex-column min-vh-100">
    <RaffleToast class="z-3" />
    <Header class="sticky-top bg-white z-1" />
    <router-view/>
    <Footer v-if="!$route.path.startsWith('/Admin')" class="mt-auto" />
    <FooterNav class="d-lg-none sticky-bottom container-fluid" />
  </div>
</template>

<script setup>
import Header from '@/components/Header';
import Footer from "@/components/Footer.vue";
import FooterNav from "@/components/FooterNav.vue";
import RaffleToast from './components/RaffleToast.vue';
import { useRoute, useRouter } from 'vue-router';
import { watch } from 'vue';
import { useStore } from 'vuex';
import { useEventBus } from './utils/eventBus';
const route = useRoute();
const router = useRouter();
const store = useStore();
const eventBus = useEventBus();

watch(route, (newRoute, oldRoute) => {
  if (newRoute.path.startsWith('/Admin')) {
    if (store.state.mrole != 'ROLE_ADMIN') {
      eventBus.showToast("권한이 없습니다.");
      router.push("/");
    }
  }

  if (newRoute.path.startsWith('/Member/MyPage')) {
    if (store.state.mid === '') {
      eventBus.showToast('로그인이 필요합니다.');
      router.replace("/login");
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
