const surfaceN = parseInt(readline());

for (let i = 0; i < surfaceN; i++) {
    var inputs = readline().split(' ');
    const landX = parseInt(inputs[0]);
    const landY = parseInt(inputs[1]);
}

while (true) {
    var inputs = readline().split(' ');
    const X = parseInt(inputs[0]);
    const Y = parseInt(inputs[1]);
    const hSpeed = parseInt(inputs[2]);
    const vSpeed = parseInt(inputs[3]);
    const fuel = parseInt(inputs[4]);
    const rotate = parseInt(inputs[5]);
    const power = parseInt(inputs[6]);

    if (Math.abs(vSpeed) >= 39) {
        console.log('0 4');
    }
    if (Math.abs(vSpeed) < 39) {
        console.log('0 1');
    }
}