export class ObstacleAddition {

    public addSnakes(board: any, snakes: [number, number][]): void{

        for(const snake of snakes) {
            board.addSnakes(snake[0], snake[1]);
        }
    }

    public addLadders(board: any, ladders: [number, number][]): void {
        for(const ladder of ladders) {
            board.addLadders(ladder[0], ladder[1]);
        }
    }
}