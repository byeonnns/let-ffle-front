html


<template>
    <div class="d-flex flex-column" style="height: 100%;">
        <div class="container d-flex flex-column ms-3 mt-5" style="width: 215px;">
            <div class="border">
                <h4 class="border mx-3 my-3 fw-bold">마이 페이지</h4>
            </div>
            <nav class="border">
                <ul class="nav flex-column">
                    <li class="nav-item fw-bold">
                        <RouterLink class="nav-link active align-items-left mt-3" style="font-size: 18px; color: white">응모 정보</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active align-items-left">응모 내역</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active align-items-left">찜 목록</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active align-items-left mb-3">당첨 내역</RouterLink>
                    </li>
                </ul>
            </nav>
            <nav class="border">
                <ul class="nav">
                    <li class="nav-item fw-bold">
                        <div class="nav-link active align-items-left mt-3" style="font-size: 18px;">내 정보</div>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active">로그인 정보</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active">프로필 관리</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link active">문의하기</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.nav-item>.nav-link {
    color: black;
    font-size: 15px;
}
</style>