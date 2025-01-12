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