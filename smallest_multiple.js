/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function ( ceiling ) {

  var smallestMultiple = -1;
  var arr = [];
  var counter = 1;

  //to make it run faster:
  //increment by ceiling * (ceiling - 1)

  while(smallestMultiple === -1) {
    for(var i = 1; i <= ceiling; i++) {
      arr.push(counter % i);
    }
    if(arr.every(sameCheck)) {
      smallestMultiple = counter;
    }
    counter++;
    arr = [];
  }

  function sameCheck (element, index, array) {
    return element === 0;
  }

  return smallestMultiple;
};



