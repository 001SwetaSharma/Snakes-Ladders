import { DiceStrategy } from "../interface/DiceStrategy";

export class LoadedDice implements DiceStrategy {
    public rollDice(): number {
        return Math.floor(Math.random() * 3) + 4;
    }
}