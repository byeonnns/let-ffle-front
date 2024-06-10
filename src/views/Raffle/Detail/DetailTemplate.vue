<template>
    <div>
        <div class="container">
            <div style="height:500px">
                <img src="@/assets/imgDetail1.jpg" class="w-100 h-100 object-fit-cover"
                    style="object-position:center top;">
            </div>
            <p class="h1"><slot name="detailTitle"></slot><i class="bi bi-heart fs-3"></i></p>
            <p class="h3"><slot name="detailTime"></slot></p>
            <p class="h5"><slot name="detailContent"></slot></p>
            <p>태그를 적는 부분</p>
            <div class="d-flex row">
                <div class="col-lg-6 col-12 p-2">
                    <button class="btn w-100"><slot name="detailBtn1"></slot></button>
                </div>
                <div class="col-lg-6 col-12 p-2">
                    <button class="btn w-100"><slot name="detailBtn2"></slot></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>