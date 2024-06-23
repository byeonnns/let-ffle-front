<template>
    <div>
        <div class="d-flex flex-column mt-4">
            <div class="card p-2 flex-grow-1 my-2">
                <div class="align-content-center d-flex justify-content-between p-3 ms-4">
                    <span>
                        <h6> <h5 style="display: inline;">영바오</h5> 님, 안녕하세요!</h6>
                        <strong class="mt-2 m-0">오늘의 래플 참여 가능 횟수가 <span style="color: #F37551;">1</span> 회 남았습니다.</strong>
                    </span>
                    <RouterLink to="/Member/MyPage/UpdateMember"><button class="btn btn-outline-light">회원 정보 수정</button></RouterLink>
                </div>
            </div>
            <div class="card flex-grow-1 mt-5">
                <div class="card-body d-flex pb-2">
                    <div class="flex-grow-1 mt-4">
                        <h4 class="text-center">
                            <img src="@/assets/berry-icon.png" class="me-2" height="20px">
                            오늘의 베리 획득 미션
                        </h4>
                        <div class="mt-5">
                            <div class="d-flex text-center">
                                <div class="col">
                                    <h5 class="">매일 매일 접속하기</h5>
                                    <p class="fw-bold"> 획득 완료!</p>
                                </div>
                                <div class="col">
                                    <h5 class="">하루 3회 래플 응모하기</h5>
                                    <p class="fw-bold">2/3 완료</p>
                                </div>
                                <div class="col">
                                    <h5 class="">일일 래플&미션 모두 완료하기</h5>
                                    <p class="fw-bold">래플 참여 2/3 완료</p>
                                    <p class="fw-bold">미션 참여 1/3 완료</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-3 p-3">
                            <span class="fw-bold h5">※ 베리 획득 방법</span> <br/>
                            <span> - 매일 첫 로그인 시 베리 1개를 획득할 수 있습니다.</span> <br/>
                            <span> - 하루에 3개 래플에 응모하면 베리 1개를 획득할 수 있습니다. (매일 0시 기준)</span> <br/>
                            <span> - 하루에 참여한 3개의 래플의 미션을 모두 완료하면 베리 1개를 추가로 획득할 수 있습니다.</span>
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
.circle-border {
    width: 60px;
    height: 60px;
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

.btn {
    color: white;
    background-color: #F37551;
    border-radius: 0px;
    height: 50px;
}
</style>