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
                        <img src="@/assets/tempImage/Kith.webp" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/tempImage/Perverze.webp" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="@/assets/tempImage/samsung.webp" class="d-block w-100" alt="...">
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
        <Raffle />
        <div class='container'>
            <hr class="border-3 opacity-100"/>
            <p class="h3 mb-3">마감 임박 래플</p>
            <div class="row">
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
                <div class="col-lg-4 col-md-6 col-12 mb-4">
                    <RouterLink to="/Raffle/RaffleDetail">
                        <div class="img-container">
                            <img src="@/assets/imgSample3.jpg" class="w-100 h-100 object-fit-cover">
                        </div>
                        <p class="raffle-title mt-2">웨이비니스 24서머 3차 드랍</p>
                        <p class="raffle-description">2차 LET-FFLE 선발매</p>
                    </RouterLink>
                </div>
            </div>
        </div>
        <!-- Todo : 임시로 해놓음 컴포넌트화 할 것인지? -->
    </div>
</template>

<script setup>
import Raffle from "./Raffle/RaffleMainView.vue"
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