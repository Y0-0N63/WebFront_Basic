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
const password = "1234";

// 입금 (input에 입력된 금액 만큼 잔액(balance)에 추가)
function deposit() {
  balance += Number(amount.value);
  console.log("입금 후 금액 : ", balance);
  document.getElementById("output").innerText = balance;
}

// 출금 (출금 버튼 클릭 시 prompt를 이용해 비밀번호를 입력 받기)
function withdrawal() {
  const password = prompt("비밀번호를 입력하세요.");

  // 비밀번호 입력을 취소했을 경우
  if (password == null) {
    alert("비밀번호 입력을 취소했습니다.");
  } else {
    // 비밀번호가 일치할 때
    if ((password == "1234")) {
      let withdrawalAmount = Number(amount.value);
      // 출금할 금액 > 잔액
      if (withdrawalAmount > balance) {
        alert("출금 금액이 잔액보다 클 수 없습니다.");
        // 출금할 금액 <= 잔액
      } else {
        balance -= withdrawalAmount;
        console.log("출금 후 금액 : ", balance);
        document.getElementById("output").innerText = balance;
        alert(
          withdrawalAmount + '원이 출금되었습니다. 남은 잔액 : ' + balance + '원'
        );
      }
      // 비밀번호 불일치
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  }
}
