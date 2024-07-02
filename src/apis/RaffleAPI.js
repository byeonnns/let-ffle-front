// Raffle 컨트롤러에 요청을 보낼 때 사용하는 메소드들이 들어있을 파일

import axios from "axios";

function myEntryList() {
    return axios.get("/raffle/getRaffleDetailList")
}

// 첨부 다운로드
function raffleAttachDownload(rno) {
    // Path Variable로 데이터 전송, JSON 타입을 받는 것이 아니므로 타입을 추가로 지정
    return axios.get("/raffle/raffleAttach/" + rno, { responseType: "blob" });
}

export default {
    myEntryList,
    raffleAttachDownload
}