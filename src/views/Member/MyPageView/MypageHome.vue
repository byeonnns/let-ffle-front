<template>
    <div>
        <div>
            <div class="d-flex mb-5">
                <div class="card custom-card">
                    <div class="card-body mt-3 ms-3 flex-column d-flex align-items-start">
                        <div class="mt-3 ms-3">
                            <div>
                                <strong>gekx0m</strong>
                            </div>
                            <p>asd@naver.com</p>
                        </div>
                        <div class="position-absolute top-50 end-0 translate-middle-y me-4">
                            <RouterLink to="/Member/MyPage/UpdateMember" class="btn btn-lg border"
                                style="color: white;">내 정보 수정</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="border-3 opacity-100 mt-0 mb-2" style="border-color: #F37551;" />
            <h4 class="text-center my-3">래플 현황</h4>
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

            <br>
            <table class="w-100 text-center">
                <thead>
                    <tr>
                        <th>래플 이름</th>
                        <th>응모 기간</th>
                        <th>응모 상품</th>
                        <th>바로가기</th>
                    </tr>
                </thead>
                <tbody class="table table-group-divider">
                    <tr>
                        <td>아이폰 뿌리는 이벤트</td>
                        <td>2024.01.01 ~ 2024.02.02</td>
                        <td>아이폰 11Pro</td>
                        <td>
                            <RouterLink to="/Raffle"><button class="btn w-50">래플 바로가기</button></RouterLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.custom-card {
    height: 150px;
    width: 100%;
}

.card-body {
    margin-top: 10px;
}

.card-body .btn {
    font-size: 12px;
}

.btn {
    background-color: #F37551;
    color: white;
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

td {
    align-content: center;
}
</style>