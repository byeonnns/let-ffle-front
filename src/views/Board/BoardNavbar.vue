<template>
    <div>
        <div>
            <!-- style=" width: 30%; height: 250px; margin-top: 40px" -->
            <nav>
                <h5 class="title">
                    <p>게시판</p>
                </h5>
                <ul>
                    <RouterLink to="./Faq" style="text-decoration: none;">
                        <li>
                            <p>자주 묻는 질문</p>
                        </li>
                    </RouterLink>

                    <RouterLink to="./Notice" style="text-decoration: none;"
                        >
                        <li>
                            <p>공지사항</p>
                        </li>
                    </RouterLink>
                </ul>
            </nav>
        </div>
    </div>
</template>


<script setup>
</script>


<style scoped>
.container {
    position: absolute
}

.title {
    color: #F37551;
}
.router-link-active {
  color: #FF5C35; 
}


</style>