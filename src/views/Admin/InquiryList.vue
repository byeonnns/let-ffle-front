<template>
    <div class="container" style="height: 100%;">
        <!-- <div class="card-header">1대1문의 사항 입니다.</div> -->
        <div class="container" style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; ">
            <h3 style=" margin-top: 30px">문의내역</h3>
        </div>

        <div class="accordion">
            <div class="accordion-item">
                <h3 class="accordion-header">
                    <button class="accordion-button custom-accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        <p class="custom-title me-5">1</p>
                        <p class="custom-title me-5" style="width: 80px; color: #F37551">답변대기중</p>
                        <p class="custom-text">안녕하세요</p>
                    </button>
                </h3>
                <div id="collapse1" class="accordion-collapse collapse  container" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="container "
                            style="width: 100%;  height:300px; background-color: #FAFAFA; padding: 30px;">
                            <!-- border:1px solid black  -->

                            <div style="width: 100%; ">
                                <!-- border:1px solid black -->
                                <p>베리는 어떻게 얻을 수 있나요?</p>
                            </div>

                        </div>

                        <!-- 답변 등록 폼 -->
                        <div class=" form-group row mt-3">
                            <div style="margin-bottom: 30px">
                                <textarea id="bcontent" type="text" class="form-control" placeholder="답변을 입력하세요."
                                    style="height:100px;"></textarea>
                            </div>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <RouterLink to="/Admin/InquiryList">
                                <button class="btn btn-outline-light">등록</button>
                            </RouterLink>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div class="accordion">
            <div class="accordion-item">
                <h3 class="accordion-header">
                    <button class="accordion-button custom-accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                        <p class="custom-title me-5">2</p>
                        <p class="custom-title me-5" style="width: 80px;">답변완료</p>
                        <p class="custom-text">문의 드립니다</p>
                    </button>
                </h3>
                <div id="collapse2" class="accordion-collapse collapse  container" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="container "
                            style="width: 100%;  height:300px; background-color: #FAFAFA; padding: 30px;">
                            <!-- border:1px solid black  -->

                            <div style="width: 100%; ">
                                <!-- border:1px solid black -->
                                <p>베리는 어떻게 얻을 수 있나요?</p>
                            </div>
                        </div>
                        <!-- 답변 등록 폼 -->
                        <div class=" form-group row mt-3">
                            <h3>등록된 답변</h3>
                            <div>
                                <p>베리는 매일 첫 로그인 시 1개, 하루 응모 3개 전부 참여 및 미션 수행까지 모두 완료하시면 1개를 추가 지급합니다. 감사합니다.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>

        </div>

        <div class="text-end mb-2 mt-3">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-grow-1 justify-content-center ms-5">
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

    </div>
</template>

<script setup>

</script>

<style scoped>
.custom-accordion-button {
    background-color: white;
    /* 원하는 배경 색상 */
    color: black;
    /* 텍스트 색상 */
    border: none;
    /* 버튼 테두리 제거 */
}

.custom-accordion-button:not(.collapsed) {
    background-color: white;
    /* 아코디언이 확장된 상태의 배경 색상 */
}

.custom-accordion-button:focus {
    box-shadow: none;
    /* 버튼 포커스 시 그림자 제거 */
}

.custom-accordion-button .custom-title,
.custom-accordion-button .custom-text {
    margin: 0;
    /* 모든 방향의 마진을 제거 */
    padding: 0;
    /* 모든 방향의 패딩을 제거 */
    display: inline;
    /* 인라인 요소로 변경하여 같은 줄에 표시 */
}

.custom-accordion-button .custom-text {
    margin-left: 30px;
    /* 필요한 경우 추가 간격을 조정  */
}

.accordion-item {
    border: none;
}

.accordion-header {
    border-bottom: 1px solid #ebebeb;
}

/* 위에 있는 전체 서비스 이벤트 공지 기타칸 정렬 */
.table th,
.table tr {
    text-align: center;

}

/* 전체, 이용정책 글자 색 */
.spanded {
    color: black;
}
.btn{
    background-color: #F37551;
    color: white;
}
</style>