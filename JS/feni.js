
document.getElementById('donate-now-button-feni').addEventListener('click',function(){
    //adding donation to the remaining amount
     const donationAmount = getInputFieldValueById('input-field-value-feni')
     const remainingDonation = getTextFieldValueById('remaining-donation-feni')
     console.log(donationAmount,remainingDonation)
     if(isNaN(donationAmount) || donationAmount<=0){
          return;
     }

     document.getElementById('remaining-donation-feni').innerText = donationAmount+remainingDonation;
     
    //reducing donation amount from my account
    const myBalance = getTextFieldValueById('my-balance');

    if( myBalance < donationAmount){

        return;
    }

    document.getElementById('my-balance').innerText = myBalance - donationAmount;
})