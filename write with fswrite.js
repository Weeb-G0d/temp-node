const fs= require('node:fs/promises');

const example = async ()=>{
    try{
          const msg = "Hello";
          await fs.writeFile('test.txt',msg);

    }
    catch(err){
        console.log(err);
    }
}
 example();