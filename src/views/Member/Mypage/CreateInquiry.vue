<template>
    <div>
        <div class="d-flex mt-5">
            <MypageNavBar style="width:180px" />
            <!-- <div class="flex-grow-1 d-flex flex-column"></div> -->
            <div class="" style="border:1px solid black; width: 100%; height:" >
                <h4 class="fw-bold mb-4">문의 작성하기</h4>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">이름(필수)</label>
                    <div class="col-sm-10">
                        <input class="form-control mb-4" type="text" placeholder="이름">
                    </div>
                    <label class="col-sm-2 col-form-label">연락처(필수)</label>
                    <div class="col-sm-10">
                        <input class="form-control mb-4" type="text" placeholder="-없이 숫자만 입력">
                    </div>
                    <label class="col-sm-2 col-form-label">이메일(필수)</label>
                    <div class="col-sm-10">
                        <input class="form-control mb-4" type="email" placeholder="이메일">
                    </div>
                    <label class="col-sm-2 col-form-label">첨부파일</label>
                    <div class="col-sm-10">
                        <input class="form-control mb-4" type="file" placeholder="첨부파일">
                    </div>
                    <label class="col-sm-2 col-form-label">내용(필수)</label>
                    <div class="col-sm-10">
                        <input class="form-control mb-4" type="text" style="height: 300px;">
                    </div>
                </div>
                <div class="d-flex justify-content-end">
                    <input type="submit" value="신청하기" class="btn btn-light me-2">
                    <input type="submit" value="취소" class="btn btn-light">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MypageNavBar from './MypageNavBar';
</script>

<style scoped>
/* .Inquiry {
    border: 2px solid black;
    padding: 20px;
    border-radius: 10px;
} */
</style>