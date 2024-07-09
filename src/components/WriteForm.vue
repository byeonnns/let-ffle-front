<template>
    <div>
        <div class="form-group row">
            <label for="ititle" class="col-sm-2 col-form-label">제목</label>
            <div class="col-sm-10">
                <input id="ititle" type="text" class="form-control" v-model="inquiry.ititle" />
            </div>
        </div>
        <div class="form-group row mt-4">
            <label for="icontent" class="col-sm-2 col-form-label">내용</label>
            <div class="col-sm-10">
                <textarea id="icontent" type="text" class="form-control" style="height:250px;"
                v-model="inquiry.icontent"></textarea>
            </div>
        </div>
        <div class="form-group row mt-4">
            <label for="iattach" class="col-sm-2 col-form-label">첨부파일</label>
            <div class="col-sm-10">
                <input id="iattach" type="file" class="form-control-file" ref="iattach" />
            </div>
        </div>
    </div>
    <RaffleToast ref="seeya" />
</template>

<script setup>
import { ref } from 'vue';
import MemberAPI from '@/apis/MemberAPI';
import { useRouter } from 'vue-router';
import RaffleToast from '@/components/RaffleToast.vue';

const inquiry = ref({
    ititle: "",
    icontent: "",
})

const router = useRouter();
const seeya = ref(null);
const iattach = ref(null);

async function createInquiry() {
    let total = true;

    const titlepattern = /^.{2,50}$/;
    const contentpattern = /^.{2,100}$/;

    if (!titlepattern.test(inquiry.value.ititle)) {
        total = false;
        seeya.value.showToast("제목을 입력 해주세요");
    }

    if (!contentpattern.test(inquiry.value.icontent)) {
        total = false;
        seeya.value.showToast("내용을 입력 해주세요");
    }

    if (total) {
        const formData = new FormData();
        formData.append("ititle", inquiry.value.ititle);
        formData.append("icontent", inquiry.value.icontent);

        const elIattach = iattach.value;

        if (elIattach.files.length !== 0) {
            formData.append("iattach", elIattach.files[0]);
        }

        try {
            await MemberAPI.myInquirycreate(formData);
            router.back();
        } catch (error) {
            console.error(error);
        }
    }
}

defineExpose({
    createInquiry
});
</script>

<style scoped></style>