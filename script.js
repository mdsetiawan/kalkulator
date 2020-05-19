const calculatorScreen =document.querySelector('.calculator-screen')
const updateScreen = number => {
	calculatorScreen.value = number
}
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
const number = document.querySelectorAll('.number')

const operators = document.querySelectorAll('.operator')


const inputNumber = number => {
  if (currentNumber === '0') {
 	currentNumber = number
 }
 else{
 	currentNumber += number
 }
}
 const inputOperator = operator => {
 	if (calculationOperator === '') {
 		prevNumber = currentNumber
 	}
 	calculationOperator = operator
 	currentNumber = '0'
}

number.forEach(numbers => {
numbers.addEventListener('click', event => {
inputNumber(event.target.value)
updateScreen(currentNumber)
})
 });
operators.forEach(operator => {
	operator.addEventListener('click', e => {
		
		inputOperator(e.target.value)
	})
})

const calculate = () => {
	let result = ''
	switch(calculationOperator){
		case '+':
		result = parseFloat(prevNumber) + parseFloat(currentNumber)
		break
		case '-':
		result = parseFloat(prevNumber) - parseFloat(currentNumber)
		break
		case '*':
		result = parseFloat(prevNumber) * parseFloat(currentNumber)
		break
		case '/':
		result = parseFloat(prevNumber) / parseFloat(currentNumber)
		break

		 default:
			break
	}
	currentNumber = result
}
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
	calculate()
	updateScreen(currentNumber)
}) 
const clearBtn = () =>{
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}

const allClear = document.querySelector('.all-clear')
allClear.addEventListener('click', e =>{
	clearBtn()
	updateScreen(currentNumber)
})
const inputDecimal = dot => {
	if(currentNumber.includes('.')){
		return 
	}
	currentNumber += dot
}
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', e => {
	inputDecimal(e.target.value)
	updateScreen(currentNumber)
})
const deleteClosest = dot => {
currentNumber = currentNumber.toString().slice(0, -1)
}
const  deleteExisting = document.querySelector('.delete')
deleteExisting.addEventListener('click', e => {
	deleteClosest(e.target.value)
	updateScreen(currentNumber)
})
