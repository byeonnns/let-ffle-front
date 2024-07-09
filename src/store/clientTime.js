export default {
    namespaced: true,

    state: {
        currentTime: new Date(),
    },

    getters: {
        getCurrentTime(state) {
            const year = state.currentTime.getFullYear(); // 연
            const month = state.currentTime.getMonth() + 1; // 월
            const day = state.currentTime.getDate(); // 일
            const hours = state.currentTime.getHours(); // 시간
            const minutes = state.currentTime.getMinutes(); // 분
            const seconds = state.currentTime.getSeconds(); // 초
            return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        },

        getTimeForCalculate(state) {
            return state.currentTime;
        }
    },

    mutations: {
        setCurrentTime(state, newTime) {
            state.currentTime = newTime;
        },
    },

    actions: {
        updateTime(context) {
            setInterval(() => {
                context.commit('setCurrentTime', new Date());
            }, 1000);
        },
    }
}