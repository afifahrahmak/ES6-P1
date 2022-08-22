// ----------------------------------------------------------------------------
// Arrow Function
// ----------------------------------------------------------------------------
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

// kita akan melakukan export supaya bisa digunakan pada file lain
// supaya bisa menampung banyak, kita akan menggunakan object
module.exports = {
    penjumlahan,
    pengurangan,
    perkalian,
    pembagian
};
