// 공통적으로 사용되는 요소를 전역 변수로 선언
const addBtn = document.querySelector("#add");
const calcBtn = document.querySelector("#calc")
// 동적으로 만들어진 요소(div)를 최종적으로 붙여야 하는 대상
const container = document.querySelector(".container");

// 추가 버튼 클릭 시 화면에 input 요소가 추가됨
addBtn.addEventListener("click", () => {
  // 1. 요소(div) 생성
  const rowBox = document.createElement("div");

  // 2. 요소에 클래스명 추가
  rowBox.classList.add("row");

  // 3. input, span 요소 생성
  const input = document.createElement("input");
  const span = document.createElement("span");

  // 4-1. input 요소에 속성 추가 (type, class)
  // input.type = "number";
  input.setAttribute("type", "number");
  // input.classList.add("input-number");
  input.setAttribute("class", "input-number");

  // 4-2. span 요소에 속성 추가 (class, &times)
  // span.classList.add("remove-row");
  span.setAttribute("class", "remove-row");
  span.innerHTML = "&times;";
  
  // 5. 요소(div.row)에 마지막 자식으로 input 추가
  rowBox.append(input, span);

  // 6. 만들어진 요소(div.row)를 container의 마지막 자식으로 추가
  container.append(rowBox);

  // ---------- 클릭된 x 버튼의 input + 부모 요소를 제거 ----------
  // 1. 만들어진 x 버튼(span)에 이벤트 리스너/핸들러 추가
  span.addEventListener("click", (e) => {
    // 2. 현재 이벤트가 발생한 요소(span .remove-row)의 부모 요소(div .row)를 탐색(선택)
    const parent = e.target.parentElement;

    // 3. 부모 요소 제거하기
    parent.remove();
  })
});

// 2. 계산 버튼을 클릭 했을 때 모든 input 요소에 작성된 값의 합을 alert()로 출력
calcBtn.addEventListener("click", () => {
  // 1. 모든 .input-number 요소 얻어오기
  const inputList = document.querySelectorAll(".input-number");

  // 2. 모든 요소에 접근해 > 작성된 값(value) 얻어와 > 숫자로 변경한 후 > 합계 저장 변수에 누적
  let sum = 0;
  for(let temp of inputList) {
    sum += Number(temp.value);
  }

  // 3. 결과 출력
  alert(`합계 : ${sum}`);
});