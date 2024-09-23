// donation for flood 
let updateBalance = 0;

document.getElementById('btn-flood-donation')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        const donationAmount = getInputValueByID('input-flood-donation-amount');
        
        const totalFloodDonation = getInnerNumberById('total-flood-donation');
        if(donationAmount!==isNaN(donationAmount) && donationAmount>0){
        //    adding to flood balance
            updateBalance = totalFloodDonation + donationAmount;
        //    change flood balance
            updateBalanceInnerTxt('total-flood-donation');

            alert('donate success full !');
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
            console.log(dateTime);
            const history = document.createElement('div');
            history.innerHTML = `
                <div class="bg-white border border-lighter p-8 rounded-2xl space-y-4">
                    <h1 class="text-xl font-bold text-secondary">${donationAmount} Taka is Donated for ${donationTitle}</h1>
                    <p class="font-light text-dark text-base">Date : ${dateTime}</p>
                </div>
            `;
            document.getElementById('donate-history').appendChild(history); 

            // console.log(history);

        }
        else{
            alert('Invalid donation');
        }
    })