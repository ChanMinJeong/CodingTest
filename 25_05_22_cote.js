//문자열 붙여서 출력하기

//apple pen, hello world를 입력받았을 때 중간 공백을 없애고 붙여서 출력
let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    
    let joined = (str1 + str2).replace(/\s+/g, '');
    console.log(joined);

    //조인 변수에 문자열 1, 2를 합쳐서 저장한 후에 리플레이스로 모든 공백을 지운 후 해당 변수를 띄워줌
    //솔직히 이해 잘 안됨
});


