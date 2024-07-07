// Notice 컨트롤러에 요청을 보낼 때 사용하는 메소드들이 들어있을 파일
import axios from "axios";

function createNotice(formData) {
    return axios.post("/notice/createNotice", formData);
}

function noticeList(pageNo, subcategory) {
    return axios.get("/notice/getNoticeList", { params: { pageNo:pageNo, subcategory:subcategory }})
}

function noticeDetail(nno) {
    return axios.get("/notice/readNotice/" + nno);
}

export default {
    createNotice,
    noticeList,
    noticeDetail
}