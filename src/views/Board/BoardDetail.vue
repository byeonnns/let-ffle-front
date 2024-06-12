<template>


    <div class="container"
        style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px;margin-top: 30px">
        <h3 >글상세 보기</h3>
    </div>

    <div class="container" style="width: 100%; height:100%; ">



        <table class="table table-bordered">

            <tbody>
                <tr>
                    <th class="table-active" style="border-bottom:1px solid white ">글유형</th>
                    <td>자유 게시판</td>
                    <td class="table-active" style="border-bottom:1px solid white; ">등록일</td>
                    <td>2024-06-05</td>
                </tr>
                <tr>
                    <th class="table-active" style="border-bottom:1px solid white; ">제목</th>
                    <td>현재 이런 상황에 대한 반응들</td>
                    <td class="table-active" style="border-bottom:1px solid white; ">조회</td>
                    <td>4</td>
                </tr>
                <tr>
                    <th class="table-active" style="border-bottom:1px solid white; ">작성자</th>
                    <td colspan="3">매번 긍정일순 없어</td>

                </tr>
                <tr style="height: 300px;">
                    <th class="table-active" style="border-bottom:1px solid white;">내용</th>
                    <td colspan="3">현재 이런상황에 대해 나는 아무런 할말이 없구만유...</td>

                </tr>
            </tbody>
        </table>
        <RouterLink to="/Board/Write">
            <input type="submit" class="btn btn-outline-light btn-sm me-2" value="수정" />
        </RouterLink>
        <input type="button" class="btn btn-outline-light btn-sm me-2" value="삭제" />
        <RouterLink to="/Board/BoardList">
            <input type="button" class="btn btn-outline-light btn-sm" value="뒤로" />
        </RouterLink>


        <div class="form-group row mt-5">
            <div style="margin-bottom: 30px">
                <textarea id="bcontent" type="text" class="form-control" placeholder="댓글을 입력하세요."
                    style="height:100px;"></textarea>
            </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-outline-light">댓글작성</button>
        </div>


        <div style="width: 100%;">
            <!-- border:1px solid black -->
            <div class="mt-4" style="border-bottom:1px solid #ebebeb ;">
                <p>댓글</p>
            </div>

            <div class="mt-3">
                <p class="custom-title me-3">릭재원</p>
                <p class="custom-text">2024-06-11</p>
                <RouterLink to="/">
                <button class="my_btn btn-outline-light btn-sm m-2"><i class="bi bi-x-square" ></i></button></RouterLink>
            </div>
            <div style=" background-color: #FAFAFA; height: 100px; padding: 5px">
                <p class="mt-3">이거 좀 재미있는 상황인 거 같음 </p>

            </div>
        </div>


    </div>

</template>


<script setup>

</script>

<style scoped>
.custom-title,
.custom-text {
    margin: 0;
    /* 모든 방향의 마진을 제거 */
    padding: 0;
    /* 모든 방향의 패딩을 제거 */
    display: inline;
    /* 인라인 요소로 변경하여 같은 줄에 표시 */
}

.my_btn {
  background-color:white;
  color: #F37551;
  border: none;
  border-radius: 5px;
  width: 20px;
  height: 30px;
  
}
</style>