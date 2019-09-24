const fetch = require('node-fetch')

fetch('https://api.github.com/users/ericktz').then((res,rej)=>{
let  JSONres = JSON.stringify(res,undefined,1)
if (JSONres.statusText === 'OK'){
    console.log(JSONres)
}
else{
    console.log('Error no se encontrqwdqwewqo')
}

    
})