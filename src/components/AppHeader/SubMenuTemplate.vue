<template>
    <div>
        <nav class="navbar navbar-expand bg-body-white">
            <ul class="navbar-nav nav-underline">
                <li class="nav-item">
                    <!-- slot -->
                    <slot name="menu1"></slot>
                </li>
                <li class="nav-item">
                    <slot name="menu2"></slot>
                </li>
                <li class="nav-item dropend" @mouseenter="sideOn" @mouseleave="sideOff">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                        <slot name="menu4"></slot>
                    </a>
                    <ul class="dropdown-menu border-0 m-0 p-0 ps-2" :class="{ show: isHover }" data-bs-popper="static">
                        <div class="d-flex">
                            <li><a class="nav-link me-2" style="padding: 8px;">Action</a></li>
                            <li><a class="nav-link me-2" style="padding: 8px;">Action</a></li>
                            <li><a class="nav-link me-2" style="padding: 8px;">Action</a></li>
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

const isHover = ref(false);
function sideOn() {
    isHover.value = true;
}
function sideOff() {
    isHover.value = false;
}


</script>

<style scoped>

</style>