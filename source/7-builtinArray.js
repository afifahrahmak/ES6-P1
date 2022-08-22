
// ----------------------------------------------------------------------------
// Array ForEach
// ----------------------------------------------------------------------------
let num = [1, 5, 12];

num.forEach(element => {
    console.log(element)
});

// expected output: "1"
// expected output: "5"
// expected output: "12"

// ----------------------------------------------------------------------------
// Array Map
// ----------------------------------------------------------------------------
num = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);
const map2 = array1.map(x => {
    return x * 2
});

// console.log(array1, map1);
// expected output of Array [1, 4, 9, 16] :
// Array [2, 8, 18, 32]


// ----------------------------------------------------------------------------
// Array Filter
// ----------------------------------------------------------------------------
const bigNum = num.filter(n => {
    return n > 8
})
// console.log(bigNum)
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