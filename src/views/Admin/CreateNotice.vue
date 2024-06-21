<template>
    <div>
        <div class="container" style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; ">
            <h3 style=" margin-top: 30px">공지사항 등록</h3>
        </div>
        <CreateForm ref="childRef" />

    </div>
</template>

<script setup>
import CreateForm from '@/views/Admin/Components/CreateForm.vue';
import { ref } from 'vue';

const childRef = ref(null);
const childVar = ref('');
function handleSubmit() {
    childRef.value.childText;
}

</script>

<style scoped></style>