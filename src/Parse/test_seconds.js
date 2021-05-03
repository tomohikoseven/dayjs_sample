const dayjs = require('dayjs');

let date = dayjs.unix(0);
console.log( date.toDate() );
// => 1970-01-01T00:00:00.000Z

let date2 = dayjs.unix(1);
console.log( date2.toDate() );
// => 1970-01-01T00:00:01.000Z

let date3 = dayjs( 1 * 1000 );
console.log( date3.toDate() );
// => 1970-01-01T00:00:01.000Z dayjs()をラップしている.
