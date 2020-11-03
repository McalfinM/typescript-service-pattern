"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Authentication_1 = __importDefault(require("../utils/Authentication"));
const db = require('../../src/db/models');
class authController {
    constructor() {
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let { name, email, password } = req.body;
            const hashedPassword = yield Authentication_1.default.hash(password);
            // const validasi = await db.yuza
            // if (validasi !== 0) {
            //     return res.status(400).json('email already register')
            // }
            const yuza = yield db.yuza.create({ name, email, password: hashedPassword });
            return res.send(yuza);
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const user = yield db.yuza.findOne({
                where: { email }
            });
            const compare = yield Authentication_1.default.passwordCompare(password, user.password);
            if (compare) {
                const token = yield Authentication_1.default.generateToken(user.id, user.name, email);
                return res.status(200).json({
                    tokenType: 'Bearer',
                    access_token: token,
                });
            }
            return res.status(401).json('Unauthorized');
        });
        this.profile = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const profile = req.app.locals.credential;
            return res.status(200).json(profile);
        });
    }
}
exports.default = new authController();
