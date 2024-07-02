<template>
    <div>
        <div class="toast-container position-fixed top-0 start-50 translate-middle-x p-3 z-2">
            <div ref="liveToast" class="toast rounded-pill border-0" role="alert" aria-live="assertive"
                aria-atomic="true" data-bs-autohide="true" style="background-color: rgba(255,92,53, 0.85);">
                <!-- <div class="toast-header text-white" style="background-color: #FF5C35;">
                    <strong class="me-auto">알림</strong>
                    <small>{{ nowTime }}</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div> -->
                <div class="toast-body text-white text-center align-content-center">
                    {{ message }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Toast } from 'bootstrap';

const liveToast = ref(null);
const nowTime = ref(null);
const message = ref(null);
let toastBootstrap = null;

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

const showToast = (toastMessage) => {
    getCurrentTime();
    message.value = toastMessage;
    toastBootstrap.show();
};

defineExpose({
    showToast
});
</script>

<style scoped></style>