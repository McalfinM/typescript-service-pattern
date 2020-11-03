import { Request, Response, NextFunction } from 'express'
import Sender from '../models/Sender'
import Receiver from '../models/Receiver'

class ClientService {
    credential: {
        id: number
    };

    body: Request['body'];
    params: Request['params'];

    constructor(req: Request) {
        this.credential = req.app.locals.credential
        this.body = req.body
        this.params = req.params
    }

    sender = async () => {
        const { fullName, country, addressOne, addressTwo, addressThree, city
            , postCode, phone, email } = this.body
        const sender = await Sender.create({
            fullName,
            country,
            addressOne,
            addressTwo,
            addressThree,
            city,
            postCode,
            phone,
            email
        });

        return sender;
    }

    receiver = async () => {
        const { sender_id, purpose, service, type, items, vovlume
            , weights, price, packageName } = this.body
        const sender = await Sender.create({
            sender_id,
            purpose,
            service,
            type,
            items,
            vovlume,
            weights,
            price,
            packageName
        });

        return sender;
    }
}

export default ClientService