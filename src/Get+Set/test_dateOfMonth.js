const dayjs = require("dayjs");

let date = dayjs();
console.log( date.format() ); // => 2021-05-12T07:23:04+09:00
console.log( date.date() ); // => 12

console.log( date.date(13).format() ); // => 2021-05-13T07:23:04+09:00
console.log( date.date(32).format() ); // => 2021-06-01T07:23:04+09:00 (繰り上がり)