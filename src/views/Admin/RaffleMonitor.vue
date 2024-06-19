<template>
    <div>
        <div class="d-flex flex-column">
            <hr class="border-3 opacity-100 m-0" style="border-color: #F37551;" />
            <table class="table text-center table-borderless m-0">
                <thead>
                    <tr class="h5">
                        <th class="col-4" scope="col">래플명</th>
                        <th class="col-1" scope="col">시작일</th>
                        <th class="col-1" scope="col">종료일</th>
                        <th class="col-1" scope="col">미션 타입</th>
                        <th class="col-1" scope="col">당첨인원</th>
                        <th class="col-1" scope="col">현재 상태</th>
                        <th class="col-2" scope="col">현재 참여인원</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>더그레이티스트24 SUMMER 드랍 ~50%</td>
                        <td>24-06-01</td>
                        <td>24-06-18</td>
                        <td>Quiz</td>
                        <td>5</td>
                        <td>진행 중</td>
                        <td>3854</td>
                    </tr>
                </tbody>
            </table>
            <hr class="border-3 opacity-100 mt-0 mb-2" style="border-color: #F37551;" />
            <h4 class="text-center my-3">참여자 리스트</h4>
            <table class="table text-center">
                <thead>
                    <tr>
                        <th class="col-3" scope="col">이메일</th>
                        <th class="col-2" scope="col">이름</th>
                        <th class="col-2" scope="col">응모 날짜</th>
                        <th class="col-2" scope="col">응모 시간</th>
                        <th class="col-1" scope="col">미션 완료</th>
                        <th class="col-1" scope="col">사용 베리</th>
                        <th class="col-1" scope="col">당첨 확률</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>kosa@songpa.it</td>
                        <td>김코사</td>
                        <td>24-06-18</td>
                        <td>19:12</td>
                        <td>Y</td>
                        <td>7</td>
                        <td>17.12%</td>
                    </tr>
                    <tr>
                        <td>hou@nal.do</td>
                        <td>신우호</td>
                        <td>24-06-18</td>
                        <td>19:12</td>
                        <td>N</td>
                        <td>10</td>
                        <td>32.12%</td>
                    </tr>
                    <tr>
                        <td>mid</td>
                        <td>mname</td>
                        <td>rdtcreatedat</td>
                        <td>rdtcreatedat</td>
                        <td>rdtmissioncleared</td>
                        <td>rdtberryspend</td>
                        <td>확률</td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-grow-1 justify-content-center">
                    <button class="btn btn-outline-light btn-sm me-1"
                        style="background-color: white; color:black;">처음</button>
                    <button class="btn btn-outline-light btn-sm me-3"
                        style="background-color: white; color:black;">이전</button>
                    <button class="btn btn-outline-light btn-sm me-1"
                        style="background-color: white; color:black;">1</button>
                    <button class="btn btn-outline-light btn-sm me-1"
                        style="background-color: white; color:black;">2</button>
                    <button class="btn btn-outline-light btn-sm me-1"
                        style="background-color: white; color:black;">3</button>
                    <button class="btn btn-outline-light btn-sm me-1"
                        style="background-color: white; color:black;">4</button>
                    <button class="btn btn-outline-light btn-sm me-3"
                        style="background-color: white; color:black;">5</button>
                    <button class="btn btn-outline-light btn-sm me-1"
                        style="background-color: white; color:black;">다음</button>
                    <button class="btn btn-outline-light btn-sm"
                        style="background-color: white; color:black;">맨끝</button>
                </div>
            </div>
            <hr class="border-3 opacity-100" style="border-color: #F37551;" />
            <div class="d-flex justify-content-around mt-3">
                <div class="flex-grow-1">
                    <h4 class="text-center mb-4">당첨자 리스트</h4>
                    <table class="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">이메일</th>
                                <th scope="col">이름</th>
                                <th scope="col">배송 정보</th>
                                <th scope="col">배송 상태</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>kosa@songpa.it</td>
                                <td>김코사</td>
                                <td><button class="btn btn-sm">확인</button></td>
                                <td>배송 준비 중</td>
                            </tr>
                            <tr>
                                <td>hou@nal.do</td>
                                <td>신우호</td>
                                <td><button class="btn btn-sm" disabled>미입력</button></td>
                                <td>미발송</td>
                            </tr>
                            <tr>
                                <td>mid</td>
                                <td>mname</td>
                                <td><button class="btn btn-sm" disabled>미입력</button></td>
                                <td>미발송</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-grow-1 justify-content-center">
                            <button class="btn btn-outline-light btn-sm me-1"
                                style="background-color: white; color:black;">처음</button>
                            <button class="btn btn-outline-light btn-sm me-3"
                                style="background-color: white; color:black;">이전</button>
                            <button class="btn btn-outline-light btn-sm me-1"
                                style="background-color: white; color:black;">1</button>
                            <button class="btn btn-outline-light btn-sm me-1"
                                style="background-color: white; color:black;">2</button>
                            <button class="btn btn-outline-light btn-sm me-1"
                                style="background-color: white; color:black;">3</button>
                            <button class="btn btn-outline-light btn-sm me-1"
                                style="background-color: white; color:black;">4</button>
                            <button class="btn btn-outline-light btn-sm me-3"
                                style="background-color: white; color:black;">5</button>
                            <button class="btn btn-outline-light btn-sm me-1"
                                style="background-color: white; color:black;">다음</button>
                            <button class="btn btn-outline-light btn-sm"
                                style="background-color: white; color:black;">맨끝</button>
                        </div>
                    </div>
                </div>
                <div class="card rounded-0 text-center mx-5">
                    <h6 class="card-header">지급 상품</h6>
                    <div class="card-body">
                        <img src="@/assets/shoes.png" class="card-img-top" style="width:200px;" />
                        <p class="card-text">나이키</p>
                    </div>
                </div>
                <div class="card rounded-0 text-center">
                    <h6 class="card-header">남은 시간</h6>
                    <div class="card-body align-content-center">
                        <h1>30:04:51</h1>
                    </div>
                </div>
            </div>
            <hr class="border-3 opacity-100 mt-4" style="border-color: #F37551;" />
            <button class="btn mb-5">래플 바로가기</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
td {
    align-content: center;
}
</style>