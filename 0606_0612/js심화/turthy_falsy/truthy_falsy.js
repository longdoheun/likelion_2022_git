// Truthy Falsy
// prompt 입력창을 띄워줌
const input = prompt();
if (!input){
    console.log("입력값이 없습니다.")
}
if (input === ""){
    console.log("입력값이 없습니다.")
}
console.log(input);
!""//=>ture
!"hello"//=>false
!undefined//=> true
!null//=> true
!0//=> true
!''//=> true
!NaN//=> true