<template>

    <div class="container" style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; ">
        <h3 style=" margin-top: 30px">게시글쓰기</h3>
    </div>
    <div class="container" style="width: 100%; height:500px;">
        <div style="width: 100%; height:500px;">
            <form @submit.prevent="handleSubmit">
                <div class="form-group row">
                    <label for="btitle" class="col-sm-2 col-form-label">유형</label>
                    <div class="col-sm-10 text">
                        <select v-model="board.bcategory">
                            <option value="자유">자유</option>
                            <option value="당첨후기">당첨후기</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div class="form-group row">
                        <label for="btitle" class="col-sm-2 col-form-label">제목</label>
                        <div class="col-sm-10">
                            <input id="btitle" type="text" class="form-control" v-model="board.btitle" />
                        </div>
                    </div>
                    <div class="form-group row mt-4">
                        <label for="bcontent" class="col-sm-2 col-form-label">내용</label>
                        <div class="col-sm-10">
                            <textarea id="bcontent" type="text" class="form-control" style="height:250px;"
                                v-model="board.bcontent"></textarea>
                        </div>
                    </div>
                    <div class="form-group row mt-4">
                        <label for="battach" class="col-sm-2 col-form-label">첨부파일</label>
                        <div class="col-sm-10">
                            <input id="battach" type="file" class="form-control-file" ref="battach" />
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-12 d-flex justify-content-end">
                        <input type="submit" class="btn btn-outline-light btn-sm me-2 rounded-0" value="등록" />
                        <RouterLink to="/Board/BoardList">
                            <input type="button" class="btn btn-outline-light btn-sm rounded-0" value="취소" />
                        </RouterLink>
                    </div>
                </div>
            </form>
        </div>
        <RaffleToast ref="seeya" />
    </div>
</template>

<script setup>
import { ref } from "vue";
import RaffleToast from "@/components/RaffleToast.vue";
import BoardAPI from "@/apis/BoardAPI";
import { useRouter } from "vue-router";

const seeya = ref(null);
const router = useRouter();
const board = ref({
    bcategory: "자유",
    btitle: "",
    bcontent: "",
});
const battach = ref(null);

async function handleSubmit() {

    var total = true;

    var titlePattern = /^.{2,50}$/;
    var usertitle = titlePattern.test(board.value.btitle)
    if (!usertitle) {
        total = false;
        seeya.value.showToast("제목을 2자 이상 작성 해주세요");
    }

    var contentPattern = /^.{10,1000}$/;
    var usercontent = contentPattern.test(board.value.bcontent);
    if (!usercontent) {
        total = false;
        seeya.value.showToast("내용을 10자 이상 작성 해주세요");
    }

    if (total) {
        // multipart/form-data 객체 생성
        const formData = new FormData();

        // 문자 파트 넣기
        formData.append("btitle", board.value.btitle);
        formData.append("bcontent", board.value.bcontent);
        formData.append("bcategory", board.value.bcategory);

        // 파일 파트 넣기
        const elBattach = battach.value;
        if (elBattach.files.length != 0) {
            formData.append("battach", elBattach.files[0]);
        }

        // 게시물 쓰기 요청
        try {
            await BoardAPI.writeBoard(formData);
            router.back();
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style scoped>
.text {
    align-content: center;
}

.btn {
    background-color: #F37551;
    color: white;
}
</style>
