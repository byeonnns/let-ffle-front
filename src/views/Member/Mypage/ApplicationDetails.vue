<template>
    <div>
        <div class="d-flex">
            <MypageNavBar style="width: 180px;"/>
            <div class="flex-grow-1 d-flex flex-column border">
                <h4 class="fw-bold mb-4">응모 내역</h4>
                <nav class="navbar navbar-expand-sm bg-white">
                    <div class="container-fluid row d-flex">
                        <ul class="navbar-nav">
                            <li class="nav-item col-4 d-flex justify-content-center">
                                <a class="nav-link" href="#">0</a>
                            </li>
                            <li class="nav-item col-4">
                                <a class="nav-link" href="#">진행중인 응모</a>
                            </li>
                            <li class="nav-item col-4">
                                <a class="nav-link" href="#">종료된 응모</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="mt-3 border p-4 d-flex justify-content-center">
                    <span>
                        <RouterLink class="router ms-5" style="color">최근 2개월</RouterLink>
                        <RouterLink class="router ms-2">4개월</RouterLink>
                        <RouterLink class="router ms-2 me-3">6개월</RouterLink>
                    </span>
                    <span>
                        <RouterLink class="router ms-2">2024-04-04</RouterLink>
                        <span> ~</span>
                        <RouterLink class="router ms-1">2024-06-06</RouterLink>
                        <RouterLink class="router ms-2">조회</RouterLink>
                    </span>
                </div>
                <div class="div">
                    <div>
                        <p class="m-0">● 한 번에 조회 가능한 기간은 최대 6개월입니다.</p>
                        <div>
                            <p class="m-0 mb-4">● 기간별 조회 결과는 입찰일 기준으로 노출됩니다.</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <button class="btn1 btn btn-white btn-lg border">
                            <h5>전체</h5>
                            <img src="/images/photos/3.png" alt="photo" class="img-circle" />
                        </button>
                        <h5>
                            <h5 class="me-5">
                                <h5>구매 희망가</h5>
                            </h5>
                            <h5 class="ms-5">
                                <h5>만료일</h5>
                            </h5>
                        </h5>
                    </div>
                    <hr />
                    <div class="mt-5 d-flex justify-content-center">
                        <div>응모내역이 없습니다.</div>
                    </div>
                    <div class="d-flex justify-content-center mt-2">
                        <button class="btn btn-white btn-sm border">
                            <h5 class="custom-font-size">응모하러 가기</h5>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MypageNavBar from './MypageNavBar.vue'

</script>

<style scoped>
.btn1,
.btn h5 {
    font-size: 13px;
    padding: 5px;
    display: flex;
    align-items: center;
}

.btn img {
    width: 20px;
    height: 20px;
    margin-left: 5px;
}

.btn {
    border-radius: 10px;
    padding: 8x;
}


h5 {
    font-size: 13px;
    margin: 0;
}
</style>