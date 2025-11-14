// 1. 추가 버튼 클릭 시 화면에 input 요소가 추가됨
const addBtn = document.querySelector("#add");
const container = document.querySelector(".container");

document.querySelector("#add").addEventListener("click", () => {
  // div 생성
  const box = document.createElement("div");

  // 클래스명 추가
  box.classList.add("row");

  // input 요소 생성 > 속성 부여
  const input = document.createElement("input");
  input.type = "text";
  input.classList.add("input-number");

  // span 요소 생성 > 속성 부여
  const span = document.createElement("span");
  span.classList.add("remove-row");
  
  // 생성된 input, span을 box의 마지막 자식으로 추가
  box.append(input);
  box.append(span);

  // 만들어진 div 요소를 container 마지막 자식으로 추가
  container.append(box);
});

// 2. 계산 버튼을 클릭 했을 때 모든 input 요소에 작성된 값의 합을 alert()로 출력
document.querySelector("#calc").addEventListener("click", () => {
  const inputList = document.querySelectorAll(".input-number");
  let sum = 0;
  for(let i = 0; i < inputList.length; i++) {
    sum += Number(inputList[i].value);
  }
  alert(sum);
});