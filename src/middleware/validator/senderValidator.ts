import { Request, Response, NextFunction } from 'express'
import { check, validationResult } from 'express-validator'

const validate = [
    check('fullName').isString(),
    check('country').isString(),
    check('addressOne').isString(),
    check('city').isString(),
    check('postCode').isString(),
    check('phone').isString(),
    check('email').isString().isEmail(),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).send({ errors: errors.array() })
        }
        return next()
    }
]

export default validate;