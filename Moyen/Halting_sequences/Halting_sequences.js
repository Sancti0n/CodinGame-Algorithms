const n = parseInt(readline());
let tabA = [];
let tabB = [];

for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    tabA.push(parseInt(inputs[0]));
    tabB.push(parseInt(inputs[1]));
}

for (let i = 0; i < n; i++) {
    if (tabA[i] === tabB[i]) {
        console.log("halts");
    }
    else if (tabA[i]%2 === 1 && tabB[i]%2 === 1) {
        if (Number.isInteger(Math.log( (tabB[i]+tabA[i])/tabA[i] ) /Math.log(2)) ||
            Number.isInteger(Math.log(tabB[i]+tabA[i])/Math.log(2)) ||
            Number.isInteger((tabA[i]+tabB[i])/8)) {
            console.log("halts");
        }
        else { console.log("loops"); }
    }
    else if (tabA[i]%2 === 0 && tabB[i]%2 === 0) {
        if (Number.isInteger((tabA[i]+tabB[i])/8) && 
            ((tabA[i]+tabB[i])/8)%2 === 0 || 
            tabA[i]+tabB[i] === 8) {
            console.log("halts");
        }
        else { console.log("loops"); }
    }
    else { console.log("loops"); }
}