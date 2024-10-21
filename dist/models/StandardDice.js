"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardDice = void 0;
class StandardDice {
    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }
}
exports.StandardDice = StandardDice;
