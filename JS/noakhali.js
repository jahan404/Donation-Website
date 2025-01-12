
document.getElementById('donate-now-button-noakhali').addEventListener('click',function(){
    
    const v = calculateDonation('input-field-value-noakhali','remaining-donation-noakhali','my-balance')
    if(!v)
        return;



    const donationAmount = getInputFieldValueById('input-field-value-noakhali')
    /////////////////////////History Section//////////////////////////
    const log = document.createElement('div')
    log.className = 'bg-white rounded-md p-8 border'

    log.innerHTML =`
        <h1 class="font-bold text-black mb-2">${donationAmount} Taka is Donated for flood-2024 at Noakhali, Bangladesh</h1>
       <p class="text-gray-600 font-light text-sm bg-lime-100 py-4  rounded-md">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}(Bangladesh Standard Time)</p> 
        `
    document.getElementById('history-section').prepend(log)


    

})