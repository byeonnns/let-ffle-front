<template>


    <div class="container"
        style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px;margin-top: 30px">
        <h3>자유 게시판</h3>
    </div>

    <div class="container" style="width: 100%; height:100%; ">


        <div class="">

            <h2>[자유] 현재 이런 상황에 대한 반응들</h2>
            <div class="d-flex justify-content-between">
                <div>
                    <span class="me-3">매번 긍정일순 없어</span><i class="bi bi-clock me-2">2024.06.05</i><i
                        class="bi bi-eye">3</i>

                </div>
                <div>
                    <RouterLink to="/Board/WriteBoard">
                        <input type="submit" class="btn btn-outline-light btn-sm me-2" value="수정" />
                    </RouterLink>
                    <input type="button" class="btn btn-outline-light btn-sm me-2" value="삭제" />

                </div>
            </div>

            <hr />

            <div class="mt-5">
                현재 이런 상황에 대해 나는 아무런 할말이 없구만유...
            </div>

            <div class="text-center" style="margin-top:100px ;">
                <RouterLink to="/Board/BoardList">
                    <input type="button" class="btn btn-outline-light btn-sm" value="목록" />
                </RouterLink>
            </div>
        </div>

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
                <p>댓글 [1]</p>
            </div>

            <div class="mt-3">
                <p class="custom-title me-3">릭재원</p>
                <p class="custom-text">2024-06-11</p>
                <RouterLink to="/">
                    <button class="my_btn btn-outline-light btn-sm m-2"><i class="bi bi-x-square"></i></button>
                </RouterLink>
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
    background-color: white;
    color: #F37551;
    border: none;
    border-radius: 5px;
    width: 20px;
    height: 30px;

}
.btn{
    background-color: #F37551;
    color: white;
}
</style>