// window.setTimeout();
document.getElementById("btn1").addEventListener("click", () => {
  // window.setTimeout(함수, 지연시간(ms));
  window.setTimeout(function () {
    alert("3초 후 출력");
  }, 3000);
});

// 현재 시간을 문자열로 반환하는 함수
function currentTime() {
  const now = new Date();
  let hour = now.getHours(); // 시
  let min = now.getMinutes(); // 분
  let sec = now.getSeconds(); // 초

  // 1의 자리만 나올 때에는 앞에 0 붙여주기
  if (hour < 10) hour = "0" + hour;
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  return hour + " : " + min + " : " + sec;
}

let interval; // setInterval을 저장하기 위한 변수

// window.setInterval()
function clockFn() {
  const clock = document.querySelector("#clock");
  clock.innerText = currentTime();
  // window.setInterval()에서 window는 생략 가능
  interval = setInterval(function () {
    clock.innerText = currentTime();
  }, 1000);
}

clockFn();

document.getElementById("stop").addEventListener("click", () => {
  window.clearInterval(interval);
});