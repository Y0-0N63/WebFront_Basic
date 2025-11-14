// 공통적으로 사용되는 요소를 전역 변수로 선언
const inputSize = document.querySelector("#inputSize");
const inputColor = document.querySelector("#inputColor");

// 동적으로 만들어진 요소(div)를 최종적으로 붙여야 하는 대상
const content = document.querySelector("#content");
const container = document.querySelector(".container");

// '적용' 버튼 클릭 > textArea에 size, color가 적용되어 입력된 텍스트가 작성됨
document.querySelector("#applyBtn").addEventListener("click", () => {
  // textArea에 size, color 속성 적용해주기
  // 하이픈 제거하고 카멜 케이스로 작성
  content.style.fontSize = inputSize.value + "px";
  content.style.color = inputColor.value;
});

// 추가 버튼 클릭 시 화면에 input 요소가 추가됨
document.querySelector("#registerBtn").addEventListener("click", () => {
  // 요소(div) 생성
  const newContent = document.createElement("div");

  // div 요소에 속성 추가(작성된 내용(value), color, size)
  // 
  newContent.innerText = content.value;
  // getAttribute("style") : content 요소에 적용된 모든 스타일 속성을 문자열 형태로 반환
  // setAttribute : HTML 요소의 속성(id, class, href, style...)을 설정하는 메서드
  // > text-size, color와 같은 표준 HTML 속성이 아닌 CSS 속성은 적용 X
  newContent.setAttribute("style", content.getAttribute("style"));
  // newContent.setAttribute("style", `font-size: ${inputSize.value}px; color: ${inputColor.value};`);

  // newContent.style.fontSize = inputSize.value + "px";
  // newContent.style.color = inputColor.value;
  
  // 만들어진 요소를 container에 추가
  container.append(newContent);
})