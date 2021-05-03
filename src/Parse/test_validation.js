const dayjs = require('dayjs');
// プラグイン
const customParseFormat = require('dayjs/plugin/customParseFormat');

// プラグインを追加 
dayjs.extend(customParseFormat);

let date = dayjs('2021-03-19', 'YYYY-MM-DD', true);
console.log( date.isValid() ); // => true

let date2 = dayjs('2021-15-19', 'YYYY-MM-DD', true);
console.log( date2.isValid() ); // => false

// 日付の形式が合っていればOKのやりかた。
let date3 = dayjs('2021-13-19', 'YYYY-MM-DD');
console.log( date4.isValid() ); // => true. 日付の形式が合っていればOKとなる。
console.log( date3.toDate() );
// => 2022-01-18T15:00:00.000Z
// 日付を勝手に繰り上げする.