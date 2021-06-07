## Table of Content
1. [Data Structures](#data-structures)
    * [Array](#array)
    * [Object](#object)
    * [Passed by Value and Reference](#passed-by-value-and-reference)
1. [Arrow Function](#arrow-function)
1. [module.exports](#module.exports)
1. [Basic Destructuring](#basic-destructuring)
1. [process.argv](#process.argv)
1. [Referensi](#referensi)


## Data Structures

### Array
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
    console.log(arrayPenampung[i]);
}
```


### Object
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


### Passed by Value and Reference
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


## Arrow Function
Membuat penulisan function menjadi lebih singkat

Code:
```javascript
// Cara menulis fungsi yang umum digunakan
function sum(param1, param2) {
  return param1 + param2;
}

// Alternatif cara menulis fungsi
var sum2 = function (param1, param2) {
  return param1 + param2;
}

// Cara penulisan function dengan arrow function
let sum3 = (param1, param2) => {
  return param1 + param2;
}

// Bila akan langsung mereturn, arrow function tanpa curly bracket { }
let sum4 = (param1, param2) => param1 + param2;
```

## module.exports
Dalam dunia programming, sebisa mungkin kita harus memodularisasikan kode yang
kita miliki. nah salah satu caranya adalah dengan memecah-mecah kode yang dibuat
ke dalam beberapa file.

Untuk itu di javascript sendiri kita bisa menggunakan `export` dan `import` kode
supaya bisa terhubung walau ada dalam file yang berbeda.

Mari kita lihat kembali fungsi yang sudah kita buat dalam pembelajaran arrow
function tadi dan melakukan `export` dan `import` terhadap kode tersebut

```javascript
// Export File

// Cara menulis fungsi yang umum digunakan
function sum1(param1, param2) {
  return param1 + param2;
}

// Alternatif cara menulis fungsi
var sum2 = function (param1, param2) {
  return param1 + param2;
}

// Cara penulisan function dengan arrow function
let sum3 = (param1, param2) => {
  return param1 + param2;
}

// Bila akan langsung mereturn, arrow function tanpa curly bracket { }
let sum4 = (param1, param2) => param1 + param2;

// kita akan melakukan export supaya bisa digunakan pada file lain
// supaya bisa menampung banyak, kita akan menggunakan object
module.exports = {
  sum1,
  sum2,
  sum3,
  sum4
};
```

Sedangkan untuk importnya adalah kita menggunakan
```javascript
// Imported data (function)
const sum1 = require('./path/to/file/exported/fileName.js').sum;
const sum2 = require('./path/to/file/exported/fileName.js').sum2;
const sum3 = require('./path/to/file/exported/fileName.js').sum3;
const sum4 = require('./path/to/file/exported/fileName.js').sum4;

// driver code
sum1(10, 20);
sum2(20, 30);
```

## Basic Destructuring
Mari kita lihat sedikit lagi mengenai kode fungsi penjumlahan kita yang ada di atas.
Pada saat melakukan import, kita menuliskan cukup banyak repetisi kode kita yah !
Ada tidak yah cara untuk mempersingkat kode kita lagi?

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
  sum1,
  sum2,
  sum3,
  sum4
} = require('./path/to/file/exported/fileName.js')

// driver code start here
sum1(10, 20);
sum2(20, 30);
```

Terlihat lebih simpel dan lebih `malas` bukan?

## process.argv
Selama ini kan kita menggunakan file .js secara langsung kita panggil misal `node index.js`  
tapi bagaimana yah caranya kita ingin menangkap suatu nilai yang dilempar pada saat kita  
memanggil node tersebut? misalnya `node index.js "Cetak aku mas"`  

Solusinya? gunakan built-in `process.argv` dari nodejs

Code:
```javascript
let argv = process.argv;

// Outputnya adalah dalam bentuk array
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
```

## Referensi
* [Perbedaan var, const, let - Medium](https://medium.com/coderupa/es6-var-let-const-apa-bedanya-1cd4daaee9f0)
* [Javascript Array Objects - TutorialsPoint](https://www.tutorialspoint.com/javascript/javascript_arrays_object.htm)
* [process.Argv - NodeJS](https://nodejs.org/docs/latest/api/process.html#process_process_argv)
* [Use Strict - W3Schools](https://www.w3schools.com/js/js_strict.asp)
* [Strict Mode - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
* [Destructuring - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Value vs Reference - Codeburst](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)