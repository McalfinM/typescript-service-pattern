import { Request, Response } from 'express';
import clientService from '../service/clientService'
class ClientController {
    sender = async (req: Request, res: Response): Promise<Response> => {
        const service: clientService = new clientService(req);
        const sender = await service.sender();

        return res.status(200).json({
            success: true,
            sender: sender
        })
    }
    receiver = async (req: Request, res: Response): Promise<Response> => {
        const service: clientService = new clientService(req);
        const sender = await service.receiver();

        return res.status(200).json({
            success: true,
            sender: sender
        })
    }
}

export default new ClientController();