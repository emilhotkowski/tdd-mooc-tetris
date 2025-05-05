export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.hasFallingBlock = false;
    this.board = new Array(height);
    for(var i = 0; i < height; i++) {
      this.board[i] = new Array(width);
      this.board[i].fill(".");
    }
  }

  drop(block) {
    if(this.hasFallingBlock == true) {
          throw new Error('already falling');
    }
    this.board[0][1] = block;
    this.hasFallingBlock = true;
  }

  tick() {
    this.hasFallingBlock = false;
    for(var i = this.height-2; i >= 0; i--) { // TODO: make sure height is at least 1
      for(var j = 0; j < this.width; j++) {
        if(this.board[i][j] != '.' && this.board[i+1][j] =='.') {
          this.hasFallingBlock = true;
          [this.board[i][j], this.board[i+1][j]] = [this.board[i+1][j], this.board[i][j]];
        }
      }
    }
  }

  hasFalling() {
    return this.hasFallingBlock;
  }

  toString() {
    return this.board.map((x) => x.join("")).join("\n") + "\n";
  }
}
