<template>
    <div class="container" style="height: 100%;">
        <!-- <div class="card-header">1대1문의 사항 입니다.</div> -->
        <div class="container" style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; ">
            <h3 style=" margin-top: 30px">문의내역</h3>
        </div>
        
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h3 class="accordion-header">
                    <button class="accordion-button custom-accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        <p class="custom-title me-2" style="color: #F37551">문의내역</p>
                        <p class="custom-text">안녕하세요</p>
                    </button>
                </h3>
                <div id="collapse1" class="accordion-collapse collapse  container" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="container "
                            style="width: 100%;  height:500px; background-color: #FAFAFA; padding: 30px;">
                            <!-- border:1px solid black  -->

                            <div style="width: 100%; ">
                                <!-- border:1px solid black -->
                                <p>안녕하세요</p>
                                <h3>
                                    <p>안녕하세요</p>
                                </h3>


                            </div>

                        </div>

                        <!-- 답변 등록 폼 -->
                        <div class=" form-group row mt-5">
                            <div style="margin-bottom: 30px">
                                <textarea id="bcontent" type="text" class="form-control" placeholder="댓글을 입력하세요."
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



    </div>
</template>

<script setup>
</script>

<style scoped></style>