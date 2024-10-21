// Creating board using Singleton Design Patter
export class Board {
    private static instance: Board;
    private size: number;
    private snakes: Map<number, number>;
    private ladders: Map<number, number>;

    private constructor(size: number) {
        this.snakes = new Map<number, number>();
        this.ladders = new Map<number, number>();
        this.size = size;
    }

    public static getInstance(size: number): Board {
        if(this.instance) {
            return this.instance;
        }
        return this.instance = new Board(size);
    }

    public getSize(): number {
        return this.size;
    }

    public addSnakes(start: number, end: number): void {
        this.snakes.set(start, end);
    }

    public addLadders(start: number, end: number): void {
        this.ladders.set(start, end);
    }

    public getSnakes(): Map<number, number> {
        return this.snakes;
    }

    public getLadders(): Map<number, number> {
        return this.ladders;
    }
}