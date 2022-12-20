// Task - Classy Extentions
  // Your task is to complete the Cat class which Extends Animal and replace the 'speak' method to return the cats name + meows. e.g. 'Mr Whiskers meows.'
  // class Cat extends Animal {
  //   ...
  // }

    // Solution
    class Cat extends Animal {
      speak() {
        return `${this.name} meows.`
      }
    }

    // Tests
    let cat = new Cat('Mr Whiskers');
    console.log(cat.speak(),'Mr Whiskers meows.')

    cat = new Cat('Lamp');
    console.log(cat.speak(),'Lamp meows.')

    cat = new Cat('$$Money Bags$$');
    console.log(cat.speak(),'$$Money Bags$$ meows.')