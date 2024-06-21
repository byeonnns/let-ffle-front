<template>
    <div class="container" style="width: 100%; height:500px; ">
        <div style="width: 100%; height:500px;">
            <div class="form-group row">
                <label for="btitle" class="col-sm-2 col-form-label">분류</label>
                <div class="col-sm-10">
                    <input id="btitle" type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group row mt-4">
                <label for="btitle" class="col-sm-2 col-form-label">제목</label>
                <div class="col-sm-10">
                    <input id="btitle" type="text" class="form-control" />
                </div>
            </div>

            <div class="form-group row mt-4">
                <label for="bcontent" class="col-sm-2 col-form-label">내용</label>
                <div class="col-sm-10">
                    <textarea v-model="childText" type="text" class="form-control" style="height:250px;"></textarea>
                </div>
            </div>

            <div class="form-group row mt-4">
                <label for="battach" class="col-sm-2 col-form-label">첨부파일</label>
                <div class="col-sm-10">
                    <input id="battach" type="file" class="form-control-file" ref="battach" />
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-12 d-flex justify-content-end">
                    <input type="submit" class="btn btn-outline-light btn-sm me-2" value="등록" />
                    <RouterLink to="/Board/BoardList">
                        <input type="button" class="btn btn-outline-light btn-sm" value="취소" />
                    </RouterLink>
                </div>

                
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const childText = ref('');

defineExpose({
    childText
});
</script>

<style scoped>
.btn{
    background-color: #F37551;
    color: white;
}
</style>