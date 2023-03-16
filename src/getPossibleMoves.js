export default function getPossibleMoves(e, player) {
    let possibleMoves = []
    const parentElement = e.target.parentElement.parentElement
    const prevRow = player === 'playerOne' ? parentElement.previousElementSibling : parentElement.nextElementSibling
    const prevRowSquares = Array.from(prevRow.querySelectorAll('.dark'))
    const currentRowSquares = Array.from(parentElement.querySelectorAll('.dark'))
    //  else {
        if(parentElement.classList.contains('even')) {
            if(e.target.parentElement === currentRowSquares[0]) {
                    possibleMoves.push(prevRowSquares[0])
                    possibleMoves[0].style.backgroundColor = 'green'
            } else {
                possibleMoves.push(prevRowSquares[currentRowSquares.indexOf(e.target.parentElement) - 1])
                possibleMoves.push(prevRowSquares[currentRowSquares.indexOf(e.target.parentElement)])
                possibleMoves[0].style.backgroundColor = 'green'
                possibleMoves[1].style.backgroundColor = 'green'
            }
        } else {
            if(e.target.parentElement === currentRowSquares[3]) {
                possibleMoves.push(prevRowSquares[3])
                possibleMoves[0].style.backgroundColor = 'green'
        } else {
            possibleMoves.push(prevRowSquares[currentRowSquares.indexOf(e.target.parentElement) + 1])
            possibleMoves.push(prevRowSquares[currentRowSquares.indexOf(e.target.parentElement)])
            possibleMoves[0].style.backgroundColor = 'green'
            possibleMoves[1].style.backgroundColor = 'green'
        }
    }
    // console.log(possibleMoves)

}