//input buttons
const numbers = document.querySelector('.numbers');
const operator = document.querySelector('.symbols');
const equal = document.querySelector('.equal');

//TextAreas
const currentInput = document.querySelector('.current-input');
const previousInput = document.querySelector('.previous-input');

//delete options
const removeNumber = document.querySelector('.delete');
const clear = document.querySelector('.clear');


//store values user inputs and symbol
let currentNumber = '0';
let previousNumber = '';
let currentSymbol = '';
let previousSymbol = '';
let result = '';


window.onload = currentInput.textContent = '0';

numbers.addEventListener("click", function(e){
    appendNumber(e.target);
});

//deletes last number user inputted
removeNumber.addEventListener("click", function(){
    removeDigit();
});

//clears all history
clear.addEventListener("click", function(){
    clearNumbers();
});

//stores which operator button is pressed and calls operate function
operator.addEventListener("click", function(e){
    if(e.target.className != 'symbols'){
        currentSymbol = e.target.textContent;
        console.log(currentNumber)
        console.log(previousNumber)
        console.log(previousSymbol)
        if(currentNumber == '' && previousNumber == ''){
            previousNumber = 0;
        }
        else if(currentNumber != '' && previousNumber == ''){
            previousNumber = currentNumber;
        }
        else if(currentNumber != '' && previousNumber != ''){
            if(operate(previousNumber, currentNumber, previousSymbol) != false){
                result = strip(result);
                previousNumber = result;
                currentInput.textContent = result;
            }
            else{
                clearNumbers();
            }
        }
        previousSymbol = currentSymbol;
        previousInput.textContent = previousNumber + " " + previousSymbol;

        currentNumber = '';
    }
});

equal.addEventListener("click", function(){
    if(operate(previousNumber, currentNumber, previousSymbol) != false){
        previousInput.textContent = previousNumber + " " + currentSymbol + " " + currentNumber + " = ";
        result = strip(result);
        previousNumber = result;
        currentInput.textContent = result;
        currentNumber = '';
    }
    else{
        clearNumbers();
    }
});

//Mathematical operations
function operate(num1, num2, operator){

    if(operator == '+'){
        result = +num1 + +num2;
    }
    else if(operator == '-'){
        result = num1 - num2;
    }
    else if(operator == '×'){
        result = num1 * num2;
    }
    else if(operator == '÷'){
        if(num2 == '0'){
            alert("You can't divide by 0!");
            return false;
        }
        else{
            result = num1 / num2;
        }
    }
};

//clears all calculation history
function clearNumbers(){
    currentNumber = '';
    previousNumber = '';
    currentSymbol = '';
    result = '';
    previousInput.textContent = '';
    currentInput.textContent = '0';
};

//removes single digit from currentNumber
function removeDigit(){
    currentNumber = currentNumber.slice(0, -1);
    currentInput.textContent = currentNumber;
    
    //display '0' if all numbers are deleted
    if(currentNumber == ''){
        currentInput.textContent = '0';
    }
};

//rounds large numbers to 7 decimal places
function strip(number) {
    return parseFloat(number.toPrecision(7));
}

function appendNumber(number){
    //allows a max of 15 digits
    if(number.className != 'numbers' && number.className != 'equal' && currentNumber.length < 12){
        //prevents leading zero if number is not a decimal
        if(number.textContent == '0' && currentNumber == '0'){
            currentNumber = '0'
        }
        //allows only one decimal symbol in number
        else if(number.textContent == '.' && currentNumber.includes('.')){
            currentNumber += '';
        }
        //allows leading '0' if a decimal directly follows
        else if(number.textContent == '.' && currentNumber.length == 0){
            currentNumber += '0' + number.textContent;
        }
        else{
            if(currentNumber == '0')
            currentNumber = number.textContent
            else
            currentNumber += number.textContent;
        }
        
        currentInput.textContent = currentNumber;
    }
};