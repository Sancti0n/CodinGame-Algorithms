var inputs = readline().split(' ');
const n = parseInt(inputs[0]);
const k = parseInt(inputs[1]);
var inputs = readline().split(' ');
let tab = [];
let tab2 = [];
let tabSomme = [];
let number = 1;
let somme = 0;

for (let i=0; i<k; i++) { tab.push(parseInt(inputs[i])); }

function getAllCombos(tab){
    if(tab[0] === undefined) return [tab]
    return getAllCombos(tab.slice(1)).flatMap(el => [el.concat(tab[0]), el]);
}

tab2 = getAllCombos(tab);

for (let i=0; i<tab2.length; i++) {
	for (let j=0; j<tab2[i].length; j++) {
		if (tab2[i].length >= 1) number *= tab2[i][j]
	}
    if (number != 1 && n/number >= 1) tabSomme.push(number*(-1)**(tab2[i].length-1))
    number = 1;
}

for (let k=0; k<tabSomme.length; k++) { somme += Math.trunc(n/tabSomme[k]);}
console.log(somme)