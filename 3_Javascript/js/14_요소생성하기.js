const createBox = document.querySelector("#createBox"); // button
const container = document.querySelector(".container") // div
createBox.addEventListener("click", () => {
  // 1. div 요소 생성
  const box = document.createElement("div"); // <div></div>

  // 2. 만들어진 div 요소에 "box" 클래스 추가
  box.classList.add("box"); // <div class = "box></div>

  // 3. input 요소 생성(+ 속성 부여)
  const input = document.createElement("input");
  input.type  = "text";

  // 4. 생성된 input을 box의 마지막 자식으로 추가
  box.append(input);

  // 5.만들어진 div 요소를 Container에 마지막 자식으로 추가
  container.append(box);
});

// 요소.classLIst : 요소의 클래스 목록(배열) > 클래스 존재 여부, 클래스에 대한 추가와 제거 가능
// 요소.classList : 요소 클래스 목록이 배열 형태로 반환
// 요소.classList.contains("클래스명") > 클래스가 있으면 true, 없으면 false 반환
// 요소.classList.add("클래스명"); > 클래스 추가
// 요소.classList.remove("클래스명"); > 클래스 제거
console.log(container.classList);

// innerHTML로 요소 추가하기
const innerHTMLBox = document.querySelector("#innerHTMLBox");
innerHTMLBox.addEventListener("click", () => {
  container.innerHTML += "<div class = 'box'><input type = 'text'></div>";
});