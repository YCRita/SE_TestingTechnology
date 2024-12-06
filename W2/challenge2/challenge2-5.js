
class User {
   
    constructor() {
        if (this.constructor === User) {
            throw new Error("Cannot instantiate abstract class");
        }
        this._userName = "";
    }
    
    get getUserName() {
        return this._userName;
    }
    
    set setUserName(name) {
        this._userName = name;
    }
    
    stateYourRole() {
        throw new Error("This method must be implemented by subclasses");
    }
}


class Admin extends User {
    constructor() {      
        super();
    }
    
    stateYourRole() {
        return "admin";
    }
}


class Viewer extends User {
    constructor() {     
        super();
    }
    
    stateYourRole() {
        return "viewer";
    }
}

const admin1 = new Admin();
admin1.setUserName = "Balthazar";
console.log("Admin username:", admin1.getUserName); 
console.log("Admin role:", admin1.stateYourRole()); 


const viewer1 = new Viewer();
viewer1.setUserName = "Melchior";
console.log("Viewer username:", viewer1.getUserName); 
console.log("Viewer role:", viewer1.stateYourRole()); 