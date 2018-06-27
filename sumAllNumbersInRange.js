/*Sum All Numbers in a Range*/
/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.*/

//Here is my solution below:

function sumAll(arr) {
  var total = 0; // we set a variable total as our future accumulator;
  if(arr[0] < arr[1]){
    for(var i=arr[0]; i<= arr[1]; i++){//first case scenario: if the 1st value in the array is lower than the second;
      total = total + i;//
    }   
  return total; //
} else{
  for(var i=arr[0]; i>=arr[1]; i--){//for cases when the 1st value is higher than the second;
    total = total + i;
  } return total;
}
}

