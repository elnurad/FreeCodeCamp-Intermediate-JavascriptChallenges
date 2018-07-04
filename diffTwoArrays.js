//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.//
/*My solution:*/

function diffArray(arr1, arr2) {
  var newArr = []; //a new empty array to push the items that are only found in one of the arrays
  for (var i=0; i<arr1.length; i++){ //we loop through the first array 
    if(arr2.indexOf(arr1[i]) === -1){//using this method we check if each of the values in arr1 is in arr2. If it is not, we will push it into the newArr;
      newArr.push(arr1[i]);
    }
  } 
  for (var j=0; j<arr2.length; j++){ //We do the same loop through the second array.
    if(arr1.indexOf(arr2[j]) === -1){//indexOf returns the index of each of arr2's values in arr1. If it is not there, then it will be pushed into the newArr;
      newArr.push(arr2[j]);
    }
  }
 
  return newArr;
}
