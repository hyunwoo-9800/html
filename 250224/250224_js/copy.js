// 깊은 복사(기본 자료형)
let num = 10;
let num2 = 20;
let copyNum = num;
num = 100;

console.log("num = " + num);
console.log("num2 = " + num2);
console.log("copyNum = " + copyNum);


const studentObj = {
    name : "John",
    age : 20,
};

studentObj.gender = "female";
delete studentObj.age;

console.log(studentObj);
