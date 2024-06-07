<template>
     <div>
        <div class="d-flex flex-column" style="height: 100%;">
            <div class="d-flex flex-column">
                <div class="border">
                    <h5 class="border fw-bold">마이 페이지</h5>
                </div>
                <nav class="border">
                    <ul class="nav d-flex flex-column">
                        <li class="nav-item fw-bold">
                            <div class="nav-link active align-items-left mt-3" style="font-size: 18px;">응모 정보
                            </div>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/ApplicationDetails" class="nav-link active align-items-left">응모 내역</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/WatchList" class="nav-link active align-items-left">찜 목록</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/WinningDetails" class="nav-link active align-items-left mb-3">당첨 내역</RouterLink>
                        </li>
                    </ul>
                </nav>
                <nav class="border">
                    <ul class="nav d-flex flex-column">
                        <li class="nav-item fw-bold">
                            <div class="nav-link active align-items-left mt-3" style="font-size: 18px;">내 정보</div>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/LoginInformation" class="nav-link active">로그인 정보</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/ProfileManagement" class="nav-link active">프로필 관리</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/CreateInquiry" class="nav-link active">문의 작성</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/ToInquiry" class="nav-link active">문의 조회</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
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