const anObject = {
    id: 1,
    name: "Destructuring"
};

// destructuring object
const { id, name } = anObject;

console.log(id);
console.log(name);


const {
    sum1,
    sum2,
    sum3,
    sum4
} = require('./4a-moduleExports.js')

// driver code start here
sum1(10, 20);
sum2(20, 30);