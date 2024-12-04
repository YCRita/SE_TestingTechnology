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


function reverseArray(a){
    const reverseArray = [];

    for (let i = a.length - 1; i >= 0 ; i--){
        x = a[i];
        reverseArray.push(x);
    }
// reverseArray = a.toReverse();

    return reverseArray;
}



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