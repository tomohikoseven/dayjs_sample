const dayjs = require('dayjs');

let date = dayjs(0);
console.log( date.toDate() );
// => 1970-01-01T00:00:00.000Z

let date1 = dayjs(1);
console.log( date1.toDate() );
// => 1970-01-01T00:00:00.001Z