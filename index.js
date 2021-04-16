let map = [];
let size = 10;

let cnt = 10;

for (let i = 0; i < size; i++) {
    map[i] = [];
    for (let j = 0; j < size; j++) {
        map[i][j] = 0;
    }
}

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

let mine = [];
for (let i = 0; i < cnt; i++) {
    let x = getRandomArbitrary(0, size - 1);
    let y = getRandomArbitrary(0, size - 1);

    mine.push([x, y]);
}
console.log(mine);