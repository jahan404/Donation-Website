//hide function
function hideElement(id){
    document.getElementById(id).classList.add('hidden');
}


//unhide function
function unhideElement(id){
    document.getElementById(id).classList.remove('hidden');
}

//input field value
function getInputFieldValueById(id){
    return parseFloat(document.getElementById(id).value);
}

//text field inner text by id
function getTextFieldValueById(id){
    return parseFloat(document.getElementById(id).innerText);
}



//calculation of donation
function calculateDonation (inputValue,availableDonation,myAccountBalance){
    //adding donation to the remaining amount
    const donationAmount = getInputFieldValueById(inputValue)
     const remainingDonation = getTextFieldValueById(availableDonation)
     
     console.log(donationAmount,remainingDonation)
     if(isNaN(donationAmount) || donationAmount<=0){
          alert("Invalid Donation Amount!");
          return false;
     }

     document.getElementById(availableDonation).innerText = donationAmount+remainingDonation;
     
    //reducing donation amount from my account
    const myBalance = getTextFieldValueById(myAccountBalance);

    if( myBalance < donationAmount){
        alert("Insufficient Balance!");
        return false;
    }

    document.getElementById(myAccountBalance).innerText = myBalance - donationAmount;
    return true;
}

