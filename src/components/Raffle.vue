<template>
    <div class="col-lg-4 col-md-6 col-12 mb-4">
        <RouterLink to="/Raffle/RaffleDetail">
            <div class="img-container">
                <div class="position-relative">
                    <img src="@/assets/img1.jpg" class="w-100 h-100 object-fit-cover">
                    <h3 class="position-absolute start-50 top-50 translate-middle text-center align-content-center" style="width:100%; height:100%; background-color: rgba(255,255, 255, 0.8);">{{ serverTime }}</h3>
                </div>
            </div>
            <div class="d-flex">
                <div>
                    <p class="raffle-title mt-2">지용킴 x 삼성 뮤직 프레임</p>
                    <p class="raffle-description">LET-FFLE에서만 단독 발매</p>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const settingDate = new Date('2024-06-21T11:57:30')
const store = useStore();
const serverTime = computed(() => {
    const diffMilliseconds = settingDate - store.getters['clientTime/getTimeForCalculate'];
    if (diffMilliseconds < 0) {
        return "Cut-off";
    } else {
        const seconds = Math.floor(diffMilliseconds / 1000) % 60;
        const minutes = Math.floor(diffMilliseconds / 1000 / 60) % 60;
        const hours = Math.floor(diffMilliseconds / 1000 / 60 / 60);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
});


</script>

<style scoped>
.img-container {
    width: 100%;
    height: 80%;
    object-fit: cover;
}

img {
    border-radius: 10px;
}

.raffle-title {
    margin-bottom: 0;
    color: #222222;
    font-size: 15px;
    font-weight: bold;
}

.raffle-description {
    color: #222222CC;
    font-size: 13px;
    margin-bottom: 0;
    box-sizing: border-box;
}
</style>
