function appendtodisplay(value){
    document.getElementById('Display').value += value;

}

function cleardisplay(){
    document.getElementById('Display'). value = '';

}

function calculate(){
    var adtodisplay = document.getElementById('Display').value;

    try {
        var result = eval(adtodisplay);
        document.getElementById('Display').value = result
    }
    
    catch (error) {
        document.getElementById('Display').value = 'Error'
    }
}
