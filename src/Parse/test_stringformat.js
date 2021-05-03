const dayjs = require('dayjs');
// プラグイン
const customParseFormat = require('dayjs/plugin/customParseFormat');

dayjs.extend(customParseFormat); // プラグイン追加
let jst = dayjs('2021年10月18日', 'YYYY年MM月DD日', 'ja');
console.log(jst.locale('ja').format());

let jst_imp = dayjs('2021年10月32日', 'YYYY年MM月DD日', 'ja');
let jst_strict = dayjs('2021年10月32日', 'YYYY年MM月DD日', 'ja', true);

console.log(jst_imp.locale('ja').format());
// => 2021-11-01T00:00:00+09:00  第4引数がtrueでない場合、日付の繰り越しが起こる.
console.log(jst_strict.locale('ja').format());
// => Invalid Date 第4引数がtrueの場合、日付の厳密性がチェックされ、存在しない日付の場合、
//    エラー(Invalid Date)になる.