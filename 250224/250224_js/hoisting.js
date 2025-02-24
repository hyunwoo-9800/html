// 변수 호이스팅 

// var 변수는 에러가 안남, 4 ~ 6행과 9 ~ 11행은 같은 의미
console.log(num_var);
var num_var = 10;
console.log(num_var);


var num_var;
console.log(num_var);
num_var = 10;

// let변수는 호이스팅이 되지 않음
// console.log(num_let);
// let num_let = 10;


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