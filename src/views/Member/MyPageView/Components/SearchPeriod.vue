<template>
    <div>
        <div class="d-flex justify-content-center align-content-center">
            <li class="month_item">
                <button class="month_link mx-1 bg-white">전체</button>
            </li>
            <li class="month_item">
                <button class="month_link mx-1 bg-white">2개월</button>
            </li>
            <li class="month_item">
                <button class="month_link mx-1 bg-white">4개월</button>
            </li>
            <li class="month_item">
                <button class="month_link mx-1 bg-white">6개월</button>
            </li>
            <div class="d-flex justify-content-center align-content-center ms-4">
                    <input type="date" class="month_link">
                    <input type="date" class="month_link ms-2">
                    <button class="btn btn-sm ms-2" style="text-align: center;border-radius: 0px; background-color: #F37551; color: white;">조회</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.month_item {
    display: inline-block;
}

.month_link {
    border: 1px solid darkgray;
    text-decoration-line: none;
    display: inline-block;
    padding: 5px 10px;
    font-size: 13px;
}
</style>