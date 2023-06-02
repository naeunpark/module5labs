const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const calculatorRouter = require('./routes/calculatorRoute.js');
const port = 3000;
const port2 = 8080;

app.use('/', express.static('public'))
app.use('/calculator', calculatorRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Exercise 1:
// Create multiple web servers that run on different ports

app.listen(port, () => {
    console.log(`Exercise app listening at http://localhost:${port}`);
})

app.listen(port2, () => {
    console.log(`Exercise app listening at http://localhost:${port2}`);
})