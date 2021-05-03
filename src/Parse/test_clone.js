const dayjs = require('dayjs');

let a = dayjs();
let b = a.clone();

console.log( a.toDate() ); // => 2021-05-02T00:18:31.274Z
console.log( b.toDate() ); // => 2021-05-02T00:18:31.274Z

a = dayjs();
b = dayjs(a);

console.log( a.toDate() ); // => 2021-05-02T00:18:31.325Z
console.log( b.toDate() ); // => 2021-05-02T00:18:31.325Z