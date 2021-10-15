var divResult = document.getElementById("divResult");
var typed = 0;
var memory = 0;
var result = 0;
var typeOperation;
var dotUsed = false;
var clearFilds = false;
            
function clearScreen() {
    divResult.innerHTML = "";
}
function resultOnScreen() {
    divResult.innerHTML = result;
}

function calculate() {
    result = parseFloat(typed);
    switch(typeOperation) {
        case '+': { result += memory; break; }
        case '-': { result -= memory; break; }
        case '*': { result *= memory; break; }
        case '/': { result = memory / result; break; }
    };
}

function updateScreenResult(value) {

    var inputTyped = divResult.innerHTML;
    var inputValue = value.innerHTML;
    var idButton = value.id;

    switch(idButton) {
        case 'bt_division': { 
            memory = parseFloat(typed);
            result = memory / result;
            typeOperation = '/';
            calculate();
            break; 
        }
        case 'bt_multiple': { 
            memory = parseFloat(typed);
            result *= memory;
            typeOperation = '*';
            calculate();
            break; 
        }
        case 'bt_plus': { 
            memory = parseFloat(typed);
            result += memory;
            typeOperation = '+';
            calculate();
            break; 
        }
        case 'bt_subtraction': { 
            memory = parseFloat(typed);
            result = memory - result;
            typeOperation = '-';
            calculate();
            break; 
        }
        case 'bt_equals': { 
            calculate();

            resultOnScreen();
            clearFilds = true;
            typeOperation = false;
            result = 0;
            memory = 0;

            break; 
        }
        case 'bt_dot': { 
            if(!clearFilds && !typeOperation && !dotUsed && inputTyped.length <= 10) {
                typed = inputTyped + inputValue;
                dotUsed = true;
                clearFilds = false;
            } else {
                typed = inputValue;
            }
            divResult.innerText = typed;
            break; 
        }
        default: {
            if(!clearFilds && !typeOperation && inputTyped.length <= 10) {
                typed = inputTyped + inputValue;
                clearFilds = false;
            } else {
                typed = inputValue;
            }
            divResult.innerText = typed;
            break;
        }
    }
    
}