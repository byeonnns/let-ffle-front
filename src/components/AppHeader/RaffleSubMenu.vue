<template>
    <div>
        <nav class="navbar navbar-expand bg-body-white p-0">
            <ul class="navbar-nav nav-underline">
                <li class="nav-item dropdown" @mouseenter="sideOn('sportsHover')" @mouseleave="sideOff('sportsHover')">
                    <RouterLink to="/Raffle/Sports" class="nav-link dropdown-toggle" :class="{ 'active': nowPath === '/Raffle/Sports' }">SPORTS</RouterLink>
                    <ul class="dropdown-menu rounded-0 border-0 m-0 p-0 ps-2" :class="{ show: sportsHover }" data-bs-popper="static">
                        <div class="d-flex">
                            <li><a class="nav-link me-2" style="padding: 8px;">Soccer</a></li>
                            <li><a class="nav-link me-2" style="padding: 8px;">Baseball</a></li>
                            <li><a class="nav-link me-2" style="padding: 8px;">Basketball</a></li>
                        </div>
                    </ul>
                </li>
                <li class="nav-item dropdown" @mouseenter="sideOn('artsHover')" @mouseleave="sideOff('artsHover')">
                    <RouterLink to="/Raffle/Art" class="nav-link dropdown-toggle" :class="{ 'active': nowPath === '/Raffle/Art' }">ARTS</RouterLink>
                    <ul class="dropdown-menu border-0 m-0 p-0 ps-2" :class="{ show: artsHover }" data-bs-popper="static">
                        <div class="d-flex">
                            <li><a class="nav-link me-2" style="padding: 8px;">Movie</a></li>
                            <li><a class="nav-link me-2" style="padding: 8px;">Musical</a></li>
                            <li><a class="nav-link me-2" style="padding: 8px;">Concert</a></li>
                        </div>
                    </ul>
                </li>
                <li class="nav-item dropdown" @mouseenter="sideOn('fashionHover')" @mouseleave="sideOff('fashionHover')">
                    <!-- 클릭 기능 제거 data-bs-toggle="dropdown" aria-expanded="false" -->
                    <RouterLink to="/Raffle/Fashion" class="nav-link dropdown-toggle" :class="{ 'active': nowPath === '/Raffle/Fashion' }">FASHION</RouterLink>
                    <ul class="dropdown-menu border-0 m-0 p-0 ps-2" :class="{ show: fashionHover }" data-bs-popper="static">
                        <div class="d-flex">
                            <li><a class="nav-link me-2" style="padding: 8px;">Top</a></li>
                            <li><a class="nav-link me-2" style="padding: 8px;">Bottom</a></li>
                            <li><a class="nav-link me-2" style="padding: 8px;">Foot</a></li>
                        </div>
                    </ul>
                </li>
                <li class="nav-item">
                    <slot name="menu3"></slot>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>

import { ref } from 'vue';

const sportsHover = ref(false);
const artsHover = ref(false);
const fashionHover = ref(false);

function sideOn(type) {
          if (type === 'sportsHover') {
            sportsHover.value = true;
          } else if (type === 'artsHover') {
            artsHover.value = true;
          } else if (type === 'fashionHover') {
            fashionHover.value = true;
          }
        }

        function sideOff(type) {
          if (type === 'sportsHover') {
            sportsHover.value = false;
          } else if (type === 'artsHover') {
            artsHover.value = false;
          } else if (type === 'fashionHover') {
            fashionHover.value = false;
          }
        }

</script>

<style scoped>
.dropdown-toggle::after {
    display: none !important;
}
</style>