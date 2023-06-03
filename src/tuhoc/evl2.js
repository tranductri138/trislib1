console.log(1);

setImmediate(()=> {
    console.log('set Im');
})

setTimeout(()=> {
    console.log('settimeout');
})
const a = async()=> {
     new Promise(()=> {
        console.log('a2');
    })
}

 a().then(()=> {
    console.log('hihi');
 })
 
console.log(2)