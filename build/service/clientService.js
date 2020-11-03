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
const Sender_1 = __importDefault(require("../models/Sender"));
class ClientService {
    constructor(req) {
        this.sender = () => __awaiter(this, void 0, void 0, function* () {
            const { fullName, country, addressOne, addressTwo, addressThree, city, postCode, phone, email } = this.body;
            const sender = yield Sender_1.default.create({
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
        });
        this.receiver = () => __awaiter(this, void 0, void 0, function* () {
            const { sender_id, purpose, service, type, items, vovlume, weights, price, packageName } = this.body;
            const sender = yield Sender_1.default.create({
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
        });
        this.credential = req.app.locals.credential;
        this.body = req.body;
        this.params = req.params;
    }
}
exports.default = ClientService;
