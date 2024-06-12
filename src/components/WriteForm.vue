<template>

    <div class="container" style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; ">
      <h3 style=" margin-top: 30px">게시글쓰기</h3>
    </div>
  
    <div class="container" style="width: 100%; height:500px; ">
  
      <div style="width: 100%; height:500px;">
        <form>
          <div class="form-group row">
            <label for="btitle" class="col-sm-2 col-form-label">제목</label>
            <div class="col-sm-10">
              <input id="btitle" type="text" class="form-control" />
            </div>
          </div>
  
          <div class="form-group row mt-3">
            <label for="bcontent" class="col-sm-2 col-form-label">내용</label>
            <div class="col-sm-10">
              <textarea id="bcontent" type="text" class="form-control" style="height:250px;"></textarea>
            </div>
          </div>
  
          <div class="form-group row mt-3">
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
  
        </form>
      </div>
    </div>
  
  </template>
  
  <style scoped></style>