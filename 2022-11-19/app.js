// Task - Camelize string
  // Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

  // That is: removes all dashes, each word after dash becomes uppercased.

  // Examples:

  // camelize("background-color") == 'backgroundColor';
  // camelize("list-style-image") == 'listStyleImage';
  // camelize("-webkit-transition") == 'WebkitTransition';

    // Solution
    function camelize(str) {
      return str.split('-').map((el, i) => i == 0 ? el : el = el[0].toUpperCase() + el.slice(1)).join('');
    }

    // Tests
    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';