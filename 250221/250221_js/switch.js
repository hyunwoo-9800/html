// switch 연습
let food = "monkey";

switch (food) {

    case "melon":
        console.log("fruit_melon");
        break;

    case "apple":
        console.log("fruit_apple");
        break;

    case "banana":
        console.log("fruit_banana");
        break;

    case "carrot":
        console.log("vegetable_carrot");
        break;

    default:
        console.log("It's not fruits and vegetables.");
        console.log(`It's ${food}!`);
        break;

} // switch (food)종료

// 개행용
console.log("\n");

// if문과 switch문 비교;
let score = 90;

if (90 <= score <= 100) {

    console.log("if문 출력 : A++");
    
} // if 종료

switch (score) {

    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 97:
    case 98:
    case 99:
    case 100:
        console.log("switch출력 : A++");
        break;

    default:
        console.log("switch출력 : not A++");
        break;

} // switch 종료