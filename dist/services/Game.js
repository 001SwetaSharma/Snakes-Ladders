"use strict";
//import { Players } from '../models/Players';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
;
class Game {
    constructor() {
        this.players = [];
        this.currentPlayerPosition = 0;
    }
    addPlayers(players) {
        console.log('for players............');
        console.log(players);
        for (const player of players) {
            this.players.push(player);
        }
    }
    getCurrentPlayer() {
        return this.players[this.currentPlayerPosition];
    }
    nextTurn() {
        this.currentPlayerPosition = (this.currentPlayerPosition + 1) % this.players.length;
    }
}
exports.Game = Game;
