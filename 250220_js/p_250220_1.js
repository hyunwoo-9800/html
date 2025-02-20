let input = prompt("달러를 입력하세요.");

let dolor = Number(input);

let won = dolor * 1437;

// 천 단위로 ',' 찍는 함수
won = won.toLocaleString('ko-KR');

alert(`${ dolor }달러는 ${won} 원 입니다.`);