const {readFileSync,writeFileSync} = require('fs');
const first =readFileSync('./sub-folder/text.txt','utf-8');
console.log(first);
writeFileSync('./sub-folder/result.txt','here is the result',{flag:'a'}) ;

