const me = {
    name: "길도흔",
    age: "221"
};

const name = me.name;

const { name, age } = me;
console.log(name);

const a = obj.a;
const { a,b } = obj;
// 인자의 순서대로 할당
const [ a, b ] = arr;