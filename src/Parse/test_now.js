const dayjs = require('dayjs');

let now_utc = dayjs();
let now_jst = dayjs().locale('ja');
console.log( now_utc.toDate() );
// => 2021-04-30T00:09:31.085Z (こちらは0時)
console.log( now_jst.format() );
// => 2021-04-30T09:09:31+09:00 (こちらは9時.toDate()はUTCになってしまうので注意.)