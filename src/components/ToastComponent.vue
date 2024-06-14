<template>
    <div>
        <div class="toast-container position-fixed bottom-0 end-0 p-3 z-2">
            <div ref="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true"
                data-bs-autohide="true">
                <div class="toast-header">
                    <strong class="me-auto">알림</strong>
                    <small>{{ nowTime }}</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineExpose } from 'vue';
import { Toast } from 'bootstrap';

const liveToast = ref(null);
let toastBootstrap = null;
let nowTime = ref(null);

onMounted(() => {
    toastBootstrap = Toast.getOrCreateInstance(liveToast.value);
});

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');     // 시간 (00-23)
    const minutes = now.getMinutes().toString().padStart(2, '0'); // 분 (00-59)
    const seconds = now.getSeconds().toString().padStart(2, '0'); // 초 (00-59)
    nowTime.value = hours + ":" + minutes + ":" + seconds;
}

const showToast = () => {
    getCurrentTime();
    toastBootstrap.show();
};

defineExpose({
  showToast
});
</script>

<style scoped></style>