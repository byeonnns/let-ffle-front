<template>
    <div class="container-lg">
        <div class="d-flex justify-content-center">
            <!--아이디(이메일), 비밀번호, 이름, 주민번호, 전화번호, 주소를 입력받는다.-->
            <form v-if="$store.state.mid === ''" @submit.prevent="handleLogin" class="d-flex flex-column"
                :style="responsiveSize">
                <p class="text-center fst-italic" style="font-size:50px; font-weight: 900">Let-<span
                        style="color:#FF5C35">FFle</span></p>
                <label for="memail">이메일 주소</label>
                <input v-model="member.mid" type="email" class="border-0 border-bottom input" @input="emailCheck()">
                <p class="m-0" style="color:#FF5C35">{{ emailError }}</p>
                <label for="mpassword" class="mt-3">비밀번호</label>
                <input v-model="member.mpassword" type="password" class="border-0 border-bottom input"
                    @input="passwordCheck()">
                <p class="m-0" style="color: #FF5C35;">{{ passwordError }}</p>
                <button v-if="$store.state.mid !== ''" class="btn btn-success rounded-0 btn-lg mt-4"
                    @click="handleLogout">로그아웃</button>
                <input v-else type="submit" value="로그인" class="btn text-white rounded-0 btn-lg mt-4"
                    :class="isPass ? '' : 'disabled'" style="background-color: #F37551;">
                <div class="row mt-3 text-center">
                    <div class="col-4 border-end">
                        <RouterLink to="/join">이메일 가입</RouterLink>
                    </div>
                    <div class="col-4">
                        <RouterLink to="/FindId">이메일 찾기</RouterLink>
                    </div>
                    <div class="col-4 border-start">
                        <RouterLink to="/FindPassword">비밀번호 찾기</RouterLink>
                    </div>
                </div>
            </form>
            <div v-else class="notback" style="height: 400px;">
                <h4>이미 로그인을 하셨습니다.</h4>
            </div>

        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import memberAPI from '@/apis/MemberAPI';
import { useStore } from 'vuex';
import router from '@/router';
import { useEventBus } from '@/utils/eventBus';

const store = useStore();
const eventBus = useEventBus();
const member = ref({
    mid: "",
    mpassword: ""
});

async function handleLogin() {
    try {
        const data = JSON.parse(JSON.stringify(member.value));
        const response = await memberAPI.login(data);
        if (response.data.result === 'success') {
            const payload = {
                mid: response.data.mid,
                mrole: response.data.mrole,
                accessToken: response.data.accessToken
            };
            store.dispatch("saveAuth", payload);
            if(response.data.berry === 'berry') {
                eventBus.showToast("매일 최초 로그인 베리가 지급되었습니다.");
            }
        }
        router.replace("/");

    } catch (error) {
        console.log(error);

    }
}

function handleLogout() {
    store.dispatch("deleteAuth");
}

const passwordError = ref('');
const emailError = ref('');
const isPass = ref(false);
const idRegExp = new RegExp("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}");

const emailCheck = () => {
    if (!idRegExp.test(member.value.mid)) {
        emailError.value = "이메일 주소를 정확히 입력해주세요."
    } else {
        emailError.value = "";
    }
    onBtn();
}

const passwordCheck = () => {
    if (member.value.mpassword.length == 0) {
        passwordError.value = '비밀번호를 입력해주세요.';
    } else {
        passwordError.value = '';
    }
    onBtn();
}

function onBtn() {
    if (idRegExp.test(member.value.mid) && member.value.mpassword.length > 0) {
        isPass.value = true;
    } else {
        isPass.value = false;
    }
}

/* 반응형 관련 코드 */
const responsiveSize = reactive({
    width: window.innerWidth >= 992 ? '400px' : '100%'
});

const handleResize = () => {
    if (window.innerWidth >= 992) {
        responsiveSize.width = '400px';
    } else {
        responsiveSize.width = '100%';
    }
};
window.addEventListener('resize', handleResize);
</script>

<style scoped>
.input {
    outline: none;
}

p {
    font-size: 12px;
    min-height: 18px;
}

label {
    font-size: 14px;
}

.notback {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>