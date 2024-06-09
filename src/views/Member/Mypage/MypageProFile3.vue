<template>
    <div>
        <div class="d-flex">
            <div class="w-50 mt-5 ms-5 w-75 rounded-3">
                <div class="d-flex justify-content-between">
                    <span class="fw-bold mb-3" style="font-size: 18px;">응모 내역</span>
                    <span><button class="btn border-0 bg-white" style="font-size: 13px;">더보기 ></button></span>
                </div>
                <div class="card">
                    <div class="card-body mt-3 ms-3 flex-column pb-4">
                        <div class="d-flex justify-content-between">
                            <span>전체</span>
                            <span>진행중</span>
                            <span>종료</span>
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
.btn {
    color: gray;
}
</style>
