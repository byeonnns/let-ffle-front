// Member 컨트롤러에 요청을 보낼 때 사용하는 메소드들이 들어있을 파일
import axios from "axios";
import qs from 'qs';

// join
function join(member) {
    return axios.post("/member/join", member);
}

function idDuplicationCheck(mid) {
    return axios.post("/member/idDuplicationCheck/" + mid);
}

function nicknameDuplicationCheck(mnickname) {
    return axios.post("/member/nicknameDuplicationCheck/" + mnickname);
}

function phoneDuplicationCheck(mphone) {
    return axios.post("/member/phoneDuplicationCheck/" + mphone);
}

// login
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
    phoneDuplicationCheck
}