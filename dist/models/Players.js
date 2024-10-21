"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Players = void 0;
class Players {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setPosition(position) {
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
    update(message) {
        console.log(`${this.name} ${message}`);
    }
}
exports.Players = Players;
