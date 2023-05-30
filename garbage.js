const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`Memory usage: ${used} MB`);

// Run some code that creates garbage
let arr = [];
for (let i = 0; i < 1000000; i++) {
  arr.push(Math.random());
}


const used2 = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`Memory usage after creating garbage: ${used2} MB`);
//--expose-gc
// Call garbage collector
global.gc()

const used3 = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`Memory usage after garbage collection: ${used3} MB`);