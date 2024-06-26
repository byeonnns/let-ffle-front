<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>회원 조회</h3>
            </div>
            <table class="table text-center">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>ID</th>
                        <th>이름</th>
                        <th>닉네임</th>
                        <th>상세</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>tjdwns3823@naver.com</td>
                        <td>변성준</td>
                        <td>byeon</td>
                        <td>
                            <RouterLink to="MemberDetail"><button class="btn btn-sm rounded-0">상세</button>
                            </RouterLink>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>jw123@naver.com</td>
                        <td>이재원</td>
                        <td>jwlee</td>
                        <td><button class="btn btn-sm rounded-0">상세</button></td>
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