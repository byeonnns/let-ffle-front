<template>
    <div>
        <div class="period_search">
            <div class="period_month border mt-2">
                <ul class="month_list container d-flex justify-content-center">
                    <li class="month_item">
                        <a href="#" class="month_link">전체</a>
                    </li>
                    <li class="month_item">
                        <a href="#" class="month_link">최근 2개월</a>
                    </li>
                    <li class="month_item">
                        <a href="#" class="month_link">4개월</a>
                    </li>
                    <li class="month_item">
                        <a href="#" class="month_link">6개월</a>
                    </li>
                    <span class="ms-3">
                        <li class="month_item">
                            <input type="date" class="month_link">
                        </li>
                        <li class="month_item">
                            <input type="date" class="month_link">
                        </li>
                        <li class="month_item">
                            <a href="#" class="month_link" style="color: white; background-color: #F37551;">조회</a>
                        </li>
                    </span>
                </ul>
            </div>
        </div>
    </div>
    <div class="mb-4 mt-2">
        <p style="color: gray; font-size: 15px;">●한 번에 조회 가능한 기간은 최대 6개월입니다.</p>
    </div>
</template>

<script setup>

</script>

<style scoped></style>