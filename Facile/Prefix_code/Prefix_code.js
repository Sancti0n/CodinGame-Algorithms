const n = parseInt(readline());
let tabB = [];
let myMap = new Map();
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    tabB.push(inputs[0]);
    myMap.set(inputs[0], parseInt(inputs[1]));
}
const s = readline();
let max = 0;
for (let i=0;i<n;i++) {
	if (tabB[i].length > max) { max = tabB[i].length; }
}
let j = 0;
let word = "";
let coupe = "";
let index = 0;
let wordtronque = 0;
while(j<s.length) {
    word = s[j];
    while (!myMap.has(word) && word.length < max) {
        j++;
        word += s[j];
    }
    if (!myMap.has(word)) {
        index = 1;
        wordtronque = j-(word.length-1);
        j = s.length;
    }
    else if (!word.includes("undefined") && myMap.has(word) && index === 0) {
        coupe += String.fromCodePoint(myMap.get(word));
        word = word.slice(j);
    }
    j++;
}
if (index === 0) { console.log(coupe); }
else if (index === 1  && coupe === "") { console.log("DECODE FAIL AT INDEX "+(wordtronque)); }
else { console.log("DECODE FAIL AT INDEX "+(j-2)); }