
const {readFile , writeFile} = require('fs');
const example = async()=>{
await readFile('./sub-folder/text.txt','utf-8',(err,result)=>{
    if (err){
        console.log(err);
        return;
    }
    const first = result;
     readFile('./sub-folder/text2.txt','utf-8',(err,result)=>{
        if (err){
            console.log(err);
            return ;
            
        }
        const second = result;
        writeFile('./sub-folder/async.txt',`${first} ${second}`,{flag: 'a'},(err,result)=>{
            if (err){
                console.log(err);
                return ;
                
            }
            console.log(result);
        });
    })
})
}
example();
 