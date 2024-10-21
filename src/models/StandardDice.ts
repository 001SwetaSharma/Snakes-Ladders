import { DiceStrategy } from '../interface/DiceStrategy';
export class StandardDice implements DiceStrategy{
    public rollDice(): number {
        return Math.floor(Math.random() * 6) + 1;
    }
}