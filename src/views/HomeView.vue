<template>
    <div>
        <div class="container">
            <p class="h3">New Release</p>
            <hr class="border-3 opacity-100 mt-0" />
            <div class="row mb-5">
                <div v-for="(raffle, index) in raffle" :key="index" class="col-lg-4 col-md-6 col-12 mb-4">
                    <RouterLink to="/Raffle/RaffleDetail">
                        <img :src="require(`@/assets/${raffleImage[index]}`)" class="w-100 h-auto">
                        <div>
                            <p class="raffle-title mt-2">{{ raffle.rtitle }}</p>
                            <p class="raffle-description">{{ raffle.rsubtitle }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div class="container">
            <p class="h3">Cut-off Soon</p>
            <hr class="border-3 opacity-100 opacity-100 mt-0" />
            <div class="row">
                <div v-for="(raffle, index) in raffle" :key="index" class="col-lg-4 col-md-6 col-12 mb-4">
                    <RouterLink to="/Raffle/RaffleDetail">
                        <img :src="require(`@/assets/${raffleImage[index]}`)" class="w-100 h-auto">
                        <div>
                            <p class="raffle-title mt-2">{{ raffle.rtitle }}</p>
                            <p class="raffle-description">{{ raffle.rsubtitle }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const raffleImage = ref(["img1.jpg", "imgSample2.jpg", "imgSample3.jpg"]);

const raffle = ref([
    {
        rtitle: "BLR인기 티셔츠 리오더 & 신규 발매",
        rsubtitle: "[~24.6.10 11AM] 5% 할인"
    },
    {
        rtitle: "지용킴 x 삼성 뮤직 프레임",
        rsubtitle: "LET-FFLE에서만 단독 발매"
    },
    {
        rtitle: "웨이비니스 24서머 3차 드랍",
        rsubtitle: "2차 LET-FFLE 선발매"
    }
])

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

.selected {
    background-color: #F37551;
    color: white;
}
</style>