const speed = parseInt(readline());
const lightCount = parseInt(readline());
let tabDuration = [];
let tabDistance = [];
for (let i = 0; i < lightCount; i++) {
    var inputs = readline().split(' '); 
    tabDuration[i] = parseInt(inputs[1]);
    tabDistance[i] = parseInt(inputs[0]);
}

let newSpeed = speed;
let compteur;
while (lightCount != compteur) {
    compteur = 0;
    for (let k=0;k<tabDuration.length;k++) {
        if (Math.floor(newSpeed*tabDuration[k]/3.6) > tabDistance[k] || 
            Math.floor(newSpeed*tabDuration[k]/3.6)%tabDistance[k] === 0 || 
            Math.floor( tabDistance[k]/ (newSpeed*tabDuration[k]/3.6) )%2 === 0 || 
            Math.floor(newSpeed*tabDuration[k]/3.6) === Math.floor(tabDistance[k]%(newSpeed*tabDuration[k]/3.6))) {
                compteur++;
        }
        if (lightCount === compteur) {
            console.log(newSpeed);
        }
    }
    newSpeed--;
}