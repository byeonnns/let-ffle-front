import axios from "axios";
import qs from 'qs';

// 회원가입
function join(member) {
    return axios.post("/member/join", member);
}

// 아이디 중복 검사
function idDuplicationCheck(mid) {
    return axios.post("/member/idDuplicationCheck/" + mid);
}

// 닉네임 중복 검사
function nicknameDuplicationCheck(mnickname) {
    return axios.post("/member/nicknameDuplicationCheck/" + mnickname);
}

// 휴대폰 중복 검사
function phoneDuplicationCheck(mphone) {
    return axios.post("/member/phoneDuplicationCheck/" + mphone);
}

// 아이디 찾기
function findId(mphone) {
    return axios.post("/member/findId/" + mphone);
}

// 로그인
function login(member) {
    return axios.post("/member/login", qs.stringify(member));
}

// mypage main
function mypage() {
    return axios.get("/member/mypage/main")
}

function inquiryReply() {
    return axios.put("/member/inquiryReply")
}

function myBoardList(pageNo) {
    return axios.get("/member/myBoardList", { params: { pageNo:pageNo } });
}

function myPageDashboard(){
    return axios.get("/member/getMyPageDashboard");
}

function myBerryHistory(){
    return axios.get("/member/getBerryHistoryList");
}

function myLikeList(pageNo){
    return axios.get("/member/likeList", { params: { pageNo:pageNo } });
}

export default {
    join,
    login,
    mypage,
    myBoardList,
    idDuplicationCheck,
    nicknameDuplicationCheck,
    phoneDuplicationCheck,
    findId
}