while (true) {
    let max = 0;
    let rang = 0;
    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline());

        if (max < mountainH) {
            max = mountainH;
            rang = i;
        }
    }
    console.log(rang);
}
