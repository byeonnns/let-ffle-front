<template>
    <div>
        <div class="d-flex flex-column">
            <div class="mb-3" style="border-bottom: 3px solid #F37551;">
                <h3>Dashboard</h3>
            </div>
            <div class="card p-2 flex-grow-1 my-2">
                <div class="align-content-center d-flex justify-content-between p-3 ms-4">
                    <span>
                        <h6>영바오 [닉네임]</h6>
                        <strong class="mt-2 m-0">asd@naver.com</strong>
                    </span>
                    <RouterLink to="/Member/MyPage/UpdateMember"><button class="btn btn-outline-light">회원 정보 수정</button></RouterLink>
                </div>
            </div>
            <div class="card flex-grow-1 my-4">
                <div class="card-body d-flex pb-2">
                    <div class="flex-grow-1">
                        <h4 class="text-center">
                            <img src="@/assets/berry-icon.png" class="me-2" height="20px">
                            일일 베리 퀘스트
                        </h4>
                        <div class="mt-4">
                            <div class="d-flex text-center">
                                <div class="col">
                                    <h5 class="">매일 매일 접속하기</h5>
                                    <p class="fw-bold">완료</p>
                                </div>
                                <div class="col">
                                    <h5 class="">래플 응모하기</h5>
                                    <p class="fw-bold">완료</p>
                                </div>
                                <div class="col">
                                    <h5 class="">래플&미션 올 클리어</h5>
                                    <p class="fw-bold">미완료</p>
                                </div>
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