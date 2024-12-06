
class User {
  
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
  
    
    hello() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
}
  

const user1 = new User('John', 'Doe');
const user2 = new User('Jane', 'Doe');
  
console.log(`New user : ${user1.firstName} ${user1.lastName}`); 
user1.hello();

console.log(`New user : ${user2.firstName} ${user2.lastName}`); 
user2.hello();
 

