// String 연습

// 문자열의 길이
const pw = "124";

console.log("문자열의 길이 확인");
console.log("pw 길이는? " + pw.length);

if (pw.length < 4) {

    console.log("비밀번호는 최소 4자리 이상 입력해 주세요.");
    console.log("\n");

}

// 문자열의 포함여부(includes)
// 13 ~ 20행과 22 ~ 27행은 같은 의미
console.log("문자열의 포함 여부 확인");

const email_includes = "test!naver.com";

console.log("EMAIL안에 '@'를 포함하고 있니? " + email_includes.includes("@"));

if (email_includes.includes("@") === false) {

    console.log("올바른 이메일 형식이 아닙니다.");
    console.log("\n");

}

if (!email_includes.includes("@")) {

    console.log("올바른 이메일 형식이 아닙니다.");
    console.log("\n");

}

// 문자열의 포함여부(indexOf)
console.log("문자열의 포함 여부 확인(indexOf)");
const email_indexOf = "test!naver.com";

console.log('email_indexOf.indexOf("@") = ' + email_indexOf.indexOf("@"));
console.log('email_indexOf.indexOf(".") = ' + email_indexOf.indexOf("."));
console.log('email_indexOf.indexOf("e") = ' + email_indexOf.indexOf("e"));
console.log('email_indexOf.indexOf("m") = ' + email_indexOf.indexOf("m"));

if (email_indexOf.indexOf("@") === -1) {

    console.log("올바른 이메일 형식이 아닙니다.");
    console.log("\n");

}

// 문자열의 포함여부
// 마지막 문자의 인덱스를 반환
console.log("문자열의 포함 여부 확인(lastIndexOf)");
if (email_indexOf.lastIndexOf("e")) {
    
    console.log('email_indexOf.lastIndexOf("e") = ' + email_indexOf.lastIndexOf("e"));
    console.log("\n");
}

// 해당하는 문자열 하나만 변경
const str = "Hello, JavaScript!";

console.log("문자열 변경");
console.log('str.replace("JavaScript, Java") = ' + str.replace("JavaScript, Java"));
console.log('str.replace("o", "a" = ' + str.replace("o", "a"));
console.log('str.replace("v", "!") =' + str.replace("v", "!"));
console.log("\n");

// 해당하는 문자열 전부 변경
console.log("해당하는 문자열 전부 변경");
console.log('str.replaceAll("!, a") = ' + str.replaceAll("!, a"));
console.log("\n");

// 대소문자 변경
console.log("대소문자 변경");
console.log("str.toUpperCase() = " + str.toUpperCase());
console.log("str.toLowerCase() = " + str.toLowerCase());
console.log("\n");

// 문자열 자르기
console.log("문자열 자르기");
console.log("str.substring(0, 1) = " + str.substring(0, 1));
console.log("str.substring(0, 5) = " + str.substring(0, 5));
console.log("str.substring(7, STR.length) = " + str.substring(7, str.length));
console.log("\n");


// 문자열 분리
console.log("문자열 분리");
const fruit = "apple,banana,cherry,mango,orange";
const fruit_arr = fruit.split(",");

console.log("fruit_arr.length = " + fruit_arr.length);
console.log("fruit_arr[0] = " + fruit_arr[0]);
console.log("fruit_arr = " + fruit_arr);
console.log("\n");