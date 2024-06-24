<template>
    <div>
        <div class="d-flex flex-column">
            <div style="border-bottom: 3px solid #F37551;" class="mb-3">
                <h3>래플 등록</h3>
            </div>
            <form>
                <div class="form_table">
                    <div class="tr">
                        <div class="th">
                            <p class="form_label">래플 제목</p>
                        </div>
                        <div class="td">
                            <input>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="th">
                            <p class="form_label">래플 부제목</p>
                        </div>
                        <div class="td">
                            <input>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="th">
                            <p class="form_label">래플 설명</p>
                        </div>
                        <div class="td">
                            <input>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="th">
                            <p class="form_label">대분류</p>
                        </div>
                        <div class="td">
                            <select class="form-select" style="width: auto;">
                                <option selected>카테고리</option>
                                <option value="1">스포츠</option>
                                <option value="2">예술</option>
                                <option value="3">패션</option>
                            </select>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="th">
                            <p class="form_label">래플 썸네일</p>
                        </div>
                        <div class="td">
                            <div class="item_wrap">
                                <div class="item item_attach">
                                    <div class="img_box">
                                        <div v-if="!head" id="defaultImg">image</div>
                                        <img v-if="head == true" :src="headImgUrl" class="w-100 h-100 object-fit-cover">
                                    </div>

                                            <div class="item_edit">
                                                <p class="tit">래플의 대표 이미지를 등록해주세요.</p>

                                        <div class="attach_wrap">
                                            <div class="attach_top">
                                                <label class="attach_img" for="prdimgrep1attach">사진
                                                    첨부</label>
                                                <input class="input_file" id="prdimgrep1attach" type="file" ref="prdimgrep1attach" @change="imgChange">
                                            </div>
                                            <div class="attached" data-file="prdimgrep1attach" id="inputUploadFile">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="th">
                            <p class="form_label">래플 상세 이미지</p>
                        </div>
                        <div class="td">
                            <div class="item_wrap">
                                <div class="item item_attach">
                                    <div class="img_box d-flex">
                                        <div id="defaultImg">image</div>
                                        <img :src="DetailImgUrl"/>
                                    </div>

                                            <div class="item_edit">
                                                <p class="tit">래플의 상세 이미지를 등록해주세요.</p>

                                        <div class="attach_wrap">
                                            <div class="attach_top">
                                                <label class="attach_img" for="prdimgdetailattach">사진
                                                    첨부</label>
                                                <input class="input_file" id="prdimgdetailattach" type="file" ref="prdimgdetailattach" @change="DetailImageChange">
                                            </div>
                                            <div class="attached" data-file="prdimgdetailattach" id="inputUploadFile">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="th">
                            <p class="form_label">래플 경품 이미지</p>
                        </div>
                        <div class="td">
                            <div class="item_wrap">
                                <div class="item item_attach">
                                    <div class="img_box d-flex">
                                        <div id="defaultImg">image</div>
                                        <img :src="GiftImgUrl"/>
                                    </div>

                                    <div class="item_edit">
                                        <p class="tit">래플의 경품 이미지를 등록해주세요.</p>

                                        <div class="attach_wrap">
                                            <div class="attach_top">
                                                <label class="attach_img" for="prdimggiftattach">사진
                                                    첨부</label>
                                                <input class="input_file" id="prdimggiftattach" name="prdgiftlist[]"
                                                    type="file" multiple @change="GiftImageChange" ref="prdimggiftattach">
                                            </div>
                                            <div class="attached" data-file="prdimgrep1attach" id="inputUploadFile">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="th">
                            <p class="form_label">참여 기간</p>
                        </div>
                        <div class="td">
                            <div class="form_set">
                                <div class="d-flex align-items-center">
                                    <input type="date" id="prdname" name="prdname">
                                    <span style="margin-right: 10px; margin-left: 10px;">~</span>
                                    <input type="date" id="prdname" name="prdname">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tr">
                        <div class="th">
                            <p class="form_label">미션 종류</p>
                        </div>
                        <div class="td">
                            <select style="font-size: 16px;" v-model="rMissionType">
                                <option value="quiz">퀴즈 미션</option>
                                <option value="time">타임 미션</option>
                            </select>
                        </div>
                    </div>
                    <div class="tr" v-if="rMissionType == 'time'">
                        <div class="th">
                            <p class="form_label">핫타임</p>
                        </div>
                        <div class="td">
                            <div class="form_set">

                                <div class="input_clear sm" style="display: flex; align-items: center;">
                                    <input type="datetime-local" id="prdname" name="prdname">
                                    <span style="margin-right: 10px; margin-left: 10px;">~</span>
                                    <input type="datetime-local" id="prdname" name="prdname">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="rMissionType == 'quiz'">
                        <div class="tr">
                            <div class="th">
                                <p class="form_label">퀴즈 내용</p>
                            </div>
                            <div class="td">
                                <textarea
                                    style="width: 100%; font-size: 16px;">류현진 선수가 KBO의 한화 이글스로 돌아왔습니다. 그렇다면 류현진 선수가 메이저 리그에 있을 때, 가장 최근 소속팀은 어디일까요?</textarea>
                            </div>
                        </div>
                        <div class="tr">
                            <div class="th">
                                <p class="form_label">퀴즈 보기 (정답 체크)</p>
                            </div>
                            <div class="td">
                                <input type="radio" id="opt1" name="fav_language" value="HTML">
                                <label for="opt1" class="ms-1 me-3">
                                    <input style="font-size: 14px;">
                                </label>
                                <input type="radio" id="opt2" name="fav_language" value="HTML">
                                <label for="opt2" class="ms-1 me-3">
                                    <input style="font-size: 14px;">
                                </label>
                                <input type="radio" id="opt3" name="fav_language" value="HTML">
                                <label for="opt3" class="ms-1 me-3">
                                    <input style="font-size: 14px;">
                                </label>
                                <input type="radio" id="opt4" name="fav_language" value="HTML">
                                <label for="opt4" class="ms-1 me-3">
                                    <input style="font-size: 14px;">
                                </label>
                            </div>
                        </div>
                        <div class="tr">
                            <div class="th">
                                <p class="form_label">당첨자 수</p>
                            </div>
                            <div class="td">
                                <div class="input_clear sm">
                                    <input type="text" id="prdbrand" name="prdbrand" style="width: 50px;">명
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn_big_wrap btn_size_fix mt60">
                    <RouterLink to="/Admin/RaffleList"><button type="submit"
                            class="btn_submit me-3 rounded-0">등록</button>
                    </RouterLink>
                    <RouterLink to="/Admin"><button type="button" class="white btn_cancle">취소</button>
                    </RouterLink>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let head = false;
