<template>
    
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse9" aria-expanded="true" aria-controls="collapse9">
                    프로젝트 렛필
                </button>
            </h2>
            <div id="collapse9" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Raffle/Main" class="nav-link">
                                1. 래플 조회 페이지
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Raffle/Detail" class="nav-link">
                                2. 래플 상세 페이지
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Admin/Main" class="nav-link">
                                3. 관리자 메인 페이지
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Admin/CreateRaffle" class="nav-link">
                                4. 관리자 래플 등록 페이지
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Board/Write" class="nav-link">
                                5.게시물 쓰기
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Board/BoardList" class="nav-link">
                                6.전체 페이지
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Board/BoardDetail" class="nav-link">
                                7.게시물 상세페이지
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Board/BoardComment" class="nav-link">
                                8.게시물 댓글입력
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Board/Announcement" class="nav-link">
                                9.게시물 공지사항
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/MypageNavBar" class="nav-link">
                                10.마이 페이지 네브바
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/MypageProFile" class="nav-link">
                                10.마이 페이지 프로필1
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/MypageProFile2" class="nav-link">
                                10.마이 페이지 프로필2
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/MypageProFile3" class="nav-link">
                                10.마이 페이지 프로필3
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/MypageProFile4" class="nav-link">
                                10.마이 페이지 프로필4
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/ProfileManagement" class="nav-link">
                                11.마이 페이지 프로필 관리
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/LoginInformation" class="nav-link">
                                12.마이 페이지 로그인 정보
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/ApplicationDetails" class="nav-link">
                                13.마이 페이지 상세보기
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/WinningDetails" class="nav-link">
                                14.마이 페이지 당첨내역 
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/WatchList" class="nav-link">
                                15.마이 페이지 관심목록
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/CreateInquiry" class="nav-link">
                                16.마이 페이지 문의 작성하기
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/ToInquiry" class="nav-link">
                                17.마이 페이지 문의 조회
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Member/Mypage/ToInquiry" class="nav-link">
                                18.마이 페이지 문의 조회
                            </RouterLink>
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
a {
    text-decoration: none;
    color : black;
    margin-top : 2px;
}
</style>