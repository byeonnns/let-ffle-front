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

// 비밀번호 찾기
function findPassword(mphone, mid) {
    return axios.post("/member/findPassword/" + mphone + "/" + mid );
}

function resetPassword(mid, mpassword) {
    return axios.put("/member/resetMpassword/" + mid + "/" + mpassword);
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

function deleteLikeList(rno) {
    return axios.delete("/member/deleteLikeList", { params: { rno:rno } });
}

function updateWinner(data) {
    return axios.put("/member/updateWinner", data);
}

function myAddress() {
    return axios.get("/member/getMyAddress");
}

function memberList(pageNo) {
    return axios.get("/member/getAdminMemberList", { params: { pageNo:pageNo }})
}

function winnerList(pageNo) {
    return axios.get("/member/getAdminWinnerList", { params: { pageNo:pageNo }})
}

function myInquirycreate(inquiry, mid) {
    return axios.post("/member/mypage/createInquiry", inquiry, mid);
}

function getLikeStatus(rno) {
    return axios.get("/member/likeStatus/" + rno)
}

function like(rno) {
    return axios.post("/member/addLikeList/" + rno);
}

function cancleLike(rno) {
    return axios.delete("/member/deleteLikeList/" + rno);
}

function updateNickname(mnickname) {
    return axios.put("/member/mypage/updateMnickname/" + mnickname);
}

function getMember() {
    return axios.get("/member/getMember");
}

function passwordMatchCheck(mpassword) {
    return axios.post("/member/mypage/passwordMatchCheck/" + mpassword);
}

function updatePassword(mpassword) {
    return axios.put("/member/mypage/updateMpassword/" + mpassword);
}

function updateMphone(mphone) {
    return axios.put("/member/mypage/updateMphone/" + mphone);
}

function updateMaddress(mzipcode, maddress) {
    return axios.put("/member/mypage/updateMaddress/" + mzipcode + "/" + maddress);
}

function changeMenabled() {
    return axios.put("/member/deleteMember");
}

function myInquiryList(pageNo) {
    return axios.get("/member/getInquiryList", { params: { pageNo:pageNo }})
}

function myInquiryDetail(ino) {
    // Path Variable로 데이터 전송
    return axios.get("/member/inquiryDetail/" + ino);
}

function updateInquiry(formData) {
    return axios.put("/member/updateInquiry" , formData)
}
// 내 댓글 가져오기
function myCommentList(pageNo) {
    return axios.get("member/boardCommentList" , {params:{pageNo:pageNo}})
}

export default {
    join,
    login,
    mypage,
    myBoardList,
    myPageDashboard,
    myBerryHistory,
    myLikeList,
    deleteLikeList,
    idDuplicationCheck,
    nicknameDuplicationCheck,
    phoneDuplicationCheck,
    findId,
    findPassword,
    resetPassword,
    updateWinner,
    myAddress,
    memberList,
    winnerList,
    myInquirycreate,
    getLikeStatus,
    like,
    cancleLike,
    updateNickname,
    getMember,
    passwordMatchCheck,
    updatePassword,
    updateMphone,
    updateMaddress,
    changeMenabled,
    myInquiryList,
    myInquiryDetail,
    updateInquiry,
    myCommentList,
    AdminMemberDetail
}