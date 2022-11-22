// Task - Take a Ten Minutes Walk
  // You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

  // Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

    // Solution
      // P: array with 1-letter strings, ['n'], ['n', 's'], etc.
      // R: boolean (true if 10/false if <> 10)

      function isValidWalk(walk) {
        let moveX = 0;
        let moveY = 0;
        
        if (walk.length === 10) {
          for (let i = 0; i < 10; i++) {
            switch (walk[i]) {
            case 'n': moveY--; break
            case 's': moveY++; break
            case 'w': moveX--; break
            case 'e': moveX++; break
            }
          }
        }
        
        return walk.length === 10 && moveX === 0 && moveY === 0;
      }

      // E: isValidWalk(['n']) // false
      // E: isValidWalk(['s','w','e']) // false
      // E: isValidWalk(['s','s','s','n','w','e','n','s','e','e']) // false

      // Tests
      isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
      isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
      isFalse(isValidWalk(['w']), 'should return false');
      isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');