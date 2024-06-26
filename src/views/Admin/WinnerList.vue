<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>당첨자 조회</h3>
            </div>
            <table class="table">
                <thead>
                    <tr class="d-none d-md-table-row text-center">
                        <th class="d-none d-md-table-cell" style="width: 4em;"><span>래플명</span></th>
                        <th class="d-none d-md-table-cell" style="width: 11em;"><span>당첨자 ID</span></th>
                        <th class="d-none d-md-table-cell" style="width: 8em;"><span>수령인</span></th>
                        <th class="d-none d-md-table-cell" style="width: 6em;"><span>수령인 연락처</span></th>
                        <th class="d-none d-md-table-cell" style="width: 6em;"><span>수령 주소</span></th>
                        <th class="d-none d-md-table-cell" style="width: 6em;"><span>배송 상태</span></th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr>
                        <td>래플 1</td>
                        <td>tjdwns3823@naver.com</td>
                        <td>변성준</td>
                        <td>010-2232-3823</td>
                        <td>IT벤처타워 16층</td>
                        <td>배송 완료</td>
                    </tr>
                    <tr>
                        <td>래플 2</td>
                        <td>jw123@naver.com</td>
                        <td>이재원</td>
                        <td>010-4046-8382</td>
                        <td>IT벤처타워 12층</td>
                        <td>배송지 미입력</td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-end">
                <div class="input-group input-group-sm w-auto">
                    <span class="input-group-text p-0">
                        <select class="form-select py-0 pe-3 border-0 rounded-end-0 z-1 w-auto">
                            <option value="1" selected>ID</option>
                            <option value="2">이름</option>
                            <option value="3">닉네임</option>
                            <option value="4">래플</option>
                        </select></span>

                    <input type="text" class="form-control">
                    <button class="btn btn-sm">검색</button>
                </div>
            </div>
            <div class="text-center">
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">처음</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">이전</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">1</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">2</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">3</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">4</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">5</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">다음</button>
                <button class="btn btn-outline-light btn-sm" style="background-color: white; color:black;">맨끝</button>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.btn {
    background-color: #F37551;
    color: white;
}
</style>