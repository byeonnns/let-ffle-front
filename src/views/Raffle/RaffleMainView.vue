<template>
    <div>
        <div class="container-lg">
            <div class="row">
                <RaffleVue v-for="n in 5" :key="n"/>
                <div v-for="request in raffles" :key="request" class="col-lg-4 col-md-6 col-12 mb-4">
                    <RouterLink :to="`/Raffle/RaffleDetail?rno=${request.raffle.rno}`">
                        <div class="img-container">
                            <img :src="`${axios.defaults.baseURL}/raffle/raffleThumbnailAttach/${request.raffle.rno}`" class="w-100 h-100 object-fit-cover">
                        </div>
                        <p class="raffle-title mt-2">{{ request.raffle.rtitle }}</p>
                        <p class="raffle-description"> {{ request.raffle.rsubtitle }}</p>
                    </RouterLink>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import RaffleAPI from "@/apis/RaffleAPI";
import RaffleVue from "@/components/Raffle.vue";
import { ref } from 'vue';

const raffles = ref();
const attach = ref();

async function getRaffleList() {
    const response = await RaffleAPI.getRaffleList();
    raffles.value = response.data;
    console.log(raffles.value);
    console.log(raffles.value[0].raffle)
}

getRaffleList();

// async function getRaffleAttachList() {
//     const response = await RaffleAPI.getRaffleAttachList();
//     attach.value = response.data;
// }

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
