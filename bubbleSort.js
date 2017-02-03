//jshint esversion:6

let arrayToSort = [27, 8, 10, 7, 123, 5, 32];
let swapped;
function bubbleSort (arrayToSort){
  do{
    swapped = false;
    for(var i =0; i < arrayToSort.length; i++){
      if(arrayToSort[i] > arrayToSort[i + 1]){
        let temp = arrayToSort[i];
        arrayToSort[i] = arrayToSort[i + 1];
        arrayToSort[i + 1] = temp;
        swapped = true;
      }
    }

  } while(swapped);
  return arrayToSort;

}

bubbleSort(arrayToSort);
console.log(arrayToSort);


module.exports = bubbleSort;
