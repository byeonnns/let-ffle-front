<template>
    <div>
        <div id="carouselExampleIndicators" class="carousel slide container mb-5 d-none d-lg-block">
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
        <div class="container">
            <p class="h3">New Release</p>
            <hr class="border-3 opacity-100 mt-0" />
            <div class="row mb-5">
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
        <div class="container">
            <p class="h3 text-end">Cut-off Soon</p>
            <hr class="border-3 opacity-100 opacity-100 mt-0" />
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
        <div class="container d-flex mt-5">
            <div class="col-12 col-lg-6 pe-2">
                <table class="table table-borderless mb-0">
                    <thead>
                        <tr class="text-center">
                            <td class="col-4 p-0 position-relative">
                                <div class="position-absolute start-0 w-100 z-1 border align-content-center"
                                    style="min-height: 40px;" :class="isSelected == 1 ? 'selected' : null"
                                    @click="changeRankingTab(1)">금주의
                                    응모왕!</div>
                            </td>
                            <td class="col-4 p-0 position-relative">
                                <div class="position-absolute start-0 w-100 z-1 border align-content-center"
                                    style="min-height: 40px;" :class="isSelected == 2 ? 'selected' : null"
                                    @click="changeRankingTab(2)">금주의
                                    베리왕!</div>
                            </td>
                            <td class="col-4 p-0 position-relative">
                                <div class="position-absolute start-0 w-100 z-1 border align-content-center"
                                    style="min-height: 40px;" :class="isSelected == 3 ? 'selected' : null"
                                    @click="changeRankingTab(3)">금주의
                                    미션왕!</div>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colspan="4">
                                <div class="d-flex">
                                    <div class="col">
                                        <div class="position-relative">
                                            <h5
                                                class="position-absolute top-50 start-50 translate-middle-x text-white fw-bold z-1">
                                                1</h5>
                                            <Vue3Lottie :animationData="rank1crown"
                                                style="margin-top: -10%; margin-bottom: -25%;" />
                                            <h5 class="text-center text-nowrap mb-0">
                                                <h6>{{ rank1.count }}</h6>{{ rank1.name }}
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="position-relative">
                                            <h5
                                                class="position-absolute top-50 start-50 translate-middle-x text-white fw-bold z-1">
                                                2</h5>
                                            <Vue3Lottie :animationData="rank2crown"
                                                style="margin-top: -10%; margin-bottom: -25%;" />
                                            <h5 class="text-center text-nowrap mb-0">
                                                <h6>{{ rank2.count }}</h6>{{ rank2.name }}
                                            </h5>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="position-relative">
                                            <h5
                                                class="position-absolute top-50 start-50 translate-middle-x text-white fw-bold z-1">
                                                3</h5>
                                            <Vue3Lottie :animationData="rank3crown"
                                                style="margin-top: -10%; margin-bottom: -25%;" />
                                            <h5 class="text-center text-nowrap mb-0">
                                                <h6>{{ rank3.count }}</h6>{{ rank3.name }}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-12 col-lg-6 ps-2">
                <div class="p-5">
                    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="card border-0">
                                    <img src="@/assets/sports.jpg" class="card-img" alt="...">
                                    <div class="card-img-overlay d-flex flex-column">
                                        <h2 class="card-title">Sports</h2>
                                        <p class="card-text">
                                            당신의 스포츠 팀,<br>
                                            당신의 스타,<br>
                                            당신의 보물들
                                        </p>
                                        <button class="card-text btn btn-dark mt-auto">바로가기</button>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="card border-0">
                                    <img src="@/assets/opera.jpg" class="card-img" alt="...">
                                    <div class="card-img-overlay text-light d-flex flex-column">
                                        <h2 class="card-title">Art</h2>
                                        <p class="card-text text-end">
                                            "잊지 못할 순간" "마법 같은 이야기" "환상의 멜로디"
                                        </p>
                                        <button class="card-text btn btn-light mt-auto">바로가기</button>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="card border-0">
                                    <img src="@/assets/shoes.jpg" class="card-img" alt="...">
                                    <div class="card-img-overlay text-light d-flex flex-column">
                                        <h2 class="card-title" style="background-color: rgba(255,92,53, 0.7);">Fashion</h2>
                                        <p class="card-text h1" style="background-color: rgba(255,92,53, 0.7);">
                                            스타일의 완성
                                        </p>
                                        <button class="card-text btn btn-warning mt-auto">바로가기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Todo : 임시로 해놓음 컴포넌트화 할 것인지? -->
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import rank1crown from '@/assets/lottie/gold_crown.json'
import rank2crown from '@/assets/lottie/silver_crown.json'
import rank3crown from '@/assets/lottie/bronze_crown.json'

const store = useStore();

const serverTime = computed(() => store.getters['clientTime/getCurrentTime']);

const isSelected = ref(1);
const rank1 = ref({
    count: 100 + "회",
    name: "감기걸린사람"
});

const rank2 = ref({
    count: 50,
    name: "머리자른사람"
});

const rank3 = ref({
    count: 25,
    name: "구경하는사람"
});

function changeRankingTab(btnNum) {
    isSelected.value = btnNum;
    if (btnNum === 1) {
        rank1.value.count = 100 + "회";
        rank1.value.name = "감기걸린사람";
    } else if (btnNum === 2) {
        rank1.value.count = 30 + "개";
        rank1.value.name = "변*준";
    } else if (btnNum === 3) {
        rank1.value.count = 1298319 + "회";
        rank1.value.name = "팀장";
    }
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

.selected {
    background-color: #F37551;
    color: white;
}
</style>