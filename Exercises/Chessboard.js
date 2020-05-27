/*
Martin Rochin March 30 2020
Makes a x by x grid using an alternating pattern (8x8 would be a "chessboard")

*/

var boardLength = 8
line1 = ""
line2 = ""

//make two alternate lines of the length of the board
//for example 3x3 creates:
// line1: #
// line2:# #
for (let i=1; i<=boardLength; i++){
  if(i%2){
  line1 = line1 + " ";
  line2 = line2 + "#";
  }
  else {
  line1 = line1 + "#";
  line2 = line2 + " ";
  }
}

//cycles through and prints the lines we created (boardLength times)
//following the example above, this prints:
// #
//# #
// #
for (let i=1; i<=boardLength; i++){
  if(i%2){
    console.log(line1);
  }
  else {
    console.log(line2);
  }
}
