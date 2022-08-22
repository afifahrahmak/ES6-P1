const anObject = {
    id: 1,
    name: "Destructuring"
};

// destructuring object
const { id, name } = anObject;

console.log(id);
console.log(name);


const {
    penjumlahan,
    pengurangan,
    perkalian,
    pembagian
} = require('./4a-moduleExports')

// driver code start here
console.log(penjumlahan(10, 20));
console.log(pengurangan(30, 10));
console.log(perkalian(5, 4));
console.log(pembagian(30, 3));