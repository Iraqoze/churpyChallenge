function generate(input_array) {
    
    let result = []; // Initialize an empty array to store the final output
    
    // outer loop to iterate over the first array
    for (let i = 0; i < input_array.length; i++) {
        // inner loop to iterate over elements of the first array
        for (let j = 0; j < input_array[i].length; j++) {
            // Third loop to iterate over second array
            for (let k = i + 1; k < input_array.length; k++) {
                // Fourth loop to iterate over elements of the second array
                for (let l = 0; l < input_array[k].length; l++) {
                    // Concatenate elements from first and second array and push the result into result array
                    result.push(`${input_array[i][j]} ${input_array[k][l]}`);
                }
            }
        }
    }
    // Return the final output array
    return result;
}


// Testing
let arr = [[1, 2, 3], [4, 5, 6]];
console.log(generate(arr));