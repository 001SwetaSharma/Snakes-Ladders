"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const Board_1 = require("./Board");
const Players_1 = require("./Players");
const ObstacleAddition_1 = require("../services/ObstacleAddition");
const Game_1 = require("../services/Game");
const StandardDice_1 = require("./StandardDice");
class Client {
    constructor() {
        this.board = Board_1.Board.getInstance(100);
    }
    addInput() {
        const ladders = [[1, 38], [4, 14], [9, 30], [20, 42], [28, 80]];
        const snakes = [[15, 6], [40, 26], [50, 10], [61, 19], [99, 1]];
        const obstacleAddition = new ObstacleAddition_1.ObstacleAddition();
        obstacleAddition.addSnakes(this.board, snakes);
        obstacleAddition.addLadders(this.board, ladders);
        console.log(`Ladders added to the board are :: ${JSON.stringify(Array.from(this.board.getLadders()))}`);
        console.log(`Snakes added to the board are :: ${JSON.stringify(Array.from(this.board.getSnakes()))}`);
        const p1 = new Players_1.Players('Sweta');
        console.log(`${p1.getName()} position is :: ${p1.getPosition()}`);
        const p2 = new Players_1.Players('Kartik');
        console.log(`${p2.getName()} position is :: ${p2.getPosition()}`);
        const game = new Game_1.Game();
        game.addPlayers([p1, p2]);
        const standardDice = new StandardDice_1.StandardDice();
        while (true) {
            const currPlayer = game.getCurrentPlayer();
            console.log(`current player :: ${JSON.stringify(game.getCurrentPlayer())}`);
            const diceNumber = standardDice.rollDice();
            console.log(`dice number :: ${diceNumber}`);
            //move the player ahead according to the dice number
            break;
        }
    }
}
exports.Client = Client;
// keep your client clean, i mean only for invoking board and create a new service folder with a file called ObstableAddition
// pass the instance of the board to obstacleAddition and invoke its functions
