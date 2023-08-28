import { Stack } from 'stack-typescript';
import { OperFactory } from './oper-factory';
import { Operation } from './operation';

export class Calculator {
    static operators: string = '+-*/'

    constructor(){}

    private static calculate(operStack: Stack<Operation>, numStack: Stack<number>): boolean {
        const a: number = numStack.pop()
        const b: number = numStack.pop()
        const oper: Operation = operStack.pop()
        const rez = oper.perform(a, b)

        if (rez === null) 
            return false

        numStack.push(rez)
        return true
    }
    
    public static count(input: string): number | boolean {

        let operStack = new Stack<Operation>()
        let numStack = new Stack<number>()

        for (let i = 0; i < input.length; i++) {
            
            if (input[i] === ' ') 
                continue
            else if (!!Number(input[i])) {
                let num = input[i]
                while(i + 1 < input.length && (Number(input[i + 1]) || input[i + 1] === '.')){
                    num += input[i + 1]
                    i += 1
                }
                numStack.push(Number(num))
                continue
            }
            else if (input[i] === '(') {
                operStack.push(OperFactory.factoryMethod(input[i]))
                continue
            }
            else if (input[i] === ')') {

                while(operStack.top.getProirity() !== 0) {
                    Calculator.calculate(operStack, numStack)
                }
                operStack.pop()
                continue
            }
            else if (Calculator.operators.includes(input[i])) {
                if (operStack.size === 0) {
                    operStack.push(OperFactory.factoryMethod(input[i]))
                    continue
                }
                if (OperFactory.factoryMethod(input[i]).getProirity() > operStack.top.getProirity()) {
                    operStack.push(OperFactory.factoryMethod(input[i]))
                    continue
                }
                if (OperFactory.factoryMethod(input[i]).getProirity() <= operStack.top.getProirity()) {
                    operStack.push(OperFactory.factoryMethod(input[i]))
                    if (!Calculator.calculate(operStack, numStack))
                        return false
                    continue
                }
            }
            else {
                return false
            }
        }

        while(operStack.size !== 0) {
            if (!Calculator.calculate(operStack, numStack))
                return false
        }

        return numStack.top
    }
}
