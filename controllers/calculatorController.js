const Calculator = require("../library/calculator.js")

const calculator1 = new Calculator();

const plusNumbers = (req, res) => {

    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = calculator1.plus(number1, number2)
    res.status(200);
    res.send({ result: sum })

}

const minusNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = calculator1.minus(number1, number2)
    res.status(200);
    res.send({ result: sum })
}

const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = calculator1.multiply(number1, number2)
    res.status(200);
    res.send({ result: sum })
}

const divideNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = calculator1.divide(number1, number2)
    res.status(200);
    res.send({ result: sum })
}
module.exports = { plusNumbers, minusNumbers, multiplyNumbers, divideNumbers }