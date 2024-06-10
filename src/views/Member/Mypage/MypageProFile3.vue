<template>
    <div>
        <div class="d-flex ms-5 mb-4">
            <div class="rounded-3 w-100">
                <div class="d-flex justify-content-between">
                    <span class="fw-bold mb-3" style="font-size: 18px;">응모 내역</span>
                    <RouterLink to="/Member/Mypage/ApplicationDetails"><span><button class="btn border-0 bg-white" style="font-size: 13px;">더보기 ></button></span></RouterLink>
                </div>
                <table class="table mb-0">
                    <thead>
                        <tr class="d-none d-md-table-row text-center">
                            <th class="d-none d-md-table-cell" style="width: 4em;"><span>레플 이름</span></th>
                            <th class="d-none d-md-table-cell" style="width: 11em;"><span>응모 기간</span></th>
                            <th class="d-none d-md-table-cell" style="width: 8em;"><span>종료</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center">
                            <td>레플 1번</td>
                            <td>2024.06.10~20.24.06.22</td>
                            <td>2024.06.23</td>
                        </tr>
                    </tbody>
                </table>
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
