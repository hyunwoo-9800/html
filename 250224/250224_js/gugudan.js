// 3단 출력 함수
function gugudan() {

    let i = 1;

    console.log("3단 출력");

    for (i = 1; i <= 9; i++) {

        console.log("3 * " + i + " = " + (3 * i));

    }

}

// 함수 호출
gugudan();
console.log("\n");


// 식별자가 있는 함수 표현식
const gugu = function gugu() {

    let i = 1;
    let j = 1;

    console.log("식별자가 있는 함수");

    for (i = 1; i <= 3; i++) {

        for (j = 1; j <= 9; j++) {

            console.log(i + " * " + j + " = " + (i * j));

        }

        console.log("\n");

    }
};

// 함수 호출
gugu();
console.log("\n");

// 익명 함수 표현식
const anoymous_gugudan = function () {

    let i = 1;
    let j = 1;

    console.log("익명 함수");

    for (i = 4; i <= 9; i++) {

        for (j = 4; j <= 9; j++) {

            console.log(i + " * " + j + " = " + (i * j));

        }

        console.log("\n");

    }
};

// 함수 호출
anoymous_gugudan();
console.log("\n");

// 화살표 함수
const gugudan_arrow = () => {

    let i = 1;
    let j = 1;

    console.log("화살표 함수");

    for (i = 9; 1 <= i; i--) {

        for (j = 9; 1 <= j; j--) {

            console.log(i + " * " + j + " = " + (i * j));

        }

        console.log("\n");

    }
};

// 함수 호출
gugudan_arrow();
console.log("\n");

// 함수와 매개변수
function gugudan_param(dan) {

    let i = 1;

    console.log("매개변수 활용");
    console.log("dan은? " + dan);
    for (i = 1; i <= 9; i++) {

        console.log(dan + " * " + i + " = " + (dan * i));

    }

}

// 함수 호출
gugudan_param(2);
console.log("======================================");
gugudan_param(9);
console.log("\n");

// 함수와 매개변수
function sum(num1, num2) {

    console.log("합계 구하기");
    console.log(num1 + " + " + num2 + " = " + (num1 + num2));

}

// 함수 호출
sum(10, 20);
sum();
console.log("\n");

// 함수와 매개변수
function sum_nonParam() {

    console.log("매개변수가 없는 함수");
    console.log("파라미터 없습니다. \n");

    // 에러 확인용
    // console.log(num1 + " + " + num2 + " = " + (num1 + num2));

}

// 함수 호출
sum_nonParam();
sum_nonParam(10, 20);

// 함수에 기본값 할당
function sum_default(num1 = 0, num2 = 0) {

    console.log("함수에 기본값 할당");
    console.log(num1 + " + " + num2 + " = " + (num1 + num2) + "\n");

}

// 함수 호출
sum_default();
sum_default(10, 20);

// return 사용
function sum_retrun(num1, num2) {

    let resulut = num1 + num2;

    console.log("return 사용");
    console.log("result = " + resulut + "\n");

    return resulut;

    // 이렇게도 사용가능
    // return num1 + num2;

}

// 함수 호출
sum_retrun();
sum_retrun(10, 20);

const value1 = sum_retrun(99, 1);
console.log("호출 된 value1 = " + value1 + "\n");

// 함수안에 선언한 변수를 밖에서 사용하려 할시 에러
// console.log(resulut);

// return으로 함수종료
function sum_retrunExit(num1, num2) {

    // 매개변수의 타입 확인
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        
        return "매개변수가 숫자가 아닙니다!";

    }

    return num1 + num2;

}

// 함수 호출
let result = sum_retrunExit("a", "b");
console.log(result);