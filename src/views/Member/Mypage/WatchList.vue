<template>
    <div>
        <div class="container"> 
            <div class="d-flex">
                <div class="d-flex flex-column" style="width: 100%;">
                    <div style="border-bottom: 3px solid #F37551;" class="">
                        <h4>찜 목록</h4>
                    </div>
                    <div class="mb-3">
                        <span style="font-size: 13px;">전체 n</span>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="d-flex">
                            <div style="width: 6rem; height: 85px;">
                                <img src="" class="card-img-top" alt="..."
                                    style="max-width: 100%; height: auto;">
                            </div>
                            <div class="align-content-center">Nike<br>Nike Air Force 1'07First Use White Team Red</div>
                        </div>
                        <div class="align-content-center">
                            <button class="btn btm-sm me-2" style="background-color: #F37551">응모</button>
                            <button class="btn btm-sm"
                                style="background-color: white; color:black; border: 1px solid black;">삭제</button>

                        </div>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-center">
                        <RouterLink to="#" class="fw-bold">1</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.router {
    color: black;
}
</style>