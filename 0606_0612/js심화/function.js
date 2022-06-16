function returnMyName() {
    return "길도흔"; 
}

// arrow function
function add1 (a,b){
    return a+b;
}
const add2 = (a,b) => a+b;
const add3 = function (a,b) {return a+b} ;
//  일급 객체
// 1. 해당 타입이 변수에 할당될 수 있어야 한다.
// 2. 해당 타입이 함수의 인자로 넘어갈 수 있어야 한다.
// 3. 해당 타입이 함수의 반환값으로 반환될 수 있어야 한다.
// 함수도 일급객체

const button = document.querySelector("button")

const printClicked = () => {
    console.log("clicked!")
}

button.addEventListener("click", printClicked)

button.addEventListener("click", () => {
    console.log("clicked!")
})
