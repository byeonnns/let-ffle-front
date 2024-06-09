<template>
    <div>
        <div class="d-flex ms-5 mb-4">
            <div class="card rounded-3 w-100">
                <div class="card-body mt-3 ms-3 flex-column">
                    <div class="d-flex">
                        <div class="mt-1 ms-3">
                            <div>
                                <strong>gekx0m</strong>
                            </div>
                            <p>asd@naver.com</p>
                        </div>
                        <div class="position-absolute top-50 end-0 translate-middle-y me-4">
                            <button class="btn btn-white btn-lg border rounded-3" style="font-size: 12px;">프로필
                                변경</button>
                            <button class="btn btn-white btn-lg border rounded-3" style="font-size: 12px;">응모
                                내역</button>
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
.circle-border {
    width: 60px;
    height: 60px;
    border-radius: 50%;
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
</style>
