<template>
    <div class="card">
        <div class="card-header">래플 메인페이지</div>
        <div class="card-body">
            <div class="d-flex container">
                <div class="raffle-list">
                    <div class="raffle">
                        <a href="#" class="go-to-raffle">
                            <div class="img-wrap">
                                <img src="@/assets/img1.jpg" class="thumb-nail">
                            </div>
                            <p class="raffle-title">지용킴 x 삼성 뮤직 프레임</p>
                            <p class="raffle-description">LET-FFLE에서만 단독 발매</p>
                        </a>
                    </div>
                    <div class="raffle">
                        <a href="#" class="go-to-raffle">
                            <div class="img-wrap">
                                <img src="@/assets/img2.jpg" class="thumb-nail">
                            </div>
                            <p class="raffle-title">BLR 인기 티셔츠 리오더 & 신규 발매</p>
                            <p class="raffle-description">[~24.6.10 11AM] 5% 할인</p>
                        </a>
                    </div>
                    <div class="raffle">
                        <a href="#" class="go-to-raffle">
                            <div class="img-wrap">
                                <img src="@/assets/img3.jpg" class="thumb-nail">
                            </div>
                            <p class="raffle-title">웨이비니스 24서머 3차 드랍</p>
                            <p class="raffle-description">2차 LET-FFLE 선발매</p>
                        </a>
                    </div>
                    <div class="raffle">
                        <a href="#" class="go-to-raffle">
                            <div class="img-wrap">
                                <img src="@/assets/img4.jpg" class="thumb-nail">
                            </div>
                            <p class="raffle-title">LET-FFLE 단독! 하입 브랜드 4</p>
                            <p class="raffle-description">[~24.6.31 11:00] 15% 쿠폰</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
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
