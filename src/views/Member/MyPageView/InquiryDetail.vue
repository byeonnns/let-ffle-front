<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <div class="d-flex flex-column ms-5 inquiry-details" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="mb-3 header">
                        <h4>문의 상세 보기</h4>
                    </div>
                    <div class="details">
                        <div class="container">
                            <table class="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th class="table-active">제목</th>
                                        <td>안녕하세요</td>
                                    </tr>
                                    <tr>
                                        <th class="table-active">등록일</th>
                                        <td>2024-06-05</td>
                                    </tr>
                                    <tr class="content-row">
                                        <th class="table-active">내용</th>
                                        <td>안녕하세요.</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                <table class="table table-bordered">
                                    <tbody>
                                        <tr class="answer-row">
                                            <th class="table-active">답변</th>
                                            <td>답변이 등록되면 보여지는 영역</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="text-center">
                            <RouterLink to="/Member/Mypage/InquiryList">
                                <button class="btn btn-outline-light btn-sm" style="color: white;">목록</button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.table th,
.table td {
    vertical-align: middle;
}

.table-active {
    background-color: #f5f5f5;
    font-weight: bold;
    text-align: left;
    color: #333;
    width: 180px;
}

.content-row {
    height: 200px;
}

.answer-row {
    height: 100px;
}

.btn {
    width: 100px;
    height: 40px;
    background-color: #F37551;
    border: none;
    font-size: 16px;
    transition: background-color 0.3s ease;
    border-radius: 0px;
}
</style>