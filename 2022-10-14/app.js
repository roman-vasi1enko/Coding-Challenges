// Task 1 - Bartender, drinks!
  // Complete the function that receives as input a string, and produces outputs according to the following table:

  // Input	                                  Output
  // "Jabroni"	                              "Patron Tequila"
  // "School Counselor"	                      "Anything with Alcohol"
  // "Programmer"	                            "Hipster Craft Beer"
  // "Bike Gang Member"	                      "Moonshine"
  // "Politician"	                            "Your tax dollars"
  // "Rapper"	                                "Cristal"
  // anything else	                          "Beer"

  // Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

  // Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

    // Solution
    function getDrinkByProfession(param){
      let drinkMenu = {
        "Jabroni": "Patron Tequila",
        "School Counselor": "Anything with Alcohol",
        "Programmer": "Hipster Craft Beer",
        "Bike Gang Member": "Moonshine",
        "Politician": "Your tax dollars",
        "Rapper": "Cristal",
        "else": "Beer"
      }
    
      let orderedDrink = param.split(' ')
                              .map(word => `${word[0].toUpperCase()}` + `${word.slice(1).toLowerCase()}`)
                              .join(' ');
      
      return Object.keys(drinkMenu).includes(orderedDrink) ? drinkMenu[orderedDrink] : drinkMenu['else'];
    }

    // Tests
    getDrinkByProfession("jabrOni") // "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'"
    getDrinkByProfession("scHOOl counselor") // "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'"
    getDrinkByProfession("prOgramMer") // "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'"
    getDrinkByProfession("bike ganG member") // "Moonshine", "'Bike Gang Member' should map to 'Moonshine'"
    getDrinkByProfession("poLiTiCian") // "Your tax dollars", "'Politician' should map to 'Your tax dollars'"
    getDrinkByProfession("rapper") // "Cristal", "'Rapper' should map to 'Cristal'"
    getDrinkByProfession("pundit") // "Beer", "'Pundit' should map to 'Beer'"
    getDrinkByProfession("Pug") // "Beer", "'Pug' should map to 'Beer'"