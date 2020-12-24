// express 라이브리리 사용
const express = require('express');

// 서버 생성.
const app = express(), 
      testJson = require('./test/test.json');

// 서버 환경설정.
app.use(express.static('public'));
app.set('views', __dirname + '/views');
// 템플릿 엔진 ejs 사용
app.set('view engine', 'ejs');
// ejs를 html 형식으로 사용.
app.engine('html', require('ejs').renderFile);

// / 라우터 생성 
app.get('/', (req, res) => {
    res.render('index', {name : 'name data.'});
});

// test 라우터 생성
app.get('/test/:email', (req, res) => {
    testJson.email = req.params.email; // :email parameter 값을 가져옴 // cf. req.body req.query

    // request param
    testJson.aa = req.query.aa;
    res.json(testJson);
});

// 리스너 구동 
const server = app.listen(3030, function(){
    console.log("Express Server Start on port 3030");
});

