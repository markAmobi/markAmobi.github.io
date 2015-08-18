/**
  the 2D array shall preserve the current state of the board at any point in time.
**/

function Game(board){
  // this.board = board || '0000202000000000';
  if(board){
    this.board = board;
    this.twoDArray = convertStringTo2DArray(this.board);
  }
  else{
    this.board = '0000000000000000';
    this.twoDArray = convertStringTo2DArray(this.board);
    this.spawnBlock();
    this.spawnBlock();
  }
}

Game.prototype.toString = function(){
  var finalString = this.board.substr(0,4) + "\n" +
                    this.board.substr(4,4) + "\n" +
                    this.board.substr(8,4) + "\n" +
                    this.board.substr(12,4)
  return finalString;
}

Game.prototype.oneDArray = function(){
  return _.flatten(this.twoDArray);
}

Game.prototype.get2DArray = function(){
  return this.twoDArray;
}

Game.prototype.singleString = function(){
  return convert2DArrayToString(this.twoDArray);
}

Game.prototype.moveLeft = function(){

  var initialState = JSON.stringify(this.twoDArray);
  moveArrayLeft(this.twoDArray);
  var finalState = JSON.stringify(this.twoDArray);
  //insert random 2 or 4
  //if moved
  if(initialState !== finalState)
    this.spawnBlock();
}

Game.prototype.moveRight = function(){
  var initialState = JSON.stringify(this.twoDArray);
  moveArrayRight(this.twoDArray);
  var finalState = JSON.stringify(this.twoDArray);
  //insert random 2 or 4
  //if moved
  if(initialState !== finalState)
    this.spawnBlock();
}


Game.prototype.moveUp = function(){
  var initialState = JSON.stringify(this.twoDArray);
  this.twoDArray = moveArrayUp(this.twoDArray);
  var finalState = JSON.stringify(this.twoDArray);
  //insert random 2 or 4
  //if moved
  if(initialState !== finalState)
    this.spawnBlock();
}

Game.prototype.moveDown = function(){
  var initialState = JSON.stringify(this.twoDArray);
  this.twoDArray = moveArrayDown(this.twoDArray);
  var finalState = JSON.stringify(this.twoDArray);
  //insert random 2 or 4
  //if moved
  if(initialState !== finalState)
    this.spawnBlock();
}

Game.prototype.spawnBlock = function() {
  var oneD = this.oneDArray();
  putIn2or4(oneD);
  this.twoDArray = convert1DArrayTo2DArray(oneD);
};


// Game.prototype.moveLeft = function(){
//   this.moveRowLeft(0); //move row 1 left
//   this.moveRowLeft(1); //move row 2 left
//   this.moveRowLeft(2); //move row 3 left
//   this.moveRowLeft(3); //move row 4 left

// }

// Game.prototype.moveRowLeft = function(row){
//   var currentRow = this.gameArray[row];
// }
