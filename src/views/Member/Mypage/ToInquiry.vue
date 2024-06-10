<template>
    <div >
        <div class="d-flex ms-5 mt-4">
            <MypageNavBar style="width:180px;" />
            <!-- <div class="flex-grow-1 d-flex flex-column"></div> -->
            <div class="d-flex flex-column ms-5 container">
                <h4>문의하기</h4>
                <hr style="border-width: 3px; color: #F37551; height: 20px;"/>
                <table class="table mb-0">
                    <thead>
                        <tr class="d-none d-md-table-row text-center">
                            <th class="d-none d-md-table-cell" style="width: 4em;"><span>번호</span></th>
                            <th><span>제목</span></th>
                            <th class="d-none d-md-table-cell" style="width: 11em;"><span>글쓴이</span></th>
                            <th class="d-none d-md-table-cell" style="width: 8em;"><span>날짜</span></th>
                            <th class="d-none d-md-table-cell" style="width: 6em;"><span>진행현황</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>안녕하세요</td>
                            <td>김작가</td>
                            <td>2024-06-08</td>
                            <td>답변대기중</td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-end mt-3 me-3">
                    <button type="button" class="btn btn-light me-2">검색</button>
                    <RouterLink to="/Member/Mypage/CreateInquiry"><button type="button" class="btn btn-light">글쓰기</button></RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MypageNavBar from './MypageNavBar';
</script>

<style scoped>
td {
    text-align: center;
}
</style>