const { pid }  =require ('node:process');

// lan 1 
console.log(1);
const a = (a)=>{
    console.log(a);
}
// macro task 
setTimeout(() => {
  console.log(2);
});

// micro task 
new Promise((res, rej) => {
    console.log('p',3);
  res(3);
}).then((val) => {
  console.log(val);
}).then(()=>{
    a('22')
    console.log('chay vo');
});

// micro task 
new Promise((res, rej) => {
    console.log('p',5);
  res(5)
}).then((val) => {
  console.log(val);
})



console.log(pid);
console.log(4);
