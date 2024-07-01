<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;">
                <h3>Dashboard</h3>
            </div>
            <div class="d-flex text-center mt-4">
                <div class="col">
                    <h5>전체 래플</h5>
                    <h6>{{ raffle.totalRaffle }}</h6>
                </div>
                <div class="col">
                    <h5>진행 중인 래플</h5>
                    <h6>{{ raffle.progressRaffle }}</h6>
                </div>
                <div class="col">
                    <h5>종료된 래플</h5>
                    <h6>{{ raffle.endRaffle }}</h6>
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
                                        <!-- 스포츠에 관한 진행하는 래플(raffleDetail..?) -->
                                        <td class="bg-light col-6">진행 중인 래플</td>
                                        <td class="col-6">{{ raffle.sportProgressRaffle }}</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light col-6">현재 참여인원</td>
                                        <td class="col-6">{{ member.sportRaffle }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button class="btn btn-sm rounded-0">
                                <RouterLink to="/Raffle?rcategory=sports" class="text-white">바로가기</RouterLink>
                            </button>
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
                                        <td class="col-6">{{ raffle.artProgressRaffle }}</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light col-6">현재 참여인원</td>
                                        <td class="col-6">{{ member.artRaffle }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button class="btn btn-sm rounded-0">
                                <RouterLink to="/Raffle?rcategory=art" class="text-white">바로가기</RouterLink>
                            </button>
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
                                        <td class="col-6">{{ raffle.fashionProgressRaffle }}</td>
                                    </tr>
                                    <tr>
                                        <td class="bg-light col-6">현재 참여인원</td>
                                        <td class="col-6">{{ member.fashionRaffle }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button class="btn btn-sm rounded-0">
                                <RouterLink to="/Raffle?rcategory=fashion" class="text-white">바로가기</RouterLink>
                            </button>
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
                        <td>{{ raffle.totalRaffle }}</td>
                        <td>{{ member.totalMember }}</td>
                        <td><button class="btn btn-sm rounded-0">바로가기</button></td>
                    </tr>
                    <tr>
                        <!-- 기존에 있는 현재 래플과 끝낫던 래플들의 총합계..? -->
                        <td class="bg-light">Sports</td>
                        <td>{{ raffle.totalSport }}</td>
                        <td>{{ member.totalSport }}</td>
                        <td><button class="btn btn-sm rounded-0">바로가기</button></td>
                    </tr>
                    <tr>
                        <td class="bg-light">Art</td>
                        <td>{{ raffle.totalArt }}</td>
                        <td>{{ member.totalArt }}</td>
                        <td><button class="btn btn-sm rounded-0">바로가기</button></td>
                    </tr>
                    <tr>
                        <td class="bg-light">Fashion</td>
                        <td>{{ raffle.totalFashion }}</td>
                        <td>{{ member.totalFashion }}</td>
                        <td><button class="btn btn-sm rounded-0">바로가기</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const raffle = ref({
    // 상단에 DashBoard에 있는 전체 , 진행중, 끝난 레플
    totalRaffle: "250",
    progressRaffle: "150",
    endRaffle: "100",

    // 현재 진행중인 래플의 종류 갯수
    sportProgressRaffle: "50",
    artProgressRaffle: "50",
    fashionProgressRaffle: "50",

    // 누적래플의 수
    totalSport: "85",
    totalArt: "75",
    totalFashion: "90",
});

const member = ref({
    // 래플의 참여한 user들
    totalMember: "6800",
    sportRaffle: "253",
    artRaffle: "157",
    fashionRaffle: "300",

    // 누적 참여자수
    totalSport: "2500",
    totalArt: "1800",
    totalFashion: "2400"

});



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

.btn {
    background-color: #F37551;
    color: white;
    ;
}
</style>