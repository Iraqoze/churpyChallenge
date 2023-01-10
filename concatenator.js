function generate(input_array)
{
    let result = [];  // Initialize an empty array to store the final output

    // outer forEach loop to iterate over the first array
    input_array.forEach((arr1, i) =>
    {

        // inner forEach loop to iterate over elements of the first array
        arr1.forEach(x =>
        {

            // Using the Array.prototype.slice() method to create a new array
            // containing all elements from the input_array after the element at index i
            let slicedArray = input_array.slice(i + 1);

            // Third forEach loop to iterate over second array
            slicedArray.forEach(arr2 =>
            {

                // Fourth forEach loop to iterate over elements of the second array
                arr2.forEach(y =>
                {
                    // Concatenate elements from first and second array and push the result into result array
                    result.push(`${x} ${y}`);
                });
            });
        });
    });
    // Return the final output array
    return result;
}



// Testing
//let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let arr = [[1, 2, 3], [4, 5, 6]]
console.log(generate(arr));