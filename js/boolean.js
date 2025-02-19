// 논리 연산
let boolean1 = true;
let boolean2 = false;

console.log(boolean1);
console.log(boolean2);

let boolean3 = 10 < 20;
let boolean4 = 10 > 20;

console.log(boolean3);
console.log(boolean4 + "\n");

// undefined, null 값 확인
let empty;
console.log(empty);

let empty_null = null;
console.log(empty_null + "\n");

// 객체 리터럴
let studentScore = {
    korean : 80,
    english : 100,
    math : 75,
    computer : 80
};

console.log("컴퓨터 점수는 : " + studentScore.computer);
console.log("영어 점수는 : " + studentScore['english'] + "\n");

let studentScoreArray = [80, 100, 75, 80]; // 국어 , 영어, 수학, 컴퓨터
console.log("영어 점수는 : " + studentScoreArray[2]);