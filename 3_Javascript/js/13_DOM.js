// 노드 확인하기
document.querySelector("#btn1").addEventListener("click", () => {
  const ul = document.querySelector("#test");

  // ul의 모든 자식 노드 얻어오기 : 요소.childNodes -> 배열 형태로 반환
  const list = ul.childNodes;
  // NodeList(13) [text, comment, text, li#li1, text, li.cls, text, comment, text, li, text, li, text]
  // 0:text 1:comment 2:text >> 공백/개행(text), 주석(comment)도 자식으로 취급
  // >> text, comment, 태그(요소) 모두 Node로써 취급됨
  console.log(list);

  // 자식 노드 중 첫 번째 li 요소
  console.log(list[3]);

  // 1. 부모 노드 찾기 (요소.parentNode)
  // #li1의 부모 노드를 찾아서 배경색 변경하기 > ul 태그의 배경색이 하늘색으로 변경됨
  list[3].parentNode.style.backgroundColor = "skyblue";

  // 2. 첫 번째 자식 노드 찾기 (요소.firstChild)
  // ul의 첫 번째 자식 노드 찾기 > #text (39-40번째 줄 사이의 공백)
  console.log(ul.firstChild);

  // 3. 마지막 자식 노드 찾기 (요소.lastChild) > #text (ul 태그가 닫히기 직전인 48-49번째 줄 사이의 공백)
  console.log(ul.lastChild);

  // 4. 원하는 위치(index)에 존재하는 자식 노드 찾기 (요소.childNodes[index])
  // ul의 자식 노드 중 3번째 li 태그를 찾아 배경색을 pink로 지정
  ul.childNodes[9].style.backgroundColor = "pink";

  // 5. 이전/다음 형제 노드 찾기
  // 이전 형제 노드 : 요소.previousSibling, 다음 형제 노드 : 요소.nextSibling
  // (참고) -> 탐색용 코드는 연달아서 작성 가능!
  // ul.childNodes[9]의 다음 다음 형제 노드 선택 ( = ul.childNodes[11])
  console.log(ul.childNodes[9].nextSibling.nextSibling);

  // ul의 마지막 자식 노드의 이전 형제 노드 선택
  console.log(ul.lastChild.previousSibling);

  // 노드 추가
  // appendChild와 append : 둘 다 DOM 요소 내부에 자식 노드를 추가하는 함수
  // - appendChild : 노드만 추가 가능(createTextNode() 필수 작성), 한 번에 한 개만 추가 가능
  // - append : 노드 + 문자열 모두 가능 / 한 번에 여러 개 추가 가능

  // 1. 마지막 자식 노드로 추가 (요소.appendChild(노드))
  // -> list[11]의 마지막 자식으로 "zzz"라는 TextNode 추가 > a 태그 아래에 'zzz'가 추가됨
  list[11].appendChild(document.createTextNode("zzz"));

  // 2. 마지막 자식으로 추가 (요소.append("내용" or 노드))
  list[11].append("12345", "abcde", "가나다라마");

  // 3. 첫 번째 자식으로 추가 (요소.prepend("내용" or 노드))
  list[11].prepend("오늘", " 저녁", " 고기");

  // 4. 이전/다음 형제로 추가 (요소.before / 요소.after)
  // ul의 전/후에 내용 추가
  ul.before("이전", "입니다");
  ul.after("이후", "입니다");
});

// ==================== Node와 Element의 차이 ====================
document.querySelector("#btn2").addEventListener("click", () => {
  // #test2 얻어오기 (ul)
  const ul = document.querySelector("#test2")

  // ul의 모든 자식 요소 얻어오기 (children) > HTMLCollection(4) [li, li.cls, li, li]
  console.log(ul.children);

  // ul의 첫 번째 자식 요소
  console.log(ul.firstElementChild);

  // ul의 마지막 자식 요소
  console.log(ul.lastElementChild);

  // ul의 부모 요소 > body
  console.log(ul.parentElement);

  // ul의 이전 형제 요소 > pre
  console.log(ul.previousElementSibling);

  // ul의 다음 형제 요소 > <button id = "btn2"...
  console.log(ul.nextElementSibling);
})