// Exercise 10: Implement concatAll()

// Let's add a concatAll() function to the Array type. The concatAll() function iterates over each sub-array in the array and collects the results in a new, flat array. Notice that the concatAll() function expects each item in the array to be another array.

Array.prototype.concatAll = function () {
  var results = [];
  this.forEach(function (subArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Add all the items in each subArray to the results array.
    // ------------ INSERT CODE HERE! ----------------------------
    results = results.concat(subArray);
  });

  return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array


// concatAll is a very simple function, so much so that it may not be obvious yet how it can be combined with map() to query a tree. Let's try an example...

module.exports = Array.prototype.concatAll;
