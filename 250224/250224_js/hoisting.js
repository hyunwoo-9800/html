// 변수 호이스팅 

// console.log(num);
// var num = 10;
// console.log(num);


// var num;
// console.log(num);
// num = 10;

// console.log(num);
// let num = 10;

// 함수 호이스팅(함수 선언문으로 만든 함수 일 경우)
printHello();
function printHello() {

    console.log("Hello, World!");


}

function printJava() {

    console.log("Hello, JavaScript!");


}
printJava();

console.log("\n");


// 함수 표현식은 호이스팅이 안됨
// printC();
// var printC = function printC() {

//     console.log("Hello, C!");

// }

// 화살표 함수도 호이스팅이 안됨
// printAssembly();
// var printAssembly = () => {

//     console.log("Hello, Assembly!");

// }

// 즉시 실행 함수
(function () {

    console.log("initialized");

})();

(function sum(num1, num2) {

    console.log(num1 + " + " + num2 + " = " + (num1 + num2));

})(10, 20);