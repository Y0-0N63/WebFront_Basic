// 1. name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수를 선언 및 정의하고 호출하시오
// function printName(name) {
//   console.log(`Hello, ${name}!`);
// }

// printName(prompt("이름 입력 : "));

// 2. 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수를 선언 및 정의하고 호출하시오
// function printSum(num1, num2) {
//   console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
// }

// printSum(prompt("숫자 1 입력 : "), prompt("숫자 2 입력 : "));

// 3. 두 개의 숫자를 매개변수로 받아 곱한 결과를 반환하는 화살표 함수를 작성
// const inputNum = (otherFn) => {
//   const result = console.log(otherFn(prompt("숫자 1 입력 : "), prompt("숫자 2 입력")));
//   console.log(result);
// }

// const multiResult = (num1, num2) => {
//   return Number(num1) * Number(num2);
// }
// inputNum(multiResult);

// 4. 두 개의 숫자를 매개변수로 받아, 첫 번째 숫자가 두 번째 숫자보다 크면 "첫 번째 숫자가 더 큽니다"를 출력하고,
// 그렇지 않으면 "두 번째 숫자가 더 크거나 같습니다"를 출력하는 함수를 선언 및 정의하고 호출하시오
// const compareResult = (num1, num2) => {
//     if(Number(num1) > Number(num2)) {
//       return "첫 번째 숫자가 더 큽니다";
//     } else {
//       return "두 번째 숫자가 더 크거나 같습니다.";
//     }
// }
// inputNum(compareResult);

// 5. 문자열을 매개변수로 받아 문자열의 길이를 출력하는 함수를 선언 및 정의하고 호출하시오
// function printLength(str) {
//   console.log(str.length);
// }
// printLength(prompt("문자열 입력 : "));

// 6. 문자열과 반복 횟수를 매개변수로 받아, 해당 문자열을 주어진 횟수만큼 반복하여 출력하는 함수를 선언 및 정의하고 호출하시오
// function printRepeat(str, count) {
//   for(let i = 0; i < count; i++) {
//     console.log(str);
//   }
// }
// printRepeat(prompt("문자열 입력 : "), Number(prompt("반복 횟수 입력 : ")));

// 7. 숫자를 매개변수로 받아 그 숫자가 짝수인지 아닌지를 true 또는 false로 반환하는 함수를 선언 및 정의하고 호출하시오
// function printEven(num1) {
//   if(num1 % 2 === 0) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// printEven(Number(prompt(("숫자 입력 : "))));

// 8. 세 개의 숫자를 매개변수로 받아 그 중 가장 큰 숫자를 반환하는 함수를 선언 및 정의하고 호출하시오
// function printMax(num1, num2, num3) {
//   let max = num1;
//   if(num2 > max) {
//     max = num2;
//   }

//   if(num3 > max) {
//     max = num3;
//   }

//   if(num1 > max) {
//     max = num1;
//   }
  
//   console.log(max);
// }
// printMax(Number(prompt("숫자 1 입력 : ")), Number(prompt("숫자 2 입력 : ")), Number(prompt("숫자 3 입력 : ")));

// 9. 배열을 매개변수로 받아 첫 번째 요소를 반환하는 화살표 함수를 선언 및 정의하고 호출하시오
// const firstElement = (arr) => {
//   console.log(arr[0]);
// }
// const arr = ["딸기", "바나나", "사과"];
// firstElement(arr);

// 10. 배열을 매개변수로 받아 배열의 모든 숫자의 합과 평균을 객체 형태로 반환하는 함수를 선언 및 정의하고 호출하시오

function printSumAll(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return {"합" : sum, "평균" : avg};
}
const arr = [1, 2, 3, 4, 5];
printSumAll(arr);

// 11. 숫자 두 개와 연산을 수행하는 함수를 매개변수로 받아, 두 숫자에 해당 연산을 적용한 결과를 반환하는 함수를 선언 및 정의하고 호출하시오

// 12. 1. 사람의 이름과 2. 인사말을 출력하는 함수를 [매개변수]로 받아, 해당 이름과 인사말을 사용하여 인사를 출력하는 함수를 선언 및 정의하고 호출하시오