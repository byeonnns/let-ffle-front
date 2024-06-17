<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <div class="d-flex flex-column ms-5" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;">
                        <h4>찜 목록</h4>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="d-flex align-items-center">
                            <img src="@/assets/shoes.png" class="card-img-top" alt="..."
                                style="max-width: 6rem; height: auto;">
                            <div class="ms-3">
                                <div>Nike</div>
                                <div>Nike Air Force 1'07First Use White Team Red</div>
                            </div>
                        </div>
                        <div>
                            <RouterLink to="/Raffle/RaffleDetail"><button class="btn btm-sm me-2" style="background-color: #F37551; color: white;">응모</button></RouterLink>
                            <button class="btn btm-sm"
                                style="background-color: white; color: black; border: 1px solid black;">삭제</button>
                        </div>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-center">
                        <RouterLink to="#" class="fw-bold">1</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.router {
    color: black;
}
</style>