<template>
    <div class="card">
        <div class="card-header">래플 메인페이지</div>
        <div class="card-body">
            <div>
                <div class="d-flex container">
                    <div class="image-container" style="width: 100%;">
                        <img src="@/assets/img2_detail_rep.jpg" style="width: 1200px; filter:">
                    </div>
                    <div class="raffle-detail">
                        <div class="title-container" data-v-39d93f7e="">
                            <div>
                                <p class="raffle-detail-title"
                                    style="color:#222222; font-size: 48px; margin-top: -25px; font-weight: 700;">BLR
                                    <br>
                                    인기 티셔츠 리오더 & 신규 발매 ~5%
                                </p>
                                <p class="raffle-detail-title"
                                    style="color:#222222; font-size: 24px; margin-top: -25px; font-weight: 700;">
                                    참여 기간 [24.06.07 ~ 24.06.15]</p>
                            </div>
                            <img src="@/assets/img2_detail.png">
                            <div class="raffle-explain">
                                <div>
                                    rcontent
                                </div>
                                <div>
                                    <p style="font-weight: 700; font-size: 18px;">응모 참여 방법</p>
                                    <p>하단 응모하기 버튼을 클릭하면 바로 응모하실 수 있습니다.</p>
                                </div>
                                <div>
                                    <p style="font-weight: 700; font-size: 18px;">미션 안내</p>
                                    <p>미션은 래플마다 다르게 배정되며, 해당 미션을 수행하시면 당첨 확률이 올라갑니다.</p>
                                    <p>이 래플의 미션 : 댓글 미션</p>
                                    <p>현재 페이지에 댓글을 정성스럽게 달아주세요.</p>
                                    <p>참여만을 위해 무의미한 내용을 작성하거나, 욕설 또는 비방이 포함된 댓글일 경우 삭제 조치 후 미션 미참여 처리될 수 있습니다.</p>
                                </div>
                                <div>
                                    <p style="font-weight: 700; font-size: 18px;">당첨자 발표</p>
                                    <p>오전 12시 기준으로 참여 기간이 종료되면 자동 발표되며, 당첨자에게는 별도로 안내해드립니다.</p>
                                </div>
                                <button class="btn btn-success">응모하기</button>

                            </div>
                        </div>
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