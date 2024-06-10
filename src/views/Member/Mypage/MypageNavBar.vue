<template>
    <div>
        <div class="d-flex">
            <div class="d-flex flex-column" style="width: 180px;">
                <div class="d-flex flex-column">
                    <div class="">
                    </div>
                    <nav class="">
                        <div>
                            <div class=" align-items-left ps-3 fw-bold" style="font-size: 20px;">응모 정보
                            </div>
                            <ul class="nav d-flex flex-column ms-1">
                                
                                <li class="nav-item">
                                    <RouterLink to="/Member/Mypage/ApplicationDetails"
                                        class="nav-link active align-items-left">응모 내역</RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink to="/Member/Mypage/WatchList" class="nav-link active align-items-left">찜 목록
                                    </RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink to="/Member/Mypage/WinningDetails"
                                        class="nav-link active align-items-left mb-3">당첨 내역</RouterLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <nav class="">
                        <div>
                            <div class="nav-link align-items-left ps-3 fw-bold" style="font-size: 20px;">내 정보</div>
                            <ul class="nav d-flex flex-column ms-1">
                                <li class="nav-item">
                                    <RouterLink to="/Member/Mypage/LoginInformation" class="nav-link active">로그인 정보
                                    </RouterLink>
                                </li>
                                <li class="nav-item">
                                    <RouterLink to="/Member/Mypage/ProfileManagement" class="nav-link active">프로필 관리
                                    </RouterLink>
                                </li>
                                <!-- <li class="nav-item">
                                    <RouterLink to="/Member/Mypage/CreateInquiry" class="nav-link active">문의 작성</RouterLink>
                                </li> -->
                                <li class="nav-item">
                                    <RouterLink to="/Member/Mypage/ToInquiry" class="nav-link active">문의 조회</RouterLink>
                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup>


</script>

<style scoped>
/* .nav-item>.nav-link {
    color: black;
    font-size: 15px;
} */

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

</style>