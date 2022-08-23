// ----------------------------------------------------------------------------
// Pass By Value
// ----------------------------------------------------------------------------
let int = 5;
let str = 'Tulisan';

let copyInt = int;
let copyStr = 'Copyan';

copyInt = 10;
str = 'Ubah Tulisan';

console.log(int, str, copyInt, copyStr);

// ----------------------------------------------------------------------------
// Pass By Refrence
// ----------------------------------------------------------------------------
let arr = []; //! copyArr = arr = []
let copyArr = arr;

arr.push(1);

console.log(arr, copyArr);

let obj = {
    name: 'Afifah',
    'batch name': 'Xenia Fox'
}

let copyObj = obj
copyObj['batch name'] = 'King Fox'

console.log(obj, copyObj)