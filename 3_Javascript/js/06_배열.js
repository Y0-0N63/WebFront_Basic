// 배열 선언 및 기초 사용법
function check1() {
  const arr1 = new Array();
  const arr2 = new Array(3);
  const arr3 = [];
  const arr4 = ["사과", "바나나", "딸기"];

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  console.log(arr4);
  
  console.log(arr1.length);
  console.log(arr2.length);
  console.log(arr3.length);
  console.log(arr4.length);

  // 배열의 index
  // 배열명[index] > 해당 인덱스에 저장된 데이터 반환
  console.log(arr4[0]);
  console.log(arr4[1]);
  console.log(arr4[2]);

  // 배열명[index] = 값;
  arr2[0] = 100;
  arr2[1] = "저녁 뭐 먹지";
  arr2[2] = true;

  // JS 배열의 특징 : 인덱스별로 자료형을 다르게 지정할 수 있다
  console.log(arr2);

  // 길이 제한이 없다 > 값을 배열에 원하는 만큼 추가 가능
  arr1[0] = "가";
  arr1[1] = "나";
  arr1[2] = "다";
  console.log(arr1);
  
  arr1[4] = "마";
  // (5) ['가', '나', '다', 비어 있음, '마']0: "가"1: "나"2: "다"4: "마"length: 5[[Prototype]]: Array(0)
  // 원하는 index에 값을 마음대로 추가할 수 있다 > 중간에 건너뛴 index는 빈칸으로 채워짐
  console.log(arr1);
}

function check2() {
  // 일반 for문을 이용해 배열 요소 초기화
  const arr = [];
  for(let i = 0; i <= 3; i++) {
    arr[i] = i * 10;
  }
  console.log(arr)

  // for...of문 사용해 요소에 접근하기
  for(const value of arr) {
    console.log(value);
  }

  // forEach문 사용해 요소에 접근하기
  arr.forEach((value, index) => {
    console.log(index, value);
  });
}