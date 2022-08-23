
// ----------------------------------------------------------------------------
// Array ForEach
// ----------------------------------------------------------------------------
let numbers = [1, 5, 12];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

numbers.forEach(el => {
    console.log(el)
})

// expected output: "1"
// expected output: "5"
// expected output: "12"

// ----------------------------------------------------------------------------
// Array Map
// ----------------------------------------------------------------------------
let num = [1, 4, 9, 16];

let arrBaru = []
for (let i = 0; i < num.length; i++) {
    arrBaru.push(num[i] * 2)
}

// pass a function to map
// jika hanya satu statement dapat dibuat one-line
const map1 = num.map(el => el * 2);

// jika lebih dari satu statement tidak bisa one-line
const map2 = num.map(el => {
    // if (el % 2 === 0) {
    return el * 2
    // } else {
    //     return el * 3
    // }
});

console.log(num, map2);
// expected output of Array [1, 4, 9, 16] :
// Array [2, 8, 18, 32]


// ----------------------------------------------------------------------------
// Array Filter
// ----------------------------------------------------------------------------
//! num = [ 1, 4, 9, 16 ]
let arrBigNum = []
for (let i = 0; i < num.length; i++) {
    if (num[i] > 8) {
        arrBigNum.push(num[i])
    }
}

const arrBigNum2 = num.filter(el => el > 8)
const bigNum = num.filter(n => {
    n > 8
})

console.log(bigNum)
// [ 9, 16 ]


// ----------------------------------------------------------------------------
// Array Reduce
// ----------------------------------------------------------------------------
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);

// console.log(sumWithInitial);
// expected output: 10