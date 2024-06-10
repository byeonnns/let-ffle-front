<template>
    <div>
        <div class="d-flex ms-5 mt-4">
            <MypageNavBar style="width: 180px;" />
            <div class="d-flex flex-column" style="width: 100%; margin-left: 150px; margin-right: 250px;">
                <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                    <h4>관심</h4>
                </div>
                
                <div class="d-flex justify-content-between mb-3" style="width: 100%;">
                    <span style="font-size: 13px;">전체 n</span>
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
                        <button class="btn btm-sm me-2" style="background-color: #F37551">응모</button>
                        <button class="btn btm-sm" style="background-color: white; color:black; border: 1px solid black;">삭제</button>
                        
                    </div>
                </div>
                <hr />
                <div class="d-flex justify-content-center">
                    <RouterLink to="#" class="fw-bold">1</RouterLink>
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