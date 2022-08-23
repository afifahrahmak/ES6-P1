const anObject = {
    id: 1,
    name: "Destructuring"
};

// destructuring object
const { name, id, batchName } = anObject;

console.log(id); //! 1
console.log(name); //! "Destructuring"
console.log(batchName); //! undefined



const { pengurangan, penjumlahan, perkalian, pembagian } = require('./3-arrowFunction')
// driver code start here
console.log(penjumlahan(10, 20));
console.log(pengurangan(30, 10));
console.log(perkalian(5, 4));
console.log(pembagian(30, 3));
