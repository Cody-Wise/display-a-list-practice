// import functions and grab DOM elements

import { chessPieces } from './chess-pieces-data.js';
import { renderChessPieces } from './render-chesspieces.js';
import { magazines } from './magazines-data.js';
import { renderMagazines } from './render-magazines.js';
import { starWars } from './star-wars-data.js';
import { renderStarWars } from './render-star-wars.js';

const chessContainerEl = document.querySelector('.chesspieces');


// const chessPieceListEl = document.querySelector('.chesspieces');

// for (let chessPiece of chessPieces) {
//     const chessPieceEl = renderChessPieces(chessPiece);

//     chessPieceListEl.append(chessPieceEl);
// }

const chessEl = renderChessPieces(chessPieces);

chessContainerEl.append(chessEl);

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const magazineContainerEl = document.querySelector('.magazines-container');

for (let magazine of magazines){
    const magazineEl = renderMagazines(magazine);

    magazineContainerEl.append(magazineEl);
}

const starWarsContainerEl = document.querySelector('.star-wars-container');

for (let hero of starWars){


    const starWarsEl = renderStarWars(hero);

    starWarsContainerEl.append(starWarsEl);
}


