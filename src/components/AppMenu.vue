<template>
    
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse9" aria-expanded="true" aria-controls="collapse9">
                    프로젝트 렛필
                </button>
            </h2>
            <div id="collapse9" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <RouterLink to="/Raffle/Main" class="nav-link">
                                1. 래플 조회 페이지
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Raffle/Detail" class="nav-link">
                                2. 래플 상세 페이지
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Admin/Main" class="nav-link">
                                3. 관리자 메인 페이지
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/Admin/CreateRaffle" class="nav-link">
                                4. 관리자 래플 등록 페이지
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
a {
    text-decoration: none;
    color : black;
    margin-top : 2px;
}
</style>