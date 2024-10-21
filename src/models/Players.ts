import { Observer } from "../interface/Observer";

export class Players implements Observer {
    private name;
    private position;

    constructor(name: string){
        this.name = name;
        this.position = 0;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public setPosition(position: number): void {
        this.position = position;
    }

    public getPosition(): number {
        return this.position;
    }

    public update(message: string): void {
        console.log(`${this.name} ${message}`);
    }
}