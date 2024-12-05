
//anonymous function

// let greet = function(name){
//     return"Hello,my name is " + name;
// }


//into arrow function

let greet = (name) => {
    return"Hello,my name is " + name
}



//simplfied one line function

greet = (name) => "Hello,my name is " + name;


// only 1 parameter, can remove brackerts
greet = name =>  "Hello,my name is " + name;


console.log(greet("John"));
