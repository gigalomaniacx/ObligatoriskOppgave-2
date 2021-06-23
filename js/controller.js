// adding a pole
function addPole() {
    inputValue != "" && inputValue != 0 && inputValue <= 10 ? numbers.push(inputValue) :
    errMsg = 'Verdi må være mellom 1 og 10';
    numbers.length > 8 ? removeOverflowPoles() : "";
    inputValue = '';
    show();
}

function removeOverflowPoles(){
    let delnumber = numbers.length - 1;
    numbers.splice(delnumber, 1);
    errMsg = "Det ble for mange stolper, slett noen før du legger til nye";
}

// remove a pole 
function removePole() {
    let rpole = (chosenBar - 1);
    numbers.splice(rpole, 1);
    show();
}

function changePole(){
    let rpole = (chosenBar - 1);
    inputValue > 0 && inputValue <= 10 ? numbers[rpole] = parseInt(inputValue): errMsg = "Verdi må være mellom 1-10";
    chosenBar = 'ingen';
    show();
}

//selecting a pole
function chooseBar(val) {
    chosenBar = chosenBar == val ? 'ingen' : val;
    show();
}