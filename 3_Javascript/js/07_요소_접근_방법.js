// 클래스로 요소 접근 테스트
function classTest() {
  // class 속성값이 cls-test인 요소 모두 얻어오기
  const divs = document.getElementsByClassName("cls-test");

  // 유사 배열 : 배열처럼 index, length를 가지고 있으나 배열 전용 기능(함수)을 제공하지는 않음
  // 제공하지 않는 기능 : pop(), push(), map(), filter() 등...
  // HTMLCollection(3) [div.cls-test, div.cls-test, div.cls-test]
  console.log(divs);

  divs[0].style.backgroundColor = "rgb(114, 203, 80)";
  divs[1].style.backgroundColor = "skyblue";
  divs[2].style.backgroundColor = "pink";
}

// 태그명으로 요소 접근 테스트
function tagNameTest() {
  const tagList = document.getElementsByTagName("li");
  console.log(tagList);

  for(let i = 0; i < tagList.length; i++){
    tagList[i].style.backgroundColor = tagList[i].innerText;
  }
}

// name으로 요소 접근 테스트
function nameTest() {
  // name 속성값이 hobby인 요소를 모두 얻어와 변수에 저장
  const hobbyList = document.getElementsByName("hobby");
  console.log(hobbyList);

  // 체크된 값을 누적할 문자열
  let str = "";
  // 체크된 수 카운트할 변수
  let count = 0;

  for(let i = 0; i < hobbyList.length; i++) {
    // checkbox, radio 전용 속성 > checked >> input요소.checked > true/false
    if(hobbyList[i].checked) {
      str += hobbyList[i].value + " ";
      count++;
    }
  }

  // id가 name-div 요소에 내용으로 결과 출력
  document.getElementById("name-div").innerHTML = `${str} <br><br>선택된 취미 개수 : ${count}`;

  // 요소.innerHTML : HTML 태그를 포함하여 작성한 문자열을 실제 HTML 요소로 해석하여 화면에 렌더링함
  // 요소.innerText : 텍스트 내용만 요소 내부에 출력함 > HTML 코드로 해석 X (태그도 문자열로 출력됨)
}

function cssTest() {
  // target-div 속성의 값이 css-div인 요소를 얻어오기
  const container = document.querySelector("[target-div='css-div']");
  container.style.border = "10px solid red";
  
  // first-child를 쓰지 않아도 querySelector의 특성상 여러 자식이 존재하더라도 첫 번째 자식만 선택되어 반환됨
  const div1 = document.querySelector("[target-div = 'css-div'] > div");
  div1.innerText = "CSS 선택자로 선택해 값 변경하기";

  const div2 = document.querySelector("[target-div='css-div'] > div:last-child")
  div2.innerText = "첫 번째 요소가 아니면 querySelector() 특징 활용 불가 > 몇 번째 요소인지 작성 필수";

  // 모든 자식 div 한 번에 선택 (배열)
  const divList = document.querySelectorAll("[target-div='css-div'] > div");
  divList[0].style.fontFamily = "궁서";
  divList[1].style.fontSize = "20px";

  for(let i = 0; i < divList.length; i++) {
    divList[i].onclick = function() {
      alert(`${i}번째 요소입니다!`);
    }
  }
}