const headImgUrl = ref(null);
const prdimgrep1attach = ref(null);

const rMissionType = ref(null);


function imgChange() {
    if(!head) {
        headImgUrl.value = defaultImg;
    } else {
        headImgUrl.value = URL.createObjectURL(prdimgrep1attach.value.files[0]);
    }
   
    
}

const prdimgdetailattach = ref(null);
const DetailImgUrl = ref(null);

function DetailImageChange() {
    DetailImgUrl.value = URL.createObjectURL(prdimgdetailattach.value.files[0]);
}

const prdimggiftattach = ref(null);
const GiftImgUrl = ref(null);

function GiftImageChange() {
    GiftImgUrl.value = URL.createObjectURL(prdimggiftattach.value.files[0]);
}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

.headingArea {
    position: relative;
    padding: 22px 0 0;
    margin: 0 0 20px;
}

.headingArea .title {
    border-bottom: 2px solid #2a3954;
}

#itemTitle {
    font-weight: 700;
    font-size: 1.6rem;
}

/* title */
.tit_area {
    box-sizing: border-box;
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
}

/* table --------------------------------*/
.section_block1,
.section_block2 {
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* margin-top: 2px; */
}

.section_block1 .white {
    vertical-align: middle;
    background: transparent;
    cursor: pointer;
    padding: 0 30px;
    font-size: 14px;
    height: 48px;
    line-height: 48px;
    border-radius: 3px;
    flex-shrink: 0;
    background-color: white;
    border: 1px solid black;
}

