const n = parseInt(readline());
var inputs = readline().split(' ');
let minimum = 0
let tab = [];
let tab2 = [];
var indices = [];

if (n === 0) { console.log(0); }
else { 
    for (let i=0; i<n; i++) { 
        tab[i] = parseInt(inputs[i]);
        tab2[i] = Math.abs(0 - tab[i]);
        minimum = tab[tab2.indexOf(Math.min(...tab2))];

        if (Math.abs(tab[i]) === Math.abs(minimum)) { indices.push(tab[i]); }
    }

    if (indices.indexOf(-minimum) != -1 && indices.indexOf(minimum) != -1) { console.log(Math.abs(minimum)); }
    else { console.log(minimum); }
}