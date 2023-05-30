
const readline = require('readline')
const Introduction = ['Introduction to Docker', 'Features of Docker', 'Docker Architecture', 'Docker Hub', 'Docker Cloud']


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question('What is your name? ', (name) => {
    console.log(`Hello, ${name}!`)
    askQuestion(name)
})
const askQuestion = (name) => {
    rl.question('Topic : ', (name1) => {
        if (name1 === 'exit') {
            console.log('Pi pi ' + name);
            rl.close()
        } else if (name1 === 'docker') {
            console.log('Hi ' + name)
            console.log('This is : ' + Introduction)
            rl.question('Ur choose : ' , (choose) => {
                // choose()
                askQuestion(name)
            })
        }
        else {
            askQuestion(name)
        }

    })

}
