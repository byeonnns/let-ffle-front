<template>
    <div>
        <div class="container-lg">
            <div class="row">
                <RaffleVue v-for="n in 5" :key="n"/>
                <div class="col-lg-4 col-md-6 col-12 mb-4">
                    <RouterLink to="/Raffle/RaffleDetail">
                        <div class="img-container">
                            <img src="@/assets/imgSample2.jpg" class="w-100 h-100 object-fit-cover">
                        </div>
                        <p class="raffle-title mt-2">BLR 인기 티셔츠 리오더 & 신규 발매</p>
                        <p class="raffle-description">[~24.6.10 11AM] 5% 할인</p>
                    </RouterLink>
                </div>
                <div class="col-lg-4 col-md-6 col-12 mb-4">
                    <RouterLink to="/Raffle/RaffleDetail">
                        <div class="img-container">
                            <img src="@/assets/imgSample3.jpg" class="w-100 h-100 object-fit-cover">
                        </div>
                        <p class="raffle-title mt-2">웨이비니스 24서머 3차 드랍</p>
                        <p class="raffle-description">2차 LET-FFLE 선발매</p>
                    </RouterLink>
                </div>
                <div class="col-lg-4 col-md-6 col-12 mb-4">
                    <RouterLink to="/Raffle/RaffleDetail">
                        <div class="img-container">
                            <img src="@/assets/img4.jpg" class="w-100 h-100 object-fit-cover">
                        </div>
                        <p class="raffle-title mt-2">LET-FFLE 단독! 하입 브랜드 4</p>
                        <p class="raffle-description">[~24.6.31 11:00] 15% 쿠폰</p>
                    </RouterLink>
                </div>
                <div class="col-lg-4 col-md-6 col-12 mb-4">
                    <RouterLink to="/Raffle/RaffleDetail">
                        <div class="img-container">
                            <img src="@/assets/img1.jpg" class="w-100 h-100 object-fit-cover">
                        </div>
                        <p class="raffle-title mt-2">지용킴 x 삼성 뮤직 프레임</p>
                        <p class="raffle-description">LET-FFLE에서만 단독 발매</p>
                    </RouterLink>
                </div>
                <div class="col-lg-4 col-md-6 col-12 mb-4">
                    <RouterLink to="/Raffle/RaffleDetail">
                        <div class="img-container">
                            <img src="@/assets/imgSample2.jpg" class="w-100 h-100 object-fit-cover">
                        </div>
                        <p class="raffle-title mt-2">BLR 인기 티셔츠 리오더 & 신규 발매</p>
                        <p class="raffle-description">[~24.6.10 11AM] 5% 할인</p>
                    </RouterLink>
                </div>
                <div class="col-lg-4 col-md-6 col-12 mb-4">
                    <RouterLink to="/Raffle/RaffleDetail">
                        <div class="img-container">
                            <img src="@/assets/img1.jpg" class="w-100 h-100 object-fit-cover">
                        </div>
                        <p class="raffle-title mt-2">지용킴 x 삼성 뮤직 프레임</p>
                        <p class="raffle-description">LET-FFLE에서만 단독 발매</p>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import RaffleVue from "@/components/Raffle.vue";
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
