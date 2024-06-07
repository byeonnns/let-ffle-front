<template>
    <div class="">
        <div class="container " style=" width: 30%; height: 250px; margin-top: 40px">
            <nav >
                <h5><p>게시판</p></h5>
                <ul>
                    <RouterLink to="./BoardDetail" style="text-decoration: none; color:black">  
                         <li><p>자주 묻는 질문</p></li>
                    </RouterLink>
                    <RouterLink to="./BoardList" style="text-decoration: none; color:black">  
                         <li><p>자유 게시판</p></li>
                    </RouterLink>
                    <RouterLink to="./Announcement" style="text-decoration: none; color:black">  
                         <li><p>공지사항</p></li>
                    </RouterLink>
                </ul>
            </nav>
        </div>
    </div>
</template>


<script setup>
</script>


<style scoped>
.container{
    position: absolute

}
</style>