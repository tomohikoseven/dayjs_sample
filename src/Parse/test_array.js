const dayjs = require('dayjs');
const ArraySupport = require('dayjs/plugin/arraySupport');

dayjs.extend(ArraySupport);

// [ 年、月、日、時、分、秒、ミリ秒 ]
let date = dayjs([2010, 1, 14, 15, 25, 50, 125]);
console.log( date.toDate() );
// => 2010-02-14T06:25:50.125Z
// month部分は0-11を指定することで、1月-12月を表します。
// ログ出力ではUTC時間になるため、時刻が9時間前となります。 

let date2 = dayjs([2010, 6]);     // July 1st
console.log( date2.toDate() );
// => 2010-06-30T15:00:00.000Z
// month:6 は7月のこと。7/1 00:00:00から-9時間となり、6/30 15:00:00となる。 
// UTC時間は面倒だ。

