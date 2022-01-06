// Task 1 - Converrt to Binary
  // Given an integer n, write a function to_binary/ToBinary which returns that number in a binary format.

  // to_binary(1)  /* should return 1 */
  // to_binary(5)  /* should return 101 */
  // to_binary(11) /* should return 1011 */
  // Example:

  // toBinary(1)  /* should return 1 */
  // toBinary(5)  /* should return 101 */
  // toBinary(11) /* should return 1011 */

    // Solution
    function toBinary(n){
      return Number((n >>> 0).toString(2));
    }

    // Tests
    toBinary(1) // 1
    toBinary(2) // 10
    toBinary(3) // 11
    toBinary(5) // 101