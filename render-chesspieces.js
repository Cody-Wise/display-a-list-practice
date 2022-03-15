// import { chessPieces } from './chess-pieces-data.js';

export function renderChessPieces(pieces) {


    const chessEl = document.createElement('ul');
    

    chessEl.classList.add('chess');


    pieces.forEach((item)=>{
        let li = document.createElement('li');
        li.innerText = item;
        chessEl.appendChild(li);
    });



    return chessEl;

}