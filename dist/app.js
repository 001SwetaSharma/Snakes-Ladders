"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Board_1 = require("./models/Board");
const Client_1 = require("./models/Client");
const app = (0, express_1.default)();
const PORT = 9999;
const board = Board_1.Board.getInstance(100);
const client = new Client_1.Client();
client.addInput();
//board.addSnakes(30, 20);
//console.log(`Snakes added in the board :: ${JSON.stringify(Array.from(board.getSnakes()))}`);
app.listen(PORT, () => {
    console.log(`Server is running successfully on port :: ${PORT}`);
});
