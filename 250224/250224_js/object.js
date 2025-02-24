// 객체 다루기
const person = {

    name: {
        firstName: "Gildong",
        latsName: "Hong"
    },

    likes: ["apple", "samsung"],

    printHello: function () {

        return "hello";

    }

};

console.log("person 객체의 이름은?", person["name"]);
console.log("person 객체의 firstName은? " + person["name"]["firstName"]);
console.log("person 객체의 latsName은? " + person["name"]["latsName"]);
console.log("person 객체의 likes는? " + person["likes"]);
console.log("person 객체의 likes의 0번째 인덱스는? " + person["likes"][0]);
console.log("person 객체의 likes의 1번째 인덱스는? " + person["likes"][1]);
console.log("person 객체의 함수는? " + person["printHello"]());

console.log("\n");
console.log("마침표 연산자로 부르기");
console.log("person 객체의 이름은?", person.name);
console.log("person 객체의 firstName은? " + person.name.firstName);
console.log("person 객체의 latsName은? " + person.name.latsName);
console.log("person 객체의 likes는? " + person.likes);
console.log("person 객체의 likes의 0번째 인덱스는? " + person.likes[0]);
console.log("person 객체의 likes의 1번째 인덱스는? " + person.likes[1]);
console.log("person 객체의 함수는? " + person.printHello());

person["name"]["latsName"] = "haha";
console.log("person 객체의 latsName은? " + person["name"]["latsName"]);

console.log(person);

// 추가와 수정
person["friend"] = "친구";
console.log(person);
console.log("========================== \n");

person["name"] = "이름";
console.log(person);
console.log("========================== \n");

// 삭제
delete person["likes"];
console.log(person);
console.log("========================== \n");

delete person["friend"];
console.log(person);
console.log("========================== \n");

delete person["printHello"];
console.log(person);
console.log("========================== \n");

delete person["name"];
console.log(person);
console.log("========================== \n");

// 추가하기
person["new"] = "새로운 속성";
console.log(person);
console.log("========================== \n");

