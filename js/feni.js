// donation for flood 
document.getElementById('btn-feni-donation')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        const donationAmount = getInputValueByID('input-feni-donation-amount');
        console.log(donationAmount, updateBalance);
        const totalDonation = getInnerNumberById('total-feni-donation');
        const availableBalance = getInnerNumberById('your-balance');
        if(donationAmount > availableBalance){
            insufficientBalanceAlert();
            clearInputField('input-feni-donation-amount');
            return;
        }
        else if(donationAmount!==isNaN(donationAmount) && donationAmount>0){
            updateBalance = totalDonation + donationAmount;
            updateBalanceInnerTxt('total-feni-donation');
            clearInputField('input-feni-donation-amount');
            updateBalance = getInnerNumberById('your-balance') - donationAmount;
            updateBalanceInnerTxt('your-balance');
            const donationTitle = getInnerTextById('feni');
            const dateTime = donationDateTime();
            const history = document.createElement('div');
            history.innerHTML = `
                <div class="bg-white border border-lighter p-8 rounded-2xl space-y-4">
                    <h1 class="text-xl font-bold text-secondary">${donationAmount} Taka is Donated for ${donationTitle}</h1>
                    <p class="font-light text-dark text-base">Date : ${dateTime}</p>
                </div>
            `;
            document.getElementById('history-title').style.display = 'none';
            document.getElementById('donate-history').appendChild(history); 
            SuccessFullAlert();
            openModal();
        }
        else{
            showInvalidAlert();
            clearInputField('input-feni-donation-amount');
            return
        }
        
    })