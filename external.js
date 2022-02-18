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


//store values user inputs
let display = '';
//store operand symbol user inputs
let symbol = '';
//stores both numbers that are operated on
let firstNumber = '0';
let secondNumber = '0';
let finalAnswer = '0';

window.onload = currentInput.textContent = '0';

numbers.addEventListener("click", function(e){
    //allows a max of 15 digits
    if(e.target.className != 'numbers' && e.target.className != 'equal' && display.length < 15){
        //prevents leading zero if number is not a decimal
        if(e.target.textContent == '0' && display.length == 0){
            currentInput.textContent = '0';
        }
        else{
            //allows only one decimal symbol in number
            if(e.target.textContent == '.' && display.includes('.')){
                display += '';
            }
            //allows leading '0' if a decimal directly follows
            else if(e.target.textContent == '.' && display.length == 0){
                display += '0' + e.target.textContent;
            }
            else{
                display += e.target.textContent;
            }
            currentInput.textContent = display;
        }
    }
});
//deletes last number user inputted
removeNumber.addEventListener("click", function(){
    display = display.slice(0, -1);
    currentInput.textContent = display;
    
    if(display == ''){
        currentInput.textContent = '0';
    }
});

//clears all calulation history
clear.addEventListener("click", function(){
    display = '';
    previousInput.textContent = '';
    currentInput.textContent = '0';
});

operator.addEventListener("click", function(e){
    if(e.target.className != 'symbols'){
        symbol = e.target.textContent;

        if(display == ''){
            display = '0';
        }
        previousInput.textContent = display + " " + symbol;

        firstNumber = display;
        //display = '';
        //operate(symbol, firstNumber, )
    }
});

//Mathematical operations
function add(num1, num2){
    return num1 + num2;
};
function subtract(num1, num2){
    return num1 - num2;
};
function multiply(num1, num2){
    return num1 * num2;
};
function divide(num1, num2){
    return num1 / num2;
};

function operate(operator, num1, num2){
    let answer = '';
    if(operator == '+'){
        answer = num1 + num2;
    }
    else if(operator == '-'){
        answer = num1 - num2;
    }
    else if(operator == 'x'){
        answer = num1 * num2;
    }
    else{
        answer = num1 / num2;
    }
    return 
};