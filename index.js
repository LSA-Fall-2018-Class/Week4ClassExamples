'use strict';

// Enter your js code Here


var ages = [16,12,8,5,3, 43, 12, 77, 32, 15, 34, 98, 54];

//alert(ages[3]);   // get the 3rd element

//ages[3] = "111";    // set the 3rd element


// assignment 1 -----------------------
// Create an array of length 4... then add 2 to the last element

var myArray = [9, 3, 5, 7];

myArray[myArray.length - 1] = myArray[myArray.length - 1] + 2;

alert(myArray[myArray.length - 1]);

// Example of the Array push function:

// alert(ages.length);
//
// ages.push(999);
//
// alert(ages.length);
//
// alert(ages[ages.length - 1]);

// Example for loop:

//var i;
// for (i = 0; i < ages.length; i++)
// {
//     // alert("The " + i + " element in the array is " + ages[i]);
//
//     if (ages[i] == 5)
//       alert("Found a 5 at element " + i);
//
// }

// example while loop, look for a number in the array,
// if you find the number, stop looking.

var found = false;
var i = 0;

while ((found == false) && (i<ages.length))
{
  if (ages[i] == 43)
    found = true;
  else
    i++;
}

if (found == true)
  alert("I found a 43 at position " + i);
else {
  alert ("I did not find the number");
}
