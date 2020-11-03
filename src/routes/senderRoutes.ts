import { auth } from '../middleware/authMiddleware'
import BaseRoutes from './baseRoutes'
import senderController from '../controllers/senderController'


class senderRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get('/sender', senderController.sender)
    }
}

export default new senderRoutes().router