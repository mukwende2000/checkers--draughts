export default class PlayerTwo {
    constructor() {
        this.turn = false
        this.selectedPiece = null
    }
    static setTurn() {
        this.turn = !this.turn
    }
    static select(e) {
        this.selectedPiece = e.target
    }
    static movePiece(e) {
        e.target.innerHTML = this.selectedPiece
        this.setTurn()
    }

}


