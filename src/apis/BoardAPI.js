// Board 컨트롤러에 요청을 보낼 때 사용하는 메소드들이 들어있을 파일
import axios from "axios";
import qs from 'qs';

// join
function myBoardList(mid) {
    return axios.get("/member/myBoardList" , mid);
}

export default {
    myBoardList
}