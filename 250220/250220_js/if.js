// if문
let num_if = 23;

if (num_if % 2 === 0) {

    console.log(`${num_if}은 짝수입니다.`);

} else {

    console.log(`${num_if}은 홀수입니다.`);

}


console.log("\n");

// if - else - if문
let num_else = 0;

if (num_else > 0 ) {

    console.log(`${num_else}은 양수입니다.`);

} else if (num_else < 0) {

    console.log(`${num_else}은 음수입니다.`);

} else {

    console.log(`${num_else}은 0입니다.`);

}

// 중첩하기
let age = 2;

if (age > 19) {

    console.log("성인 입니다.");

} else {

    if (age > 13) {

        console.log("청소년 입니다.");

    } else if (age > 7) {

        console.log("어린이 입니다.");

    } else {

        console.log("유아 입니다.");

    }
}