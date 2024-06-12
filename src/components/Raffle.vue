<template>
        <div class="col-lg-4 col-md-6 col-12 mb-4">
            <RouterLink to="/Raffle/RaffleDetail">
                <div class="img-container">
                    <img src="@/assets/img1.jpg" class="w-100 h-100 object-fit-cover">
                </div>
                <p class="raffle-title mt-2">지용킴 x 삼성 뮤직 프레임</p>
                <p class="raffle-description">LET-FFLE에서만 단독 발매</p>
            </RouterLink>
        </div>
</template>

<script setup>
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
