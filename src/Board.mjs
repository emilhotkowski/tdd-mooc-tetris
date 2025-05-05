export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = new Array(height);
    for(var i = 0; i < height; i++) {
      this.board[i] = new Array(width);
      this.board[i].fill(".");
    }
  }

  drop(block) {
    this.board[0][1] = block;
  }

  toString() {
    return this.board.map((x) => x.join("")).join("\n") + "\n";
  }
}
