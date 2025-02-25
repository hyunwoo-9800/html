// 출력 값을 저장할 변수
var totalNum = 0;

// 카운트 변수
var cnt = 0;

console.log("예상번호는?");

// 6번 반복
for (cnt = 1; cnt <= 6; cnt++) {

    // 45까지의 숫자 랜덤 발생
    totalNum = Math.floor(Math.random() * 45) + 1;

    // 출력
    console.log(cnt + "번째 : " + totalNum);

}