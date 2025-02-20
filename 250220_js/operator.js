// 이항 연산자
let sum = 10 + 20 * 3;
console.log(sum);

sum = (10 + 20) * 3;
console.log(sum);

console.log("\n");

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// 증감식

console.log("증가");

let increment = 10;

// 최초 10
increment++;

// 11
console.log(increment);

// 11
console.log(increment++);

// 12
console.log(increment);

// 13
console.log(++increment);

// 13
console.log(increment);

console.log("\n");

console.log("감소");

let decrement = 10;

// 최초 10
decrement--;

// 9
console.log(decrement);

// 9
console.log(decrement--);

// 8
console.log(decrement);

// 7
console.log(--decrement);

// 7
console.log(decrement);

console.log("\n");

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// 대입 연산자

console.log("대입 연산자");

let x = 10;

// x = 15
x += 5;
console.log(x);

// x = 10
x -= 5;
console.log(x);

// x = 50
x *= 5;
console.log(x);

// x = 25
x /= 2;
console.log(x);

// x = 1
x %= 3;
console.log(x);

// x = 1
x **= 2;
console.log(x);

console.log("\n");

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// 비교 연산자
// === 연산자는 값과 자료형이 같으면 true
// !== 연산자는 자료형 변환없이 두 피연산자가 같은지 판별 > 같지 않거나 같은 자료형이 아닐 때 true

// true
console.log("10 == 10", 10 == 10);

// true
console.log("10 == '10'", 10 == '10');

// true
console.log("10 === 10", 10 === 10);

// false
console.log("10 === '10'", 10 === '10');

// false
console.log("10 != '10'", 10 != '10');

// false
console.log("10 != 10", 10 != 10);

// false
console.log("10 !== 10", 10 !== 10);

// true
console.log("10 !== '10'", 10 !== '10');

// true
console.log("10 != 9", 10 != 9);

// true
console.log("10 != '9'", 10 != '9');

// true
console.log("10 !== 9", 10 !== 9);

// true
console.log("10 !== '9'", 10 !== '9');

// false
console.log("10 < 10", 10 < 10);

// true
console.log("10 <= 10", 10 <= 10);

// false
console.log("10 > 10", 10 > 10);

// true
console.log("10 >= 10", 10 >= 10);

console.log("\n");

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// 삼항 연산자

let score = 90;
let grade = score >= 90 ? "A+" : "B";
console.log("학점은 : " + grade);

let age = 10;
let adultStatus = age > 19 ? true : false;
console.log(adultStatus);

console.log("\n");

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// 형변환

let result = 10 + "10";

// 1010 > 문자열
console.log("result : " + result);

let num = 10;
let strNum = "10";
result = num + strNum;

// 1010 > 문자열
console.log("num + strNum : " + result);

console.log("\n");

// equals
(num == strNum) ? console.log("num == strNum : ", `equals`) : 
console.log("num == strNum : ", `not equals`);

// not equals > 값은 같지만 자료형이 달라서 false
(num === strNum) ? console.log("num === strNum : ", `equals`) : 
console.log("num === strNum : ", `not equals`);

// equals(문자열로 비교)
(String(num) == strNum) ? console.log("num == strNum : ", `equals`) : 
console.log("num == strNum : ", `not equals`);

// equals
(String(num) === strNum) ? console.log("num === strNum : ", `equals`) : 
console.log("num === strNum : ", `not equals`);

console.log("\n");