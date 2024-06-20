<template>
  <div>
    <div class="form-group row">
      <label for="btitle" class="col-sm-2 col-form-label">제목</label>
      <div class="col-sm-10">
        <input id="btitle" type="text" class="form-control" v-model="board.btitle" />
      </div>
    </div>


    <div class="form-group row mt-4">
      <label for="bcontent" class="col-sm-2 col-form-label">내용</label>
      <div class="col-sm-10">
        <textarea id="bcontent" type="text" class="form-control" style="height:250px;"
          v-model="board.bcontent"></textarea>
      </div>
    </div>

    <div class="form-group row mt-4">
      <label for="battach" class="col-sm-2 col-form-label">첨부파일</label>
      <div class="col-sm-10">
        <input id="battach" type="file" class="form-control-file" ref="battach" />
      </div>
    </div>

  </div>

</template>

<script setup>
import { ref } from 'vue';
const board = ref({
  btitle: "",
  bcontent: "",
  battach: null
})


defineExpose({
  board
});
</script>

<style scoped></style>