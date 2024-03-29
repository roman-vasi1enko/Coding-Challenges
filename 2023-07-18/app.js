// Task - Drying Potatoes
  // All we eat is water and dry matter.

  // Let us begin with an example:

  // John bought potatoes: their weight is 100 kilograms. Potatoes contain water and dry matter. The water content is 99 percent of the total weight. He thinks they are too wet and puts them in an oven - at low temperature - for them to lose some water.

  // At the output the water content is only 98%.

  // What is the total weight in kilograms (water content plus dry matter) coming out of the oven?

  // He finds 50 kilograms and he thinks he made a mistake: "So much weight lost for such a small change in water content!"

  // Can you help him?

  // Task
  // Write function potatoes with

  // int parameter p0 - initial percent of water-
  // int parameter w0 - initial weight -
  // int parameter p1 - final percent of water -
  // potatoesshould return the final weight coming out of the oven w1 truncated as an int.

  // Example:
  // potatoes(99, 100, 98) --> 50

    // Solution
    function potatoes(p0, w0, p1) {
      return Math.floor(w0 * (100 - p0) / (100 - p1))
    }

    // Tests
    console.log(potatoes(82, 127, 80), 114);
    console.log(potatoes(93, 129, 91), 100);


// Task - last in list
  // Write a function last that accepts a list and returns the last element in the list.

  // If the list is empty:

  // In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

  // In languages that do not have an empty option, just return null

    // Solution
    const last = xs => xs.length !== 0 ? xs[xs.length-1] : null;

    // Tests
    console.log( last([1,2,3]), 3, "last([1,2,3]) == 3");
    console.log( last([]), null, "last( [] ) == null");