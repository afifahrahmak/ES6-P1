// ----------------------------------------------------------------------------
// process.argv - Simple
// ----------------------------------------------------------------------------
let argv = process.argv;

// Outputnya adalah dalam bentuk array
// array0 => Posisi node dipanggil dari mana
// array1 => Posisi file .js dipanggil dari mana
// array2..n ==> Data / Value yang kita lemparkan
console.log(argv);
console.log(argv[2]);


let row = Number(argv[2]);
let col = Number(argv[3]);

let arr = [];

for (let i = 0; i < row; i++) {
    let output;

    arr[i] = [];

    for (let j = 0; j < col; j++) {
        arr[i][j] = '.';
    }

    // output = '|' + arr[i].join('|') + '|';
    output = `|${arr[i].join('|')}|`;
    console.log(output);
}