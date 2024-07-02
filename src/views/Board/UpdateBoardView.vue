<template>

    <div class="container" style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px; ">
        <h3 style=" margin-top: 30px">게시글쓰기</h3>
    </div>
    <div class="container" style="width: 100%; height:100%;">
        <div style="width: 100%; height:100%;">
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
                        <div v-if="board.battachoname !== null">
                        <img width="300"
                            :src="`${axios.defaults.baseURL}/community/battach/${bno}?accessToken=${$store.state.accessToken}`">
                        </div>
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
import WriteForm from "@/components/WriteForm.vue";
import { ref } from "vue";
import RaffleToast from "@/components/RaffleToast.vue";
import boardAPI from "@/apis/BoardAPI";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const checkTitle = ref(null);
const checkContent = ref(null);
const writeFormRef = ref(null);
const seeya = ref(null);

const board = ref({})
const router = useRouter();
const route = useRoute();
const pageNo = route.query.pageNo;
const battach = ref(null);

const bno = route.query.bno;


// 해당 bno 게시물 얻는 함수
async function getBoard(argBno) {
    try {
        const response = await boardAPI.boardDetail(argBno);
        board.value = response.data;
        if (board.value.battachoname != null) {
            getAttach(argBno);
        }
        console.log(board.value);
    } catch (error) {
        console.log(error);
    }
}
// 첨부 다운로드
async function getAttach(argBno) {
    try {
        const response = await boardAPI.boardAttachDownload(argBno);
        const blob = response.data;
        battach.value = URL.createObjectURL(blob);
    } catch (error) {
        console.log(error);
    }
}
getBoard(bno);

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
        formData.append("bno", board.value.bno);
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
            const response = await boardAPI.updateBoard(formData);
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
