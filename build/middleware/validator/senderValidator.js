"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validate = [
    express_validator_1.check('fullName').isString(),
    express_validator_1.check('country').isString(),
    express_validator_1.check('addressOne').isString(),
    express_validator_1.check('city').isString(),
    express_validator_1.check('postCode').isString(),
    express_validator_1.check('phone').isString(),
    express_validator_1.check('email').isString().isEmail(),
    (req, res, next) => {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send({ errors: errors.array() });
        }
        return next();
    }
];
exports.default = validate;
