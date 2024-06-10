<template>
    <div>
        <div class="d-flex">
            <div class="d-flex flex-column" style="width: 180px;">
                <div class="d-flex flex-column">
                    <div class="mb-4 ms-3">
                        <RouterLink to="/Member/Mypage"><h2>마이 페이지</h2></RouterLink>
                    </div>
                    <nav class="">
                        <ul class="nav d-flex flex-column ms-3">
                            <li class="nav-item">
                                <RouterLink to="/Member/Mypage/ApplicationDetails"
                                    class="nav-link active align-items-left">응모 내역</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Member/Mypage/WatchList" class="nav-link active align-items-left">찜 목록
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Member/Mypage/WinningDetails" class="nav-link active align-items-left">
                                    당첨 내역</RouterLink>
                            </li>
                        </ul>
                    </nav>
                    <nav class="">
                        <ul class="nav d-flex flex-column ms-3">
                            <li class="nav-item">
                                <RouterLink to="/Member/Mypage/LoginInformation" class="nav-link active">회원 정보 수정
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Member/Mypage/ToInquiry" class="nav-link active">문의 내역</RouterLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>


</script>

<style scoped>
.router-link-active {
    color: #FF5C35;
}

a {
    text-decoration: none;
    color: black;
}

a:hover {
    color: #FF5C35;
}

.nav-item>.nav-link {
    font-size: 20px;
}
</style>