
<template>


    <div class="container" style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px;margin-top: 30px">
        <h3 style="text-align: center;">글상세 보기</h3>
    </div>

    <div class="container" style="width: 100%; height:500px; ">
        <div class="card">
         
            <div class="card-body">
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
                            <th class="table-active" style="border-bottom:1px solid white; ">이름</th>
                            <td colspan="3">매번 긍정일순 없어</td>

                        </tr>
                        <tr>
                            <th class="table-active" style="border-bottom:1px solid white; ">내용</th>
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
            </div>
        </div>
        <div class="form-group row mt-5">
            <div style="margin-bottom: 30px">
                <textarea id="bcontent" type="text" class="form-control" placeholder="댓글을 입력하세요."
                    style="height:100px;"></textarea>
            </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <input id="btitle" type="text" class="form-control" placeholder="작성자" style="width: 30%;" />
            <button class="btn btn-outline-light btn-sm">댓글작성</button>
        </div>




    </div>

</template>


<script setup>
import BoardNavbar from './BoardNavbar.vue';
</script>

<style scoped></style>