"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObstacleAddition = void 0;
class ObstacleAddition {
    addSnakes(board, snakes) {
        for (const snake of snakes) {
            board.addSnakes(snake[0], snake[1]);
        }
    }
    addLadders(board, ladders) {
        for (const ladder of ladders) {
            board.addLadders(ladder[0], ladder[1]);
        }
    }
}
exports.ObstacleAddition = ObstacleAddition;
