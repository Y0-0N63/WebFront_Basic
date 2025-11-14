// 정규표현식 객체 생성 + 확인하기
document.querySelector("#btn1").addEventListener("click", () => {
  // 정규표현식 객체 생성
  // "script"와 일치하는 문자열이 있는지 검사하는 정규 표현식
  const regExp1 = new RegExp("script");

  // "java"와 일치하는 문자열이 있는지 검사하는 정규표현식
  const regExp2 = /java/;

  // 확인하기
  const str1 = "javascript 공부 중!";
  const str2 = "jsp(java server page)도 곧 공부 예정!";
  const str3 = "java, java, java";

  console.log(regExp1.test(str1)) ;
  console.log(regExp1.exec(str1)) ;

  console.log(regExp2.test(str1)) ;
  console.log(regExp2.exec(str1)) ;
  
  console.log(regExp2.test(str3)) ;
  console.log(regExp2.exec(str3)) ;
});

// 메타문자 확인하기
document.querySelector("#btn2").addEventListener("click", () => {
  // [abcd]
  const regExp1 = /[abcd]/;
  console.log(regExp1.test("apple")); // true
  console.log(regExp1.test("ssbss")); // true
  console.log(regExp1.test("qwerty")); // false

  // ^
  const regExp2 = /^group/; // 문자열의 시작이 group인지 확인
  console.log(regExp2.test("group100")); // true
  console.log(regExp2.test("100group")); // false
  
  // $
  const regExp3 = /group$/; // 문자열의 끝이 group인지 확인
  console.log(regExp3.test("group100")); // false
  console.log(regExp3.test("100group")); // true
});

// 이름 유효성 검사
document.querySelector("#inputName").addEventListener("keyup", (e) => {
  // 결과 출력용 span 요소 얻어오기
  const span = document.querySelector("#inputNameResult");

  // 한글 2~5글자 정규표현식 객체 만들기
  const regExp = /^[ㄱ-힣]{2,5}$/;

  // 빈칸인지 검사
  if(e.target.value.length == 0) {
    span.innerText = "";
    return;
  }

  if(regExp.test(e.target.value)) {
    // 한글 2~5글자 유효한 값을 작성한 경우
    span.innerText = "유효한 이름 형식입니다.";
    span.style.color = "green";
    span.style.fontWeight = "bold";
  } else {
    // 유효하지 않은 값을 작성한 경우
    span.innerText = "유효하지 않은 이름 형식입니다.";
    span.style.color = "red";
    span.style.fontWeight = "bold";
  }
});

// 주민등록번호 검사
document.querySelector("#inputPno").addEventListener("keyup", (e) => {
  const span = document.querySelector("#inputPnoResult");

  // 숫자 6자 + "-" + 숫자 7자 정규표현식 객체 만들기
  // - 숫자 자릿수만 지정할 경우
  // const regExp = /^[0-9]{6}-[0-9]{7}$/;
  const regExp = /^\d{6}-\d{7}$/;
  
  // - 숫자 자릿수 + 연/월/일 조건 지정할 경우

  // 빈칸인지 검사
  if(e.target.value.length == 0) {
    span.innerText = "주민등록번호를 작성해주세요.";
    span.classList.remove("confirm", "error");
    return;
  }

  // 유효성 검사
  if(regExp.test(e.target.value)) {
    span.innerText = "유효한 형식입니다.";
    // span.classList.add("confirm");
    // span.classList.remove("error");
    span.classList.toggle("confirm", true);
    span.classList.toggle("error", false);
  } else {
    span.innerText = "유효하지 않은 형식입니다.";
    // span.classList.add("error");
    // span.classList.remove("confirm");
    span.classList.toggle("error", true);
    span.classList.toggle("confirm", false);
  }
});