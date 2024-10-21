"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadedDice = void 0;
class LoadedDice {
    rollDice() {
        return Math.floor(Math.random() * 3) + 4;
    }
}
exports.LoadedDice = LoadedDice;
