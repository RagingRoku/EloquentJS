function getRange (start, stop, step = 1){
  let int = [];
  if ((step>0)){
    for(let i=start; i<=stop;i+=step){
      int.push(i);
    }
  }
  else {
    for(let i=start; i>=stop;i+=step){
      int.push(i);
    }
  }
  return int;
}

function sum(range){
  counter = 0;
  for (let index of range) {
    counter += index;
  }
  return counter;
}
