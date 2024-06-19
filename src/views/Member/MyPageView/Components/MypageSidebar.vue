<template>
    <div>
        <nav class="d-flex flex-column">
            <RouterLink to="/Member/MyPage" class="text-center text-nowrap h3 mb-5 no-animation" style="font-family: NanumSquareNeo; font-weight: 700">마이페이지</RouterLink>
            <h4>래플 정보</h4>
            <div class="d-flex flex-column bg-light mb-5">
                <RouterLink to="/Member/MyPage/RaffleList" class="ps-2 mb-2">응모 내역</RouterLink>
                <RouterLink to="/Member/MyPage/RaffleMonitor" class="ps-2 mb-2">당첨 내역</RouterLink>
                <RouterLink to="/Member/MyPage/LikeList" class="ps-2">찜 목록</RouterLink>
            </div>
            <h4>커뮤니티 관리</h4>
            <div class="d-flex flex-column bg-light mb-5">
                <RouterLink to="/Member/MyPage/MyBoardList" class="ps-2 mb-2">내 게시글</RouterLink>
                <RouterLink to="/Member/MyPage/MyCommentList" class="ps-2">내 댓글</RouterLink>
            </div>
            <h4>나의 정보</h4>
            <div class="d-flex flex-column bg-light mb-5">
                <RouterLink to="/Member/MyPage/MyBerryHistory" class="ps-2 mb-2">베리 변동 내역</RouterLink>
                <RouterLink to="/Member/MyPage/UpdateMember" class="ps-2 mb-2">회원 정보 수정</RouterLink>
                <RouterLink to="/Member/MyPage/InquiryList" class="ps-2">문의 하기</RouterLink>
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