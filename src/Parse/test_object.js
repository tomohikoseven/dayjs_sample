const dayjs = require('dayjs');
const ObjectSupport = require('dayjs/plugin/objectSupport'); // プラグイン

// プラグイン追加.
dayjs.extend(ObjectSupport);
let now = dayjs();
let date = dayjs({ hour:15, minute:10 });
console.log( now.toDate() );
// => 2021-05-01T07:51:36.994Z
console.log( date.toDate() );
// => 2021-05-01T06:10:00.000Z
// 当日の日本時間15時10分を指す?。UTCにすると9時間前なので、6時10分となる。

now = dayjs();
let date2 = dayjs({});  // 空のオブジェクトは現在日時
console.log( now.toDate() );
// => 2021-05-01T07:54:59.148Z
console.log( date2.toDate() );
// => 2021-05-01T07:54:59.148Z

let date3 = dayjs({ year :2010, month :3, day :5, hour :15, minute :10, second :3, millisecond :123});
console.log( date3.toDate() );
// => 2010-04-05T06:10:03.123Z
// monthは0-11の整数で、1月-12月を表す.