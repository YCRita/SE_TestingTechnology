
class User {
  
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
  
    
    hello() {
        console.log(`Hello, ${this._firstName} ${this._lastName}`);
    }
}
  

const user1 = new User('John', 'Doe');
const user2 = new User('Jane', 'Doe');
  
user1.hello();
console.log(`${user1._firstName} ${user1._lastName}`);   

user2.hello();
console.log(`${user2._firstName} ${user2._lastName}`);  

