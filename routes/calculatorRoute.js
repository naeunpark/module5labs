const express = require("express");
const calculatorController = require("../controllers/calculatorController.js")
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello World!")
})

// Exercise 2:
// Using the examples from slides 31 - 35, create a full backend calculator that can do 4 different operations (plus, minus, multiply, divide)
router.get('/plus', (req, res) => {
    calculatorController.plusNumbers(req, res)
})

router.get('/minus', (req, res) => {
    calculatorController.minusNumbers(req, res)
})

router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumbers(req, res)
})

router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req, res)
})

module.exports = router;