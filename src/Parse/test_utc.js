const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);

let date = dayjs();
console.log( date.format() );
// => 2021-05-02T09:10:25+09:00
// 日本で実行しているので、format()は日本時間が出力される。
let date_utc = dayjs().utc();
console.log( date_utc.format() );
// => 2021-05-02T00:10:25Z
// 日本で実行していても、format()はUTC時間で出力される。 