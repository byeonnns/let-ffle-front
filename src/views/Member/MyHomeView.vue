<template>
    <div>
        <div class="d-flex container">
            <div class="flex-grow-1">
                <div class="container ms-5">
                    <div class="d-flex mb-5">
                        <div class="card rounded-3 custom-card">
                            <div class="card-body mt-3 ms-3 flex-column d-flex align-items-start">
                                <div class="mt-3 ms-3">
                                    <div>
                                        <strong>gekx0m</strong>
                                    </div>
                                    <p>asd@naver.com</p>
                                </div>
                                <div class="position-absolute top-50 end-0 translate-middle-y me-4">
                                    <RouterLink to="/Member/UpdateMember"
                                        class="btn btn-lg border rounded-3" style="color: white;">내 정보 수정</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <table class="w-100 text-center">
                        <thead>
                            <tr>
                                <th>래플 이름</th>
                                <th>응모 기간</th>
                                <th>응모 상품</th>
                                <th>바로가기</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>아이폰 뿌리는 이벤트</td>
                                <td>2024.01.01 ~ 2024.02.02</td>
                                <td>아이폰 11Pro</td>
                                <td><RouterLink to="/Raffle"><button class="btn w-50">래플 바로가기</button></RouterLink></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
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
</style>