import { auth } from '../middleware/authMiddleware'
import BaseRoutes from './baseRoutes'
import receivercontroller from '../controllers/receiverController'

class receiverRoutes extends BaseRoutes {
    public routes(): void {
    }
}

export default new receiverRoutes().router