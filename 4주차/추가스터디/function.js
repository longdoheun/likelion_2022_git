//유지보수나 효율성이 뛰어남

//function declarations 함수선언식

function printHello(){
  console.log("HELLO")
};

//function expresssin 함수 표현식
const hello = function (){//익명함수
  console.log("HELLO")
};

//세미콜론 찍기
//할당된 변수의 이름으로 부르는 것이 중요

function printFruit (name, price) {
  console.log(`${name} is ${price} won`);
}

//return
function sum(num1, num2){
  return num1 + num2;
  //return 뒤에는 실행되지 않음
  console.log("hello");
}

const sum_result = sum(20,30);

//예약어,키워드
//식별자 : 이름을 지어주는 것 
//연산자 : 프로그래밍 처리