import express, { Application, Request, Response, request } from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import { config as dotenv } from 'dotenv'
import './database';


//routes
import authRoutes from './routes/authRoutes'
import senderRoutes from './routes/senderRoutes'
import receiverRoutes from './routes/receiverRoutes'
import clientRoutes from './routes/clientRoutes'
class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins()
        this.routes()
        dotenv()


    }
    protected plugins() {
        this.app.use(bodyParser.json())
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }
    protected routes(): void {
        this.app.use('/api/v1/auth', authRoutes);
        this.app.use('/api/v1/admin/sender', senderRoutes);
        this.app.use('/api/v1/admin/receiver', receiverRoutes);
        this.app.use('/api/v1/client', clientRoutes)
    }
}

const port: number = 6000
const app = new App().app;
app.listen(port, () => {
    console.log('port 6000')
});
