
document.getElementById('donate-now-button-feni').addEventListener('click',function(){
    
    const v= calculateDonation('input-field-value-feni','remaining-donation-feni','my-balance')
    if(!v)
        return;



    const donationAmount = getInputFieldValueById('input-field-value-feni')
    /////////////////////////History Section//////////////////////////
    const log = document.createElement('div')
    log.className = 'bg-white rounded-md p-4 sm:p-8 border'

    log.innerHTML =`
        <h1 class="font-bold text-black mb-2">${donationAmount} Taka is Donated for flood-2024 at Feni, Bangladesh</h1>
       <p class="text-gray-600 font-light text-sm bg-purple-50 rounded-md py-4">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}(Bangladesh Standard Time)</p> 
        `
    document.getElementById('history-section').prepend(log)
    

    
    //MODAL
    const modal = document.getElementById('my_modal_5')
    modal.showModal();
})
