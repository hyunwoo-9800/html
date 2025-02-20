// 자료형 확인 테스트
// 보기 힘들어서 console.log에 문자열 추가

let num = 10;
let strNum = "10";

// 자료형을 확인할 때
console.log("num의 자료형은?", typeof(num));
console.log("strNum 자료형은?", typeof(strNum));

// 개행용
console.log("\n");

// 전치, 후치 연산자 연습
let number = 10;

// 최초 10
console.log("number의 값은?", number);

// number = 10 + 1
// 11
number += 1;
console.log("number의 값은?", number);

//  number = 11 + 1
//  12
number += 1;
console.log("number의 값은?", number);

// number = 12 + 1
// 13
number += 1;

// 최초 10
let number2 = 10;

// 11
console.log("number2 값은?", ++number2);

// 12
console.log("number2 값은?",++number2);

// 13
console.log("number2 값은?",++number2);

// 개행용
console.log("\n");

let r = 10;
console.log(`넓이 = ${3.14 * r * r}`);
console.log(`둘레 = ${3.14 * 2 * r}`);

// 개행용
console.log("\n");

// 숫자 자료형으로 바꾸기
console.log(Number("273"));
console.log(typeof(Number("273")));