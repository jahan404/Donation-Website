
document.getElementById('donate-now-button-noakhali').addEventListener('click',function(){
    //adding donation to the remaining amount
     const donationAmount = getInputFieldValueById('input-field-value-noakhali')
     const remainingDonation = getTextFieldValueById('remaining-donation-noakhali')
     console.log(donationAmount,remainingDonation)
     if(isNaN(donationAmount) || donationAmount<=0){
          return;
     }

     document.getElementById('remaining-donation-noakhali').innerText = donationAmount+remainingDonation;
     
    //reducing donation amount from my account
    const myBalance = getTextFieldValueById('my-balance');

    if( myBalance < donationAmount){

        return;
    }

    document.getElementById('my-balance').innerText = myBalance - donationAmount;
})