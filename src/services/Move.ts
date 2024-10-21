import { Board } from '../models/Board';
import { Players } from '../models/Players';

export class Move {
    public movePlayer(diceNumber: number, currentPlayer: Players, board: Board): void {

        let newPosition: number = currentPlayer.getPosition() + diceNumber;

        if(newPosition >= board.getSize()) {
            newPosition = board.getSize();
        } else {
            if(board.getSnakes().has(newPosition)){
                const snakeEndPosition = board.getSnakes().get(newPosition);
                if(snakeEndPosition !== undefined) {
                    newPosition = snakeEndPosition;
                }
            }

            if(board.getLadders().has(newPosition)) {
                const ladderEndPosition = board.getLadders().get(newPosition);
                if(ladderEndPosition !== undefined) {
                    newPosition = ladderEndPosition;
                }
            }
        }

        currentPlayer.setPosition(newPosition);
    }
}