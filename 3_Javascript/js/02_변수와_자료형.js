// console.log(값) : 브라우저 콘솔창에 괄호() 내부의 값을 출력
console.log(1234);
console.log("문자열은 양쪽에 쌍따옴표 작성");
console.log('JS는 홑따옴표도 문자열로 취급');

// 변수의 선언 : 메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것
// [작성법]
// 변수종류 변수명;
var number1;

// 초기화 (== 변수에 값을 처음 할당하는 과정)
// [작성법]
// 변수명 = 값;
number1 = 10;

// 콘솔에 number1 값 출력하기
console.log(number1);

// 변수 선언 + 초기화
var number2 = 20;
console.log(number2);

// number1, number2의 합 출력하기
console.log(number1 + number2)

// 변수에 대입한 값 변경하기
number1 = 300;
number2 = 400;

// 변경된 두 변수의 값 출력
// 1) 문자열 + 문자열/숫자/변수 == 이어쓰기
console.log("number1의 값 : ", number1);
console.log("100" + 100); // 문자열 100100으로 출력됨

// 2) 괄호 내부에 ,를 작성하는 경우
// > 각각의 값을 독립적으로 출력 > 형변환 없이 출력되어 문자열, 다른 데이터 타입 따로 독립되어 출력됨
console.log("number 1 : ", number1);

// var, let, const의 차이점
// 1. var : 변수 선원 키워드
// 변수 선언 시 중복되는 변수명으로 선언 가능 > 먼저 선언된 변수에 나중에 선언된 변수가 덮어씌워짐
var menu = "삼겹살";
console.log("menu : ", menu)

// 변수명이 중복되어 값이 덮어씌워지면 > 이전에 저장한 변수값을 쓸 수 없게 되는 문제 발생
var menu = "초밥";
console.log("menu : ", menu)

// 2. let : 변수 선언 키워드 (var의 변수명 중복 문제 해결)
let number3 = 25;
// Uncaught SyntaxError: Identifier 'number3' has already been declared ... : 변수명 선언 중복 불가
// let number3 = 500;

number3 = 500;
console.log("number3 : ", number3)

// 3. const(상수, constant, 항[상] 같은 [수]) : 한 번 값이 대입되면 새로운 값 대입할 수 없음
const PI = 3.141592;
// Uncaught TypeError: Assignment to constant variable. : 상수로 배정되었기에 새로운 대입을 할 수 없음
// PI = 123;

// Uncaught SyntaxError: Missing initializer : 상수는 선언과 동시에 반드시 초기화해야
// const test;

// 블록 레벨 scope / 함수 레벨 scope
// 블록 레벨 scope(let, const) : let과 const로 선언된 변수는 변수가 선언된 블록(중괄호 {}) 내부에서만 유효
// 즉, 코드 블록 내부에서 선언한 변수(let, const)는 해당 블록의 외부에서 접근할 수 없음
let foo1 = 123; // 전역 변수
const foo2 = 456; // 전역 변수(상수)

{ // 블록 레벨
  let num1 = 789;
  let num2 = 0;
}

// 전역변수 > 블록과 관계 없이 접근 가능
console.log(foo1);
console.log(foo2);
// Uncaught ReferenceError: num1 is not defined
// 블록 레벨의 스코프 > 블록 외부에서 접근 불가
// console.log(num1);
// console.log(num2);

// if, for, while, switch, try {} 등 블록으로 감싸진 범위 > 전부 블록 레벨 스코프가 생김

// 함수 레벨 스코프(var)
// var 키워드로 선언된 변수는 함수 내 어디서든 접근할 수 있음
// if, for 등의 일반 블록은 무시하고, var로 선언된 변수가 있는 함수 전체에서 유효
var test1 = 123; // 전역 변수
{ // 블록
  var test2 = 456;
}

console.log(test1);
// 함수 레벨 스코프인 var는 일반 블록을 무시하기 때문에 출력 가능
console.log(test2);

function example() { // 함수 형태로 만들어진 코드 블록은 함수 레벨 scope
  // 코드 블록은 함수 레벨 scope
  var test3= '함수 레벨 var 테스트';
  console.log(test3);
}

// Uncaught ReferenceError: test3 is not defined
// var는 일반 블록 레벨만 무시할 뿐, 함수 레벨 블록은 무시하지 못함
// > 함수 블록 안에서 선언된 var 변수는 함수 내에서만 사용 가능
// console.log(test3);
example();

function example2() { // 함수 블록
  if(true) { // 일반 블록
    var x = 10;
  }
  console.log(x);
}

example2();

// 