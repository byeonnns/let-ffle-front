<template>
    <div>
        <div class="position-absolute w-100 bottom-0 bg-white row">
            <ul class="d-flex list-unstyled text-center align-content-center my-1">
                <RouterLink to="/" class="flex-grow-1"><li style="font-size:0.6rem"><i class="bi bi-1-circle d-block"></i>HOME</li></RouterLink>
                <a class="flex-grow-1"><li style="font-size:0.6rem"><i class="bi bi-2-circle d-block"></i>STYLE</li></a>
                <a class="flex-grow-1"><li style="font-size:0.6rem"><i class="bi bi-3-circle d-block"></i>SHOP</li></a>
                <a class="flex-grow-1"><li style="font-size:0.6rem"><i class="bi bi-4-circle d-block"></i>SAVED</li></a>
                <RouterLink to="/login" class="flex-grow-1"><li style="font-size:0.6rem"><i class="bi bi-5-circle d-block"></i>MY</li></RouterLink>
            </ul>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
a {
    text-decoration-line : none;
    color: #000000;
}

.bi {
    font-size : 1.5rem;
}
</style>