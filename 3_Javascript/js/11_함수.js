const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

// 2개의 값을 전달받아 콘솔로 단순히 출력하는 기능의 함수
function print1(a, b) {
  // 함수 정의
  console.log(`${a}은(는) ${b}입니다.`);
}

// btn1 클릭 시 input1의 값을 읽어와 print1() 함수 호출
btn1.addEventListener("click", function() {
  const value = input1.value;

  if(value.length == 0) {
    console.log("값을 입력하세요");
    // 함수 종료 > 호출한 곳으로 되돌아감
    return;
  }

  // input창에 입력된 값이 0/양수/음수인지 판별하여 저장
  let result;
  if(Number(value) === 0) result = "0";
  else if(Number(value) > 0) result = "양수";
  else result = "음수";

  // 함수 호출 (전달인자의 순서가 중요함)
  print1(value, result);
});

// 매개변수로 배열 전달하기
// 매개변수로 전달받은 배열의 모든 요소를 콘솔에 출력하는 함수
function arrayTest(arr, num) {
  // let num =0; // 이 내부적으로 수행된 셈
  for(let i = 0; i < arr.length; i++) {
    // arr[i]에 있는 값이 딸기와 일치하면 > 해당 요소의 값을 멜론으로 재대입
    if(arr[i] == '딸기') arr[i] = '멜론';
    num = 100;
    console.log(`${i}번째 인덱스 값 : ${arr[i]}`);
  }
}

// #btn2a 클릭되었을 때
document.querySelector("#btn2a").addEventListener("click", function(){
  const arr = ["사과", "바나나", "딸기"]; // 참조 타입
  let x = 0; // 원시 타입
  arrayTest(arr, x);

  // 배열은 참조형이기 때문에 arrayTest() 함수에 전달인자로 arr을 전달하면 > arr에 저장된 주소만 보내서 함수를 수행 (얕은 복사)
  console.log("arr[2] : ", arr[2]);
  
  // 참조형이 아니기 때문에(=원시 타입) 주소값이 아닌 값 자체를 담고 있음 > 복사본의 값이 변경되어도 원본의 값은 변경되지 않음
  // > 따라서 100이 아니라 0이 출력됨
  console.log(x);

  // JS의 원시 타입 종류 : string, number, boolean, undefined, null... > 객체가 아니라 값 자체를 저장(원본 불변)
  // JS의 객체 타입 종류 : Object, Array, Function... > 메모리에 저장된 주소를 참조(복사본이 변경되면 > 원본도 변함)
});

// 매개변수로 요소 전달하기
function btn2bFn(el) {
  // 매개변수 el (Element) : 이벤트가 발생한 요소 > #btn2b
  el.style.backgroundColor = "yellow";
}

// 매개변수로 함수 전달하기
function print2(fn) {
  console.log(`a + b = ${fn(3, 4)}`);
}

document.querySelector("#btn2c").addEventListener("click", function(){
  // 함수도 변수에 저장 가능 (변수명 == 함수명)
  const sumFn = function(a, b) {
    return a + b; // 함수 종료 + 값을 가지고 호출한 곳으로 되돌아감
  }

  // print2 함수에 전달인자로 sumFn을 전달
  print2(sumFn);
});

// 화살표 함수
// 클래스가 arrow인 요소를 모두 얻어와 저장(배열)
const arrowList = document.querySelectorAll(".arrow");

// 화살표 함수의 기본 형태
arrowList[0].addEventListener("click", () => {
  alert("화살표 함수 기본 형태 연습");
});

// 매개변수가 1개인 경우 : () 생략 가능
arrowList[1].addEventListener("click", e => {
  // e.target.style.backgroundColor = "pink";

  // Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')
  // 화살표 함수에서의 this : 이벤트가 일어난 대상 객체가 아니라 전역 객체(window)
  // this.style.backgroundColor = "pink";
  console.log(this);
});

// return 한 줄만 작성된 경우
// function twoNumberPlus() {}
const twoNumberPlus = (otherFn) => {
  alert(otherFn(1, 2));
}

arrowList[2].addEventListener("click", () => {
  // 전달인자가 함수인 경우
  twoNumberPlus((a, b) => a + b);
  // twoNumberPlus((a, b) => {return a + b});
});

// return 한 줄만 있지만 JS object를 반환하는 경우

function printObject(otherFn) {
  // let otherFn = (name, age) => {
    // return {"name " : name, "age" : age}
  // } 와 동일

  const obj = otherFn("홍길동", 20);
  console.log(obj);
}

arrowList[3].addEventListener("click", () => {
  printObject((name, age) => {
    // return이 존재하지 않으면 literal 표기법이 아닌, 함수의 블럭이라고 생각하기 때문에 return을 사용해야만 함
    return {"name" : name, "age" : age};
  });
});

// 즉시 실행 함수
(() => {
  console.log("11_함수.js 파일이 로드되었습니다")
})();