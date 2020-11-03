import { Request, Response } from 'express';
import Authentication from '../utils/Authentication'
import Admin from '../models/User'

class authController {
    register = async (req: Request, res: Response): Promise<Response> => {
        let { name, email, password } = req.body
        const hashedPassword: string = await Authentication.hash(password)
        // const validasi = await db.yuza
        // if (validasi !== 0) {
        //     return res.status(400).json('email already register')
        // }
        const admin = await Admin.create({ name, email, password: hashedPassword })

        return res.send(admin);
    }

    login = async (req: Request, res: Response): Promise<Response> => {
        const { email, password } = req.body
        console.log(email, password);
        const admin = await Admin.findOne({ email: email });
        console.log(admin)
        // if (admin === null) {
        //     return res.status(404).json({
        //         message: 'cant search admin'
        //     })
        // }
        if (admin.status === 'active') {
            const compare = await Authentication.passwordCompare(password, admin.password)
            if (compare) {
                const token = await Authentication.generateToken(admin.id, admin.name, email);
                admin.password = undefined;
                return res.status(200).json({

                    tokenType: 'Bearer',
                    access_token: token,
                    user: admin
                })
            }
        }



        return res.status(401).json('Unauthorized')

    }
    profile = async (req: Request, res: Response) => {
        const profile = req.app.locals.credential
        return res.status(200).json(profile)
    }


}

export default new authController();