<template>
    <DetailTemplate>
        <template v-slot:detailTitle>
            제목 제목
        </template>
        <template v-slot:detailTime>
            시간 시간
        </template>
        <template v-slot:detailContent>
            글 내용 글 내용
        </template>
    </DetailTemplate>
</template>

<script setup>
import DetailTemplate from "./DetailTemplate.vue";
</script>

<style scoped></style>