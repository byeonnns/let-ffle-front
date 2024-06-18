<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <!-- <div class="flex-grow-1 d-flex flex-column"></div> -->
                <div class="d-flex flex-column ms-5" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                        <h4>문의 내역</h4>
                    </div>
                    <table class="table mb-0">
                        <thead>
                            <tr class="d-none d-md-table-row text-center">

                                <th class="d-none d-md-table-cell" style="width: 4em;"><span>번호</span></th>
                                <th><span>제목</span></th>
                                <th class="d-none d-md-table-cell" style="width: 11em;"><span>글쓴이</span></th>
                                <th class="d-none d-md-table-cell" style="width: 8em;"><span>날짜</span></th>
                                <th class="d-none d-md-table-cell" style="width: 6em;"><span>답변상태</span></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <RouterLink to="/Member/InquiryDetails">안녕하세요</RouterLink>
                                </td>
                                <td>김작가</td>
                                <td>2013-05-21</td>
                                <td>대기중</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-end mt-3 me-3">
                        <RouterLink to="/Member/WriteInquiry"><button type="button" class="btn btn-light">글쓰기</button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
td {
    text-align: center;
}
</style>