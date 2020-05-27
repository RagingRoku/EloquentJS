function isEven(x){
  if(x<0){
    return "Please enter a positive number";
  }
  else if(x === 0){
    return true;
  }
  else if (x===1){
    return false;
  }
  else{
    return isEven(x-2);
  }
}
