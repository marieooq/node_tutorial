// console.log('hello world');

//non blocking
//コールバック関数を渡す
// setTimeout(function() {
//   console.log('hello');
// }, 1000);
// //setTimeoutが終わるのを待たずに実行される
// console.log('world');

// blocking
const start = new Date().getTime();
while (new Date().getTime() < start + 1000);
//1秒たってから表示される
console.log('world');
