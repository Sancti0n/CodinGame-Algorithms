const N = parseInt(readline());
const Q = parseInt(readline());

let tabExtension = [];
let tabMIME = [];
let tabFNAME = [];
let tabFINAL = [];

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0];
    const MT = inputs[1];
    tabExtension.push(EXT.toLowerCase());
    tabMIME.push(MT);
}

for (let i = 0; i < Q; i++) {
    const FNAME = readline();
    tabFNAME.push(FNAME.toLowerCase());
}

for (let i=0;i<tabFNAME.length;i++) {
    let a = 0;
    for (let j=0;j<tabExtension.length;j++) {
        if (tabFNAME[i].includes("."+tabExtension[j]) 
        && tabExtension[j][tabExtension[j].length-1] === tabFNAME[i][tabFNAME[i].length-1] 
        && tabFNAME[i].length > 2) {
            tabFINAL[i] = tabMIME[j];
            a = 1;
        }
        else if (a === 0) { tabFINAL[i] = "UNKNOWN"; }
    }
}

for (let k=0;k<tabFINAL.length;k++) {
    console.log(tabFINAL[k]);
}