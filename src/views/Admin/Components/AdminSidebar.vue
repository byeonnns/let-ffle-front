<template>
    <div>
        <div class="d-flex flex-column">
            <div class="d-flex flex-column">
                <div class="flex-column">
                    <ul class="nav flex-column nav-underline">
                        <li class="nav-item">
                            <RouterLink to="/Admin" class="nav-link">대시보드</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Admin/RaffleList" class="nav-link">래플 리스트</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Admin/RaffleMonitor" class="nav-link">래플 모니터</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Admin/MemberList" class="nav-link">전체 회원 조회</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Admin/MemberList" class="nav-link">응모자 조회</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Admin/WinnerList" class="nav-link">당첨자 조회</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Admin/CreateNotice" class="nav-link">공지사항 등록</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Admin/CreateFaq" class="nav-link">FAQ 등록</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Admin/InquiryList" class="nav-link">1:1 문의 관리</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
</style>