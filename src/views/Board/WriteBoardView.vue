<template>

    <div class="container" style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; ">
        <h3 style=" margin-top: 30px">게시글쓰기</h3>
    </div>
    <div class="container" style="width: 100%; height:500px;">
        <div style="width: 100%; height:500px;">
            <WriteForm />
            <div class="form-group row">
                <div class="col-sm-12 d-flex justify-content-end">
                    <input type="submit" class="btn btn-outline-dark btn-sm me-2" value="등록" />
                    <RouterLink to="/Board/BoardList">
                        <input type="button" class="btn btn-outline-dark btn-sm" value="취소" />
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import WriteForm from "@/components/WriteForm.vue";
</script>

<style scoped></style>
