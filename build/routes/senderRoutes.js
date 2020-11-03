"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
const senderController_1 = __importDefault(require("../controllers/senderController"));
class senderRoutes extends baseRoutes_1.default {
    routes() {
        this.router.get('/sender', senderController_1.default.sender);
    }
}
exports.default = new senderRoutes().router;
