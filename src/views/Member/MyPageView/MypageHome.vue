<template>
    <div>
        <div class="d-flex flex-column mt-4">
            <div class="card p-2 flex-grow-1 my-2">
                <div class="align-content-center d-flex justify-content-between p-3 ms-4">
                    <span>
                        <h6>
                            <h5 style="display: inline;">{{ member.mnickname }}</h5> 님, 안녕하세요!
                        </h6>
                        <strong class="mt-2 m-0">오늘의 래플 참여 가능 횟수가 <span style="color: #F37551;"> {{ 3 -
                                member.todayEntryRaffle }} </span> 회 남았습니다.</strong>
                    </span>
                    <RouterLink class="btn btn-outline-light align-content-center text-white"
                        to="/Member/MyPage/UpdateMember" style="background-color: #F37551;">회원 정보 수정</RouterLink>
                </div>
            </div>
            <div class="card flex-grow-1 mt-5">
                <div class="card-body d-flex pb-2">
                    <div class="flex-grow-1 mt-4">
                        <h4 class="text-center">
                            <img src="@/assets/berry-icon.png" class="me-2" height="20px">
                            오늘의 베리 획득 미션
                        </h4>
                        <div class="mt-5">
                            <div class="d-flex text-center">
                                <div class="col">
                                    <h5 class="">매일 매일 접속하기</h5>
                                    <p class="fw-bold"> {{ member.berryLoginMission }}</p>
                                </div>
                                <div class="col">
                                    <h5 class="">하루 3회 래플 응모하기</h5>
                                    <p class="fw-bold"> {{ member.todayEntryRaffle }}/3 완료</p>
                                </div>
                                <div class="col">
                                    <h5 class="">하루 3회 래플&미션 참여로 베리 획득</h5>
                                    <p class="fw-bold">{{ member.todayClearedMission }}/3 완료</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3 p-3">
                            <span class="fw-bold h5">※ 베리 획득 방법</span> <br />
                            <span> - 매일 첫 로그인 시 베리 1개를 획득할 수 있습니다.</span> <br />
                            <span> - 하루에 3개 래플에 응모하면 베리 1개를 획득할 수 있습니다. (매일 0시 기준)</span> <br />
                            <span> - 하루에 참여한 3개의 래플의 미션을 모두 완료하면 베리 1개를 추가로 획득할 수 있습니다.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MemberAPI from '@/apis/MemberAPI';
import { ref } from 'vue';

const member = ref({
    mnickname: null,
    todayEntryRaffle: 0,
    todayClearedMission: 0,
    berryLoginMission: "미션 완료",
});

async function getMyPageDashboard() {
    try {
        const response = await MemberAPI.myPageDashboard();
        member.value.mnickname = response.data.mNickname;
        member.value.todayEntryRaffle = response.data.todayEntryRaffle;
        member.value.todayClearedMission = response.data.todayClearedMission;
    } catch (error) {
        console.log(error);
    }
}
getMyPageDashboard()

</script>

<style scoped>
.circle-border {
    width: 60px;
    height: 60px;
    border: 1px solid black;
    overflow: hidden;
}

.circle-border img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.position-absolute>.btn {
    margin-right: 10px;
}

td {
    align-content: center;
}

.btn {
    color: white;
    background-color: #F37551;
    border-radius: 0px;
    height: 50px;
}
</style>