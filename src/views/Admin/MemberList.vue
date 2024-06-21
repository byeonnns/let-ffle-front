<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <!-- <div class="flex-grow-1 d-flex flex-column"></div> -->
                <div class="d-flex flex-column p-3" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                        <h4>회원 조회</h4>
                    </div>
                    <table class="table mb-0">
                        <thead>
                            <tr class="d-none d-md-table-row text-center">
                                <th class="d-none d-md-table-cell" style="width: 4em;"><span>번호</span></th>
                                <th class="d-none d-md-table-cell" style="width: 11em;"><span>ID</span></th>
                                <th class="d-none d-md-table-cell" style="width: 8em;"><span>이름</span></th>
                                <th class="d-none d-md-table-cell" style="width: 6em;"><span>닉네임</span></th>
                                <th class="d-none d-md-table-cell" style="width: 6em;"><span>상세</span></th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr>
                                <td>1</td>
                                <td>tjdwns3823@naver.com</td>
                                <td>변성준</td>
                                <td>byeon</td>
                                <td><RouterLink to="MemberDetail"><button class="btn btn-sm">상세</button></RouterLink></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>jw123@naver.com</td>
                                <td>이재원</td>
                                <td>jwlee</td>
                                <td><button class="btn btn-sm">상세</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-end align-items-center mt-3 me-3">
                        <div>
                            <select class="me-2">
                                <option>ID</option>
                                <option>이름</option>
                                <option>닉네임</option>
                            </select>
                            <input class="me-2">
                        </div>
                        <button type="button" class="btn btn-light">검색</button>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex flex-grow-1 justify-content-center">
                            <button class="btn btn-outline-light btn-sm me-1"
                                style="background-color: white; color:black;">처음</button>
                            <button class="btn btn-outline-light btn-sm me-3"
                                style="background-color: white; color:black;">이전</button>
                            <button class="btn btn-outline-light btn-sm me-1"
                                style="background-color: white; color:black;">1</button>
                            <button class="btn btn-outline-light btn-sm me-1"
                                style="background-color: white; color:black;">2</button>
                            <button class="btn btn-outline-light btn-sm me-1"
                                style="background-color: white; color:black;">3</button>
                            <button class="btn btn-outline-light btn-sm me-1"
                                style="background-color: white; color:black;">4</button>
                            <button class="btn btn-outline-light btn-sm me-3"
                                style="background-color: white; color:black;">5</button>
                            <button class="btn btn-outline-light btn-sm me-1"
                                style="background-color: white; color:black;">다음</button>
                            <button class="btn btn-outline-light btn-sm me-1"
                                style="background-color: white; color:black;">맨끝</button>
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
.btn{
    background-color: #F37551;
    color: white;
}
</style>