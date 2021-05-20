const N = parseInt(readline());
let tabPi = [];
for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    tabPi.push(pi);
}
tabPi.sort();
let tampon;
for (let j=0;j<tabPi.length;j++) {
    let diff;
    if (j === 0) { tampon = tabPi[j]; }
    if (j > 0) { diff = Math.abs(tabPi[j-1]-tabPi[j]); }
    if (tampon >= diff) { tampon = diff; }
}
console.log(tampon);
