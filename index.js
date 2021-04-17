let map = [];
let size = 10;

let cnt = 10;
/* let mine = {
    'x' : [3,8,8,6,5,0,3,3,1,4],
    'y' : [0,0,7,6,2,1,0,1,4,0],
} */

let mine = {
    'x' : [],
    'y' : [],
}
for (let i = 0; i < size; i++) {
    map[i] = [];
    for (let j = 0; j < size; j++) {
        map[i][j] = 0;
    }
}

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function findMine(x, y) {
    for (let i in mine.x) {
        if (mine.x[i] === x && mine.y[i] === y) {
            return true;
        }
    }

    return false;
}

function makeMine() {
    while (mine.x.length < cnt) {
        let x = getRandomArbitrary(0, cnt - 1);
        let y = getRandomArbitrary(0, cnt - 1);

        if (findMine(x, y) === true) {
            continue;
        }

        mine.x.push(x);
        mine.y.push(y);
    }
}

function countMine(x, y) {
    if (y > 0) {
        if (x > 0 && map[y - 1][x - 1] !== '*') {
            map[y - 1][x - 1]++;
        }
        if (map[y - 1][x] !== '*') {
            map[y - 1][x]++;
        }
        if (x < size && map[y - 1][x + 1] !== '*') {
            map[y - 1][x + 1]++;
        }
    }

    if (x > 0 && map[y][x - 1] !== '*') {
        map[y][x - 1]++;
    }
    if (x < size && map[y][x + 1] !== '*') {
        map[y][x + 1]++;
    }

    if (y < size) {
        if (x > 0 && map[y + 1][x - 1] !== '*') {
            map[y + 1][x - 1]++;
        }
        if (map[y + 1][x] !== '*') {
            map[y + 1][x]++;
        }
        if (x < size && map[y + 1][x + 1] !== '*') {
            map[y + 1][x + 1]++;
        }
    }
}

makeMine();

for (let i in mine.x) {
    console.log(mine.x[i], mine.y[i]);
    map[mine.y[i]][mine.x[i]] = '*';
    countMine(mine.x[i], mine.y[i]);
}
viewMap();

function viewMap() {
    let table = document.getElementById('map');
    let tbody = document.createElement('tbody');
    for (let i = 0; i < size; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < size; j++) {
            let td = document.createElement('td');
            td.append(map[i][j]);

            tr.append(td);
        }

        tbody.append(tr);
    }
    table.append(tbody);
}
