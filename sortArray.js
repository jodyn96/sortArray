//Exercise 1:
//Given an array of numbers, sort ascending odd numbers but leave even numbers in their original place in the array.
//Zero does not need to move.
//If the array is empty, return an empty array.

//Examples:
//[5, 3, 2, 8, 1, 4] should return [1, 3, 2, 8, 5, 4]
//[6, 3, 2, 7, 5, 0] should return [6, 3, 2, 5, 7, 0]

function sortArray(array)
{
  //create new array with elements from existing array
  var oddArray = array.filter(function (ele) { return (ele % 2) !== 0; }).sort(function (a, b) { return a - b; });

  //set variable for new array element
  var j = 0;

  //set variable for existing array element; define condition; increase value
  for (var i = 0; i < array.length; i++)
  {
    if (array[i] % 2)
    {
      array[i] = oddArray[j];
      j++;
    }
  }
  return array;
}

//sortArray([5, 3, 2, 8, 1, 4]);
//sortArray([6, 3, 2, 7, 5, 0]);
sortArray([0, 2, 5, 8, 3, 1, 6, 9, 3, 1, 0, 7]);
//sortArray([]);
