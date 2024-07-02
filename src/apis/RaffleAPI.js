// Raffle 컨트롤러에 요청을 보낼 때 사용하는 메소드들이 들어있을 파일

import axios from "axios";

function myEntryList() {
    return axios.get("/raffle/getRaffleDetailList")
}

export default {
    myEntryList
}