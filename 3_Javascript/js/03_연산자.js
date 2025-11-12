// console.log('js file loaded')

// document : HTML 문서 내에서 getElement : HTML 요소를 얻어오기 ById : 일치하는 아이디를 통해
const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const result = document.getElementById("calcResult");

// 두 수를 더해서 화면에 출력하는 함수
function plusFn() {
  // input요소.value : input 요소에 작성된 값 얻어오기
  const value1 = number1.value;
  const value2 = number2.value;

  // input 요소에 작성된 값음 무조건 문자열 형태 > 이어쓰기로 출력되는 문제 발생
  console.log(value1 + value2);

  // [해결방법] 문자열을 숫자로 변경하기 : Number("문자열") --> 숫자 타입으로 변경
  console.log(Number(value1) + Number(value2));

  // 두 수의 합을 result 변수(<span id = "calcResult">)의 내부 글자(innerText, HTML 요소의 content)로 대입하기
  result.innerText = Number(value1) + Number(value2);
}

function minusFn() {
  const value1 = number1.value;
  const value2 = number2.value;
  result.innerText = Number(value1) - Number(value2);
}

function multiFn() {
  const value1 = number1.value;
  const value2 = number2.value;
  result.innerText = Number(value1) * Number(value2);
}

function divFn() {
  const value1 = number1.value;
  const value2 = number2.value;
  result.innerText = Nubmer(value1) / Number(value2);
}

function modFn() {
  const value1 = number1.value;
  const value2 = number1.value;
  result.innerText = Number(value1) % Number(value2);
}
