<template>
    <div>
        <div class="d-flex">
            <MypageNavBar style="width: 180px;" />
            <div class="d-flex flex-column" style="width: 100%;">
                <div class="">
                    <h4>관심</h4>
                </div>
                <div class="fw-bold border-bottom border-3 border-black mb-5"></div>
                <div class="d-flex justify-content-between mb-3" style="width: 100%;">
                    <span style="font-size: 13px;">전체 n</span>
                    <span style="font-size: 13px;">관심 등록순</span>
                </div>
                <div class="d-flex justify-content-between">
                    <div class="d-flex">
                        <div style="width: 6rem; height: 85px;">
                            <img src="/images/photos/2.png" class="card-img-top" alt="..."
                                style="max-width: 100%; height: auto;">
                        </div>
                        <div class="align-content-center">Nike<br>Nike Air Force 1'07First Use White Team Red</div>
                    </div>
                    <div class="align-content-center">
                        <button class="btn btn-danger btm-sm">응모</button>
                        <div class="d-flex justify-content-end" style="font-size: 11px;">
                            <RouterLink class="router">삭제</RouterLink>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="d-flex justify-content-center">
                    <RouterLink class="fw-bold">1</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MypageNavBar from './MypageNavBar';
</script>

<style scoped>
.router {
    color: black;
}
</style>