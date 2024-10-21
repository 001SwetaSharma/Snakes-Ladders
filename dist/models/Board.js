"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
// Creating board using Singleton Design Patter
class Board {
    constructor(size) {
        this.snakes = new Map();
        this.ladders = new Map();
    }
    static getInstance(size) {
        if (this.instance) {
            return this.instance;
        }
        return this.instance = new Board(size);
    }
    addSnakes(start, end) {
        this.snakes.set(start, end);
    }
    addLadders(start, end) {
        this.ladders.set(start, end);
    }
    getSnakes() {
        return this.snakes;
    }
    getLadders() {
        return this.ladders;
    }
}
exports.Board = Board;
