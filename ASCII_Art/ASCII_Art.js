const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();
let word;
let tabAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","?"];
let tableauASCII = [];
let indexT = [];

for (let i = 0; i < H; i++) {
    const ROW = readline();
    for (let j = 0; j < 27; j++) {
        tableauASCII[(27*i) + j] = ROW.slice(j*L, (j*L)+L);   
    }
}

let TtoLower = T.toLowerCase();

for (let m=0;m<TtoLower.length;m++) {
    let caractere = TtoLower[m].toString();
    if (tabAlphabet.includes(caractere)) {
        indexT[TtoLower.indexOf(TtoLower[m], m)] = tabAlphabet.indexOf(caractere);
    }
    else { indexT[TtoLower.indexOf(TtoLower[m], m)] = 26; }
}

for (let k = 0; k < H; k++) {
    word="";
    for(let l = 0; l < T.length; l++) {
        word += tableauASCII[(indexT[l] + k * 27)];
        if (l === (T.length - 1)) { console.log(word); }
    }
}