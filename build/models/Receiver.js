"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ReceiverSchema = new mongoose_1.default.Schema({
    fullName: {
        type: String
    },
    country: {
        type: String
    },
    addressOne: {
        type: String
    },
    addressTwo: {
        type: String
    },
    addressThree: {
        type: String
    },
    city: {
        type: String
    },
    postCode: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    sender_id: {
        type: String,
        ref: 'sender'
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
const Receiver = mongoose_1.default.model('Receiver', ReceiverSchema);
exports.default = Receiver;
