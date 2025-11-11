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

// 1. var의 호이스팅 : var로 선언된 변수는 선언만 해당 스코프의 최상단으로 호이스팅됨
// 초기화는 원래 코드 위치에서 수행

// 내부적으로 var a;만 선언된 상태이기 때문에 에러 발생 대신 undefined
// > 호이스팅 되어 var a; 선언부가 최상단으로 올라가 > 선언은 되었으나 a에 값이 대입되지 않은 상태로 인식됨
console.log(a); // undefined
var a = 10;
console.log(a);

// 2. let/const의 호이스팅 : let/const로 선언된 변수는 선언만 해당 스코프의 최상단으로 호이스팅됨
// var와 달리, let/const로 선언된 변수는 초기화가 이루어지기 전에는 사용될 수 없음

// 내부적으로 letx; 선언은 끌어올려진 상태(x의 선언이 호이스팅된 상태)
// 그러나 TDZ 존에 놓여 초기화 전까지 접근 불가
//  = JS에서 let/const 키워드로 선언된 변수가 초기화되기 전까지 접근할 수 없는 구간에 놓여짐
// TDZ(Temporal Dead Zone) : 코드 실행 과정에서 특정 시점까지 변수가 접근 불가한 상태를 의미
// console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization
let x = 50;
console.log(x);
// let/const는 var보다 예측 가능한 코드를 작성할 수 있음! > 지향됨

// JS 자료형 확인하기
// typeof 연산자 : 변수/값의 자료형을 출력하는 연산자
let undef; // 변수 선언
// undef :  undefined undefined
// undefiend : 정의되지 않은 변수/값이 아직 대입되지 않았다
console.log("undef : ", undef, typeof undef);

// string(문자열) : "" 또는 ''로 작성된 값
const userName = "홍길동";
// userName :  홍길동 string
console.log("userName : ", userName, typeof userName);

const phone = '01012341234';
// phone :  01012341234 string
console.log("phone : ", phone, typeof phone);

const gender = 'M';
// gender :  M string
console.log("gender : ", gender, typeof gender);

// number (정수, 실수, 양수, 음수, 0 등 모든 숫자)
const age = 25;
const height = 150.5;
const eyesight = -5;

// age :  25 number
console.log("age : ", age, typeof age);
// height :  150.5 number
console.log("height : ", height, typeof height);
// eyesight :  -5 number
console.log("eyesight : ", eyesight, typeof eyesight);

// boolean (논리값 true/false)
const isTrue = true;
const isFalse = false;
// isTrue :  true boolean
console.log("isTrue : ", isTrue, typeof isTrue);
// isFalse :  false boolean
console.log("isFalse : ", isFalse, typeof isFalse);

// object (객체) : 값을 여러 개 저장할 수 있는 형태
// 1) 배열(Array) : 여러 값이 나열되어 있는 것의 묶음
const numbers = [10, 20, 30];
// numbers :  (3) [10, 20, 30]0: 101: 202: 30length: 3[[Prototype]]: Array(0) object
console.log("numbers : ", numbers, typeof numbers);
// numbers 배열 값 중 0번째 :  10 number
console.log("numbers 배열 값 중 0번째 : ", numbers[0], typeof numbers[0]);

// JS에서의 배열은 값 추가 및 삭제 가능 > 크기가 고정되지 않고 필요에 따라 자동으로 늘어나거나 줄어듦
// 2) JS 객체 : 값을 K:V(MAP) 형식으로 여러 개 저장하는 형태 { K:V, K:V, K:V ... }
// K(Key) : 값을 구분하는 이름 (변수명과 비슷)
// V(Value) : K에 대응되는 값 (변수에 대입되는 값과 비슷)
const user = { id : "user01", pw : "pass01", userName : "홍길동", age : 20 };
// user :  {id: 'user01', pw: 'pass01', userName: '홍길동', age: 20} object
console.log("user : ", user, typeof user);

// 객체에 존재하는 값을 하나씩 얻어오기
// 방법 1 : 변수명['key']   --> 아이디 작성할 때 문자열로 작성
// user01
console.log(user['id']);
// 방법 2 : 변수명.key
// user01 pass01 홍길동 20
console.log(user.id, user.pw, user.userName, user.age);

// 함수 (function)

// 작성법
// const 변수명 = function() {};   <-- 변수명이 함수의 이름이 됨 (익명함수)
const sumFn = function(a, b) { return a + b };
/*
function sumFn(a, b) {
  return a + b
}
 */

console.log(typeof sumFn) // function
console.log(sumFn(3, 5)); // 8

// null
console.log(typeof null); // object