.form_table {
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: table;
    width: 100%;
    border-collapse: collapse;
}

.form_table .tr {
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    border-bottom: 1px solid #f2f2f2;
}

.tr .th {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    display: table-cell;
    padding: 20px 0;
    vertical-align: top;
    align-items: center;
    width: 160px;
}

.form_label {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 17px;
    font-weight: 500;
    height: 100%;
    margin-top: 0;
    display: flex;
    align-items: center;
}

.tr .td {
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    display: table-cell;
    padding: 20px 0;
    vertical-align: top;
    flex: 1;
    margin: 0;
    margin-left: 30px;
}

.input_clear {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
    width: 240px;
}

.section_block1 .input_clear input {
    width: 100%;
    height: 48px;
    border: 1px solid black;
    border-radius: 3px;
    transition: all 0.5s;
    vertical-align: middle;
    padding: 0 40px 0 15px;
    background: #fcfcfc;
    -webkit-text-fill-color: #999;
    border-color: #ccc;
    color: #999;
    appearance: none;
}

.section_block2 .input_clear input {
    width: 100%;
    height: 48px;
    border: 1px solid black;
    border-radius: 3px;
    transition: all 0.5s;
    vertical-align: middle;
    padding: 0 40px 0 15px;
    background: #fcfcfc;
    -webkit-text-fill-color: #999;
    border-color: #ccc;
    color: #999;
    appearance: none;
}

.form_set {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* item image -------------------------*/
.item_wrap {
    border-collapse: collapse;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    background: white;
    min-height: 120px;
}

.item_attach {
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
}

.img_box {
    line-height: normal;
    border-collapse: collapse;
    box-sizing: border-box;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    padding-bottom: 0;
    /* border-radius: 50%; */
    background: #F2F2F2;
    color: #b1b1b1;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
}

#defaultImg {
    line-height: normal;
    border-collapse: collapse;
    cursor: pointer;
    color: #bfbdbd;
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.item_edit {
    line-height: normal;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-left: 30px;
}

.tit {
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.sub {
    line-height: normal;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin-left: 2px;
    color: #999999;
}

/* product img */
.attach_wrap {
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.attach_top {
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: flex-start;
    margin-top: 16px;
}

.attach_img {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    vertical-align: middle;
    flex: 0 0 auto;
    height: 30px;
    padding: 3px 10px;
    align-content: center;
    background-color: black;
    border-radius: 2px;
    font-size: 14px;
    cursor: pointer;
    color: white;
}

.guide_txt {
    line-height: normal;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-left: 10px;
    padding-top: 2px;
    font-size: 12px;
    color: #999999;
}

.input_file {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    font-weight: 500;
    width: 100%;
    height: 48px;
    padding: 0 15px;
    font-size: 14px;
    color: #333333;
    border: 1px solid #cccccc;
    background: white;
    border-radius: 3px;
    transition: all 0.5s;
    vertical-align: middle;
    display: none;
}

/* button ---------------------------*/
.btn_big_wrap {
    line-height: normal;
    font-size: 14px;
    font-weight: 200;
    box-sizing: border-box;
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0;
    margin-top: 60px;
}

.btn_cancle {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 500;
    vertical-align: middle;
    background: transparent;
    cursor: pointer;
    font-size: 16px;
    height: 52px;
    line-height: 50px;
    text-align: center;
    border-radius: 3px;
    width: 200px;
    flex: 0 0 200px;
    background-color: white;
    border: 1px solid black;
}

.btn_submit {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    font-weight: 500;
    vertical-align: middle;
    background: transparent;
    cursor: pointer;
    color: white;
    font-size: 16px;
    background-color: #F37551;
    height: 52px;
    line-height: 50px;
    text-align: center;
    border-radius: 3px;
    width: 200px;
    flex: 0 0 200px;
    margin-left: 10px;
}

input {
    border-width: 0;
    /* input 라인 없애기 */
    outline: none;
    border-bottom: 1px solid gray;
}

.td input {
    font-size: 16px;
}
</style>