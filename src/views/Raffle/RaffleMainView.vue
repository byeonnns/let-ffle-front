<template>
    <div>
        <div class="container-lg">
            <div class="d-flex justify-content-between">
                <nav class="navbar navbar-expand bg-body-white">
                    <ul class="navbar-nav nav-underline">
                            <li><a @click="changeSortType('popular')" class="nav-link" style="font-size:14px; padding: 8px;" :class="sortType === 'popular' ? 'active' : ''">인기순</a></li>
                            <li><a @click="changeSortType('new')" class="nav-link" style="font-size:14px; padding: 8px;" :class="sortType === 'new' ? 'active' : ''">최신순</a></li>
                            <li><a @click="changeSortType('cutoffsoon')" class="nav-link" :class="sortType === 'cutoffsoon' ? 'active' : ''" style="font-size:14px; padding: 8px;">응모마감순</a></li>
                    </ul>
                </nav>
                <div class="d-flex justify-content-end mb-3">
                    <div class="input-group input-group-sm w-auto">
                        <input type="text" class="form-control" v-model="searchWord" @keyup.enter="search(searchWord)">
                        <button class="btn btn-sm" style="background-color: #F37551; color:white;" @click="search">검색</button>
                    </div>
                    
                </div>
            </div>
            <div class="row">
                <div v-for="request in raffles" :key="request" class="col-lg-4 col-md-6 col-12 mb-4">
                    <RouterLink :to="`/Raffle/RaffleDetail?rno=${request.raffle.rno}`">
                        <div class="img-container">
                            <img :src="`${axios.defaults.baseURL}/raffle/raffleThumbnailAttach/${request.raffle.rno}`"
                                class="w-100 h-100 object-fit-cover">
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
import { ref, watch } from 'vue';
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const raffles = ref();
const category = ref(route.query.category || "all");
const sortType = ref(route.query.sortType || "popular");
const searchWord = ref();

async function search() {
    const response = await RaffleAPI.searchRaffleList(searchWord.value);
    raffles.value = response.data;
}

async function getRaffleList(argCategory, argSortType) {
    const response = await RaffleAPI.getRaffleList(argCategory, argSortType);
    raffles.value = response.data;
}

getRaffleList(category.value, sortType.value);

watch(
    route, (newRoute, oldRoute) => {
        if (newRoute.query.category || newRoute.query.sortType) {
            sortType.value = newRoute.query.sortType;
            category.value = newRoute.query.category;
            getRaffleList(newRoute.query.category, newRoute.query.sortType);
        }
    }
);

function changeSortType(sort) {
    router.push(`/Raffle?category=${category.value}&sortType=${sort}`);
}

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

.active {
    color: #FF5C35 !important;
}
</style>
