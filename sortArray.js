//Exercise 1:
//Given an array of numbers, sort ascending odd numbers but leave even numbers in their original place in the array.
//Zero does not need to move.
//If the array is empty, return an empty array.

//Examples:
//[5, 3, 2, 8, 1, 4] should return [1, 3, 2, 8, 5, 4]
//[6, 3, 2, 7, 5, 0] should return [6, 3, 2, 5, 7, 0]

function getMiddleChar(string)
			{
				//create new variable
				var middleLetters = '';

				//find string length if even or odd
				if (string.length % 2 === 0)
				{
				var even = string.length / 2;
				return string.slice(even - 1, even + 1);
				}

				if (string.length % 2 !== 0)
				{
				var odd = string.charAt((string.length / 2))
				return odd;
				}
			}

			//getMiddleChar("dog");
			//getMiddleChar("Fishing");
			//getMiddleChar("have");
			//getMiddleChar("Middle");
			//getMiddleChar("C");
			getMiddleChar("Davenport");
			//getMiddleChar(" ");
