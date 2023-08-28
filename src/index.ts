import * as readline from 'readline';
import { Calculator } from "./lib/calculator" 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.setPrompt("Введите выражение: ");
rl.prompt();

rl.on("line", function (line) {
    console.log(line)
    let result = Calculator.count(line)
    if (result === false)
        console.log('Невозможно вычислить значение\n ', result )
    else
        console.log(`Результат: ${result}\n`)

    rl.prompt();
})
.on("SIGINT", function () {
    rl.close();
})
