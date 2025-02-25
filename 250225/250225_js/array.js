// Array 연습

const fruit = ["apple", "banana", "cherry", "mango", "orange"];
console.log("배열의 길이 = " + fruit.length);
console.log("\n");

let fruit_cnt = 0;

console.log("배열의 내용");
for (let fruit_cnt = 0; fruit_cnt < fruit.length; fruit_cnt++) {

    console.log("furit[" + fruit_cnt + "]" + " = " + fruit[fruit_cnt]);

}

console.log("\n");

// 배열의 맨 뒤에 "peach" 추가
console.log("peach 추가");
fruit.push("peach");
console.log("fruit = " + fruit);
console.log("\n");

// 배열의 맨 뒤에 "strawberry" 추가
console.log("strawberry 추가");
fruit.push("strawberry");
console.log("fruit = " + fruit);
console.log("\n");

// 배열의 맨 뒤에서 데이터 추출
console.log("데이터 추출");
fruit.pop();
console.log("fruit = " + fruit);
console.log("\n");

// 배열의 맨 앞에 "blueberry"추가
console.log("blueberry 추가");
fruit.unshift("blueberry");
console.log("fruit = " + fruit);
console.log("\n");

// 배열의 맨 앞에 "lemon"추가
console.log("lemon 추가");
fruit.unshift("lemon");
console.log("fruit = " + fruit);
console.log("\n");

// 배열의 맨 앞에서 데이터 추출
console.log("데이터 추출");
fruit.shift();
console.log("fruit = " + fruit);
console.log("\n");

// 배열의 요소를 하나씩 출력
console.log("배열의 데이터를 하나씩 출력");
fruit.forEach(function (f) {
    
    console.log("value = " + f);
    
});

console.log("\n");

// 배열의 인덱스와 값을 출력
console.log("배열의 데이터를 하나씩 출력");
fruit.forEach(function (f, idx) {
    console.log("idx = " + idx + ", value = " + f);
    
});

console.log("\n");

// 최종 배열의 상태
console.log("최종적인 배열의 내용");
for (fruit_cnt = 0; fruit_cnt < fruit.length; fruit_cnt++) {

    console.log("furit[" + fruit_cnt + "]" + " = "+ fruit[fruit_cnt]);
    
}
