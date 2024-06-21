<template>
    <div>
        <nav class="d-flex flex-column">
            <RouterLink to="/Admin" class="text-start text-nowrap h4 mb-4 no-animation fw-bold">관리자</RouterLink>
            <h5>래플 관리</h5>
            <div class="d-flex flex-column bg-light" style="margin-bottom: 30px;">
                <RouterLink to="/Admin/RaffleList" class="ps-2 mt-3">래플 리스트</RouterLink>
                <RouterLink to="/Admin/RaffleMonitor" class="ps-2 mt-2 mb-3">래플 모니터</RouterLink>
            </div>
            <h5>회원 관리</h5>
            <div class="d-flex flex-column bg-light" style="margin-bottom: 30px;">
                <RouterLink to="/Admin/MemberList" class="ps-2 mt-3">전체 회원 조회</RouterLink>
                <RouterLink to="/Admin/WinnerList" class="ps-2 mt-2 mb-3">당첨자 조회</RouterLink>
            </div>
            <h5>공지 관리</h5>
            <div class="d-flex flex-column bg-light">
                <RouterLink to="/Admin/CreateNotice" class="ps-2 mt-3">공지사항 등록</RouterLink>
                <RouterLink to="/Admin/InquiryList" class="ps-2 mt-2 mb-3">1:1 문의 관리</RouterLink>
            </div>
        </nav>
    </div>
</template>

<script setup>
</script>

<style scoped>
a:not(.no-animation) {
    border-left: 2px solid rgba(243, 117, 81, 0);
}

a:hover:not(.no-animation) {
    border-left: 2px solid rgba(243, 117, 81, 1);
    transition: all .2s ease-out;
}
</style>