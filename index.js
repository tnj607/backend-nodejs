// var figlet = require("figlet"); //figlet이라는 모듈을 요구(사용)하여 figlet이라는 이름의 변수에 담아줌 (함수가 됨)

// figlet("Hello World", function (err, data) {
//   if (err) {
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors());

//HTTP 메소드('라우팅', ()=>{})
//요청의 목적, 종류를 알리는 수단
//요청 방식 Get - 주소창에 정보를 다 넘기는 방식
//요청 방식 Post - 주소창X

// 콜백 함수: 다른 코드의 인수로서 넘겨주는 실행 가능한 코드
app.get('/', (req, res) => { //HTTP 메소드 중에 get 메소드로 들어온 것을 받겠다 (listen을 하고 있는데 get 방식으로 들어온 거는 이리로 와라) //app.get을 먼저 실행한 수 콜백 함수 실행
    res.send('Hello World!')
})

app.get('/dog', (req, res) => {
    res.send('<h1>멍멍</h1>')
})

app.get('/cat', (req, res) => {
    res.send('야옹')
})

app.get('/user/:id', (req, res) => { //:params
    // const q = req.params
    // console.log(q);
    // console.log(q.id);


    // const q = req.query //http://localhost:3000/user/asdf?q=james&name=oh
    // console.log(q);
    // res.send({'userid': q.q});
})

app.get('/sound/:name', (req, res) => {
    const {name} = req.params
    console.log(name);

    if (name == "dog"){
        res.json({'sound' : '멍멍'})
    }else if (name == "cat"){
        res.json({'sound': '냐옹'})
    }else if (name == "pig"){
        res.json({'sound': '꿀꿀'})
    }else{
        res.json({'sound': '알 수 없음'})
    }
})

app.listen(port, () => { //몇번 포트에 대해서 listen 하고 있음
    console.log(`Example app listening on port ${port}`)
})

