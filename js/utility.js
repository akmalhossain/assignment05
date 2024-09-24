// global variable 
let updateBalance = 0;

// toggle button donate history btn
function toggleButtonById(id) {
    document.getElementById('donation-cards').classList.add('hidden');
    document.getElementById('donate-history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

// get input value by id

function getInputValueByID(id) {
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}

// get text field value by id

function getInnerNumberById(id) {
    const innerNum = parseFloat(document.getElementById(id).innerText);
    return innerNum;
}

// get inner text 
function getInnerTextById(id) {
    const innerSentence = document.getElementById(id).innerText;
    console.log(innerSentence);
    return innerSentence;
}

// update balance token
function updateBalanceInnerTxt(id) {
    document.getElementById(id).innerText = updateBalance.toFixed(0);
}

// clear input field

function clearInputField(id) {
   const inputField = document.getElementById(id);
   inputField.value = ' ';
}


