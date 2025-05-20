
// 대 소문자가 혼합된 문자열을 바꿔서 출력하기
let input = [];
let a = ""; //문자열을 받을 변수 선언

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0]; //str에 입력받은 문자열 넣기
    
    for(let i = 0 ; i < str.length ; i++){  // 변수 i가 입력받은 str의 문자열 길이만큼 반복
        let b = str[i]  //변수 b에 str 문자열 하나하나 대입
            if(b === b.toUpperCase()) {  //변수 b가 대문자일 경우 소문자를 변수 a에 넣음
                a += b.toLowerCase();
            }
            else {  
                a += b.toUpperCase();
            }
    }
    console.log(a);
});



//특수문자 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    console.log("!@#$%^&*(\\'\"<>?:;");
    //(" !@#$%^&*( \\(역슬레시 출력 이스케이프) \' \" (따옴표 출력 이스케이프) <>?:;")
});


//덧셈 식 출력하기
let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    a = input[0]; //입력값 4, 5를 변수 a, b에 각각 넣기
    b = input[1];
    c = Number(input[0]) + Number(input[1]) //변수 c에 입력값을 숫자로 더해서 넣기
    console.log(a+" + "+ b +" = " +c);  //변수 a + "+"(플러스기호 문자열로 표시) b 
});