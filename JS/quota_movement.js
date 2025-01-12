document.getElementById('donate-now-button-quota-movement').addEventListener('click',function(){
    const v = calculateDonation('input-field-value-quota-movement','remaining-donation-quota-movement','my-balance')
    if(!v)
        return;



    const donationAmount = getInputFieldValueById('input-field-value-quota-movement')
    /////////////////////////History Section//////////////////////////
    const log = document.createElement('div')
    log.className = 'bg-white rounded-md p-8 border'

    log.innerHTML =`
        <h1 class="font-bold text-black mb-2">${donationAmount} Taka is Donated for the injured people of Quota Movement, Bangladesh</h1>
       <p class="text-gray-600 font-light text-sm bg-slate-100 rounded-md py-4">Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}(Bangladesh Standard Time)</p> 
        `
       document.getElementById('history-section').prepend(log)


       
})