'use strict'

// ----------------------------------------------------------------------------
// Array
// ----------------------------------------------------------------------------
let arr = [];

// cara pakai array
arr.push('data pertama');
arr.push('data kedua');
arr.push('data ketiga');



// cara akses value
// ingat array itu cara pakainya selalu dari 0 untuk index pertamanya
console.log(arr[0]); //! DATA PERTAMA
console.log(arr[1]); //!DATA KEDUA

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}


// ----------------------------------------------------------------------------
// Object
// ----------------------------------------------------------------------------
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
