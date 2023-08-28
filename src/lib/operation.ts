export abstract class Operation {
    constructor() {}

    public abstract perform(num1: number, num2: number): number
    public abstract getProirity(): number
}

export class Plus extends Operation {

    public perform(num1: number, num2: number): number {
        return num1 + num2   
    }

    public getProirity() {
        return 1
    }
}

export class Minus extends Operation {

    public perform(num1: number, num2: number): number {
        return num1 - num2   
    }

    public getProirity() {
        return 1
    }
}

export class Multiply extends Operation {

    public perform(num1: number, num2: number): number {
        return num1 * num2   
    }

    public getProirity() {
        return 2
    }
}

export class Devide extends Operation {

    public perform(num1: number, num2: number): number | null {
        if (num2 === 0) 
            return null
        return num1 / num2   
    }

    public getProirity() {
        return 2
    }
}

export class Left extends Operation {

    public perform(num1: number, num2: number): number {
        return 0 
    }

    public getProirity() {
        return 0
    }
}

export class Right extends Operation {

    public perform(num1: number, num2: number): number {
        return 0 
    }

    public getProirity() {
        return 0
    }
}
