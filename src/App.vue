<template>
  <div class="d-flex flex-column vh-100">
    <AppHeader class="sticky-top bg-white"/>
    <div class="flex-grow-1 container-fluid">
      <div class="row h-100">
        <div class="col-md-6 col-lg-1 bg-dark px-2">
          <div class=" h-100 d-flex flex-column">
            <div class="flex-grow-1 mb-3" style="height:0px; overflow-y:auto; overflow-x:hidden;">
              <AppMenu />
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-11 bg-dark px-2 ">
          <div class=" h-100 d-flex flex-column">
            <div class="flex-grow-1 overflow-auto" style="height:0px">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 
      <AppFooter/> 
      Todo : 나중에 App vue 레이아웃 정리되면 추가해줄것
      루트 div 속성 수정 필요
    -->
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
