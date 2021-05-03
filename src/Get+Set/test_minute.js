const dayjs = require('dayjs');

let date = dayjs(); // 現在時刻
console.log( date.toDate() );
// => 2021-05-03T22:37:42.191Z
console.log( date.minute() );
// => 37

console.log( date.minute(31).toDate() );
// => 2021-05-03T22:31:42.191Z

console.log( date.minute(0).minute(60).toDate() ); // 繰り上がり
// => 2021-05-03T23:00:42.191Z
