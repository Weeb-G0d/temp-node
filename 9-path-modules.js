
 const path = require('path');

 console.log(path.sep);

 const filePath = path.join('/NODE','sub-folder','text.txt');
 console.log(filePath);

 const base = path.basename(filePath);
 console.log(base);

 const absolute= path.resolve(__dirname,'NODE','subfolder','text.txt');
 console.log(absolute,__dirname,__filename)