const me = {
    name: '길도흔',
    age: "21",
    militaryState: false,
};

const { militaryState, ...another } = me;
console.log(another);
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [zero, ...rest] = numbers;

console.log(rest);
