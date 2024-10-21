import { Players } from '../models/Players';

//check whether this is required or not
/* interface Player {
    name: string,
    position: number
};
 */
export class Game {
    private players: any;
    private currentPlayerPosition: number;

    constructor() {
        this.players = [];
        this.currentPlayerPosition = 0;
    }

    public addPlayers(players: any) {
        for(const player of players) {
            this.players.push(player);
        }
    }

    public getCurrentPlayer(): Players {
        return this.players[this.currentPlayerPosition];
    }

    public nextTurn(): void {
        this.currentPlayerPosition = (this.currentPlayerPosition + 1) % this.players.length;
    }

    public notifyAllPlayers(msg: string, currentPlayerName: string): void {
        for(const player of this.players) {
            if(player.getName() !== currentPlayerName) {
                player.update(msg);
            }
        }
    }
}