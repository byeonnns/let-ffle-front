import axios from 'axios';

// 기본 경로 설정
/*
스프링 프레임워크에서 컨트롤러가 리턴하는 jsp 경로 앞에 '/WEB-INF/views/'를 붙이고, 뒤에는 '.jsp'를 붙이는 설정을 했었음 -> View Resolver 설정 파일
백엔드에 요청 경로를 보낼 때 항상 공통으로 붙는 경로를 값으로 넣어주면 우리가 보내는 요청이 간편해진다
우리 프로젝트에서는 모든 요청 경로 앞에 'http://localhost'가 자동으로 앞에 붙는 것
*/
axios.defaults.baseURL = 'http://localhost';

// Access Token을 받고 나서 다음 요청시 전달할 수 있도록 요청 헤더에 추가
// 로그인 성공했을 때 호출됨
function addAuthHeader(accessToken) {
    // common 객체에 동적 속성으로 Authorization 추가
    
    /*
    axios를 이용해서 Authorization 헤더의 값으로 우리가 로그인시켜준 유저의 Access Token을 넣어주는 코드
    */
    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
}

// 공통 요청 헤더에서 Authorization 헤더를 삭제
// 로그아웃시 호출됨
function removeAuthHeader() {
    // common 객체의 속성을 삭제

    /*
    axios를 이용해서 Authorization 헤더의 값을 삭제시켜 버림 -> 로그아웃하면 그 다음부터 로그인 상태로 보지 않게끔 Access Token을 날려버린다는 뜻
    */

    delete axios.defaults.headers.common["Authorization"];
}

// Local Storage에 Access Token을 저장
function saveAccessToken(accessToken) {
    localStorage.setItem("accessToken", accessToken);
    // SessionStoreage.setItem("accessToken", accessToken);
}

// Local Storage에 있는 Access Token을 읽고 공통 헤더에 추가
function readAccessToken() {
    const accessToken = localStorage.getItem("accessToken") || ""; // 앞이 false의 의미를 가지는 값을 가진다면 || 뒤의 값으로 세팅
    return accessToken;
}

export default {
    addAuthHeader,
    removeAuthHeader,
    saveAccessToken,
    readAccessToken
}