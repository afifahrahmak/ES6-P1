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


// driver code
console.log(penjumlahan(10, 20));
console.log(pengurangan(30, 10));
console.log(perkalian(5, 4));
console.log(pembagian(30, 3));

