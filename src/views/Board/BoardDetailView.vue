<template>
    <div class="container"
        style="width: 100%; height:50px; border-bottom:3px solid #F37551; margin-bottom: 10px;margin-top: 30px">
        <h3>자유 게시판</h3>
    </div>
    <div class="container" style="width: 100%; height:100%; ">
        <div class="">
            <h2>[{{ board.bcategory }}] {{ board.btitle }}</h2>
            <div class="d-flex justify-content-between">
                <div>
                    <span class="me-3">{{ board.battachoname }}</span><i class="bi bi-clock me-2">{{
                        formatDate(board.bcreatedat)
                    }}</i><i class="bi bi-eye">{{ board.bhitcount }}</i>
                </div>
                <div>
                    <input v-if="$store.state.mid === board.mid" type="submit"
                        class="btn btn-outline-light btn-sm me-2 rounded-0" value="수정" @click="updateBoard" />
                    <input v-if="$store.state.mrole === 'ROLE_ADMIN' || $store.state.mid === board.mid" type="button"
                        class="btn btn-outline-light btn-sm me-2 rounded-0" value="삭제" @click="deleteBoard" />
                </div>
            </div>
            <hr />
            <img v-if="battach != null" width="25%" :src="battach">
            <div class="mt-5">
                {{ board.bcontent }}
            </div>
            <div class="text-center" style="margin-top:100px ;">
                <RouterLink to="/Board/BoardList">
                    <input type="button" class="btn btn-outline-light btn-sm rounded-0" value="목록" />
                </RouterLink>
            </div>
        </div>
        <form @submit.prevent="createComment">
            <div class="form-group row mt-5">
                <div style="margin-bottom: 30px">
                    <textarea id="bcontent" type="text" class="form-control" placeholder="댓글을 입력하세요."
                        v-model="boardComment.ccontent" style="height:100px;"></textarea>
                </div>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-outline-light rounded-0">댓글작성</button>
            </div>
        </form>
        <div class="community" style="width: 100%; height: 100%;">
            <div class="mt-4" style="border-bottom:1px solid #ebebeb ;">
                <p>댓글 [{{ commentList.length }}]</p>
            </div>
            <div v-for="com in commentList" :key="com.cno">
                <div class="mt-3">
                    <p class="custom-title me-3"> {{ com.mnickname }}</p>
                    <p class="custom-text"> {{ formatDate(com.boardComment.ccreatedat) }}</p>
                    <button v-if="$store.state.mid === com.boardComment.mid" class="my_btn btn-outline-light btn-sm m-2" @click="deleteComment(com.boardComment.cno)"><i
                            class="bi bi-x-square"></i></button>
                    <button v-else-if="$store.state.mrole === 'ROLE_ADMIN'" class="my_btn btn-outline-light btn-sm m-2" @click="deleteComment(com.boardComment.cno)"><i
                        class="bi bi-x-square"></i></button>
                </div>
                <div style=" background-color: #FAFAFA; height: 100px; padding: 5px">
                    <p class="mt-3"> {{ com.boardComment.ccontent }} </p>
                </div>
            </div>
        </div>
        <RaffleToast ref="look" />
    </div>
</template>


<script setup>
import RaffleToast from '@/components/RaffleToast.vue';
import { ref } from "vue";
import { useRoute, useRouter } from 'vue-router';
import BoardAPI from '@/apis/BoardAPI';
import { useStore } from 'vuex';

const look = ref(null);
const board = ref({});
const router = useRouter();
const route = useRoute();
// Query String으로 전달된 bno 얻기
const bno = route.query.bno;
const pageNo = route.query.pageNo;
const battach = ref(null);
const boardComment = ref({
    bno: bno,
    ccontent: "",
    mnickname:""
});
const store = useStore();
// 댓글
const commentList = ref({});

async function boardCommentList(bno) {
    try {
        const response = await BoardAPI.getCommentList(bno);
        commentList.value = response.data;
    } catch (error) {
        console.log(error);
    }
}
boardCommentList(bno);

async function createComment() {
    var login = store.state.mid;
    if (!login) {
        router.push("/login");
    }
    var total = true;

    var commentPattern = /^[\s\S]{2,100}$/;
    var userComment = commentPattern.test(boardComment.value.ccontent)
    if (!userComment) {
        look.value.showToast("댓글을 2자이상 100자 이내로 작성해주세요");
        total = false;
    } else {
        look.value.showToast("댓글이 입력 되었습니다.")
    }

    if (total) {
        const formData = new FormData();

        formData.append("bno", boardComment.value.bno);
        formData.append("ccontent", boardComment.value.ccontent);

        try {
            await BoardAPI.createComment(formData);
            router.go(`/Board/BoardDetail?bno=${bno}&pageNo=${pageNo}`);
        } catch (error) {
            console.log(error);
        }
    }
}


// 해당 bno 게시물 얻는 함수
async function getBoard(argBno) {
    try {
        const response = await BoardAPI.boardDetail(argBno);
        board.value = response.data;
        if (board.value.battachoname != null) {
            getAttach(argBno);
        }
    } catch (error) {
        console.log(error);
    }
}
getBoard(bno);

// 첨부 다운로드
async function getAttach(argBno) {
    try {
        const response = await BoardAPI.boardAttachDownload(argBno);
        const blob = response.data;
        if(blob.size != 0)
            battach.value = URL.createObjectURL(blob);
    } catch (error) {
        console.log(error);
    }
}

function updateBoard() {
    router.push(`/Board/BoardUpdate?bno=${board.value.bno}&pageNo=${pageNo}`);
}

async function deleteBoard() {
    try {
        await BoardAPI.deleteBoard(bno);
        router.back();
    } catch (error) {
        console.log(error);
    }
}

async function deleteComment(cno) {
    try {
        await BoardAPI.deleteComment(cno);
        router.go(`/Board/BoardDetail?bno=${bno}&pageNo=${pageNo}`);
    } catch (error) {
        console.log(error);
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}
</script>

<style scoped>
.custom-title,
.custom-text {
    margin: 0;
    /* 모든 방향의 마진을 제거 */
    padding: 0;
    /* 모든 방향의 패딩을 제거 */
    display: inline;
    /* 인라인 요소로 변경하여 같은 줄에 표시 */
}

.my_btn {
    background-color: white;
    color: #F37551;
    border: none;
    border-radius: 5px;
    width: 20px;
    height: 30px;

}

.btn {
    background-color: #F37551;
    color: white;
}

.community {
    margin-bottom: 100px
}
</style>