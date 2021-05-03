const dayjs = require('dayjs');

let date = dayjs(); // 現在時刻
console.log( date.toDate() );
// => 2021-05-03T06:44:46.434Z
console.log( date.millisecond() );
// => 434

console.log( date.millisecond(150).toDate() );
// => 2021-05-03T06:44:46.150Z

console.log( date.millisecond(0).millisecond(1000).toDate() ); // 繰り上がり
// => 2021-05-03T06:44:47.000Z