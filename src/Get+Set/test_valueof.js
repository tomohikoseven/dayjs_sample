const dayjs = require('dayjs');

let date = dayjs();
let val = date.second();
console.log( date.toDate() );
// => 2021-05-02T23:49:27.050Z
console.log( val );
// => 27

let date2 = date.second(31);
console.log( date2.toDate() );
// => 2021-05-02T23:49:31.050Z

let date3 = dayjs( date2.valueOf() ); // valueOf() ミリ秒
console.log( date3.toDate() );
// => 2021-05-02T23:49:31.050Z