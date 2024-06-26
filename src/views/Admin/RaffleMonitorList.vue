<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>래플 모니터</h3>
            </div>
            <table class="table text-center">
                <thead>
                    <tr>
                        <th class="col-1" scope="col">번호</th>
                        <th class="col-4" scope="col">래플 이름</th>
                        <th class="col-2" scope="col">개시일</th>
                        <th class="col-2" scope="col">마감일</th>
                        <th class="col-1" scope="col">상태</th>
                        <th class="col-2" scope="col">관리</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <RouterLink to="/">1</RouterLink>
                        </td>
                        <td>
                            <RouterLink to="/">더그레이티스트24 SUMMER 드랍 ~50%</RouterLink>
                        </td>
                        <td>
                            2024-06-04
                        </td>
                        <td>
                            2024-06-10
                        </td>
                        <td>
                            진행 중
                        </td>
                        <td>
                            <RouterLink to="/Admin/RaffleMonitorDetail"><button class="btn btn-sm rounded-0">모니터링</button>
                            </RouterLink>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <RouterLink to="/">2</RouterLink>
                        </td>
                        <td>
                            <RouterLink to="/">더그레이티스트24 SUMMER 드랍 ~50%</RouterLink>
                        </td>
                        <td>
                            2024-06-04
                        </td>
                        <td>
                            2024-06-10
                        </td>
                        <td>
                            종료
                        </td>
                        <td>
                            <RouterLink to="/Admin/RaffleMonitorDetail"><button class="btn btn-sm rounded-0">모니터링</button>
                            </RouterLink>
                        </td>
                    </tr>
                </tbody>
            </table>
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
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
td {
    align-content: center;
}

.btn {
    background-color: #F37551;
    color: white;
}
</style>