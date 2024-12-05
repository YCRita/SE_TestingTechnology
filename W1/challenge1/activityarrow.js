//Q1
function greet (name){
    return "Hi, " + name;
}

console.log(greet("James"));


//Q2

isEven = num => num % 2 === 0 ;


//Q3

counterFunc= counter => {
    if (counter > 100 ){
        counter = 0 ;
    } else {
        counter++;
    }
    return counter;
} 

//Q4
let nameAge (name,age) => {
    console.log("Hello"+ name);
    console.log("You are " + age + "years old");
}


//Q5

printOnly = () => console.log("Printing");

//Q6

let sum = (num1, num2) => {
    return num1+num2;
}