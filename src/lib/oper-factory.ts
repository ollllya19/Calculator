import { Plus, Minus, Multiply, Devide, Left, Right, Operation } from "./operation";

export class OperFactory {

    public static factoryMethod(symbol: string): Operation {
        if (symbol === '+') return new Plus()
        if (symbol === '-') return new Minus()
        if (symbol === '*') return new Multiply()
        if (symbol === '/') return new Devide()
        if (symbol === '(') return new Left()
        if (symbol === ')') return new Right()
        return new Plus()
    }
}
