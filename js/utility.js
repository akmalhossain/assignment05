// global variable 
let updateBalance = 0;

// toggle button donate history btn
function toggleButtonById(id) {
    document.getElementById('donation-cards').classList.add('hidden');
    document.getElementById('donate-history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
/**
 * Reusable Functions 
 */
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
// show invalid alert 
function showInvalidAlert() {
    alert('Invalid Amount! Please input positive numeric value for donation amount');
 }

//  show insufficient balance alert
function insufficientBalanceAlert(){
    alert('insufficient balance!! Please deposit first from any Bank or Mobile Banking');
}

// success alert
function SuccessFullAlert(){
    alert('We appreciate you !!! Thank you for your contribution !' );
}


