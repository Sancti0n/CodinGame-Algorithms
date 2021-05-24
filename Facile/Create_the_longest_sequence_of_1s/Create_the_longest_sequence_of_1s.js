const b = readline();
tab = []
word = ""
newTab = []

for (i=0;i<b.length;i++) {
    if (b[i] === '1') { 
        if (i === b.length-1) {
            word += b[i]
            tab.push(word.length)
        }
        else { word += b[i] }
    }
    if (b[i] === '0') {
        if (b[i-1] === '1' && b[i] === '0') {
            tab.push(word.length)
            tab.push(0)
            word = ""
        }
        else { tab.push(0) }
    }
}

for (a=0;a<tab.length;a++) {
    if (tab[a] === 0 && a > 0) {
        if (tab[a-1] > 0) {
            if (a+1 === tab.length) { tab[a+1] = 0 }
            newTab.push(tab[a-1] + 1 + tab[a+1])
        }
    }
    if (a+1 === tab.length && tab[a] > 0) { newTab.push(1 + tab[a]) }
}

if (Math.max(...tab) === 0) { console.log(1) }
else { console.log(Math.max(...newTab)) }