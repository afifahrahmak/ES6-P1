// ----------------------------------------------------------------------------
// Arrow Function
// ----------------------------------------------------------------------------
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
