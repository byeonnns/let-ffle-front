<template>
    <aside id="sidebar">
        <ul class="sidebar-nav">
            <!-- 회원 관리 (회원 조회, 회원정보 수정 및 탈퇴) -->
            <li class="sidebar-item">
                <a href="#" class="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse"
                    data-bs-target="#member" aria-expanded="false" aria-controls="member">
                    <i class="bi bi-person" style="color:white;"></i>
                    <span>회원 관리</span>
                </a>

                <ul id="member" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item">
                        <RouterLink to="/Admin/memberList" class="sidebar-link" style="color: white;">전체 회원 조회</RouterLink>
                    </li>
                </ul>
            </li>

            <!-- 래플 관리 (래플 등록, 래플 목록(내부: 수정 및 삭제)) -->
            <li class="sidebar-item">
                <a href="#" class="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse"
                    data-bs-target="#product" aria-expanded="false" aria-controls="product">
                    <i class="bi bi-dice-5" style="color:white;"></i>
                    <span>래플 관리</span>
                </a>
                <ul id="product" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item">
                        <RouterLink to="/Admin/Raffle" class="sidebar-link" style="color: white;">대시보드</RouterLink>
                    </li>
                    <li class="sidebar-item">
                        <RouterLink to="/Admin/Raffle/CreateRaffle" class="sidebar-link" style="color: white;">래플 등록</RouterLink>
                    </li>
                    <li class="sidebar-item">
                        <RouterLink to="/Admin/Raffle/RaffleList" class="sidebar-link" style="color: white;">래플 목록</RouterLink>
                    </li>
                </ul>
            </li>

            <!-- 주문 관리 (주문 조회, 수정 및 삭제) -->
            <li class="sidebar-item">
                <a href="#" class="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse"
                    data-bs-target="#order" aria-expanded="false" aria-controls="order">
                    <i class="bi bi-gift" style="color:white;"></i>
                    <span>당첨자 관리</span>
                </a>
                <ul id="order" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item">
                        <a href="${pageContext.request.contextPath}/admin/order/dashboard" class="sidebar-link" style="color: white;">대시보드</a>
                    </li>
                    <li class="sidebar-item">
                        <a href="${pageContext.request.contextPath}/admin/order/orderList" class="sidebar-link" style="color: white;">전체 당첨자
                            조회</a>
                    </li>
                </ul>
            </li>

            <!-- 게시판 관리 (공지사항, 고객문의, Q&A) -->
            <li class="sidebar-item">
                <a href="#" class="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse"
                    data-bs-target="#board" aria-expanded="false" aria-controls="board">
                    <i class="bi bi-megaphone" style="color: white;"></i>
                    <span>고객센터</span>
                </a>
                <ul id="board" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                    <li class="sidebar-item">
                        <RouterLink to="/Admin/Inquiry/createNotice" class="sidebar-link" style="color: white;">공지사항 등록</RouterLink>
                    </li>
                    <li class="sidebar-item">
                        <RouterLink to="/Admin/Inquiry/createFaq" class="sidebar-link" style="color: white;">자주묻는질문 등록</RouterLink>
                    </li>
                    <li class="sidebar-item">
                        <RouterLink to="/Admin/Inquiry" class="sidebar-link" style="color: white;">1:1 문의 관리</RouterLink>
                    </li>
                </ul>
            </li>
        </ul>

        <div class="sidebar-footer">
            <a href="#" class="sidebar-link">
                <i class="lni lni-exit"></i>
                <span>Logout</span>
            </a>
        </div>
    </aside>
</template>

<script setup>
</script>

<style scoped>
/* font ------------------------------------- */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

/* ::after,
::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
} */

a {
    text-decoration: none;
}

li {
    list-style: none;
}

h1 {
    font-weight: 500;
    font-size: 1.5rem;
}

/* body {
    font-family: 'Noto Sans KR', sans-serif;
} */

/*----------------------------------------------------------------*/
.wrapper {
    display: flex;
}

.main {
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    transition: all 0.35s ease-in-out;
    background-color: #fafbfe;
}

/* side bar -----------------------------------------------------*/
#sidebar {
    min-height: 100%;
    width: 70px;
    min-width: 70px;
    z-index: 1000;
    transition: all .25s ease-in-out;
    display: flex;
    flex-direction: column;
    background-color: #F37551;
}

#sidebar.expand {
    width: 260px;
    min-width: 260px;
}

#toggle-btn {
    background-color: transparent;
    cursor: pointer;
    border: 0;
    padding: 1rem 1.5rem;
}

#toggle-btn i {
    font-size: 1.5rem;
    color: #fff;
}

.sidebar-logo {
    margin: auto 0;
}

.sidebar-logo a {
    color: #FFF;
    font-size: 1.18rem;
    font-weight: 700;
}

#sidebar:not(.expand) .sidebar-logo,
#sidebar:not(.expand) a.sidebar-link span {
    display: none;
}

.sidebar-nav {
    padding: 2rem 0;
    flex: 1 1 auto;
}

a.sidebar-link {
    padding: .625rem 1.625rem;
    color: #FFF;
    display: block;
    font-size: 1.0rem;
    white-space: nowrap;
    border-left: 3px solid transparent;
}

.sidebar-link i {
    font-size: 1.1rem;
    margin-right: .75rem;
}

a.sidebar-link:hover {
    background-color: rgba(255, 255, 255, .075);
    border-left: 3px solid #FFFFFF;
}

.sidebar-item {
    position: relative;
}

/* 사이드바 확장 안했을 때, 카테코리 클릭시 옆 화면에 표시되는 css*/
#sidebar:not(.expand) .sidebar-item .sidebar-dropdown {
    position: absolute;
    top: 0;
    left: 70px;
    background-color: #F37551;
    padding: 0;
    min-width: 15rem;
    display: none;
}

#sidebar:not(.expand) .sidebar-item:hover .has-dropdown+.sidebar-dropdown {
    display: block;
    max-height: 15em;
    width: 100%;
    opacity: 1;
}

/* 아코디언 활성화시 화살표 버튼 ^ */
#sidebar.expand .sidebar-link[data-bs-toggle="collapse"]::after {
    border: solid;
    border-width: 0 .075rem .075rem 0;
    content: "";
    display: inline-block;
    padding: 2px;
    position: absolute;
    right: 1.5rem;
    top: 1.4rem;
    transform: rotate(-135deg);
    transition: all .2s ease-out;
}

#sidebar.expand .sidebar-link[data-bs-toggle="collapse"].collapsed::after {
    transform: rotate(45deg);
    transition: all .2s ease-out;
}
</style>