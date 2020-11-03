"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PaymentSchema = new mongoose_1.default.Schema({
    sender_id: {
        type: String
    },
    purpose: {
        type: String
    },
    service: {
        type: String
    },
    type: {
        type: String,
    },
    items: {
        type: String,
    },
    volume: {
        type: String
    },
    weights: {
        type: String
    },
    price: {
        type: String
    },
    packageName: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: null
    }
});
const Payment = mongoose_1.default.model('Payment', PaymentSchema);
exports.default = Payment;
