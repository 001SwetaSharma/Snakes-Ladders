import express from 'express';
import { Board } from './models/Board';
import { Client } from './models/Client';
const app = express();
const PORT: number = 9999;

const board = Board.getInstance(100);
const client = new Client();
client.addInput();
//board.addSnakes(30, 20);
//console.log(`Snakes added in the board :: ${JSON.stringify(Array.from(board.getSnakes()))}`);

app.listen(PORT, ()=> {
    console.log(`Server is running successfully on port :: ${PORT}`);
})