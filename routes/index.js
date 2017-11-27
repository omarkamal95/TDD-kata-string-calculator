const express = require('express');
const router = express.Router();
let stringCalculator = require('../services/string-calculator')

router.get('/', (req, res) => {
    res.status(200).json('ok');
});

router.post('/multiply-strings', (req, res) => {
    let strings = req.body.strings
    try {
        let result = strings.reduce((res, delimitedString) => {
            let sum = stringCalculator.addDelimitedString(delimitedString);
            return res * sum;
        }, 1);
        res.status(200).send({ result });
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;