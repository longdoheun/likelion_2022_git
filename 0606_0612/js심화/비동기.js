fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(console.log);
console.log('test');

// 프로미스의 상태
// 1. pending : 프로미스 처리중
// 2. Fulfiled : 프로미스 이행 (정상처리완료)
// 3. Rejected : 프로미스 실패 (처리완료. 하지만 비정상적으로.)