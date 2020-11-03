"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseRoutes_1 = __importDefault(require("./baseRoutes"));
const clientController_1 = __importDefault(require("../controllers/clientController"));
const senderValidator_1 = __importDefault(require("../middleware/validator/senderValidator"));
class ClientRoutes extends baseRoutes_1.default {
    routes() {
        this.router.post('/sender', senderValidator_1.default, clientController_1.default.sender);
    }
}
exports.default = new ClientRoutes().router;
