<template>
    <div class="container"
        style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px;margin-top: 30px">
        <h3>문의 상세 보기</h3>
    </div>
    <div class="container" style="width: 100%; height:100%; ">
        <table class="table table-bordered">
            <tbody>
                <tr>
                    <th class="table-active" style="border-bottom:1px solid white; ">제목</th>
                    <td>안녕하세요</td>
                </tr>
                <tr>
                    <th class="table-active" style="border-bottom:1px solid white; ">등록일</th>
                    <td>2024-06-05</td>
                </tr>
                <tr style="height: 300px;">
                    <th class="table-active" style="border-bottom:1px solid white;">내용</th>
                    <td colspan="3">안녕하세요.</td>
                </tr>
            </tbody>
        </table>
        <div>
            <table class="table table-bordered;">
                <tbody>
                    <tr style="height: 100px;">
                        <th class="table-active" style="width: 455px;">답변</th>
                        <td colspan="3" style="border: 1px solid #ebebeb;">답변이 등록되면 보여지는 영역</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="text-center">
            <RouterLink to="/Member/InquiryList"><button class="btn btn-outline-light btn-sm">목록</button></RouterLink>
        </div>
    </div>
</template>
<script setup>

</script>

<style scoped>
.btn {
    width: 80px;
    height: 40px;
}
</style>