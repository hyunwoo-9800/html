// 배열의 최대값을 리턴하는 함수
function getArrayMaxNumber(arr) {

    // 가장 큰 수를 저장할 변수
    var result = 0;

    // 반복 시킬 카운트 변수
    var cnt = 0;

    // 매개변수로 받은 배열 길이 만큼 반복
    for (cnt = 0; cnt < arr.length; cnt++) {

        // 배열에서 하나씩 꺼내서 값 비교
        if (result < arr[cnt]) {

            result = arr[cnt];

        } // if 종료

    } // for 종료

    // 최대값 리턴
    return result;

} // 함수 종료

// 배열의 최소값을 리턴하는 함수
function getArrayMinNumber(arr) {

    // 배열의 첫번째 값을 저장
    var result = arr[0];

    // 반복 시킬 카운트 변수
    var cnt = 0;

    // 매개변수로 받은 배열 길이 만큼 반복
    for (cnt = 0; cnt < arr.length; cnt++) {

        // 배열에서 하나씩 꺼내서 값 비교
        if (arr[cnt] < result) {

            result = arr[cnt];

        } // if 종료

    } // for 종료

    // 최소값 리턴
    return result;

} // 함수 종료

// 함수 호출
const MAX = getArrayMaxNumber([10, 50, 30]);
const MIN = getArrayMinNumber([10, 50, 30]);


// 최대값 출력
console.log("배열의 최대값은 " + MAX + "입니다.");

console.log("\n");

// 최소값 출력
console.log("배열의 최소값은 " + MIN + "입니다.");
