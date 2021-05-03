const dayjs = require('dayjs');

let date = dayjs(); // 現在時刻
console.log( date.toDate() );
// => 2021-05-03T22:44:14.379Z
console.log( date.hour() );
// => 7 (日本で実行しているので、日本時間の7時.)

console.log( date.hour(20).toDate() );
// => 2021-05-04T11:44:14.379Z
// 日本時間の20時を設定したが、UTC時間を表示するので、-9時間して11時.

console.log( date.hour(0).hour(24).toDate() ); // 繰り上がり
// => 2021-05-04T15:44:14.379Z
// 5/4に日本で実行しているので 5/5 になるが、UTC時間を表示しているので、-9時間して15時.

