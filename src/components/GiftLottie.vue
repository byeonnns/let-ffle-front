<template>
    <div>
        <Vue3Lottie class="z-1 position-fixed top-0" :class="{ 'd-none': isNone }" :animationData="giftAnimation" :loop="1"
            @on-complete="lottieOff()" style="width:100%; height:100%"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Vue3Lottie } from 'vue3-lottie';
import giftAnimation from "@/assets/lottie/checkLottie.json";
const isNone = ref(false);
function lottieOff() {
    isNone.value = true;
}

</script>

<style scoped></style>