// Task - Parse a linked list from a string
// Preloaded for you is a class, struct or derived data type Node ( depending on the language ) used to construct linked lists in this Kata:

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// Create a function parse which accepts exactly one argument string which is a string representation of a linked list. Your function must return the corresponding linked list, constructed from instances of the Node class. The string representation of a list has the following format: the value of the node, followed by a whitespace, an arrow and another whitespace (" -> "), followed by the rest of the linked list. Each string representation of a linked list will end in "null". For example, given the following string representation of a linked list:

// "1 -> 2 -> 3 -> null"

// ... your function should return:
// new Node(1, new Node(2, new Node(3)))

// Note that due to the way the constructor for Node is defined, if a second argument is not provided, the next field is automatically set to null. That means your function could also return the following ( if it helps you better visualise what is actually going on ):

// new Node(1, new Node(2, new Node(3, null)))

// Another example: given the following string input:
// "0 -> 1 -> 4 -> 9 -> 16 -> null"

// ... your function should return:
// new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))

// If the input string is just "null", return null.

  class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

  // Solution
  function parse(string) {
    return string.split(' -> ').slice(0, -1).reduceRight((a, b) => new Node(Number(b), a), null);
  }

  // Tests
  console.log(parse("1 -> 2 -> 3 -> null"), new Node(1, new Node(2, new Node(3))));
  console.log(parse("0 -> 1 -> 4 -> 9 -> 16 -> null"), new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))));
  console.log(parse("null"), null);