// Task 1 - Account list
    // A bank account is defined by:
        // A name property.
        // A balance property, initially set to 0.
        // A credit method adding the value passed as an argument to the account balance.
        // A describe method returning the account description.
        // Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

            // Solution
            class Account {
              constructor(name) {
                  this.name = name;
                  this.balance = 0;
              }
              credit(amount) {
                  this.balance += amount;
              }
              describe() {
                  console.log(`owner: ${this.name}, balance: ${this.balance}`)
              }
          }

          let sean = new Account('Sean');
          let brad = new Account('Brad');
          let george = new Account('George');

          let bank = [sean, brad, george];
          bank.forEach(obj => obj.credit(1000));

          sean.describe();
          brad.describe();
          george.describe();