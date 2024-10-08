// donation for flood 


document.getElementById('btn-flood-donation')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        const donationAmount = getInputValueByID('input-flood-donation-amount');
        
        const totalDonation = getInnerNumberById('total-flood-donation');
        const availableBalance = getInnerNumberById('your-balance');
        // if donation amount is bigger than available balance
        if(donationAmount > availableBalance){
            insufficientBalanceAlert();
            clearInputField('input-flood-donation-amount');
            return;
        }
        else if(donationAmount!==isNaN(donationAmount) && donationAmount>0){
        //    adding to flood balance
            updateBalance = totalDonation + donationAmount;
        //    change flood balance
            updateBalanceInnerTxt('total-flood-donation');
            // clearing in put field 
            clearInputField('input-flood-donation-amount');
            // minus from main balance
            updateBalance = getInnerNumberById('your-balance') - donationAmount;
            // change main balance
            updateBalanceInnerTxt('your-balance');
            // create history in history section
            const donationTitle = getInnerTextById('noakhali');
            // get date and time stamp
            const dateTime = donationDateTime();
            const history = document.createElement('div');
            history.innerHTML = `
                <div class="bg-white border border-lighter p-8 rounded-2xl space-y-4">
                    <h1 class="text-xl font-bold text-secondary">${donationAmount} Taka is Donated for ${donationTitle}</h1>
                    <p class="font-light text-dark text-base">Date : ${dateTime}</p>
                </div>
            `;
            
            document.getElementById('donate-history').appendChild(history); 
            SuccessFullAlert();
            openModal();
        }
        else{
            showInvalidAlert();
            clearInputField('input-flood-donation-amount');
            return
        }
    })