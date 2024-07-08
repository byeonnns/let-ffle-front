// Raffle 컨트롤러에 요청을 보낼 때 사용하는 메소드들이 들어있을 파일

import axios from "axios";
import qs from 'qs';

function myEntryList(pageNo, status, start, end) {
    return axios.get("/raffle/getRaffleDetailList", { params: { pageNo:pageNo, status:status, start:start, end:end } })
}

function myWinnerList(pageNo, start, end) {
    return axios.get("/raffle/getWinnerDetailList", { params: { pageNo:pageNo, start:start, end:end } });
}

// 첨부 다운로드
//썸네일 이미지
function raffleThumbnailAttachDownload(rno) {
    // Path Variable로 데이터 전송, JSON 타입을 받는 것이 아니므로 타입을 추가로 지정
    return axios.get("/raffle/raffleThumbnailAttach/" + rno, { responseType: "blob" });
}
//경품 이미지
function raffleGiftAttachDownload(rno) {
    // Path Variable로 데이터 전송, JSON 타입을 받는 것이 아니므로 타입을 추가로 지정
    return axios.get("/raffle/raffleGiftAttach/" + rno, { responseType: "blob" });
}
//디테일 이미지
function raffleDetailAttachDownload(rno) {
    // Path Variable로 데이터 전송, JSON 타입을 받는 것이 아니므로 타입을 추가로 지정
    return axios.get("/raffle/raffleDetailAttach/" + rno, { responseType: "blob" });
}

function getAdminRaffleList(pageNo) {
    return axios.get("/raffle/getAdminRaffleList", { params: {  pageNo: pageNo  }});
}

function createRaffle(formData) {
    return axios.post("/raffle/createRaffle", formData);
}

function getRaffle(rno) {
    return axios.get("/raffle/readRaffle/" + rno);
}

function getRaffleList(category, sortType) {
    return axios.get("/raffle/getRaffleList", { params: { category : category, sortType : sortType } });
}

function searchRaffleList(word) {
    return axios.get("/raffle/searchRaffleList/" + word);
}

function apply(rno) {
    return axios.post("/raffle/createRaffleDetail/" + rno);
}

function updateRdtBerrySpend(rno, rdtBerrySpend) {
    return axios.put("/raffle/updateRdtBerrySpend",  qs.stringify({rno: rno, rdtBerrySpend: rdtBerrySpend}));
}

function updateRdtMissionCleared(rno, manswer) {
    return axios.put("/raffle/updateRdtMissionCleared/" + rno + "/" + manswer);
}

function getRaffleDetail(rno) {
    return axios.get("/raffle/readRaffleDetail/" + rno);
}

function getAdminRaffleDetailList(mid) {
    return axios.get("/raffle/getAdminRaffleDetail/" + mid);
}

function winnerCreate(rno) {
    return axios.post("/raffle/createWinner", qs.stringify({rno}));
}

function getAdminDashboard() {
    return axios.get("/raffle/getAdminDashboard");
}

export default {
    myEntryList,
    myWinnerList,
    raffleThumbnailAttachDownload,
    raffleGiftAttachDownload,
    raffleDetailAttachDownload,
    getAdminRaffleList,
    createRaffle,
    getRaffle,
    getRaffleList,
    apply,
    updateRdtMissionCleared,
    getRaffleDetail,
    getAdminRaffleDetailList,
    searchRaffleList,
    updateRdtBerrySpend,
    winnerCreate,
    getAdminDashboard
}