const express = require('express');
const fs = require("fs");
const { v4 } = require('uuid');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const execJava = require('../executors/javaExecutor');

router.post('/', [
    check('code', 'Please enter code').not().isEmpty(),
    check('language', 'Please specify the language').not().isEmpty()
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    var { code, language, input } = req.body;
    const random = v4();

    fs.writeFile(`${random}.java`, code, (err) => {
        input = !input ? "" : input;
        execJava(res, input, random);
    })
});

module.exports = router;