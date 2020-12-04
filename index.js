const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');//mongoose 툴 불러오기
const bodyParser = require('body-parser');
const {User} = require("./models/User");
const config = require('./config/key');


//application/x-www-form-urlencoded 파싱해주기 위해 가져옴
app.use(bodyParser.urlencoded({extended: true}));

//application/json 파싱해주기 위해 가져옴
app.use(bodyParser.json());

mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))//잘불러왔으면 잘됐다고 출력
.catch(err => console.log(err));//못 불러오면 err 출력


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요~~sex')
});

app.post('/register', (req, res) => {

    //회원 가입할 때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터베이스에 넣어준다.
    //그러기 위해선 User.js를 가져와야한다.

    const user = new User(req.body);

    user.save((err, userInfo) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).json({
                success: true
            });
        })
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

