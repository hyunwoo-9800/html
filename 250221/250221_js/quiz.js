// 1부터 100까지의 합 구하기

// 카운트 변수
var i = 0;

// 합계용 변수
var sum = 0;

for (i = 0; i <= 100; i++) {

    // 값을 더함
    sum += i;

    // for 내부에서 제대로 작동하는지 확인하기 위해 찍어봄
    // console.log("i = " + i + "\n\n" +
    //             "sum = " + sum + "," +  " i = " + i + "\n\n" +
    //             "sum + i = " + (sum + i));
    
    // console.log("\n");
    
    // 백틱을 쓰는 편이 간단함
    // console.log(`i = ${i} \n\nsum = ${sum}, i = ${i} \n\nsum + i = ${sum + i}`);

    // console.log("\n");
    
      

} // for 종료

// 출력
console.log("1부터 100까지의 합은 " + sum + "입니다.");

console.log("\n백틱사용 ↓\n");

console.log(`1부터 100까지의 합은 ${sum} 입니다.`);
