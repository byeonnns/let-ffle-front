<template>
    <div>
        <Vue3Lottie v-if="lottieStatus" class="z-1 position-fixed top-0 bg-black" :animationData="winningAnimation" :loop="1" @on-complete="lottieOff()" style="width:100%; height:100%"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Vue3Lottie } from 'vue3-lottie';
import winningAnimation from "@/assets/lottie/rain.json";
import defeatAnimation from "@/assets/lottie/lose.json"

let lottieAnimation;
const lottieStatus = ref(false);

function winLottieOn() {
    lottieAnimation = winningAnimation;
    lottieStatus.value = true;
}
function defeatLottieOn() {
    lottieAnimation = defeatAnimation;
    lottieStatus.value = true;
}

function lottieOff() {
    lottieStatus.value = false;
}

defineExpose({
    winLottieOn,
    defeatLottieOn
});

</script>

<style scoped></style>