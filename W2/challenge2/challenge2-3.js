class User{
    constructor(){
        this._userName = "";
    }

    set setUserName(userName){
        this._userName = userName; 
    }

    get getUserName(){
        return this._userName;
    }
}

class Admin extends User{

    constructor(){
        super();
    }

    expressYourRole(){
        return "Admin";    
    }

    sayHello(){
        return "Hello, admin " + this._userName; 
    }
}

let admin1 = new Admin();
admin1.setUserName = "Balthazar";

sayHello();
