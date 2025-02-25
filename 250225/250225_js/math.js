// Math 연습

const num = 10.52;

// 내림
console.log("내림");
console.log(Math.floor(num));
console.log("\n");

// 올림
console.log("올림");
console.log(Math.ceil(num));
console.log("\n");

// 반올림
console.log("반올림");
console.log(Math.round(num));
console.log("\n");

// 랜덤 숫자
const r = Math.random();
console.log("랜덤 숫자");
console.log("r = " + r);
console.log("\n");

//  0 ~ 20 사이의 값
let num1 = Math.random() * 20;
console.log("1 ~ 20사이의 값");
console.log("num1 = " + num1);
console.log("\n");

// 내림
num1 = Math.floor(num1);
console.log("num1의 값 내림");
console.log("num1 = " + num1);
console.log("\n");

// 내림한 값에 1 더하기
num1 += 1;
console.log("num1 더하기 1");
console.log("num1 = " + num1);
console.log("\n");

// 실수 선언
let num2 = 0.999;
console.log("실수 0.999");
console.log("num2 = " + num2);
console.log("\n");

// 실수 * 20
num2 *= 20;
console.log("실수 * 20");
console.log("num2 = " + num2);
console.log("\n");

// 실수 * 20 한 값을 내림
num2 = Math.floor(num2);
console.log("num2의 값 내림");
console.log("num2 = " + num2);
console.log("\n");

// 내림한 값에 1 더하기
num2 += 1;
console.log("num2 더하기 1 ");
console.log("num2 = " + num2);
console.log("\n");

console.log("0에서 20사이의 값 하나를 골라줘 : " + (Math.floor(Math.random() * 20) + 1));