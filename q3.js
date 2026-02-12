// 3. Remove duplicates from an array (using a loop). FYI: array.includes(element) checks if an element is in an array
function removeDuplicates(array) {
    let temp = [];
    for(let i = 0; i < array.length; i++){
        if(!temp.includes(array[i])) temp.push(array[i]);
    }
    array.length = 0;
    for(let i = 0; i < temp.length; i++){
        array.push(temp[i]);
    } 
    
    
}

// Test for remove duplicates

let testArray3 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]

// TODO: display the array with duplicates removed in the console
removeDuplicates(testArray3);
console.log(testArray3);