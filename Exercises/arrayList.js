function arrayToList(array = []){
  let list = {val: array[array.length - 1],
              next: null}
  for(let i = array.length-2; i>=0; i--){
    list = { val: array[i],
            next: list}
    }
  return list;
  }

function listToArray(list = {val:0, next: null}){
  array = []
  while(!(list.next = null)){
    array.push(list.val)
    list = list.next;
  }
  return array;
}

function prepend (number, oldList){
  let list = {val: number,
              next: oldList}
  return list;
}


function nth (SearchList, index){
      console.log("index is: ", index)
  if (index == 0){
    return SearchList.val;}
  else if (SearchList.next == null || index < 0){
    return undefined;}
  else{
    return nth(SearchList.next, index-1);
  }
}
