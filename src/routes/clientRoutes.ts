import { auth } from '../middleware/authMiddleware'
import BaseRoutes from './baseRoutes'
import clientController from '../controllers/clientController'
import validate from '../middleware/validator/senderValidator'

class ClientRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post('/sender', validate, clientController.sender)
    }
}

export default new ClientRoutes().router