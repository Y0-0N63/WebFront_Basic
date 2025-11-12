// prompt 사용 연습
// function test() {
//   const password = prompt("비밀번호를 입력하세요");
//   console.log(password);

//   // 확인 -> 입력한 값이 문자열로 저장됨
//   // 취소 -> null

//   if (password == null) {
//     // 비밀번호 입력 취소
//     alert("비밀번호 입력을 취소하였습니다.");
//   } else {
//     // 비밀번호 입력 완료 > 확인
//     if (password == "1234") {
//       // 비밀번호가 같을 때
//       alert("비밀번호 일치")
//     } else {
//       // 비밀번호가 다를 때
//       alert("비밀번호 불일치")
//     }
//   }
// }

// test();

// 금액 입력
const amount = document.getElementById("amount");
// 잔액 기록 변수 (초기값 10000)
let balance = 10000;
// 비밀번호 저장 변수 (초기 비밀번호 1234)
const password = '1234';
// 잔액 출력 span 요소
const output = document.getElementById("output");
output.innerText = balance;

// 입금 (input에 입력된 금액 만큼 잔액(balance)에 추가)
function deposit() {
  // input에 입력된 금액이 없다면 > 알림
  if (amount.value.length == 0) {
    alert("금액을 입력해주세요.");
  } else {
    // input에 금액이 입력되었다면 > balance에 누적
    balance += Number(amount.value);
    output.innerText = balance;
    amount.value = '';
  }
}

// 출금 (출금 버튼 클릭 시 prompt를 이용해 비밀번호를 입력 받기)
function withdrawal() {
  const password = prompt("비밀번호를 입력하세요.");

  // 비밀번호 입력을 취소했을 경우
  if (password == null) {
    alert("비밀번호 입력을 취소했습니다.");
    amount.value = '';
  } else {
    // 비밀번호가 일치할 때
    if (password == "1234") {
      let withdrawalAmount = Number(amount.value);
      // 출금할 금액 > 잔액
      if (withdrawalAmount > balance) {
        alert("출금 금액이 잔액보다 클 수 없습니다.");
        amount.value = '';
      } else {
        // 출금할 금액 <= 잔액
        balance -= withdrawalAmount;
        output.innerText = balance;
        // 탬플릿 리터럴(Template Literal)
        // 백틱(`)을 사용해 문자열을 감싸고, ${} 안에 변수/값을 넣어 동적으로 문자열을 생성하는 방식
        alert(`${withdrawalAmount}원이 출금되었습니다. 남은 잔액 : ${balance}원`);
        amount.value = '';
      }
      // 비밀번호 불일치
    } else {
      alert("비밀번호가 일치하지 않습니다.");
      amount.value = '';
    }
  }
}
