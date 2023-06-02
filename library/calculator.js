class Calculator {

    constructor(contents = []) {
        this.id = Math.floor(Math.random() * 100);
        this.queue = [...contents];
        console.log(this.id)
    }

    #log = (message) => {
        console.log(`The Calculator:${this.id}:${message}`)
    }
    plus(num1, num2) {
        let result = num1 + num2
        this.#log(result);
        return result
    }
    minus(num1, num2) {
        let result = num1 - num2
        this.#log(result);
        return result
    }
    multiply(num1, num2) {
        let result = num1 * num2
        this.#log(result);
        return result
    }
    divide(num1, num2) {
        let result = num1 / num2
        this.#log(result);
        return result
    }
}

module.exports = Calculator;