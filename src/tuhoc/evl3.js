const promise1 = () => {
    return new Promise((res , rej) => {
        res(3)
        console.log('run');
    }).then((val)=>{
        console.log(val);
    })
}
console.log(1);
const a = async() => {
    await promise1()
    console.log(2)
    return 'a'
}
a()
console.log('e');