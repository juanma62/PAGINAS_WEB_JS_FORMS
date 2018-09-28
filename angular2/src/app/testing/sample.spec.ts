import {factorial} from './sample'

// Test Development Driven

describe('Factorial Testing', () => {
    it('factorial de 5 es 120', () => {
        expect(factorial(5)).toEqual(120)
    })
    it('factorial de 1 deberia ser 1', () => {
        expect(factorial(1)).toEqual(1)
    })
    it('factorial de 0 deberia ser undefined', () => {
        expect(factorial(0)).toBeUndefined()
    })
    it('factorial de numeros negativos deberia ser undefined', () => {
        expect(factorial(-3)).toBeUndefined()
    })
});