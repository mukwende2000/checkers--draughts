import './index.css';
import PlayerOne from './players/playerOne';
import render from './render';

const playerone = new PlayerOne();

render();

// whitePiece.forEach((piece) => {
//   piece.addEventListener('click', (e) => {
//     if (playerone.getTurn()) {
//       playerone.select(e.target);
//       getPossibleMoves(e, 'playerOne');
//     }
//   });
// });

// document.addEventListener('click', (e) => {
//   if (e.target.classList.contains('possible-move')) {
//     e.target.appendChild(playerone.selectedPiece);
//     playerone.selectedPiece.parentElement.innerHTML = '';
//   }
// });
