<template>
    <div>
        <div class="position-absolute w-100 bottom-0 bg-white row">
            <ul class="d-flex list-unstyled text-center align-content-center my-1">
                <RouterLink to="/" class="flex-grow-1">
                    <li style="font-size:0.6rem"><i class="bi bi-house-door d-block"></i>HOME</li>
                </RouterLink>
                <RouterLink to="/Raffle" class="flex-grow-1">
                    <li style="font-size:0.6rem"><i class="bi bi-box2-heart d-block"></i>RAFFLE</li>
                </RouterLink>
                <RouterLink to="/Notice" class="flex-grow-1">
                    <li style="font-size:0.6rem"><i class="bi bi-star d-block"></i>NOTICE</li>
                </RouterLink>
                <RouterLink to="/Board/BoardList" class="flex-grow-1">
                    <li style="font-size:0.6rem"><i class="bi bi-people d-block"></i>COMMUNITY</li>
                </RouterLink>
                <RouterLink to="/Member/MyPage" class="flex-grow-1">
                    <li style="font-size:0.6rem"><i class="bi bi-person-standing d-block"></i>MY</li>
                </RouterLink>
            </ul>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.bi {
    font-size: 1.5rem;
}
</style>