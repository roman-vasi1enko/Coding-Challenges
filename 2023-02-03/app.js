// Task - Convert a linked list to a string
  // Create a function stringify which accepts an argument list and returns a string representation of the list. The string representation of the list starts with the value of the current Node, specified by its data property, followed by a whitespace character, an arrow and another whitespace character (" -> "), followed by the rest of the list. The end of the string representation of a list must always end with null ( all caps or all lowercase depending on the language you are undertaking this Kata in ). For example, given the following list:

  // new Node(1, new Node(2, new Node(3)))

  // ... its string representation would be:
  // "1 -> 2 -> 3 -> null"

  // And given the following linked list:
  // new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))

  // ... its string representation would be:
  // "0 -> 1 -> 4 -> 9 -> 16 -> null"

  // Note that null itself is also considered a valid linked list. In that case, its string representation would simply be "null" ( again, depending on the language ).

    class Node {
      constructor(data, next = null) {
        this.data = data;
        this.next = next;
      }
    }

    // Solution
    function stringify(list) {
      return list === null ? "null" : `${list.data} -> ${stringify(list.next)}`; 
    }

    // Tests
    console.log(stringify(new Node(1, new Node(2, new Node(3)))), "1 -> 2 -> 3 -> null");
    console.log(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))), "0 -> 1 -> 4 -> 9 -> 16 -> null");
    console.log(stringify(null), "null");