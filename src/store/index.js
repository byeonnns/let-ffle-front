import { createStore } from 'vuex';
import clientTime from './clientTime';
import axiosConfig from '@/apis/axiosConfig';

const store = createStore({
  state: {
    mid: "",
    mrole: "",
    accessToken: ""
  },
  getters: {
    getMid(state, getters, rootState, rootGetters) {
      return state.mid;
    },
    getMrole(state) {
      return state.mrole === 'ROLE_ADMIN';
    },

    getAccessToken(state, getters, rootState, rootGetters) {
      return state.accessToken;
    }
  },
  mutations: {
    setMid(state, payload) { // payload : 변경할 값을 갖고 있는 객체
      state.mid = payload;
    },
    setMrole(state, role) {
      state.mrole = role;
    },
    setAccessToken(state, payload) {
      state.accessToken = payload;
    }
  },
  actions: {
    loginAction(context, payload) {
      new Promise((resolve, reject) => {
        // 서버와 통신 작업
        // ... 3초 소요

        if (true) {
          // 로그인 성공
          resolve({ result: "success", mid: "summer" });
        } else {
          // 로그인 실패
          reject({ result: "fail", reason: "password is not exist" });
        }

      })
        .then((data) => {
          // 작업이 성공 처리된 경우
          // 상태 변경 작성
          console.log("로그인 성공");
          context.commit("setMid", data.mid); // Mutation을 사용해 상태 변경 (actions는 상태 직접 변경이 불가능하다)
        })

        .catch((data) => {
          // 작업이 실패 처리된 경우
          console.log("로그인 실패");
        });
    },

    // 브라우저가 재실행될 때 인증 정보를 전역 상태로 복구
    loadAuth(context, payload) {
      // mid 전역 상태 설정
      context.commit("setMid", localStorage.getItem("mid") || "");

      const Mrole = localStorage.getItem("mRole") || "";
      context.commit("setMrole", Mrole);

      // accessToken 전역 상태 설정
      const accessToken = localStorage.getItem("accessToken") || "";
      context.commit("setAccessToken", accessToken);

      // Axios 요청 공통 헤더에 인증 정보 추가 (값이 있는 경우에만)
      if (accessToken !== "") {
        axiosConfig.addAuthHeader(accessToken);
      }
    },

    // 로그인 설정했을 때 인증 정보를 전역 상태 및 로컬 파일로 저장
    saveAuth(context, payload) {
      /*
      payload = {
        mid : "user",
        accessToken : "xxx.yyy.zzz"
      }
      */
      // 전역 상태값 변경
      context.commit("setMid", payload.mid);
      context.commit("setMrole", payload.mRole);
      context.commit("setAccessToken", payload.accessToken);

      // 로컬 파일에 저장
      localStorage.setItem("mid", payload.mid);
      localStorage.setItem("mRole", payload.mRole);
      localStorage.setItem("accessToken", payload.accessToken);

      // Axios 요청 공통 헤더에 인증 정보 추가
      axiosConfig.addAuthHeader(payload.accessToken);
    },

    // 로그아웃 할 때 인증 정보를 모두 삭제
    deleteAuth(context, payload) {
      // 전역 상태값 변경
      context.commit("setMid", "");
      context.commit("setMrole", "");
      context.commit("setAccessToken", "");

      // 로컬 파일에서 삭제
      localStorage.removeItem("mid");
      localStorage.removeItem("mRole");
      localStorage.removeItem("accessToken");

      // Axios 요청 공통 헤더에 인증 정보 삭제
      axiosConfig.removeAuthHeader();
    }
  },
  modules: {
    clientTime
  },
})

store.dispatch('clientTime/updateTime');

export default store;