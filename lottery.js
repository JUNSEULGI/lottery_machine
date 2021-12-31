const startBtn = document.querySelector("button");

let numbers = [];
// 6개의 랜덤숫자가 저장될 배열을 만든다.

function makeNumber() {
  const randomNum = Math.ceil(Math.random() * 45);
  // 0~45까지 숫자가 랜덤으로 만들어진다. 0이 나올 가능성은 매우 희박하지만 존재한다.
  if (randomNum > 0) {
    return randomNum;
  }
}
// 1~45의 숫자를 만드는 함수. 0이 만들어질 경우 값을 리턴하지 않는다.

function addNumber() {
  numbers = [];
  // 이전에 만든 숫자들이 차있을 수 있기 때문에 배열을 비우고 시작함.
  for (let i = numbers.length; i < 6; i = numbers.length) {
    let num = makeNumber();

    for (let i = 0; i < numbers.length; i++) {
      if (num === numbers[i]) {
        console.log("중복 발생 :" + num);
        num = makeNumber();
        // 중복된 숫자 대신 새로운 랜덤숫자를 생성함.
        console.log("새로운 숫자 생성 :" + num);
        i = 0;
        // 중복 확인할 숫자가 새로 생성되었으므로 배열의 첫번째 요소부터 확인하기 위해 i를 0으로 바꿈.
      }
      // 생성된 숫자를 배열의 길이만큼 반복하여, 즉 각 요소 모두와 비교하여 중복 확인.
    }

    numbers.push(num);
    // 중복이 아닌지 확인된 후 배열에 추가.
  }
  // 배열의 길이가 6이 될 때까지 반복.
  console.log(numbers);
}

startBtn.addEventListener("click", addNumber);
