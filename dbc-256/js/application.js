$(document).ready(function() {
  // var game = new Game('0000202000000000');
  var game = new Game();
  updateDOM(game);

  //put game on HTML
  //bind keys
   Mousetrap.bind('up', function() {
      game.moveUp();
      updateDOM(game);
   });

   Mousetrap.bind('down', function() {
      game.moveDown();
      updateDOM(game);
   });

   Mousetrap.bind('left', function() {
      game.moveLeft();
      updateDOM(game);
   });

   Mousetrap.bind('right', function() {
      game.moveRight();
      updateDOM(game);
   });
}); //end document ready.

function updateDOM(game){
  var gameArray = game.get2DArray();
  updateRow(gameArray, 0);
  updateRow(gameArray, 1);
  updateRow(gameArray, 2);
  updateRow(gameArray, 3);
}

function updateRow(gameArray, rowNum){
  var row = gameArray[rowNum];
  var tableRow = $("#r" + rowNum);
  var content = "";
  for(var i=0; i<4; i++){
    var num = row[i];
    var color = COLORS[row[i]];
    if (num == 0)
      num = "" //don't display 0 if blank.
    content +=("<td style='background-color:" + color + ";'><strong>"+ num +"</strong></td>");
  }
  tableRow.html(content);
}
COLORS = {0: "white",
          2: "#E8E1D2",
          4: "#E8D0A5",
          8: "#E8AA6F",
          16: "#E88A4C",
          32: "#E86550",
          64: "#E8462D",
          128: "#FFE35D",
          256: "#FFC700",
          512: "blue",
          1024: "green",
          2048: "teal"
          }