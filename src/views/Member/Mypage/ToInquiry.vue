<template>
    <div >
        <div class="d-flex mt-2">
            <MypageNavBar style="width:250px" />
            <!-- <div class="flex-grow-1 d-flex flex-column"></div> -->
            <div class="" style="width: 100%; height: 500px; border:1px solid black">
                <h1 class="fw-bold mb-5">문의하기</h1>
                <table class="table mb-0">
                    <thead>
                        <hr />
                        <tr class="d-none d-md-table-row text-center">
                            <th class="d-none d-md-table-cell" style="width: 4em;"><span>번호</span></th>
                            <th><span>제목</span></th>
                            <th class="d-none d-md-table-cell" style="width: 11em;"><span>글쓴이</span></th>
                            <th class="d-none d-md-table-cell" style="width: 6em;"><span>날짜</span></th>
                            <th class="d-none d-md-table-cell" style="width: 6em;"><span>진행현황</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>안녕하세요</td>
                            <td>김작가</td>
                            <td>2013-05-21</td>
                            <td>진행중</td>
                        </tr>
                    </tbody>
                </table>
                <div class="d-flex justify-content-end mt-3 me-3">
                    <button type="button" class="btn btn-light me-2">검색</button>
                    <button type="button" class="btn btn-light">글쓰기</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MypageNavBar from './MypageNavBar';
</script>

<style scoped>
hr {
    border: 2px solid black;
}

td {
    text-align: center;
}
</style>