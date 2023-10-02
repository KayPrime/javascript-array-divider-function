let array1 = [15, 30, 45, 60];
let array2 = [5, 6, 3, 10];

// creates a function that takes in two arrays
function arrayDivider(numeratorArray, denominatorArray) {
    // the function first checks if the arrays have the same length
    if (numeratorArray.length === denominatorArray.length) {
        // if true, a new array is created
        let resultArray = new Array();
        
        // using for loop to access the matching item from the two arrays base on their index
        for (i = 0; i < numeratorArray.length; i++) {
            // we use this loop to access item from both array with same index and carry out a division operation and store the result in a variable
            let result = numeratorArray[i] / denominatorArray[i];

            // we push the result of our operation the new array that was created 
            resultArray.push(result);
        }

        // the function returns the resulting array
        return resultArray;
    }

    // if the arrays length do not match
    else {
        // an error to be returned if the arrays length do not match
        error = "They arrays are not of same length";

        // the function returns the error
        return error;
    }
}

// the function is instantiated by assigning it to a variable
let newArray = arrayDivider(array1, array2);

// console logging the new array
console.log(newArray);