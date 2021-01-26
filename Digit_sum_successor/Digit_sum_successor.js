const N = parseInt(readline());
let stringN = N.toString();

function Sum(stringNumber) {
    let SumNumber = 0;
    for (let i=0; i<stringNumber.length; i++) {
        SumNumber += Number(stringNumber[i]);
    }
    return SumNumber;
}

let testN = Sum(N.toString());
let regex9 = /[9]/g;
let regex0 = /[0]/g;
let tabRegex = [];
let word = "";
let test = 0;
let tab = [];
let numb = "";

if (stringN.match(regex0)) { tabRegex = stringN.match(regex0); }
if (stringN.match(regex9)) { tabRegex = stringN.match(regex9); }

if (stringN.length-1 === tabRegex.length && stringN[0] != 0 && stringN.match(regex0)) {
    tabRegex.push("10");
    let i = tabRegex.length-1;
    while (i != -1) {
        word += tabRegex[i];
        i--;
    }
    Number(word);
    while (testN != Sum(word.toString())) { word++; }
    test = 1;
    console.log(word);
}

if (tabRegex.length === stringN.length && test === 0) {
    tabRegex[0] = "18";
    for (let j=0; j<tabRegex.length; j++) { word += tabRegex[j]; }
    console.log(word);
}
else if (stringN.length > tabRegex.length && stringN[0] === "9" && stringN[1] === "9") {
    let j=0;
    while (j<stringN.length) {
	    if (Number(stringN[j]) != 9 && Number(stringN[j]) != 0) { tab.push(stringN[j]); }
        if (Number(stringN[j]) === 9) { numb += stringN[j]; }
        j++;
    }
    if (Number(stringN[0]) === 9 && tab.length === 1) { numb = (tab[0]-1) + numb; }
    stringN = 10**stringN.length + Number(numb);
    test = 1;
    console.log(stringN);
}

if (test === 0 && tabRegex.length != stringN.length) {
    let newString = N+1;
    while (testN != Sum(newString.toString())) { newString++; }
    console.log(newString);
}