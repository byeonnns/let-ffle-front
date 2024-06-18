<template>
        <div>
        <form>
          <div class="form-group row">
            <label for="btitle" class="col-sm-2 col-form-label">제목</label>
            <div class="col-sm-10">
              <input id="btitle" type="text" class="form-control" />
            </div>
          </div>
  
          <div class="form-group row mt-4">
            <label for="bcontent" class="col-sm-2 col-form-label">내용</label>
            <div class="col-sm-10">
              <textarea id="bcontent" type="text" class="form-control" style="height:250px;"></textarea>
            </div>
          </div>
  
          <div class="form-group row mt-4">
            <label for="battach" class="col-sm-2 col-form-label">첨부파일</label>
            <div class="col-sm-10">
              <input id="battach" type="file" class="form-control-file" ref="battach" />
            </div>
          </div>
  
        </form>
      </div>
  
  </template>
  
  <style scoped></style>