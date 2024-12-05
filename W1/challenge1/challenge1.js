
//============TASK1=========
//use built in method
let reverseString = str => str.split("").reverse().join("");

//write function myself
function reverseString(a){

    const splitCharacter = [];
    let reverse = '';

    for (let i = a.length - 1; i >= 0 ; i--){
        let x = a[i].toString();
        splitCharacter.push(x);
       //console.log('array right now: ' + i + ',' + splitCharacter)
    }
    
    for (let i = 0; i<splitCharacter.length; i++){
        reverse += splitCharacter[i].toString();
        // console.log('reverse: ' + reverse)
    }

    return reverse
}

//============TASK2=========
//use built in method
let reverseArray = (array) => array.reverse();


//write function myself
function reverseArray(a){
    const reverseArray = [];

    for (let i = a.length - 1; i >= 0 ; i--){
        x = a[i];
        reverseArray.push(x);
    }
// reverseArray = a.toReverse();

    return reverseArray;
}

//============TASK3=========

//instructor solution

const items = [
    { item: "irn bru", price: 3.25, stock: 50 },
    { item: "fanta", price: 3.98, stock: 45 },
    { item: "diet coke", price: 4.40, stock: 38 }, 
    { item: "7up", price: 3.99, stock: 42 }, 
 ];

const mostExpensiveItem (array) => {
    let mostExpensiveItemObj = {};
// cost most expensive
    let mostExpensiveItemCost = 0; // stock* price
    

    //loop through array items
    for (let i = 0; i < array.length; i++){
        const costTiedupSingleItem = array[i].price * array[i].stock;
    
    if (costTiedupSingleItem > mostExpensiveItem){
        mostExpensiveItem = costTiedupSingleItem;
        mostExpensiveItem = array[i];
        }
    }
    return mostExpensiveItemObj;
}


console.log(mostExpensiveItem(items));

//mine version-  comparision 
function mostExpensiveItem(anyArray){

    let mostExpensiveItem = anyArray[0];
    // console.log(mostExpensiveItem)
    // console.log( ' price: ' + mostExpensiveItem.price*mostExpensiveItem.stock )
    for (i = 1; i < anyArray.length; i++ ){
        // console.log(anyArray[i])
        // console.log(anyArray[i] + ' price: ' + anyArray[i].price*anyArray[i].stock )

        if ((anyArray[i].price*anyArray[i].stock)> (mostExpensiveItem.price*mostExpensiveItem.stock)){
            mostExpensiveItem = anyArray[i]

        }
    }

    return mostExpensiveItem;
}

console.log(mostExpensiveItem(anyArray));