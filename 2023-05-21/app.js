// Task - Sum a list but ignore any duplicates
    // Write a function that sums a list, but ignores any duplicate items in the list.
    // For instance, for the list [3, 4, 3, 6] , the function should return 10.

        // Solution
        function sumNoDuplicates(arr) {
            let unique = [];
            let sum = 0;

            arr.forEach(num => {
                if (arr.indexOf(num) === arr.lastIndexOf(num)) {
                    unique.push(num);
                    sum += num;
                }
            });

            return sum;
        }

        // Tests
        console.log(sumNoDuplicates([1, 1, 2, 3]), 5);
        console.log(sumNoDuplicates([]), 0);
        console.log(sumNoDuplicates([1, 1, 2, 2, 3]), 3);
        console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]), 21);
        console.log(sumNoDuplicates([0, 10, 8, 9, 7, 3, 3, 9, 3, 6, 0]), 31);
        console.log(sumNoDuplicates([0, 1, 4, 4, 0, 4, 2, 5, 9, 0, 10, 9, 0, 1, 2]), 15);