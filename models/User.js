//model과 schema
//회원가입할 때 이름, 주소, 이메일 등 입력하죠? 그런 것을 할 때 
//user database에 넣는다
//그때 그 user와 관련된 데이터들을 스키마라는 양식으로 모델을 만들어 써서 database에 넣음

//model이란 schema를 감싸주는 역할
//schema란 만약 '상품'에 대한 글을 작성할 때 그 글의 writer, title 등의 타입을 지정해주는 것

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,//trim이란 만약 lee swon33@naver.com 이렇게 띄어쓰기가 되어있으면 없어주는 역할
        unique: 1 //똑같은 이름 쓰지못하게 하나만 있게 설정
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number, //1이면 관리자고 0이면 이용자고 이런식으로 쓸라고 role을 number로 설정함
        default: 0
    },
    image: String,
    token: {//유효성
        type: String
    },
    tokenExp: {//유효한 기간 = token이 지속되는 기간
        type: Number
    }
})
const User = mongoose.model('User', userSchema); // 이 스키마를 모델로 감싸줌('모델이름', 스키마이름)

module.exports = {User}; // 이 모델을 다른 곳에서 쓸 수 있게 export해줌