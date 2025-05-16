/*
let a = 0;
for ( a ; a < 3 ; a++) {
  alert( 'Hello, world!' );
}
  */

// 변수 a에 0을 넣고 for 반복문으로 변수 a가 ; a가 3보다 작을때까지 반복하면서 ; 한번 반복될 때 마다 a에 1을 더함


/*
let a = 0;
for ( a ; a <= 3 ; a++ ) {
  if(a===0)
    alert('헬로');
  else if(a===1)
    alert('월드');
  else
    alert('자바스크립트');
}
*/
// 포 이프문을 사용해서 조건달기

/*
let a = 0;
let b = 1;
let c = 0; //둘의 합친 값을 저장할 변수

for ( ;  ; ) {
  c = a+b;
  alert(a);
  a = b; //최초값에서 더해진 값을 넣고
  b = c; //더해진 값을 그 다음 더할 값에 넣는다
// a(0) + b(1)  -> a(1) + b(1) -> a(1) + b(2) -> a(2) + b(3)... 이런식
//     c(1)             c(2)          c(3)           c(5)
  if (a>1000)
    break;
}
*/

//코딩테스트 자바스크립트 난이도 0
//1. 문자열 출력하기
/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let str = '';

rl.on('line', function (line) {
    str = line;
    console.log(str);
    rl.close();
});
*/

//2. a와 b 출력하기
/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(" ");
}).on('close', function () {
    console.log('a =', (input[0]));
    console.log('b =', (input[1]));
});
*/


//문자열 반복해서 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    console.log(str.repeat(n)); 
    /*문자열과 숫자 곱셈 불가 (str -> 문자열 , n -> 숫자) 
    repeat(n)-> str(문자열)을 (n)번 곱해서 출력*/
    
    /*
    이게 내가 첨 한거
    for(a=0;a<n;a++) {
        console.log(str);
    }
    */

});