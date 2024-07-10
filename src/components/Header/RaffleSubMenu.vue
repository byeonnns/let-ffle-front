<template>
    <div>
        <nav class="navbar navbar-expand bg-body-white p-0">
            <ul class="navbar-nav nav-underline">
                <li class="nav-item">
                    <a @click="changeCategory('sports')" class="nav-link" :class="{ 'active': category === 'sports' }">SPORTS</a>
                </li>
                <li class="nav-item">
                    <a @click="changeCategory('art')" class="nav-link" :class="{ 'active': category === 'art' }">ART</a>
                </li>
                <li class="nav-item">
                    <a @click="changeCategory('fashion')" class="nav-link" :class="{ 'active': category === 'fashion' }">FASHION</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { watch, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();

const category = ref(route.query.category);

watch(
    route, (newRoute, oldRoute) => {
        if (newRoute.query.category) {
            category.value = newRoute.query.category
        }
    }
);
function changeCategory(category) {
    router.push(`/Raffle?category=${category}&sortType=popular`);
}
</script>

<style scoped>
.active {
    color: #FF5C35 !important;
}

li {
    text-wrap: nowrap;
}
</style>