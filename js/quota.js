// donation for flood 


document.getElementById('btn-quota-donation')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        const donationAmount = getInputValueByID('input-quota-donation-amount');
        
        const totalDonation = getInnerNumberById('total-quota-donation');
        const availableBalance = getInnerNumberById('your-balance');
        // if donation amount is bigger than available balance
        if(donationAmount > availableBalance){
            alert('insufficient balance!! Please deposit first from any Bank or Mobile Banking')
            return;
        }
        else if(donationAmount!==isNaN(donationAmount) && donationAmount>0){
        //    adding to flood balance
            updateBalance = totalDonation + donationAmount;
        //    change flood balance
            updateBalanceInnerTxt('total-quota-donation');
            // clearing in put field 
            clearInputField('input-quota-donation-amount');
            // minus from main balance
            updateBalance = getInnerNumberById('your-balance') - donationAmount;
            // change main balance
            updateBalanceInnerTxt('your-balance');
            // create history in history section
            const donationTitle = getInnerTextById('quota');
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

            alert('Thank you for your contribution !');
            openModal()
        }
        else{
            alert('Invalid Amount!');
            // clearing in put field 
            clearInputField('input-quota-donation-amount');
            return
        }
    })