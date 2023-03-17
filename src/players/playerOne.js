export default class PlayerOne {
  constructor() {
    this.turn = true;
    this.selectedPiece = null;
  }

  getTurn() {
    return this.turn;
  }

  setTurn() {
    this.turn = !this.turn;
  }

  select(target) {
    this.selectedPiece = target;
  }

  movePiece(e) {
    e.target.innerHTML = this.selectedPiece;
    this.setTurn();
  }
}
