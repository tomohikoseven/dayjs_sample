const dayjs = require('dayjs');

// プラグイン 追加
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

console.log( dayjs( '20210102', 'YYYYMMDD' ).isValid() ); // => true
console.log( dayjs( '20210132', 'YYYYMMDD' ).isValid() ); // => true
console.log( dayjs( '20210102', 'YYYYMMDD', true ).isValid() ); // => true
console.log( dayjs( '20210132', 'YYYYMMDD', true ).isValid() ); // => false
console.log( dayjs( '2021013a', 'YYYYMMDD', true ).isValid() ); // => false
