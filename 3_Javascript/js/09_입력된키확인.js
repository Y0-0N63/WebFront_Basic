// 키보드를 누르고 있을 때 : keydown(pink), 키보드를 떼었을 때 : keyup(white)
// toUpperCase() : 소문자 -> 대문자, toLowerCase() : 대문자 -> 소문자

// // 화면에 존재하는 모든 key를 배열 형태로 얻어오기
// const keys = document.querySelectorAll(".key");
// // NodeList(4) [div.key, div.key, div.key, div.key]
// console.log(keys);

// // 화면에서 키가 눌러지는 것을 감지했을 때
// document.addEventListener("keydown", function(e){
//   // 인덱스 값을 저장할 변수
//   let idx;

//   // 입력된 키를 소문자로 바꿔서 일치하는 case를 실행
//   switch(e.key.toLowerCase()) {
//     case 'q' : idx = 0; break;
//     case 'w' : idx = 1; break;
//     case 'e' : idx = 2; break;
//     case 'r' : idx = 3; break;
//     default : return; // 함수 종료
//   }

//   // idx 번호와 일치하는 keys 배열의 요소 배경색을 변경
//   keys[idx].style.backgroundColor = "deepPink";
// });

// // 화면에서 키가 떼어지는 걸 감지했을 때
// document.addEventListener("keyup", function(e){
//     // 인덱스 값을 저장할 변수
//   let idx;

//   // 입력된 키를 소문자로 바꿔서 일치하는 case를 실행
//   switch(e.key.toLowerCase()) {
//     case 'q' : idx = 0; break;
//     case 'w' : idx = 1; break;
//     case 'e' : idx = 2; break;
//     case 'r' : idx = 3; break;
//     default : return; // 함수 종료
//   }

//   // idx 번호와 일치하는 keys 배열의 요소 배경색을 변경
//   keys[idx].style.backgroundColor = "white";
// });

// ================ [방법 2] ================

// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");
const keyMap = { 'q' : 0, 'w' : 1, 'e' : 2, 'r' : 3 };

// 키보드 이벤트 핸들러 함수
// JS Object 
// 객체명[key]  or  객체명.key -> 매핑된 value
function changeKeyColor(e, color) {
  // keyMap['q'] --> 0 반환 (매핑된 value의 값)
  const idx = keyMap[e.key.toLowerCase()];
  
  // keyMap에 없는 값이 입력되었을 때 > value 값에 undefined가 매핑됨
  if(idx != undefined) {
    keys[idx].style.backgroundColor = color;
  }
}

// 키가 눌렸을 때, 떼어졌을 때 > changeKeyColor 함수 실행시켜주기
// 이벤트가 발생하면 만들어지는 이벤트 객체(e)는
// 이벤트를 호출하는 부분에서(이벤트 핸들러에서) 반드시 익명 함수 형태에서 매개변수로 e가 작성되어야 전달할 수 있음
document.addEventListener("keydown", (e) => changeKeyColor(e, "deepPink"));
// 위 경우에선 색상을 명시적으로 알려주어야 했기 때문에 호출부에 작성이 추가됨
// 이런 경우 e 객체를 주지 않으면, 키보드의 이벤트와 관계 없이 changeKeyColor("deepPink")가 수행되어버림
// 이벤트 객체는 무조건 첫 번째 전달 인자
document.addEventListener("keyup", (e) => changeKeyColor(e, "white"));

// ================ [방법 3] ================
// const keys = document.querySelectorAll(".key");
// const keyMap = { q: 0, w: 1, e: 2, r: 3 };

// document.addEventListener("keydown", handleKey);
// document.addEventListener("keyup", handleKey);

// function handleKey(e) {
//   const idx = keyMap[e.key.toLowerCase()];
//   if (idx === undefined) return;

//   // event.type이 'keydown'일 때만 색 변경, 아닐 땐 white로 복귀
//   keys[idx].style.backgroundColor = e.type === "keydown" ? "deeppink" : "white";
// }


// 이벤트 객체는 e로 묶어서 넘겨주기 때문에 매개변수를 명시적으로 작성하지 않아도 호출한 곳에서 자동적으로 받아줌
// 전달해줄 전달 인자가 없으니까(이벤트 객체도, 색상도 전달 안 해줘도 알아서 자동이기 때문에 호출부에 무언가를 작성할 필요 X)
// ㄴ> 이벤트 객체를 명시적으로 작성하지 않고, 알아서 자동으로 매개변수를 전달-받아줄 경우
// 명시적으로 이벤트 객체를 넘겨주고 싶다면 꼭 이벤트 핸들러 함수를 익명 함수 형태로 작성해주어야 함

// 명시적으로 이벤트 객체 넘겨주고/그럴 필요의 문제
// 이벤트가 감지되었을 때 실행해야 하는 함수(ex_changeKeyColor)
// - 만약 해당 함수에 전달할 인자가 없는 경우 > 함수명만 작성해도 가능 (ex_"keydown", changeKeyColor)
//    ㄴ> changeKeyColor 함수 선언부의 매개변수에서 이벤트 객체 (e)를 자동으로 가져다 쓸 수 있음
// - 만약 해당 함수에 전달할 인자가 있는 경우 > 익명함수 형태로 작성해야만 (e) => {}
//    ㄴ> 전달인자의 첫 번째 값은 e, 두 번째 전달인자부터 전달해야 하는 데이터 나열 (ex_"keydown", (e) => changeKeyColor(e, "deepPink"))