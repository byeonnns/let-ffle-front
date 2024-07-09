<template>
    <div>
        <nav class="navbar navbar-expand bg-body-white p-0">
            <ul class="navbar-nav nav-underline">
                <li class="nav-item">
                    <button @click="goSports" class="nav-link" :class="{ 'active': nowPath === '/Raffle/Sports'}">SPORTS</button>
                </li>
                <li class="nav-item">
                    <button @click="goArt" class="nav-link" :class="{ 'active': nowPath === '/Raffle/Art' }">ART</button>
                </li>
                <li class="nav-item">
                    <button @click="goFashion" class="nav-link" :class="{ 'active': nowPath === '/Raffle/Fashion' }">FASHION</button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goSports() {
    router.push("/Raffle?category=sports&sortType=popular");
}

function goArt() {
    router.push("/Raffle?category=art&sortType=popular");
}

function goFashion() {
    router.push("/Raffle?category=fashion&sortType=popular");
}
</script>

<style scoped></style>