<template>
    <div>
        <Vue3Lottie v-if="lottieStatus" class="z-2 position-fixed top-0" :animationData="lottieAnimation" :loop="1" @on-complete="lottieOff()" ref="lottie"/>
        <div v-if="lottieBg" class="z-1 position-fixed top-0 bg-black bg-opacity-75 w-100 h-100"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Vue3Lottie } from 'vue3-lottie';
import winningAnimation from "@/assets/lottie/fireworks2.json";
import defeatAnimation from "@/assets/lottie/rain.json";

let lottieAnimation;
const lottieStatus = ref(false);
const lottie = ref(null);
const lottieBg = ref(false);

function winLottieOn() {
    lottieAnimation = winningAnimation;
    lottieStatus.value = true;
}
function defeatLottieOn() {
    lottieAnimation = defeatAnimation;
    lottieBg.value = true;
    setTimeout(function(){
        lottieStatus.value = true;
    }, 1000);
}

function lottieOff() {
    lottieStatus.value = false;
    lottieBg.value = false;
}

defineExpose({
    winLottieOn,
    defeatLottieOn
});

</script>

<style scoped></style>