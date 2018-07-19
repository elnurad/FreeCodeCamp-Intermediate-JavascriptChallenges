/*Intermediate Algorithm Scripting: Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

*/





function whatIsInAName(collection, source) {
  //Object.keys method will create an array with the source object's property names. 
  var sourceName = Object.keys(source);
  //we filter through the collection array using the filter method
  var arr = collection.filter(function(item){
    //we loop through the new sourceName array to check whether its keys are in the collection arrays objects.
    for(var i=0; i<sourceName.length; i++){
      //we check whether an object inside the collection array doesn't have either the key or a value from the source object 
      if(!item.hasOwnProperty(sourceName[i]) || item[sourceName[i]] !== source[sourceName[i]]){
        return false;
      }
    }
    return true;
  });
  
  return arr;
}
