// 반복문 연습

// while 문
let num = 1;

console.log("while문 테스트");
while (num <= 10) {

  console.log("num = " + num);
  num++

} // while 종료


console.log("\n");
console.log("do while문 테스트");

// do while 문
let check = false;

do {

  console.log("======================");
  check = false;

} while (false); // do while 종료

console.log("\n");
console.log("for문 테스트");

// for 문

// for 문 밖에서 증가된 값을 사용하려면 밖에 변수를 선언하면 됨
let i = 0;


for (i = 0; i <= 10; i++) {

  console.log(i);

} // for 종료

console.log("\n");
console.log("for문으로 구구단 출력 \n");

// 중첩된 for 문
let gugu = 0;
let col = 0;

for (gugu = 2; gugu <= 9; gugu++) {

  // 단수 출력용
  console.log(`${gugu}단`);

  for (col = 1; col <= 9; col++) {

    console.log(`${gugu} * ${col} = ${gugu * col}`);

  } // 내부 for 종료

  // 단별로 구분짓기 위해
  console.log("====================== \n");

} // 전체 for 종료

console.log("for 문으로 배열 값 꺼내기");

// for 문에서 배열 꺼내기
let fruit = ["apple", "banana", "cherry", "dangam", "mango", "strawberry", "melon", "orange"];
let fruit_cnt = 0;

for (fruit_cnt = 0; fruit_cnt < fruit.length; fruit_cnt++) {

  console.log(`배열의 ${fruit_cnt}번째 값은 ${fruit[fruit_cnt]}`);

} // for 종료

console.log("\n");
console.log("for in 문으로 배열 값 꺼내기");

// for 문 대신 for in으로 출력하기
// ES6만 지원함
for (let idx in fruit) {

  console.log(`배열의 ${idx}번째 값은 ` + fruit[idx]);

} // for in 종료

console.log("\n");

// for in
let person = {

  name: "공백",
  age: 20,
  height: 180,
  weight: 100

};

// attr은 person 배열에 있는 값을 저장할 변수 > 변수명이어서 맘대로 해도 됨
// 한 번에 담는게 아니고 한줄씩 읽어와서 변수에 저장 후 로그를 찍음
console.log("person안에 있는 값은?");

for (let attr in person) {

  console.log(attr + ":" + person[attr]);

} // for in 종료

console.log("\n");
console.log("break문");

// break문
let cnt_break1 = 0;
let cnt_break2 = 0;

for (cnt_break1 = 1; cnt_break1 <= 3; cnt_break1++) {

  console.log("cnt_break1 = " + cnt_break1);

  for (cnt_break2 = 1; cnt_break2 <= 10; cnt_break2++) {

    console.log("    cnt_break2 = " + cnt_break2);

    if (cnt_break2 === 5) {

      // 전체 for를 나가는게 아님
      break;

    } //if 종료

  } // for 종료

  console.log("\n")

} // for 종료

// continue

console.log("\n");
console.log("continue");

let cnt_continue1 = 0;
let cnt_continue2 = 0;

for (cnt_continue1 = 1; cnt_continue1 <= 3; cnt_continue1++) {

  console.log("cnt_continue1 = " + cnt_continue1);

  for (cnt_continue2 = 1; cnt_continue2 <= 8; cnt_continue2++) {

    console.log("    cnt_continue2 = " + cnt_continue2);

    if (cnt_continue2 === 5) {

      console.log("continue 실행 \n");
      
      continue;

    } //if 종료

  } // for 종료

  console.log("\n")

} // for 종료