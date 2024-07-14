import axios from "axios";
import qs from 'qs';

function myEntryList(pageNo, status, start, end) {
    return axios.get("/raffle/getRaffleDetailList", { params: { pageNo: pageNo, status: status, start: start, end: end } })
}

function myWinnerList(pageNo, start, end) {
    return axios.get("/raffle/getWinnerDetailList", { params: { pageNo: pageNo, start: start, end: end } });
}

// 첨부 다운로드
//썸네일 이미지
function raffleThumbnailAttachDownload(rno) {
    return axios.get("/raffle/raffleThumbnailAttach/" + rno, { responseType: "blob" });
}
//경품 이미지
function raffleGiftAttachDownload(rno) {
    return axios.get("/raffle/raffleGiftAttach/" + rno, { responseType: "blob" });
}
//디테일 이미지
function raffleDetailAttachDownload(rno) {
    return axios.get("/raffle/raffleDetailAttach/" + rno, { responseType: "blob" });
}

function getAdminRaffleList(pageNo, word) {
    return axios.get("/raffle/getAdminRaffleList", { params: { pageNo: pageNo, word: word } });
}

function createRaffle(formData) {
    return axios.post("/raffle/createRaffle", formData);
}

function updateRaffle(formData) {
    return axios.put("/raffle/updateRaffle", formData);
}

function getRaffle(rno) {
    return axios.get("/raffle/readRaffle/" + rno);
}

function getRaffleList(category, sortType) {
    return axios.get("/raffle/getRaffleList", { params: { category: category, sortType: sortType } });
}

function searchRaffleList(word) {
    return axios.get("/raffle/searchRaffleList/" + word);
}

function apply(rno) {
    return axios.post("/raffle/createRaffleDetail/" + rno);
}

function updateRdtBerrySpend(rno, rdtBerrySpend) {
    return axios.put("/raffle/updateRdtBerrySpend", qs.stringify({ rno: rno, rdtBerrySpend: rdtBerrySpend }));
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
    return axios.post("/raffle/createWinner", qs.stringify({ rno }));
}
function getAdminDashboard() {
    return axios.get("/raffle/getAdminDashboard");
}

function getNewReleaseRaffles() {
    return axios.get("/raffle/getNewReleaseRaffles");
}

function getCutOffSoonRaffles() {
    return axios.get("/raffle/getCutOffSoonRaffles");
}

function getMonitorMemberList(rno, pageNo) {
    return axios.get("/raffle/getMemberMonitor", { params: { rno: rno, pageNo: pageNo } })
}

function getMonitorWinnerList(rno, pageNo) {
    return axios.get("/raffle/readWinnerDetail", { params: { rno: rno, pageNo: pageNo } })
}

function getRaffleMonitor(rno, pageNo) {
    return axios.get("/raffle/getRaffleMonitor", { params: { rno: rno, pageNo: pageNo } })
}

export default {
    myEntryList,
    myWinnerList,
    raffleThumbnailAttachDownload,
    raffleGiftAttachDownload,
    raffleDetailAttachDownload,
    getAdminRaffleList,
    createRaffle,
    updateRaffle,
    getRaffle,
    getRaffleList,
    apply,
    updateRdtMissionCleared,
    getRaffleDetail,
    getAdminRaffleDetailList,
    searchRaffleList,
    updateRdtBerrySpend,
    winnerCreate,
    getAdminDashboard,
    getNewReleaseRaffles,
    getCutOffSoonRaffles,
    getRaffleMonitor,
    getMonitorMemberList,
    getMonitorWinnerList
}