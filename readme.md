## Table of Content
1. [Data Structures](#data-structures)
    * [Array](#array)
    * [Object](#object)
    * [Passed by Value and Reference](#passed-by-value-and-reference)
2. [Use Strict](#use-strict)
3. [Arrow Function](#arrow-function)
4. [Module Export](#module-export)
5. [Basic Destructuring](#basic-destructuring)
6. [process.argv](#process-argv)
7. [Built-in Function](#array-builtin-function)
8. [Referensi](#referensi)


## Data Structures 
[source file js](/source/1-dataStructure.js)

### [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
Kumpulan data yang disatukan dalam 1 variable

Cara pakai:
```javascript
// cara inisialisasi array
let arr = [];

// cara pakai array
arr.push('data pertama');
arr.push('data kedua');

// cara akses value
// ingat array itu cara pakainya selalu dari 0 untuk index pertamanya
console.log(arr[0]);
console.log(arr[1]);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```


### [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
Merupakan kumpulan data yang umumnya menyatakan sesuatu 

Contoh :  
object Student, punya informasi tertentu seperti nama, alamat, id, dkk

Apabila kita akan merepresentasikan dalam bentuk object, jadinya adalah seperti berikut.

Code:
```javascript
// Inisialisasi object
let objStudent = {};

// Cara set value dalam objStudent
objStudent.nama = 'Daniel';
objStudent.alamat = 'Surabaya';
objStudent.id = '01';

// Cara set value object dari awal
let objStudent2 = {
    nama: 'Ayu',
    alamat: 'Jakarta',
    id: '02'
};

console.log(objStudent.nama);
console.log(objStudent2['nama']);
```


### [Passed by Value and Reference](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)
[source file js](/source/2-passByValue_ref.js)
**Warning**   
Tipe data primitif dalam javascript (`Boolean`, `null`, `undefined`, `String`, `number`)   
umumnya bersifat *passed by value*, yaitu value dalam tipe data tersebut akan dikirimkan  
apa adanya.

Code:
```javascript
let int = 5;
let str = 'Tulisan';

let copyInt = int;
let copyStr = 'Copyan';

int = 10;
str = 'Ubah Tulisan';

console.log(int, str, int, copyStr);
```

Kode di atas bila direpresentasikan dalam memori:
| Parameter | Value |
| :-------- | ----: |
| int  | 10     |
| str | 'Ubah Tulisan' |
| copyInt | 5 |
| copyStr | 'Copyan' |

Berbeda dengan tipe data Object, yang meliputi `Array`, `Function`, dan `Object` itu  
sendiri bersifat *passed by reference*, yaitu value dalam tipe data tersebut akan dikirimkan  
berupa alamat.

Code:
```javascript
let arr = [];
let copyArr = arr;

arr.push(1);

console.log(arr, copyArr);
```
  Kode di atas bila direpresentasikan dalam memori:
  | Parameter | Value | &nbsp; | Alamat | Object |
  | :-------- | ----: | ------ | :----- | -----: | 
  | arr | `<#001>` | &nbsp; | `<#001>` | `[ 1 ]` |
  | copyArr | `<#001>` | &nbsp; | &nbsp; | &nbsp; |

```javascript
let obj = {
    name: 'Afifah',
    'batch name': 'Munich Fox'
}

let copyObj = obj
copyObj['batch name'] = 'King Fox'

console.log(obj, copyObj)
```
## [Use Strict](https://www.w3schools.com/js/js_strict.asp)

Run javascript into strict mode, can be declared globally or locally (inside function)
- Using an object & variable, without declaring it
- Duplicating a parameter name
- Using booked name (with, arguments, etc) as variable
<br><br>

## Arrow Function
[source file js](/source/3-arrowFunction.js)
Membuat penulisan function menjadi lebih singkat

Code:

```javascript
// Export File

// Cara menulis fungsi yang umum digunakan
function penjumlahan(param1, param2) {
  return param1 + param2;
}

// Alternatif cara menulis fungsi
let pengurangan = function (param1, param2) {
  return param1 - param2;
}

// Cara penulisan function dengan arrow function
let perkalian = (param1, param2) => {
  return param1 * param2;
}

// Bila akan langsung mereturn, arrow function tanpa curly bracket { }
let pembagian = (param1, param2) => param1 / param2;
```

## Module Export
Dalam dunia programming, sebisa mungkin kita harus memodularisasikan kode yang
kita miliki. nah salah satu caranya adalah dengan memecah-mecah kode yang dibuat
ke dalam beberapa file.

Untuk itu di javascript sendiri kita bisa menggunakan `export` dan `import` kode
supaya bisa terhubung walau ada dalam file yang berbeda.

Mari kita lihat kembali fungsi yang sudah kita buat dalam pembelajaran arrow
function tadi dan melakukan `export` dan `import` terhadap kode tersebut

[source file js](/source/4a-moduleExports.js)

```js
// kita akan melakukan export supaya bisa digunakan pada file lain
// supaya bisa menampung banyak, kita akan menggunakan object
// multiple variable / function
// assign to object or array
module.exports = {
  penjumlahan,
  pengurangan,
  perkalian,
  pembagian
};

// single variable / function
module.exports = penjumlahan
```


<br>


Sedangkan untuk importnya adalah kita menggunakan
[source file js](/source/4b-moduleExports.js)
```javascript
// Imported data (function)
const penjumlahan = require('./path/to/file/exported/fileName.js').penjumlahan;
const pengurangan = require('./path/to/file/exported/fileName.js').pengurangan;
const perkalian = require('./path/to/file/exported/fileName.js').perkalian;
const pembagian = require('./path/to/file/exported/fileName.js').pembagian;

// driver code
console.log(penjumlahan(10, 20));
console.log(pengurangan(20, 30));
```

## [Basic Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
[source file js](/source/5-destructuringObj.js)
Mari kita lihat sedikit lagi mengenai kode fungsi aritmatik kita yang ada di atas.
Pada saat melakukan import, kita menuliskan cukup banyak repetisi kode kita. Ada tidak yah cara untuk mempersingkat kode kita lagi?

Tentu saja ada !

Please welcome `destructuring`.

`destructuring` atau `destructuring assignment` adalah suatu sintaks pada javascript
yang memungkinkan kita untuk mengeluarkan seluruh isi dari array atau object (dalam
kasus kita berarti kita akan mengeluarkan isi dari object).

Contoh:
```javascript
const anObject = {
  id: 1,
  name: "Destructuring"
};

// destructuring object
const { id, name } = anObject;

console.log(id);
console.log(name);
```

Apabila kita kembali pada kode import fungsi penjumlahan yang ada di atas,
maka akan berubah menjadi

```javascript
const { 
  penjumlahan,
  pengurangan,
  perkalian,
  pembagian
} = require('./path/to/file/exported/fileName.js')

// driver code start here
console.log(penjumlahan(10, 20));
console.log(pengurangan(20, 30));
```


## [Process Argv](https://www.geeksforgeeks.org/node-js-process-argv-property/)
[source file js](/source/6-processArgv.js)

Selama ini kan kita menggunakan file .js secara langsung kita panggil misal `node index.js`  
tapi bagaimana yah caranya kita ingin menangkap suatu nilai yang dilempar pada saat kita  
memanggil node tersebut? misalnya `node index.js "Cetak aku mas"`  

Solusinya? gunakan built-in `process.argv` dari nodejs

Code:
```javascript
let argv = process.argv;

// Output dari argv adalah bentuk array
// array0 => Posisi node dipanggil dari mana
// array1 => Posisi file .js dipanggil dari mana
// array2..n ==> Data / Value yang kita lemparkan
console.log(argv);
console.log(argv[2]);
```

**Warning**  
Hasil tangkapan value dari argv semuanya dalam bentuk `String` sekalipun input yang kita  
masukkan berupa `Number`, sehingga apabila kita menginginkan `Number`, jangan lupa untuk  
dikonversi terlebih dahulu input yang diterima dengan built-in function yang disediakan  
oleh Javascript.

Sekarang,  
Bagaimana bila kita menginginkan 2 parameter input dari process.argv?  

Misal:  
Mencetak simbol `.` dengan jumlah baris `x` dan kolom `y` dipisah dengan `|`

Contoh input:
```javascript
// node index.js x y
node index.js 5 15
```

Contoh output
```javascript
|.|.|.|.|.|.|.|.|.|.|.|.|.|.|.|
|.|.|.|.|.|.|.|.|.|.|.|.|.|.|.|
|.|.|.|.|.|.|.|.|.|.|.|.|.|.|.|
|.|.|.|.|.|.|.|.|.|.|.|.|.|.|.|
|.|.|.|.|.|.|.|.|.|.|.|.|.|.|.|
```

Code:
```javascript
let argv = process.argv;
let row = Number(argv[2]);
let col = Number(argv[3]);

function generateBoard() {
    let arr = [];
    for (let i = 0; i < row; i++) {
        arr[i] = [];
        for (let j = 0; j < col; j++) {
            arr[i][j] = '.';
        }
    }
    return arr
}
console.log(generateBoard(row, col));

function boardToString(board) {
    let output = []
    for (let i = 0; i < board.length; i++) {
        output.push(`|${board[i].join('|')}|`);
    }
    return output.join('\n')
}
console.log(boardToString(generateBoard(row, col)));
```

## Array Builtin Function 
[source file js](/source/7-builtinArray.js)

### [For Each](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
loop through array
```js
const num = [1, 5, 12];

num.forEach(element => {
  console.log(element)
});

// expected output: "1"
// expected output: "5"
// expected output: "12"

```

### [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
Manipulated all array elements with same logic, and push it to new array
```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(array1, map1);
// expected output: Array [1, 4, 9, 16] Array [2, 8, 18, 32]
```
### [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
Create new array returning element with passed true on callback function
```js
const num = [1, 4, 9, 16];

const bigNum = num.filter(n => {
  return n > 8
})

console.log(bigNum)
// [ 9, 16 ]
```

### [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
Sum / add element to defined initial value
```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
```


## Referensi
* [Perbedaan var, const, let - Medium](https://medium.com/coderupa/es6-var-let-const-apa-bedanya-1cd4daaee9f0)
* [Javascript Array Objects - TutorialsPoint](https://www.tutorialspoint.com/javascript/javascript_arrays_object.htm)
* [process.Argv - NodeJS](https://nodejs.org/docs/latest/api/process.html#process_process_argv)
* [Use Strict - W3Schools](https://www.w3schools.com/js/js_strict.asp)
* [Strict Mode - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
* [Destructuring - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Value vs Reference - Codeburst](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)
* [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
