
/**
this function takes a 2D array, and does a left collapse on the whole thing.
**/

//nondestructive.
function moveArrayUp(arr){
  //unzip, moveLeft, unzip.
  var arrClone = arr.slice();
  var unzippedClone = _.unzip(arrClone);
  moveArrayLeft(unzippedClone);
  recoveredClone = _.unzip(unzippedClone);
  return recoveredClone;

}

//non-destructive.
function moveArrayDown(arr){
  //unzip, moveright, unzip.
  var arrClone = arr.slice();
  var unzippedClone = _.unzip(arrClone);
  moveArrayRight(unzippedClone);
  recoveredClone = _.unzip(unzippedClone);
  return recoveredClone;
}

function moveArrayRight(arr){
  //flip, move Left, flipback.
  flipArray(arr);
  moveArrayLeft(arr);
  flipArray(arr);

}

function moveArrayLeft(arr){ //destructive method!
  moveRowLeft(arr, 0); //move row 1 left
  moveRowLeft(arr, 1); //move row 2 left
  moveRowLeft(arr, 2); //move row 3 left
  moveRowLeft(arr, 3); //move row 4 left

}



//destructive method!
function flipArray(arr){ //reverses all rows of array.
  arr[0].reverse();
  arr[1].reverse();
  arr[2].reverse();
  arr[3].reverse();
}

function convertStringTo2DArray(str){
  var r1 = str.substr(0, 4).split("").map(function(x){return parseInt(x)});
  var r2 = str.substr(4, 4).split("").map(function(x){return parseInt(x)});
  var r3 = str.substr(8, 4).split("").map(function(x){return parseInt(x)});
  var r4 = str.substr(12, 4).split("").map(function(x){return parseInt(x)});
  return [r1, r2, r3, r4];
}


function convert2DArrayToString(arr){
  return arr.map(function(row){return row.join("")}).join("");
}

function convert2DArrayTo1DArray(arr){
  return _.flatten(arr);
}

function convert1DArrayTo2DArray(arr){
  var r1 = arr.slice(0, 4);
  var r2 = arr.slice(4, 8);
  var r3 = arr.slice(8, 12);
  var r4 = arr.slice(12, 16);

  return [r1, r2, r3, r4];
}


function get2Or4(){
  // var choice = Math.round(Math.random());
  var choice = Math.random();
  if (choice <= 0.8)
    return 2;
  else return 4;
}

function getRandom0_15(){
  return Math.random() * 15;
}

function getEmptySlots(arr){
  var indices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  var emptySlots = indices.filter(function(item){return arr[item] === 0});
  return emptySlots;
}

function putIn2or4(arr){
  var emptySlots = getEmptySlots(arr);
  var chosenOne = _.sample(emptySlots);
  arr[chosenOne] = get2Or4();
}




/***** WARNING: GORY DETAILS BELOW ********/


/**
this function takes a 2d array, and a row number, and then does all necessary collapse
from left to right. (ie when user presses left. )
**/
var rowAlreadyCollapsed = false;
function moveRowLeft(arr, row){ //arr is 2d array, row is row number.
  var currentRow = arr[row];
  rowAlreadyCollapsed = false;
  collapseLeft(arr, row, 0);
  collapseLeft(arr, row, 1);
  collapseLeft(arr, row, 2);
  collapseLeft(arr, row, 3);
}

/**
this function takes a 2D arr, a row num, and a col num and does a left collapse(2048 style.)
**/
function collapseLeft(arr, row, col){ //recursive collapse.
  if(col == 0)
      return;
    else if(arr[row][col-1] === 0){
      arr[row][col-1] = arr[row][col];
      arr[row][col] = 0;
      collapseLeft(arr, row, col-1);
    }
    else if(arr[row][col-1] === arr[row][col]){
      if (rowAlreadyCollapsed)
        return;
      rowAlreadyCollapsed = true;
      arr[row][col-1] = arr[row][col-1] + arr[row][col];
      arr[row][col] = 0;
      collapseLeft(arr, row, col-1);
    }
}

