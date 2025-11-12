function check1() {
  // 메뉴 가격
  const gimbap = 3000;
  const ramen = 3500;
  const donkkaseu = 5000;

  // 주문 개수 카운트
  let gCount = 0;
  let rCount = 0;
  let dCount = 0;

  // prompt로 입력한 값을 저장할 변수 선언
  let input;

  // js 비교 연산자
  // == (값이 동일할 경우), === (동일 비교 연산자 : 값, 자료형이 모두 동일한 경우)
  // undefined == null > 같은 값으로 인식됨, undefined === null(object) > 자료형이 다르기 때문에 false
  // !== -> 값, 자료형이 모두 다른 경우 > true  >> 값을 입력하지 않았을 경우와 취소를 눌렀을 때가 다름을 알려주기 위해 사용
  while (input !== null) {
    input = prompt("메뉴 번호를 입력하세요!");
    
    switch(input) {
      case "1" : gCount++; break;
      case "2" : rCount++; break;
      case "3" : dCount++; break;
      case null : alert("주문 완료!"); break;
      default : alert("메뉴에 작성된 번호만 입력하세요!");
    }
  }

  alert(`김밥 : ${gCount}, 라면 : ${rCount}, 돈까스 : ${dCount}`);
  let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkkaseu);
}

// Up&Down 게임
function startGame() {
  const answer = Math.floor(Math.random() * 200) + 1;

  // 정답 시도 횟수를 세기 위한 변수 선언
  let count = 0;

  // prompt에 출력할 문자열
  let str = "1부터 200 사이 숫자 입력";

  while(true) {
    let input = prompt(str);

    // 취소 클릭 시
    if(input === null) {
      alert("게임 포기");
      break;
    }

    // 숫자 입력 후 확인 클릭 시  
    const value = Number(input);

    // 숫자가 아닌 문자열이 잘못 입력된 경우 > NaN (Not a Number)
    // isNan(값) : 값이 NaN이면 true
    if(isNaN(value)) { // 숫자가 아닌 값을 입력한 경우
      alert("숫자만 입력해주세요.");
      continue;
    }

    // 범위 초과인 경우
    if(value < 1 || value > 200) {
      alert("1~200 사이 값만 작성해주세요.");
      continue;
    }

    // 정답을 맞추기 위한 시도를 했기 때문에 count를 1 증가
    count++;

    // 정답인 경우
    if(value === answer) {
      alert(`정답! (${answer}) / 시도 횟수 ${count}`);
      break;
    }

    // 정답이 아닌 경우
    if(value < answer) {
      str = `${value} [UP] / 시도 횟수 : ${count}`;
    } else {
      str = `${value} [DOWN] / 시도 횟수 : ${count}`;
    }
  }
}