const dayjs = require('dayjs');

let utc = dayjs('2021-04-15T15:00:00.000Z');
console.log( utc.toDate() );

let jst = dayjs('2021-04-15T15:00:00.000+0900');
console.log( jst.locale('ja').format() ); // toDate()はUTC時間で出力される。