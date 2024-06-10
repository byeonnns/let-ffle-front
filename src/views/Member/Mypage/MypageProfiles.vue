<template>
    <div>
        <div class="container ms-5">
            <div class="d-flex mb-5">
                <div class="card rounded-3" style="height: 150px; width: 100%;">
                    <div class="card-body mt-3 ms-3 flex-column">
                        <div class="d-flex">
                            <div class="mt-3 ms-3">
                                <div>
                                    <strong>gekx0m</strong>
                                </div>
                                <p>asd@naver.com</p>
                            </div>
                            <div class="position-absolute top-50 end-0 translate-middle-y me-4">
                                <RouterLink to="/Member/Mypage/LoginInformation"><button
                                        class="btn btn-lg border rounded-3" style="font-size: 12px;">내 정보 수정</button>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="d-flex ms-5 mb-4">
                    <div class="rounded-3" style="width: 100%;">
                        <div class="d-flex justify-content-between">
                            <span class="fw-bold mb-3" style="font-size: 18px;">응모 내역</span>
                            <RouterLink to="/Member/Mypage/ApplicationDetails"><span><button
                                        class="btn border-0 bg-white" style="font-size: 13px;">더보기 ></button></span>
                            </RouterLink>
                        </div>
                        <table class="table mb-0">
                            <thead>
                                <tr class="d-none d-md-table-row text-center">
                                    <th class="d-none d-md-table-cell" style="width: 4em;"><span>레플 이름</span></th>
                                    <th class="d-none d-md-table-cell" style="width: 11em;"><span>응모 기간</span></th>
                                    <th class="d-none d-md-table-cell" style="width: 8em;"><span>종료</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td>레플 1번</td>
                                    <td>2024.06.10~20.24.06.22</td>
                                    <td>2024.06.23</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
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

.btn {
    background-color: #F37551;
    color: white;
}
</style>
