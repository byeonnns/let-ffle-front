<template>
    <div>
        <div class="container-lg">
            <div class="row">
                <RaffleVue v-for="n in 5" :key="n"/>
                <div v-for="raffle in raffles.raffle" :key="raffle.rno" class="col-lg-4 col-md-6 col-12 mb-4">
                    <RouterLink to="/Raffle/RaffleDetail">
                        <div class="img-container">
                            <img src="@/assets/imgSample2.jpg" class="w-100 h-100 object-fit-cover">
                        </div>
                        <p class="raffle-title mt-2">{{ raffle.raffle.rtitle }}</p>
                        <p class="raffle-description"> {{ raffle.raffle.rsubtitle }}</p>
                    </RouterLink>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import RaffleAPI from "@/apis/RaffleAPI";
import RaffleVue from "@/components/Raffle.vue";
import { ref } from 'vue';

const raffles = ref();

async function getRaffleList() {
    const response = await RaffleAPI.getRaffleList();
    raffles.value = response.data;
    console.log(raffles.value);
}

getRaffleList();


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
