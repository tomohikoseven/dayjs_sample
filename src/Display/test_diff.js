const dayjs = require('dayjs');

const date = dayjs('1983-07-06');  // 生年月日 
const base = dayjs('2021-05-06');  // 基準日
console.log( base.diff(date, 'year') );
// => 37.  baseの日付を基準に date が過去なら正、未来なら負の値.
console.log( date.diff(base, 'year') );