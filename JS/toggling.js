/////////////////CLICKING HISTORY BUTTON////////////////////////

document.getElementById('history-button').addEventListener('click',function(){
    //adding bg to history button
    document.getElementById('history-button').classList.add(
        'bg-[#B4F461]' 
        )
    document.getElementById('history-button').classList.remove(
        'bg-transparent' 
        )

    //removing bg from donation button
    document.getElementById('donation-button').classList.add(
        'bg-transparent','border','text-[#111111B3]' 
        )
    document.getElementById('donation-button').classList.remove(
        'bg-[#B4F461]' ,'font-bold'
        )

    hideElement('donation-cards-section');
    hideElement('footer')
    unhideElement('history-section')

})







/////////////////CLICKING DONATION BUTTON////////////////////////

document.getElementById('donation-button').addEventListener('click',function(){
    //adding bg to donation button
    document.getElementById('donation-button').classList.add(
        'bg-[#B4F461]' 
        )
    document.getElementById('donation-button').classList.remove(
        'bg-transparent' 
        )

    //removing bg from history button
    document.getElementById('history-button').classList.add(
        'bg-transparent' 
        )
    document.getElementById('history-button').classList.remove(
        'bg-[#B4F461]' 
        )

    unhideElement('donation-cards-section');
    unhideElement('footer')
    hideElement('history-section')
})






////////////////////////adding footer to history page after clicking to donate now button/////////////////////////
    document.getElementById('donate-now-button-noakhali').addEventListener('click',function(){
        document.getElementById('history-button').addEventListener('click',function(){
    
          document.getElementById('footer').classList.remove('hidden')
          console.log("hidden")
        })
    })


    document.getElementById('donate-now-button-feni').addEventListener('click',function(){
        document.getElementById('history-button').addEventListener('click',function(){
    
          document.getElementById('footer').classList.remove('hidden')
          console.log("hidden")
        })
    })


    document.getElementById('donate-now-button-quota-movement').addEventListener('click',function(){
        document.getElementById('history-button').addEventListener('click',function(){
    
          document.getElementById('footer').classList.remove('hidden')
          console.log("hidden")
        })
    })