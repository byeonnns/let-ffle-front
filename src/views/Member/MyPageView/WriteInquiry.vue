<template>
    <div>
        <div class="d-flex">
            <!-- <div class="flex-grow-1 d-flex flex-column"></div> -->
            <div class="d-flex flex-column ms-5 container">
                <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                    <h4>문의 작성하기</h4>
                </div>
                <WriteForm />

                <div class="d-flex justify-content-end">
                    <RouterLink to="/Member/InquiryList">
                        <input type="submit" value="신청하기" class="btn btn-light me-2">
                        <input type="submit" value="취소" class="btn btn-light">
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import WriteForm from '@/components/WriteForm.vue';
</script>

<style scoped></style>