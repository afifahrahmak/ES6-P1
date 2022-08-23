// ----------------------------------------------------------------------------
// process.argv - Simple
// ----------------------------------------------------------------------------
let argv = process.argv;
console.log(argv)

// Outputnya adalah dalam bentuk array
// array0 => Posisi node dipanggil dari mana
// array1 => Posisi file .js dipanggil dari mana
// array2..n ==> Data / Value yang kita lemparkan
let row = Number(argv[2])
let col = +argv[3]

function generateBoard(row, col) {
    let arr = []
    for (let i = 0; i < row; i++) {
        arr.push([])
        for (let j = 0; j < col; j++) {
            arr[i].push('.')
        }
    }
    return arr
}
//! [
//!  ['.', '.'],
//!  ['.', '.']
//! ]

let board = generateBoard(row, col)

let boardToString = (board) => {
    let output = []
    for (let i = 0; i < board.length; i++) {
        output.push(`| ${board[i].join(' | ')} |`)
    }
    return output.join('\n')
}

console.log(boardToString(board))

