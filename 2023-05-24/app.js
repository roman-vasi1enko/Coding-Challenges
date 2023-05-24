// Task - Linked Lists - Get Nth Node
  // Implement a GetNth() function that takes a linked list and an integer index and returns the node stored at the Nth index position. GetNth() uses the C numbering convention that the first node is index 0, the second is index 1, ... and so on.

  // So for the list 42 -> 13 -> 666, GetNth(1) should return Node(13);

  // getNth(1 -> 2 -> 3 -> null, 0).data === 1
  // getNth(1 -> 2 -> 3 -> null, 1).data === 2
  // The index should be in the range [0..length-1]. If it is not, or if the list is empty, GetNth() should throw/raise an exception

    // Solution
    class Node {
      constructor (data) {
        this.data = data;
        this.next = null;
      }
    }
    
    const getNth = (node, i) => {
      if (!node) throw 'Invalid node';

      while (i--) {
        const next = node.next
        if (next) node = next;
        else throw 'Invalid index value'; 
      }

      return node;
    }

    // Tests
    console.log(getNth(list, 0).data, 1, "First node should be located at index 0.");
    console.log(getNth(list, 1).data, 2, "Second node should be located at index 1.");
    console.log(getNth(list, 2).data, 3, "Third node should be located at index 2.");
    console.log(getNth(list, 3), 'Invalid node');
    console.log(getNth(list, 100), 'Invalid node');
    console.log(getNth(null, 0), 'Invalid node');