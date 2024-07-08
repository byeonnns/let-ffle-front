<template>
    <div>
        <div id="carouselExampleIndicators" class="carousel slide container mb-4 d-none d-lg-block">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner mb-3">
                <RouterLink to="/Raffle">
                    <div class="carousel-item active">
                        <RouterLink to="/Raffle?category=fashion">
                            <img src="@/assets/tempImage/fashion_banner.jpg" class="d-block w-100" alt="...">
                        </RouterLink>
                    </div>
                    <div class="carousel-item">
                        <RouterLink to="/Raffle?category=art">
                            <img src="@/assets/tempImage/art_banner.jpg" class="d-block w-100" alt="...">
                        </RouterLink>
                    </div>
                    <div class="carousel-item">
                        <RouterLink to="/Raffle?category=sports">
                            <img src="@/assets/tempImage/sports_banner.jpg" class="d-block w-100" alt="...">
                        </RouterLink>
                    </div>
                </RouterLink>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="container">
            <p class="h3">New Release</p>
            <hr class="border-3 opacity-100 mt-0" />
            <div class="row mb-5">
                <div v-for="raffle in newReleaseRaffles" :key="raffle.rno" class="col-lg-4 col-md-6 col-12 mb-4">
                    <RouterLink :to="`/Raffle/RaffleDetail?rno=${raffle.raffle.rno}`">
                        <img :src="`${axios.defaults.baseURL}/raffle/raffleThumbnailAttach/${raffle.raffle.rno}`" class="w-100 h-auto">
                        <div>
                            <p class="raffle-title mt-2">{{ raffle.raffle.rtitle }}</p>
                            <p class="raffle-description">{{ raffle.raffle.rsubtitle }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div class="container">
            <p class="h3">Cut-off Soon</p>
            <hr class="border-3 opacity-100 opacity-100 mt-0" />
            <div class="row">
                <div v-for="raffle in cutOffSoonRaffles" :key="raffle.rno" class="col-lg-4 col-md-6 col-12 mb-4">
                    <RouterLink :to="`/Raffle/RaffleDetail?rno=${raffle.rno}`">
                        <img :src="`${axios.defaults.baseURL}/raffle/raffleThumbnailAttach/${raffle.raffle.rno}`" class="w-100 h-auto">
                        <div>
                            <p class="raffle-title mt-2">{{ raffle.raffle.rtitle }}</p>
                            <p class="raffle-description">{{ raffle.raffle.rsubtitle }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import RaffleAPI from '@/apis/RaffleAPI';
import { computed, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';
import axios from 'axios';

const store = useStore();

const newReleaseRaffles = ref();
const cutOffSoonRaffles = ref();

async function getNewReleaseRaffles() {
    const response = await RaffleAPI.getNewReleaseRaffles();
    newReleaseRaffles.value = response.data;
    console.log(newReleaseRaffles.value);
}
getNewReleaseRaffles();

async function getCutOffSoonRaffles() {
    const response = await RaffleAPI.getCutOffSoonRaffles();
    cutOffSoonRaffles.value = response.data;
    console.log(cutOffSoonRaffles.value);
}
getCutOffSoonRaffles();
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