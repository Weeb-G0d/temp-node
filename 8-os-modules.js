const user = require('os');
console.log(user.userInfo());

const obj = {
    
    type: user.type(),
    totalmem : user.totalmem(),
    freemem:user.freemem(),
    uptime: user.uptime()
}

console.log(obj);
console.log(user.uptime());
