<template>
    <div>
        <div class="d-flex container">
            <div class="flex-grow-1">
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
                                                    class="btn btn-lg border rounded-3" style="font-size: 12px;">내 정보
                                                    수정</button>
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <table class="w-100 text-center">
                                <thead>
                                    <tr>
                                        <th>래플 이름</th>
                                        <th>
                                            응모 기간
                                        </th>
                                        <th>
                                            응모 상품
                                        </th>
                                        <th>바로가기</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            아이폰 뿌리는 이벤트
                                        </td>
                                        <td>
                                            2024.01.01 ~ 2024.02.02
                                        </td>
                                        <td>
                                            아이폰 11Pro
                                        </td>
                                        <td>
                                            <button class="btn w-50">테스트 버튼</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import MypageNavBar from './Components/MypageNavBar.vue';
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