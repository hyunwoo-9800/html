// 예상 : 상수는 연산이 안되서 에러 
const result = 10 + '10';

// 상수 문자열과 자료형의 계산 테스트
const strigTest = "JavaScrpt";
const numTest = 123456 + strigTest;
const boolTest = true + strigTest;
const undefinedTest = undefined + strigTest;
const nullTest = null + strigTest;

// 상수 정수형과 자료형의 계산 테스트
const num_boolTest= 123456 + true;
const num_undefinedTest = 123456 + undefined;
const num_nullTest = 123456 + null;


// 답 : 10뒤에 문자열로 10이 붙음 > 왜?
console.log("result = " + result);

console.log("\n");

// 연산자 중 하나라도 문자열이면 문자열으로 자동으로 형변환이 된다.
console.log("문자열과 다른 자료형의 계산");
console.log("문자열 : " + strigTest);
console.log("문자열 + 정수형 : " + numTest);
console.log("문자열 + 논리형 : " + boolTest);
console.log("문자열 + undefined : " + undefinedTest);

console.log("\n");

console.log("정수형과 다른 자료형의 계산");

// num_boolTest 값을 보면 문자열이 아닌 true(= 1)값으로
// 123456 + 1으로 계산이 진행되는 것을 확인할 수 있다.
console.log("정수형 + 논리형 : " + num_boolTest);

// num_undefinedTest는 숫자와 지정되지 않은 값을 계산 할 수 없어서 NaN 에러가 발생하는 것 같다.
console.log("정수형 + undefined : " + num_undefinedTest);

// num_nullTest의 경우에는 null이라는 공간은 할당되 있으나 값이 없으므로 123456이 출력 되는것 같다.
console.log("정수형 + null : " + num_nullTest);

console.log("\n");

// 예상 : 30
let q1 = 10 + 10 * 2;

// 답 : 30
console.log("q1 = " + q1);

console.log("\n");

// 예상 : 문자열이 긴 경우에는문자열을나눈 뒤다시 합칩니다.
let string1 = '문자열이 긴 경우에는' + '문자열을' + '나눈 뒤' + '다시 합칩니다.'

// 답 : 문자열이 긴 경우에는문자열을나눈 뒤다시 합칩니다.
console.log("string1 = " + string1);