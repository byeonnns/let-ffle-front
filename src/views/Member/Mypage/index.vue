<template>
    <div>
        <div class="d-flex">
            <div class="d-flex flex-column" style="width: 180px;">
                <div class="d-flex flex-column">
                    <div class="border">
                        <h5 class="border fw-bold ps-5">마이 페이지</h5>
                    </div>
                    <nav class="border">
                        <ul class="nav d-flex flex-column">
                            <li class="nav-item fw-bold">
                                <div class="nav-link active align-items-left" style="font-size: 18px;">응모 정보
                                </div>
                            </li>
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
                    </nav>
                    <nav class="border">
                        <ul class="nav d-flex flex-column">
                            <li class="nav-item fw-bold">
                                <div class="nav-link active align-items-left" style="font-size: 18px;">내 정보</div>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Member/Mypage/LoginInformation" class="nav-link active">로그인 정보
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink to="/Member/Mypage/ProfileManagement" class="nav-link active">프로필 관리
                                </RouterLink>
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
            <div class="flex-grow-1">
                <div class="card w-50 ms-5 w-75 rounded-3">
                    <div class="card-body mt-3 ms-3 flex-column">
                        <div class="d-flex">
                            <div class="circle-border">
                                <img src="/images/photos/1.png" alt="" class="img-circle" />
                            </div>
                            <div class="mt-1 ms-3">
                                <div>
                                    <strong>gekx0m</strong>
                                </div>
                                <p>asd@naver.com</p>
                            </div>
                            <div class="position-absolute top-50 end-0 translate-middle-y me-4">
                                <button class="btn btn-white btn-lg border rounded-3" style="font-size: 10px;">프로필
                                    변경</button>
                                <button class="btn btn-white btn-lg border rounded-3" style="font-size: 10px;">응모
                                    내역</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="d-flex">
                        <div class="card w-50 mt-4 ms-5 w-75 rounded-3">
                            <div class="card-body mt-3 ms-3 flex-column pb-4">
                                <div class="d-flex justify-content-between">
                                    <span><button>쿠폰</button></span>
                                    <span><button>친구초대</button></span>
                                    <span><button>공지사항</button></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="d-flex">
                        <div class="w-50 mt-4 ms-5 w-75 rounded-3">
                            <div class="d-flex justify-content-between">
                                <span class="fw-bold mb-3" style="font-size: 18px;">응모 내역</span>
                                <span><button class="btn border-0 bg-white" style="font-size: 13px;">더보기
                                        ></button></span>
                            </div>
                            <div class="card">
                                <div class="card-body mt-3 ms-3 flex-column pb-4">
                                    <div class="d-flex justify-content-between">
                                        <span>전체</span>
                                        <span>진행중</span>
                                        <span>종료</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="d-flex">
                        <div class="w-50 mt-5 ms-5 w-75 rounded-3">
                            <div class="d-flex justify-content-between">
                                <h5 class="fw-bold mb-3" style="font-size: 18px;">관심 상품</h5>
                                <h5><button class="btn border-0 bg-white" style="font-size: 13px;">더보기 ></button></h5>
                            </div>
                            <div class="card" style="width: 16rem;">
                                <img src="/images/photos/2.png" class="card-img-top" alt="..." />
                            </div>
                            <div class="ms-1">
                                <div class="card-text fw-bold" style="font-size: 13px;">Nike</div>
                                <div class="card-texts">Nike Air Force 1'07 First Use White Te</div>
                                <div class="card-texts mb-2">am Red</div>
                                <div class="fw-bold">330,000원</div>
                                <h5 style="font-size: 11px;" class="mt-1">즉시구매가</h5>
                            </div>
                        </div>
                    </div>
                </div>
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

.circle-border {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid black;
    overflow: hidden;
}

.circle-border img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.position-absolute>.btn {
    margin-right: 10px;

}

.btn {
    color: gray;
}

.ms-1 .card-texts {
    font-size: 13px;
}

.ms-1 .fw-bold {
    font-size: 14px;
}

</style>