const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');

dayjs.extend(customParseFormat);
let date  = dayjs("2001-12-25", ["YYYY", "YYYY-MM-DD"], 'ja', true);
let date2 = dayjs("2001", ["YYYY", "YYYY-MM-DD"], 'ja', true);
console.log(date.locale('ja').format());  // => 2001-12-25T00:00:00+09:00
console.log(date2.locale('ja').format()); // => 2001-01-01T00:00:00+09:00


let date3 = dayjs("2001-25-12", ["YYYY", "YYYY-MM-DD"], 'ja', true);
let date4 = dayjs("2001-25-12", ["YYYY", "YYYY-MM-DD"], 'ja');
console.log(date3.locale('ja').format());  // => Invalid Date
console.log(date4.locale('ja').format());  // => 2001-01-01T00:00:00+09:00