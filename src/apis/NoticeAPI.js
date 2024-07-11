// Notice 컨트롤러에 요청을 보낼 때 사용하는 메소드들이 들어있을 파일
import axios from "axios";

function createNotice(formData) {
    return axios.post("/notice/createNotice", formData);
}

function noticeList(pageNo, mainCategory, subCategory) {
    return axios.get("/notice/getNoticeList", { params: { pageNo:pageNo, mainCategory: mainCategory , subCategory: subCategory }})
}

function noticeDetail(nno) {
    return axios.get("/notice/readNotice/" + nno);
}

function deleteNotice(nno) {
    return axios.delete("/notice/deleteNotice/" + nno);
}

export default {
    createNotice,
    noticeList,
    noticeDetail,
    deleteNotice
}