<template>
    <div>
        <Vue3Lottie v-if="lottieStatus" class="z-1 position-fixed top-0" :animationData="LoadingAnimation" style="width:100%; height:100%"/>
    </div>
</template>

<script setup>
import { ref, defineExpose } from 'vue';
import { Vue3Lottie } from 'vue3-lottie';
import LoadingAnimation from "@/assets/lottie/loading.json";

const lottieStatus = ref(false);

function OnLoading() {
    lottieStatus.value = true;
}

function LoadingSuccess() {
    lottieStatus.value = false;
}

defineExpose({
    OnLoading,
    LoadingSuccess
});

</script>

<style scoped></style>