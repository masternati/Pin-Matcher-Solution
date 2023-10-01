function getPin() {
    const pin = generatePin();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    }
    else{
        return getPin();
    }
};

function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random;
};

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    // display pin 
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
});

// input pin
document.getElementById('calculator').addEventListener('click', function typePinNumber(event){
    const num = event.target.innerText;
    const typePinNumber = document.getElementById('typed-pin');
    const previousTypeNumber = typePinNumber.value;
    if (isNaN(num)) {
        if (num == 'C') {
            typePinNumber.value = '';
        }
        else if(num == '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const newDigits = digits.join('');
            typePinNumber.value = newDigits;
        }
    }
    else{
        const newPinNumber = previousTypeNumber + num;
        typePinNumber.value = newPinNumber;
    } 
});

const successMessage = document.getElementById('pin-success');
const failureMessage = document.getElementById('pin-failure');
failureMessage.style.display = 'none';
successMessage.style.display = 'none';

document.getElementById('verify-pin').addEventListener('click', function messageDisplay () {
    const displayedPin = document.getElementById('display-pin');
    const currenPin = displayedPin.value;

    const typedPin = document.getElementById('typed-pin');
    const typedPinDigits = typedPin.value;


    if (currenPin == typedPinDigits) {
        successMessage.style.display = 'block';
        failureMessage.style.display = 'none';
    } 
    else {
        failureMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
   
})
