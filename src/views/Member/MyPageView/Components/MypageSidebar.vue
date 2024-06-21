<template>
    <div>
        <nav class="d-flex flex-column">
            <RouterLink to="/Member/MyPage" class="text-start text-nowrap h4 mb-4 no-animation fw-bold">마이 페이지</RouterLink>
            <h5>래플 정보</h5>
            <div class="d-flex flex-column bg-light" style="margin-bottom: 30px;">
                <RouterLink to="/Member/MyPage/MyEntryList" class="ps-2 mt-3">응모 내역</RouterLink>
                <RouterLink to="/Member/MyPage/WinningList" class="ps-2 mt-2">당첨 내역</RouterLink>
                <RouterLink to="/Member/MyPage/LikeList" class="ps-2 mt-2 mb-3">관심 리스트</RouterLink>
            </div>
            <h5>커뮤니티 관리</h5>
            <div class="d-flex flex-column bg-light" style="margin-bottom: 30px;">
                <RouterLink to="/Member/MyPage/MyBoardList" class="ps-2 mt-3">내 게시글</RouterLink>
                <RouterLink to="/Member/MyPage/MyCommentList" class="ps-2 mt-2 mb-3">내 댓글</RouterLink>
            </div>
            <h5>나의 정보</h5>
            <div class="d-flex flex-column bg-light">
                <RouterLink to="/Member/MyPage/MyBerryHistory" class="ps-2 mt-3">베리 변동 내역</RouterLink>
                <RouterLink to="/Member/MyPage/UpdateMember" class="ps-2 mt-2">회원 정보 수정</RouterLink>
                <RouterLink to="/Member/MyPage/InquiryList" class="ps-2 mt-2 mb-3">문의 하기</RouterLink>
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