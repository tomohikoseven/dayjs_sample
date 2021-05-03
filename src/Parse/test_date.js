const dayjs = require('dayjs');

var d = new Date(2019, 7, 18); // monthは0-11を指定し、1月-12月を扱う罠.
var day = dayjs(d);

console.log( d );  // => 2019-08-17T15:00:00.000Z
console.log( day.toDate() );  // => 2019-08-17T15:00:00.000Z