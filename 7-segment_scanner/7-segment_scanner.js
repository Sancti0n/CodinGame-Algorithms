const line1 = readline();
const line2 = readline();
const line3 = readline();

let number = "";
for (let i=1; i< (line1.length); i++) {
    if (i%3 === 1) {
        if (line1[i] === "_") {
            if (line2[i-1] === "|") {
                if (line2[i+1] === "|") {
                    if (line3[i-1] === "|") {
                        if (line2[i] === "_") { number += "8"; }
                        else { number += "0"; }
                    }
                    else { number += "9"; }
                }
                else if (line3[i-1] === "|") { number += "6"; }
                else { number += "5"; }
            }
            else if (line2[i+1] === "|") {
                if (line2[i] === "_") {
                    if (line3[i-1] === "|") { number += "2"; }
                    else { number += "3"; }
                }
                else { number += "7"; }
            }
        }
        else if (line2[i-1] === "|") { number += "4"; }
        else if (line3[i+1] === "|") { number += "1"; }
    }
}
console.log(number);