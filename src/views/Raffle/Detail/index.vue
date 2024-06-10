<template>
    <div>
        <TestDetail/>
    </div>
</template>

<script setup>
import TestDetail from "./TestDetail.vue"
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.raffle-list {
    width: 100%;
}

.raffle {
    width: 390px;
    height: 280px;
    margin: 20px 20px 20px 10px;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
}

.thumb-nail {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
}

.go-to-raffle {
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
}

.img-wrap {
    height: 80%;
}

.raffle-description {
    margin-top: 4px;
    box-sizing: border-box;
}

.raffle-title {
    margin-top: 10px;
    margin-bottom: 0;
    color: #222222;
    font-size: 15px;
    font-weight: bold;
}

.raffle-description {
    color: #222222CC;
    font-size: 13px;
    margin-bottom: 0;
}

/* --------------------------- */
.title-container {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 960px;
    position: relative;
}
</style>