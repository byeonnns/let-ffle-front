<template>
    <div class="">
        <div class="container " style="border:1px solid black; width: 10%; height: 200px; margin-top: 50px">
            <nav >
                <h5 class="mt-3"><p>게시판</p></h5>
                <ul>
                    <RouterLink to="./BoardDetail" style="text-decoration: none; color:black">  
                         <li><p>공지사항</p></li>
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