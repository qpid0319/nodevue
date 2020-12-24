const fs = require('fs');
const util = require("util");  // util 의  로그를 찍을 경우 시간이 찍힘

console.log(__dirname);
util.log("aaaaaaaaaaaa")

// Async 모드.
fs.readFile(__dirname + '/test.json', 'utf-8', (err, data) => {
    if (err) return console.error(err);

    console.log("data>>", data);
});

console.log("---------------------async 확인 -");

const msgfile = __dirname + '/message.txt';
// fs.writeFileSync(msgfile, 'Hello Node.js 학르..', (err)=> {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });
fs.writeFileSync(msgfile, 'Hello node.js ㅎㅎㅎㅎ');


// Sync 모드.
let data2 = fs.readFileSync(msgfile, 'utf-8');
console.log("data2>>", data2);

console.log("------------------- sync 확인 -");