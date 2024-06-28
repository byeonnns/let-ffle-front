// Member 컨트롤러에 요청을 보낼 때 사용하는 메소드들이 들어있을 파일
import axios from "axios";
import qs from 'qs';

// join
function join(member) {
    return axios.post("/member/join" , member);
}

// login
function login(member) {
    return axios.post("/member/login", qs.stringify(member));
}

function inquiryReply() {
    return axios.put("/member/inquiryReply",)
}
export default {
    join,
    login
}