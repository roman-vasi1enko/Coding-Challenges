// Task 1 - Unpacking Arguments
  // You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

  // eg:

  // spread(someFunction, [1, true, "Foo", "bar"] ) 
  // // is the same as...
  // someFunction(1, true, "Foo", "bar")

    // Solution
    function spread(func, args) {
      return func(...args);
    }

    // Test
    spread(function(x,y){return x+y}, [1,2]) // 3