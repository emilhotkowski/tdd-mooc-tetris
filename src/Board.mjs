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

  tick() {
    for(var i = this.height-2; i >= 0; i--) { // TODO: make sure height is at least 1
      for(var j = 0; j < this.width; j++) {
        if(this.board[i][j] == 'X' && this.board[i+1][j] =='.') {
          [this.board[i][j], this.board[i+1][j]] = [this.board[i+1][j], this.board[i][j]];
        }
      }
    }
  }

  toString() {
    return this.board.map((x) => x.join("")).join("\n") + "\n";
  }
}
