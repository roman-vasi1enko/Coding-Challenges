// Task 1 - Apple Turnover
  // Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

  // Note: Input will either be a positive integer (or a string for untyped languages).

    // Solution
    function apple(x){
      return x ** x > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
    }

    // Tests
    apple('50') // 'It\'s hotter than the sun!!'
    apple(4) // 'Help yourself to a honeycomb Yorkie for the glovebox.'