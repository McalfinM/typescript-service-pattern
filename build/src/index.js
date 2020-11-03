"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
require("./database");
//routes
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
class App {
    constructor() {
        this.app = express_1.default();
        this.plugins();
        this.routes();
        dotenv_1.config();
    }
    plugins() {
        this.app.use(body_parser_1.default.json());
        this.app.use(morgan_1.default("dev"));
        this.app.use(compression_1.default());
        this.app.use(helmet_1.default());
        this.app.use(cors_1.default());
    }
    routes() {
        this.app.use('/api/v1/auth', authRoutes_1.default);
    }
}
const port = 6000;
const app = new App().app;
app.listen(port, () => {
    console.log('port 6000');
});
