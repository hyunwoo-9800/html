// 문자열 출력 연습
let string1 = "Hello, World!";
let string2 = 'Hello, Human';

console.log("string1 : " + string1);
console.log("string2 : " + string2 + "\n");

let string3 = "Harry's Book";
let string4 = '"학이시습지 불역열호"';

console.log(string3);
console.log(string4 + "\n");

// 문자열 연결 연산자
let string5 = '해리 ' + "포터";

console.log(string5+ "\n");

// 이스케이프 문자 사용

// \'는 작은 따옴표
// \"는 큰 따옴표
let string6 = "그녀가 \'친구\'한테 \"조심해!\"라고 말했다.";

console.log(string6+ "\n");

// 줄 바꿈
let string7 = "어진 사람은 산을 좋아하고,\n지혜로운 사람은 물을 좋아한다.";

console.log(string7+ "\n");

// 수평 탭
let string8 = "인자요산\t지자요수";

console.log(string8+ "\n");

// 백틱(`) 사용
let string9 = `그녀가 '친구'한테 "조심해!" 라고 말했다.
어진 사람은 산을 좋아하고,
지혜로운 사람은 물을 좋아한다.
인자요산    지자요수`;

console.log(string9 + "\n");

// 문자열에 변수, 식 넣기
let dan = 4;
let gugu = 9;

let string10 = `${dan} * ${gugu} = ${dan * gugu}입니다.`;

console.log(string10 + "\n");

// console.log("구구단 출력");
// for (dan = 1; dan <= 9; dan++) {
//    for (gugu = 1; gugu <= 9; gugu++)
//       console.log(`${dan} * ${gugu} = ${dan * gugu}` + "\n");
// }