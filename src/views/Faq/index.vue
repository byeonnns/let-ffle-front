<template>
    <div>
        <div class="d-flex container mt-4">

            <div class="p-3 mt-3" style="width:180px">
                <BoardNavbar />
            </div>

            <div class="d-flex flex-column flex-grow-1">

                <div class="header"
                    style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; margin-top: 30px">
                    <h3 style="margin-right: 80%;">자주 묻는 질문</h3>
                </div>
                <div style="width: 100%; height:60px;">
                    <!-- border:1px solid black; -->
                    <!-- <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="search" aria-label="Recipient's username"
                    aria-describedby="button-addon2">
                <button class="btn btn-success" type="button" id="button-addon2">검색</button>
            </div> -->

                </div>

                <div style="width: 100%; height:100%; margin-bottom: 10px;">
                    <!-- border:1px solid black; -->
                    <table class="table table-bordered">
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <RouterLink to="/Board/BoardList?category=service">
                                        <span class="spanded">전체</span>
                                    </RouterLink>
                                </td>
                                <td>
                                    <RouterLink to="/Notice/BoardDetail">
                                        <span class="spanded">서비스</span>
                                    </RouterLink>
                                </td>
                                <td>
                                    <RouterLink to="/Board/BoardComment">
                                        <span class="spanded">이벤트</span>
                                    </RouterLink>
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    <RouterLink to="/Board/BoardComment">
                                        <span class="spanded">공지</span>
                                    </RouterLink>
                                </td>
                                <td>

                                    <RouterLink to="/Board/BoardComment">
                                        <span class="spanded">기타</span>
                                    </RouterLink>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>



                <div style="width: 100%; height:100%;">
                    <!--  border:1px solid black; -->


                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h3 class="accordion-header">
                                <button class="accordion-button custom-accordion-button" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true"
                                    aria-controls="collapse1">
                                    <p class="custom-title" style="color: #F37551">이용정책</p>
                                    <p class="custom-text">패널티 정책</p>
                                </button>
                            </h3>
                            <div id="collapse1" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="container "
                                        style="width: 100%;  height:500px; background-color: #FAFAFA;">
                                        <!-- border:1px solid black  -->

                                        <div style="width: 100%;">
                                            <!-- border:1px solid black -->
                                            <p class="mt-3"> 안녕하세요 크림입니다 </p>
                                            <h3>
                                                <p>패널티 감면 기준</p>
                                            </h3>
                                            <p>휴무 | 2024년 6월 6일 (목)</p>
                                            <p>*휴무 기간 남겨주신 문의는 익일부터 순차적으로 답변 드릴 예정입니다.</p>
                                            <p>이용약관에 관하여 저에게 물으신다면 아직까지는 준비를 중이라서... 조금 늦어진다는 점 부탁해요~</p>
                                            <li>서비 차원은 우리가 아직 미숙입니다</li>
                                            <li>그렇지만 저는 완숙입니다</li>
                                            <li>하지만 저는 완숙이 좋은걸요..?</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button custom-accordion-button" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true"
                                    aria-controls="collapse2">
                                    <p class="custom-title" style="color: #F37551">이용정책</p>
                                    <p class="custom-text">부적절 행위 금지</p>
                                </button>
                            </h2>
                            <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="container "
                                        style="width: 100%;  height:500px; background-color: #FAFAFA;">
                                        <!-- border:1px solid black  -->

                                        <div style="width: 100%;">
                                            <!-- border:1px solid black -->
                                            <p class="mt-3"> 아래에 해당하는 경우, 이용약관 제 7조(이용제한 등), 21조(부적절 행위)에 따라 일시정지나
                                                영구이용정지 조치됩니다. 허위사실 유포 관련 고의성이 확인될 시, 유관부서로 이관되어 처리될 수 있습니다.</p>

                                            <h3>
                                                <p>금지!</p>
                                            </h3>

                                            <li>거래 시도</li>
                                            <li>손상/오염/사용감 있는 상품 거래 시도</li>
                                            <li>결제 혜택 및 포인트 획득, 시세 조작 등의 목적으로 지인과 공모한 허위 거래</li>
                                            <li>여러 개의 계정을 생성하여 자전거래</li>
                                            <li>개인정보 유출</li>
                                            <li>커뮤니티 내 허위사실 유포 등 서비스 운영을 방해하는 각종 부정행위</li>


                                        </div>
                                    </div>
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
import BoardNavbar from '../Board/BoardNavbar.vue';
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
</style>