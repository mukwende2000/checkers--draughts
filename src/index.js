import './index.css'
import PlayerTwo from './players/playerTwo'
import getPossibleMoves from './getPossibleMoves'

const whitePiece = document.querySelectorAll('.white-piece')
whitePiece.forEach(piece => {
    piece.addEventListener('click', (e) => {
        getPossibleMoves(e, 'playerOne')
    })
})