import getBoard from './board';

const rows = document.querySelectorAll('.row');
export default function render() {
  getBoard().forEach((row, rowNumber) => {
    row.forEach((piece, pieceNumber) => {
      rows[rowNumber].children[pieceNumber].innerHTML = piece;
    });
  });
}

// export default class Render {
//   static highlightPossibleMoves(possibleMoves) {
//     possibleMoves.forEach((move) => {
//       move.style.backgroundColor = 'green';
//     });
//   }
// }
