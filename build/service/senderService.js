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
const Receiver_1 = __importDefault(require("../models/Receiver"));
const Payment_1 = __importDefault(require("../models/Payment"));
class SenderService {
    constructor(req) {
        this.getAll = () => {
            const sender = Sender_1.default.find()
                .then((sender) => __awaiter(this, void 0, void 0, function* () {
                let data = [];
                for (let item of sender) {
                    let rowData = {};
                    rowData.sender = item;
                    const sender_id = item._id;
                    yield Receiver_1.default.findOne({ sender_id: sender_id }, (err, receiver) => {
                        rowData.receiver = receiver;
                    });
                    yield Payment_1.default.findOne({ sender_id: sender_id }, (err, payment) => {
                        rowData.data = payment;
                    });
                    data.push(rowData);
                }
                console.log(data);
                return data;
            }));
            return sender;
        };
        this.credential = req.app.locals.credential;
        this.body = req.body;
        this.params = req.params;
    }
}
exports.default = SenderService;
