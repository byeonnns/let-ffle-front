<template>
    <div>
        <div class="container">
            <div class="d-flex">
                <div class="d-flex flex-column ms-5" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                        <h4>내 게시글</h4>
                    </div>
                    <!-- <div style=" width: 100%; height: 500px;"> -->
                    <!-- border: 1px solid black;-->
                    <table class="table mb-0">
                        <thead>
                            <tr class="d-none d-md-table-row text-center">
                                <th class="d-none d-md-table-cell" style="width: 4em;">번호</th>
                                <th><span>제목</span></th>
                                <th class="d-none d-md-table-cell" style="width: 11em;">작성일자</th>
                                <th class="d-none d-md-table-cell" style="width: 8em;">수정</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr class="center">
                                <td>1</td>
                                <td>
                                    <RouterLink to="/Board/BoardDetail" style="color: black;">현재 이런 상황에 대한 반응들
                                    </RouterLink>
                                </td>
                                <td>2024-06-05</td>
                                <td>
                                    <RouterLink to="/Board/BoardDetail"><button
                                            class="btn btn-outline-light btn-sm me-2">수정</button>
                                    </RouterLink>

                                    <RouterLink to="/Member"><button class="btn btn-outline-light btn-sm">삭제</button>
                                    </RouterLink>
                                </td>
                            </tr>
                        
                        </tbody>
                    </table>

                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.center {
    text-align: center;
}

.btn {
    background-color: #FF5C35;
}
</style>