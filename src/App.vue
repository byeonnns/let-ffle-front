<template>
  <div>
    <div class="d-flex flex-column vh-100" id="app">
      <AppHeader class="sticky-top bg-white" />
      <div class="flex-grow-1 container-fluid">
        <div class="row h-100">
          <div class="col-md-6 col-lg-1 px-2">
            <div class=" h-100 d-flex flex-column">
              <div class="flex-grow-1 mb-3" style="height:0px; overflow-y:auto; overflow-x:hidden;">
                <AppMenu />
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-11 px-2 ">
            <div class=" h-100 d-flex flex-column">
              <div class="flex-grow-1 overflow-auto" style="height:0px">
                <router-view />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
      </div>
    </div>
    <FooterNav class="d-lg-none sticky-bottom" />
    <AppFooter/>
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


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
