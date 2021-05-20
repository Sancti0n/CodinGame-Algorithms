const MESSAGE = readline();

let binaire = "";
let word = "";

for (let i=0;i<MESSAGE.length;i++) {
    if (((MESSAGE.charCodeAt(i)).toString(2)).length % 7 != 0) {
        let bit= "0" + (MESSAGE.charCodeAt(i)).toString(2);
        if (bit.length % 7 != 0) {
            while (binaire.length % 7 != 0) {
                let bit= "0" + (MESSAGE.charCodeAt(i)).toString(2);
                binaire += "0" + bit;
            }
        }
        binaire += bit;
    }
    else { binaire += (MESSAGE.charCodeAt(i)).toString(2); }
}

let j=0;
while (j<binaire.length) {
    if (binaire[j] === "0") {
        if (j === 0) { word += "00 "; }
        else { word += " 00 "; }
        while (binaire[j] === "0") {
            word += "0";
            j++;
        }
    }
    if (binaire[j] === "1") {
        if (j === 0) { word += "0 "; }
        else { word += " 0 "; }
        while (binaire[j] === "1") {
            word += "0";
            j++;
        }
    }
}
console.log(word);
