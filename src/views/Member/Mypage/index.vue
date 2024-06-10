<template>
    <div class="d-flex ms-5 mt-4">
        <MypageNavBar/>
        <div class="w-75">
            <RouterView/>
        </div>
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import MypageNavBar from './MypageNavBar.vue';
import MypageProFile from './MypageProFile.vue';
import MypageProFile2 from './MypageProFile2.vue';
import MypageProFile3 from './MypageProFile3.vue';
import MypageProFile4 from './MypageProFile4.vue';


</script>

<style scoped>
.nav-item>.nav-link {
    color: black;
    font-size: 15px;
}

.circle-border {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid black;
    overflow: hidden;
}

.circle-border img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.position-absolute>.btn {
    margin-right: 10px;

}

.btn {
    color: gray;
}

.ms-1 .card-texts {
    font-size: 13px;
}

.ms-1 .fw-bold {
    font-size: 14px;
}

.router-link-active {
  color: #FF5C35; 
}

a {
    text-decoration: none;
    color: black;
}
</style>