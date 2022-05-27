// Task 1 - Colour Association
  // Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.
  // You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

  // For example:
  let array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]


    // Solution
    const colourAssociation = array => array.map(([colour, association]) => ({[colour]:association}));

    // Test
    colourAssociation([["white", "goodness"], ["blue", "tranquility"]]) // [{white:"goodness"},{blue:"tranquility"}]);
    colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]) // [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]);
