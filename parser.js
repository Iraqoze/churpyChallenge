//Function to evaluate ternary expressions
function ternaryOperator(input, variables)
{

	console.log('INPUT OR EXPRESSION: ', input)

	// Define the regex pattern to match ternary operations
	const pattern = /if\s*\(((?:[^,()]+|\((?:[^()]+|\([^()]*\))*\))+),\s*((?:[^,()]+|\((?:[^()]+|\([^()]*\))*\))+),\s*((?:[^,()]+|\((?:[^()]+|\([^()]*\))*\))+)\)/

	const match = input.match(pattern)

	if (match)
	{
		// Extract the condition, truthy value, and falsy value from the match
		const condition = match[1]
		const truthy = match[2]
		const falsy = match[3]

		//Logging the values extracted:
		console.log('\nCondition', condition)
		console.log('\nTruthy', truthy)
		console.log('\nFalsy', falsy)

		// iterates over the keys of the variables object  
		//for each key in the loop, replace the key with its corresponding value in the toEval string.
		let toEval = condition
		Object.keys(variables).forEach((key) =>
		{
			toEval = toEval.replace(new RegExp(key, 'g'), variables[key])
		})

		// Evaluate the condition and return the truthy/falsy value		
		if (eval(toEval))
		{

			console.log("EVALUATING CONDITION: ", toEval);
			console.log("TRUTHY VALUE: ", truthy);

			//call the ternary operator function recursively using truthy value and variables
			return ternaryOperator(truthy, variables)
		} else
		{

			console.log("EVALUATING CONDITION: ", toEval);
			console.log("FALSY VALUE: ", falsy);

			//call the ternary operator function recursively using falsy value and variables
			return ternaryOperator(falsy, variables)
		}
	} else
	{
		if (!isNaN(Number(input)))
		{
			return Number(input)
		}
		// If the input does not match the regular expression, it must be a variable name
		// In either case, return the variable value
		return variables[input]
	}
}

function run(input, variables)
{

	if (!input.startsWith('+') && !input.startsWith('-'))
	{
		input = '+' + input
	}

	let result = 0

	const pattern = /([+-])\s*(.*)/

	while (input.length > 0)
	{
		const match = input.match(pattern)

		if (!match)
			break

		input = input.substring(match[0].length)
		const operator = match[1]
		const operand = match[2]


		if (operator === '+')
		{
			// If the operator is "+", add the operand to the result
			result += Number(ternaryOperator(operand, variables))
		} else if (operator === '-')
		{
			// If the operator is "-", subtract the operand from the result
			result -= Number(ternaryOperator(operand, variables))
		}
	}
	// Return the final result
	console.log("\n\n------------Answer-------------\n")
	return result
}

//TESTING

const input = `if (var_1 == 2, 0, if (var_2 == 4, 15, 0)) + if (var_2 == 3, 5, 0) - if (var_4 == 2, 0, 5) + if (var_3 == 3, 5, 0)`

const values = {
	var_1: 1,
	var_2: 4,
	var_3: 3,
	var_4: 5,
}


console.log(run(input, values)) // Output: 15


