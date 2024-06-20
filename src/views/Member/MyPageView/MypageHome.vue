<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>Dashboard</h3>
            </div>
            <div class="card flex-grow-1 my-4">
                <div class="card-body d-flex pb-2">
                    <RouterLink to="/Member/MyPage/UpdateMember" class="align-content-center">
                        <div class="btn text-center px-3 rounded-2">
                            <strong>신우호 [닉네임]</strong>
                            <h6 class="mt-2 m-0">asd@naver.com</h6>
                        </div>
                    </RouterLink>
                    <div class="flex-grow-1">
                        <h4 class="text-center">
                            <img src="@/assets/berry-icon.png" class="me-2" height="20px">
                            일일 베리 퀘스트
                            <img src="@/assets/berry-icon.png" class="ms-2" height="20px"></h4>
                        <div class="mt-4">
                            <div class="d-flex text-center">
                                <div class="col">
                                    <h5 class="fw-bold">매일 매일 접속하기</h5>
                                    <p>완료</p>
                                </div>
                                <div class="col">
                                    <h5 class="fw-bold">래플 응모하기</h5>
                                    <p>완료</p>
                                </div>
                                <div class="col">
                                    <h5 class="fw-bold">래플&미션 올 클리어</h5>
                                    <p>미완료</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="border-3 opacity-100 mt-2" style="border-color: #F37551;" />
            <h4 class="text-center my-3">최근 응모 래플</h4>
            <table class="table text-center">
                <thead>
                    <tr>
                        <th class="col-5" scope="col">래플명</th>
                        <th class="col-2" scope="col">응모일</th>
                        <th class="col-1" scope="col">현재 상태</th>
                        <th class="col-1" scope="col">미션 완료</th>
                        <th class="col-1" scope="col">사용 베리</th>
                        <th class="col-1" scope="col">확률</th>
                        <th class="col-1" scope="col">이동</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>더그레이티스트24 SUMMER 드랍 ~50%</td>
                        <td>24-06-16</td>
                        <td>진행 중</td>
                        <td>Y</td>
                        <td>10</td>
                        <td>17.12%</td>
                        <td><button class="btn btn-sm">바로가기</button></td>
                    </tr>
                    <tr>
                        <td>더그레이티스트24 SUMMER 드랍 ~50%</td>
                        <td>24-06-19</td>
                        <td>종료</td>
                        <td>Y</td>
                        <td>10</td>
                        <td>17.12%</td>
                        <td><button class="btn btn-sm">바로가기</button></td>
                    </tr>
                    <tr>
                        <td>더그레이티스트24 SUMMER 드랍 ~50%</td>
                        <td>24-06-25</td>
                        <td>진행 중</td>
                        <td>Y</td>
                        <td>10</td>
                        <td>17.12%</td>
                        <td><button class="btn btn-sm">바로가기</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
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

td {
    align-content: center;
}
</style>