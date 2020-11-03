import { Request, Response, NextFunction } from 'express'
import Sender from '../models/Sender'
import Receiver from '../models/Receiver'
import Payment from '../models/Payment'

class SenderService {
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

    getAll = () => {

        const sender = Sender.find()
            .then(async sender => {
                let data = [];
                for (let item of sender) {
                    let rowData = {};
                    rowData.sender = item;
                    const sender_id = item._id;
                    await Receiver.findOne({ sender_id: sender_id }, (err, receiver) => {
                        rowData.receiver = receiver
                    });
                    await Payment.findOne({ sender_id: sender_id }, (err, payment) => {
                        rowData.data = payment
                    });
                    data.push(rowData);
                }
                console.log(data)
                return data;
            })
        return sender;
    }
}

export default SenderService