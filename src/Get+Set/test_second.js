const dayjs = require('dayjs');

let date = dayjs(); // 現在時刻
console.log( date.toDate() );
// => 2021-05-03T07:06:58.602Z
console.log( date.second() );
// => 58

console.log( date.second(31).toDate() );
// => 2021-05-03T07:06:31.602Z

console.log( date.second(0).second(60).toDate() ); // 繰り上がり
// => 2021-05-03T07:07:00.602Z