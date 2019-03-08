//jshint esversion:6
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    let results = num1 * num2;
    res.send(`<h3>${num1} X ${num2} = ${results}</h3>`);
});

app.get('/bmicalculator', function(req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', function(req, res) {
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let kgWeight = weight * 0.45359237;
    let mHeight = height * 0.0254;

    let rawBmi = kgWeight / (mHeight * mHeight).toFixed(2);
    let bmi = rawBmi.toFixed(2);

    res.send(`Your BMI is ${bmi}`)
})

app.listen(3000, function() {
    console.log('listening on port 3000');
});