<template>
    <div>
        <div class="d-flex flex-column">
            <div class="d-flex flex-column">
                <div>
                    <RouterLink to="/Member/MyPage">
                        <h3>마이페이지</h3>
                    </RouterLink>
                </div>
                <nav class="nav flex-column">
                    <li>
                        <h5>래플 정보</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <RouterLink to="/Member/MyPage/MyEntryList">응모 내역</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Member/MyPage/WinningList">당첨 내역</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Member/MyPage/LikeList">찜 목록</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h5>커뮤니티 관리</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <RouterLink to="/Member/MyPage/MyBoardList">내 게시글</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Member/MyPage/MyCommentList">내 댓글</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h5>나의 정보</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <RouterLink to="/Member/MyPage/UpdateMember">회원 정보 수정</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Member/MyPage/InquiryList">문의 하기</RouterLink>
                            </li>
                        </ul>
                    </li>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
nav > li {
    margin-top:40px;
}

ul > li {
    font-size: 15px;
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #fafafa;
}
</style>