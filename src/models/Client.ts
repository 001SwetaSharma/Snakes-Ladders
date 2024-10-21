import { Board } from './Board';
import { Players } from './Players';
import { StandardDice } from './StandardDice';
import { Game, Move, ObstacleAddition } from '../services';

export class Client {
    private board: Board;

    constructor() {
        this.board = Board.getInstance(100);
    }

    public addInput(){
        const ladders: [number, number][] = [[1, 38], [4, 14], [9,30], [20, 42], [28, 80]];
        const snakes: [number, number][] = [ [15, 6], [40, 26], [50, 10], [61, 19], [99, 1]];

        const obstacleAddition: ObstacleAddition = new ObstacleAddition();
        obstacleAddition.addSnakes(this.board, snakes);
        obstacleAddition.addLadders(this.board, ladders);

        //console.log(`Ladders added to the board are :: ${JSON.stringify(Array.from(this.board.getLadders()))}`);
        //console.log(`Snakes added to the board are :: ${JSON.stringify(Array.from(this.board.getSnakes()))}`);

        const p1: Players = new Players('Sweta');
        //console.log(`${p1.getName()} position is :: ${p1.getPosition()}`);
        const p2: Players = new Players('Kartik');
        //console.log(`${p2.getName()} position is :: ${p2.getPosition()}`);
        const p3: Players = new Players('John');
        const p4: Players = new Players('Jack');

        const game: Game = new Game();
        game.addPlayers([p1, p2, p3, p4]);
        
        const standardDice: StandardDice = new StandardDice();
        const move = new Move();
        while(true) {
            const currPlayer: Players = game.getCurrentPlayer();
            //console.log(`current player :: ${JSON.stringify(game.getCurrentPlayer())}`);

            console.log(`${currPlayer.getName()} turn`);
            const diceNumber: number = standardDice.rollDice();
            console.log(`dice number :: ${diceNumber}`);

            //move the player ahead according to the dice number
            move.movePlayer(diceNumber, currPlayer, this.board);

            //notify to other players
            game.notifyAllPlayers(`:: ${currPlayer.getName()} has moved to position :: ${currPlayer.getPosition()}`, currPlayer.getName());
            if(currPlayer.getPosition() === this.board.getSize()) {
                //winner message
                game.notifyAllPlayers(`:: ${currPlayer.getName()} won the game`, currPlayer.getName());
                break;
            }

            game.nextTurn();
            console.log("*******************************************************************");
        }
    }
}

// keep your client clean, i mean only for invoking board and create a new service folder with a file called ObstableAddition
// pass the instance of the board to obstacleAddition and invoke its functions