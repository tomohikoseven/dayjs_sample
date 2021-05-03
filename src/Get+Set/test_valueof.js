const dayjs = require('dayjs');

let date2 = dayjs().second(31);
console.log( date2.toDate() );
// => 2021-05-03T06:22:31.195Z

let millisec = date2.valueOf(); // valueOf() ミリ秒
console.log( millisec );
// => 1620022951195
let date3 = dayjs( millisec ); 
console.log( date3.toDate() );
// => 2021-05-03T06:22:31.195Z