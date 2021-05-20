var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]);
const lightY = parseInt(inputs[1]);
const initialTx = parseInt(inputs[2]);
const initialTy = parseInt(inputs[3]);

let X = 0;
let Y = 0;

while (true) {
    const remainingTurns = parseInt(readline());
    
    X = initialTx - lightX;
    Y = initialTy - lightY;

    if (Y === 0) {
        if (X > 0) { console.log("W"); }
        if (X < 0) { console.log("E"); }
    }

    if (Y > 0) {
        if (X === 0) { console.log("N"); }
        if (X < 0) {
            while (X > 0) {
                console.log("SW");
                Y--;
                X--;
                while (Y === 0) {
                    console.log("W");
                    X--;
                }
            }
        }
    }

    if (Y < 0) {
        if (X === 0) { console.log("S"); }
        if (X > 0) {
            while (X > 0) { 
                console.log("SW");
                Y++;
                X--;
                while (Y === 0) {
                    console.log("W");
                    X--;
                }
            }
        }
        if (X < 0) {
            while (X < 0) {
                console.log("SE");
                Y++;
                X++;
                while (Y === 0) {
                    console.log("E");
                    X++;
                }
            }
        } 
    }
}