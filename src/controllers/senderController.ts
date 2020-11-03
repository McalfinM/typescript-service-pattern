import { Request, Response } from 'express';
import SenderService from '../service/senderService'
class SenderController {
    sender = async (req: Request, res: Response): Promise<Response> => {
        const service: SenderService = new SenderService(req);
        const sender = await service.getAll();

        return res.status(200).json({
            success: true,
            sender: sender
        })
    }
}

export default new SenderController();