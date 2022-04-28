// Task 1 - N-th Power
    // You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

    // Let's look at a few examples:
    // array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
    // array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

        // Solution 1
        let index = (array, n) => n >= array.length ? -1 : array[n] ** n;

        // Solution 2
        let index1 = (array, n) => array[n] ** n || -1

        // Tests 
        index([1, 2, 3, 4],2) //9
        index([1, 2],3) //-1
        index([1,1,1,1,1,1,1,1,1,2], 9) //512


// Task 2 - Well of Ideas
    // For every good challenge idea there seem to be quite a few bad ones!

    // In this challenge you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

        // Solution
        function well(x){
            let countGood = x.filter(e => e === 'good').length;
            return countGood == 0 ? 'Fail!' : countGood <= 2 ? 'Publish!' : 'I smell a series!';
        }

        // Tests
        well(['bad', 'bad', 'bad']) //'Fail!'
        well(['good', 'bad', 'bad', 'bad', 'bad']) //'Publish!'
        well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) //'I smell a series!'

// Task 3 - Regular Ball Super Ball
    // Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
    // If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
    // ball1 = new Ball();
    // ball2 = new Ball("super");

    // ball1.ballType     //=> "regular"
    // ball2.ballType     //=> "super"

        // Solution
        class Ball {
            constructor(ballType) {
              this.ballType = ballType || 'regular';
            }
        }

        // Tests
        new Ball().ballType //"regular"
        new Ball("super").ballType //"super"