// Board 컨트롤러에 요청을 보낼 때 사용하는 메소드들이 들어있을 파일
import axios from "axios";
import qs from 'qs';

// join
function myBoardList(mid) {
    return axios.get("/member/myBoardList", mid);
}

// boardList
function getBoardList(pageNo) {
    return axios.get("/community/getBoardList", { params: { pageNo: pageNo } });
}

function boardDetail(bno) {
    // Path Variable로 데이터 전송
    return axios.get("/community/boardDetail/" + bno);
}

// 첨부 다운로드
function boardAttachDownload(bno) {
    // Path Variable로 데이터 전송, JSON 타입을 받는 것이 아니므로 타입을 추가로 지정
    return axios.get("/community/battach/" + bno, { responseType: "blob" });
}

// 게시물 수정
function updateBoard(formData) {
    // multipart-formData로 데이터 전송
    return axios.put("/community/updateBoard", formData);
}

function writeBoard(formData) {
    return axios.post("/community/createBoard", formData);
}

function deleteBoard(bno) {
    return axios.put("/community/deleteBoard/" + bno);
}
//댓글 리스트
function getCommentList(bno){
    return axios.get("/community/getCommentList/" + bno);
}

function deleteComment(cno) {
    return axios.put("/community/deleteComment/" + cno);
}

export default {
    myBoardList,
    getBoardList,
    boardDetail,
    boardAttachDownload,
    updateBoard,
    writeBoard,
    deleteBoard,
    getCommentList,
    deleteComment
}