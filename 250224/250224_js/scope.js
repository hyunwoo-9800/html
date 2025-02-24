// 전역변수 let a의 예시
let a = 10;

console.log("a = " + a);

function sum() {
    console.log("sum a = " + a);
}

// 지역변수 확인
// a_local은 함수안에 선언된 지역변수
// 따라서 함수 밖에서 사용이 불가능
function sum_local() {

    let a_local = 100;
    console.log("only sum a_local = " + a_local);
}

// console.log("a_local = " + a_local);

// 전역변수 a, b는 사용가능
let b = 10;
console.log("a = " + a + ", " + "b = " + b);
console.log("b = " + b);

// 개행용
console.log("\n");


// 지역변수 확인용
// sum_local()함수의 변수는 함수 안에서 선언되어서 밖에서는 출력이 불가능한 것을 확인
console.log("sum함수의 값은?", sum());
console.log("sum_local함수의 값은?", sum_local());

// 개행용
console.log("\n");


// 블록 스코프
let block_a = 10;
var block_aVar = 10;
{
    let block_b = 20;
    var block_bVar = 20;

    // 전역변수 10 출력
    console.log("block_a = " + block_a);

    // 지역변수 20 출력
    console.log("block_b = " + block_b);

    // 개행용
    console.log("\n");

    // 전역변수 10 출력
    console.log("block_aVar = " + block_aVar);

    // 지역변수 20 출력
    console.log("block_bVar = " + block_bVar);

}

// 개행용
console.log("\n");

// 지역 변수여서 밖에서도 출력이 됨
console.log("block_a = " + block_a);

// 전역변수 let block_b는 블록 밖에서 출력x > 블록 안에서만 사용 가능
//console.log("block_b = " + block_b);

console.log("block_aVar = " + block_aVar);

// 지역변수 var block_bVar는 블록 스코프 밖에서 사용 가능
console.log("block_bVar = " + block_bVar);