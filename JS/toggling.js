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
    hideElement('history-section')
})