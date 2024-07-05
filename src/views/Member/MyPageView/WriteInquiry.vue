<template>
    <div>
        <div class="d-flex">
            <!-- <div class="flex-grow-1 d-flex flex-column"></div> -->
            <div class="d-flex flex-column ms-5 container">
                <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                    <h4>문의 작성하기</h4>
                </div>
                <WriteForm />

                <div class="d-flex justify-content-end">
                    <RouterLink to="/Member/Mypage/InquiryList">
                        <input type="submit" value="신청하기" class="btn btn-light me-2">
                        <input type="submit" value="취소" class="btn btn-light">
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import WriteForm from '@/components/WriteForm.vue';
import MemberAPI from '@/apis/MemberAPI';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const seeya = ref("");
const router = useRouter();

const inquiry = ref({
    nmaincategory: "공지사항",
    nsubcategory:"공지",
    ntitle: "",
    ncontent: ""
});

const iattach = ref(null);

async function handleSubmit() {
    let total = true;

    const titlepattern = /^.{2,50}$/;
    const yourtitle = titlepattern.test(inquiry.value.ntitle);
    if (!yourtitle) {
        total = false;
        seeya.value.showToast("제목을 입력 해주세요");
    }

    const contentpattern = /^.{2,100}$/;
    const yourcontent = contentpattern.test(inquiry.value.ncontent);
    if (!yourcontent) {
        total = false;
        seeya.value.showToast("내용을 입력 해주세요");
    }

    if (total) {
        // formData 추가 전 값 확인
        console.log("ititle:", inquiry.value.ntitle);
        console.log("icontent:", inquiry.value.ncontent);

        const formData = new FormData();
        formData.append("ititle", inquiry.value.ntitle);
        formData.append("icontent", inquiry.value.ncontent);

        const elNattach = iattach.value;
        if (elNattach.files.length != 0) {
            formData.append("nattach", elNattach.files[0]);
        }

        try {
            await MemberAPI.createNotice(formData);
            router.back();
        } catch (error) {
            console.log(error);
        }
    }
}


</script>

<style scoped>
.btn{
    background-color: #F37551;
    color: white;
    border-radius: 0px;
}
</style>