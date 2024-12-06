
class User {

    constructor (){
        this._firstName = "";
        this._lastName = "";
    }

    greet(){
        return "Hello! World";
    }

    set setFirstName(firstName){
        this._firstnNme = firstName;
    }

    set setLastName(lastName){
        this._lastName = lastName;
    }

    get getFirstName(){
        return this._firstName;
    }

    get getLastName(){
        return this._lastName;
    }

}

const user1 = new User();

user1.setFirstName(Lily);
user1.setLastName(Alex);

user1.greet();
console.log("My name is " + user1.getFirstName + " " + user1.getLastName);



// `Hello world! My name is ${user1.firstName} ${user1.lastName}`;