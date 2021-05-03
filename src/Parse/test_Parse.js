const dayjs = require('dayjs');

// JST:2021-04-30 00:00:00
// UTC:2021-04-29 15:00:00 (日本との差は-9時間のため)
console.log( dayjs('2021-04-30', 'YYYY-MM-DD').toDate() );
// => 2021-04-29T15:00:00.000Z (UTC)
console.log( dayjs('2021年04月30日', 'YYYY年MM月DD日').toDate() );
// => Invalid Date (日本語があるとパースできない.)

// プラグインを追加 
const CustomParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(CustomParseFormat);

console.log( dayjs('2021年04月30日', 'YYYY年MM月DD日').toDate() );
// => 2021-04-29T15:00:00.000Z (日本語があってもパースできる.)
console.log( dayjs('2021年04月30日', 'YYYY年MM月DD日').locale('ja').format() );
// => 2021-04-30T00:00:00+09:00 (日本でロケールしてみただけ.)