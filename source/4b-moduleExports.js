// Imported data (function)
// const penjumlahan = require('./4a-moduleExports').penjumlahan;
// const pengurangan = require('./4a-moduleExports').pengurangan;
// const perkalian = require('./4a-moduleExports').perkalian;
// const pembagian = require('./4a-moduleExports').pembagian;

let { pengurangan, penjumlahan, perkalian, pembagian } = require('./3-arrowFunction')

// driver code start here
console.log(penjumlahan(10, 20));
console.log(pengurangan(30, 10));
console.log(perkalian(5, 4));
console.log(pembagian(30, 3));
