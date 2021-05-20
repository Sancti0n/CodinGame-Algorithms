const K = parseInt(readline());
let tabNumber = [];
let tabFinal = [];
var inputs = readline().split(' ');
for (let i = 0; i < K; i++) {
    const A = parseFloat(inputs[i]);
    tabNumber.push(A);
}

let stringN = "";
for (let i=0; i<tabNumber.length; i++) {
    let Sum = 0;
    let N = 0;
    let SumN = 0;
    while (Math.log(tabNumber[i]) > SumN) {
        Sum += Math.log(N+1);
        SumN = Sum/(N+1);
        N++;
    }
    if (i+1 === tabNumber.length) { stringN += N; }
    else { stringN += N +" "; }
}
console.log(stringN);