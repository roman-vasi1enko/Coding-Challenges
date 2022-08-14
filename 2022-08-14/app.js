// Task - Remove anchor from URL
  // Complete the function/method so that it returns the url with anything after the anchor (#) removed.

  // Examples
  // "www.codewars.com#about" --> "www.codewars.com"
  // "www.codewars.com?page=1" -->"www.codewars.com?page=1"

    // Solution
    function removeUrlAnchor(url){
      return url.includes('#') ? url.slice(0, url.indexOf('#')) : url;
    }

    // Tests
    removeUrlAnchor('www.codewars.com#about') // 'www.codewars.com'
    removeUrlAnchor('www.codewars.com/katas/?page=1#about') // 'www.codewars.com/katas/?page=1'
    removeUrlAnchor('www.codewars.com/katas/') // 'www.codewars.com/katas/'