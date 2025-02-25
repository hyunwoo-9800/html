// Date 연습

// 현재 날짜와 시간 정보
const curDate = new Date();
console.log("현재 시각은? " + curDate);
console.log("\n");

// 현재 날짜와 시간 정보
const newDate = new Date(2025, 11, 25, 18, 30, 50);

const dateFormat =
    newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" +
    newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();

console.log("현재 시각은? " + dateFormat);
console.log("\n");

// 날짜 차이 구하기
const date1 = new Date("2025-02-01");
const date2 = new Date("2025-02-25");
const dateDiff = date2.getTime(); - date1.getTime();
console.log("dateDiff = " + dateDiff);
console.log("\n");

const interval = dateDiff / (24 * 60 * 60 *1000);
console.log("두 날짜의 차이는 = " + interval + "일 입니다.");
console.log("\n");
