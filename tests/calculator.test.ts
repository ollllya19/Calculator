import { Calculator } from "../src/lib/calculator" 

describe('Вычисление значений выражений:', () => {
    test('Математические выражения с целыми числами:', () => {
        expect(Calculator.count('100+20*3/2')).toBe(130)
    })
    
    test('Десятично-дробные числа:', () => {
        expect(Calculator.count('2.2+3.313')).toBe(5.513)
    })
    
    test('Проверка скобок:', () => {
        expect(Calculator.count('(1+2)*(3+7)')).toBe(30)
    })
})