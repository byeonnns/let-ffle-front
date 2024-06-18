<template>

    <div class="container" style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; ">
        <h3 style=" margin-top: 30px">게시글쓰기</h3>
    </div>
    <div class="container" style="width: 100%; height:500px;">
        <div style="width: 100%; height:500px;">
            <div class="form-group row">
                <label for="btitle" class="col-sm-2 col-form-label">유형</label>
                <div class="col-sm-10 text">
                    <select>
                        <option>자유</option>
                        <option>당첨후기</option>
                    </select>
                </div>
            </div>
            <WriteForm />
            <div class="form-group row">
                <div class="col-sm-12 d-flex justify-content-end">
                    <RouterLink to="/Board/BoardList">
                        <input type="submit" class="btn btn-outline-light btn-sm me-2" value="등록" />
                        <input type="button" class="btn btn-outline-light btn-sm" value="취소" />
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import WriteForm from "@/components/WriteForm.vue";
</script>

<style scoped>
.text{
    align-content: center;
}
</style>
