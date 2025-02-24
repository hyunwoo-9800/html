let a = 10;

console.log("a = " + a);

function sum() {
    console.log("sum a = " + a);
}

// 지역변수 확인
// function sum_local() {

//     let a_local = 100;
//     console.log("only sum a_local = " + a_local);
// }

let b = 10;
//console.log("a = " + a + ", " + "b = " + b);
console.log("b = " + b);

// 지역변수 확인용
// console.log("a_local = " + a_local);

sum();
// sum_local();


// 블록 스코프
let block_a = 10;
var block_aVar = 10;
{
    let block_b = 20;
    var block_bVar = 20;

    console.log("block_a = " + block_a);
    console.log("block_b = " + block_b);
    
    console.log("block_aVar = " + block_aVar);
    console.log("block_bVar = " + block_bVar);
    
}

console.log("block_a = " + block_a);

// 블록 밖에서 출력x
//console.log("block_b = " + block_b);

console.log("block_aVar = " + block_aVar);

// var변수는 블록 스코프 밖에서 사용 가능
console.log("block_bVar = " + block_bVar);