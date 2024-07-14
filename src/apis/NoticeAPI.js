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