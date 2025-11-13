// div 배열과 input 배열의 요소의 개수와 순서가 동일 > index 번호 공유
// 배경색을 적용할 div 배열
const boxes = document.querySelectorAll(".box");

// 배경색을 입력할 input 배열
const inputs = document.querySelectorAll(".color-input");

document.querySelector("#changeButton").addEventListener("click", function () {
  for (let i = 0; i < inputs.length; i++) {
    boxes[i].style.backgroundColor = inputs[i].value;
  }
});