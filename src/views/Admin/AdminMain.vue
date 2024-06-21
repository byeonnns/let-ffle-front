<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>Dashboard</h3>
            </div>
            <div class="d-flex text-center mt-4">
                <div class="col">
                    <h3>전체 래플</h3>
                    <h5>1</h5>
                </div>
                <div class="col">
                    <h3>진행 중인 래플</h3>
                    <h5>1</h5>
                </div>
                <div class="col">
                    <h3>종료된 래플</h3>
                    <h5>1</h5>
                </div>
            </div>
            <hr class="border-3 opacity-100" style="border-color: #F37551;" />
            <div class="row px-5 g-5 text-center">
                <div class="col-lg-4">
                    <div class="card">
                        <img src="@/assets/symbol/sports_symbol.svg"
                            class="card-img-top w-100 h-100 object-fit-cover p-4" alt="...">
                        <div class="card-body">
                            <h4 class="card-title fw-bold mb-2">Sports</h4>
                            <table class="table text-center table-borderless">
                                <tbody>
                                    <tr>
                                        <td class="bg-light col-6">진행 중인 래플</td>
                                        <td class="col-6">234</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light col-6">현재 참여인원</td>
                                        <td class="col-6">513515</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button class="btn btn-sm">바로가기</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <img src="@/assets/symbol/art_symbol.svg" class="card-img-top w-100 h-100 object-fit-cover p-4"
                            alt="...">
                        <div class="card-body">
                            <h4 class="card-title mb-2 fw-bold">Art</h4>
                            <table class="table text-center table-borderless">
                                <tbody>
                                    <tr>
                                        <td class="bg-light col-6">진행 중인 래플</td>
                                        <td class="col-6">234</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light col-6">현재 참여인원</td>
                                        <td class="col-6">513515</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button class="btn btn-sm">바로가기</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <img src="@/assets/symbol/fashion_symbol.svg"
                            class="card-img-top w-100 h-100 object-fit-cover p-4" alt="...">
                        <div class="card-body">
                            <h4 class="card-title mb-2 fw-bold">Fashion</h4>
                            <table class="table text-center table-borderless">
                                <tbody>
                                    <tr>
                                        <td class="bg-light col-6">진행 중인 래플</td>
                                        <td class="col-6">234</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light col-6">현재 참여인원</td>
                                        <td class="col-6">513515</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button class="btn btn-sm">바로가기</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="border-3 opacity-100" style="border-color: #F37551;" />
            <table class="table text-center table-bordered">
                <thead>
                    <tr>
                        <td colspan="4" class="text-white text-start px-3" style="background-color: #F37551;">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 class="m-0">
                                    래플 누적 현황
                                </h5>
                                <h6 class="m-0">
                                    최종 업데이트 일시 : 2024-06-04 20:56
                                </h6>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="col">구분</th>
                        <th scope="col">누적 래플 수</th>
                        <th scope="col">누적 참여자 수</th>
                        <th scope="col">이동</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="bg-light">전체</td>
                        <td>12</td>
                        <td>12</td>
                        <td><button class="btn btn-sm">바로가기</button></td>
                    </tr>
                    <tr>
                        <td class="bg-light">Sports</td>
                        <td>34</td>
                        <td>34</td>
                        <td><button class="btn btn-sm">바로가기</button></td>
                    </tr>
                    <tr>
                        <td class="bg-light">Art</td>
                        <td>56</td>
                        <td>56</td>
                        <td><button class="btn btn-sm">바로가기</button></td>
                    </tr>
                    <tr>
                        <td class="bg-light">Fashion</td>
                        <td>78</td>
                        <td>78</td>
                        <td><button class="btn btn-sm">바로가기</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
img {
    background-color: #FF5C35;
}

td {
    align-content: center;
}

th {
    background-color: #d8dce3;
}
.btn{
    background-color: #F37551;
    color: white;;
}
</style>