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
a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. 

How to use:
```javascript
// initialization of array
let arr = [];

// how to use arrays
arr.push('first data');
arr.push('second data');

// how to access the values
// remember that the way to use the array is always from 0 for the first index
console.log(arr[0]);
console.log(arr[1]);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```


### [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
an object is a standalone entity, with properties and type. JavaScript objects can have properties, which define their characteristics.

Contoh :
a Student is an object, with properties. Student has an information, a name, address, id, etc.

If we represent it in the form of an object, it will be like the following code.
Code:
```javascript
// Initialization object
let objStudent = {};

// How to set value in objStudent
objStudent.name = 'Daniel';
objStudent.address = 'Surabaya';
objStudent.id = '01';

// How to set value object from scratch
let objStudent2 = {
    name: 'Afifah',
    address: 'Jakarta',
    id: '02'
};

console.log(objStudent.name);
console.log(objStudent2['name']);
```


### [Passed by Value and Reference](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)
[source file js](/source/2-passByValue_ref.js)
**Warning**   
Primitive data types in javascript (`Boolean`, `null`, `undefined`, `String`, `number`)
generally *passed by value*, that means, the value in that data type will be sent originally.

Code:
```javascript
let int = 5;
let str = 'Some Text';

let copyInt = int;
let copyStr = 'Copy of Some Text';

int = 10;
str = 'Changed Text';

console.log(int, str, int, copyStr);
```

The code above when represented in memory:
| Parameter | Value |
| :-------- | ----: |
| int  | 10     |
| str | 'Changed Text' |
| copyInt | 5 |
| copyStr | 'Copy of Some Text' |

In contrast to the Object data type, which includes `Array`, `Function`, and `Object` it
itself is *passed by reference*, that means, the value in that data type will be sent
in the form of an address, that reference points to the object’s location in memory. 
The variables don’t actually contain the value.

Code:
```javascript
let arr = [];
let copyArr = arr;

arr.push(1);

console.log(arr, copyArr);
```
  A representation of code above in memory is:
  | Variables | Values | &nbsp; | Addresses | Objects |
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
Writing functions shorter/smaller

Code:

```javascript
// Export File

// A basic Function Declarations
function sum(param1, param2) {
  return param1 + param2;
}

// an Alternate Function Declarations
let subtract = function (param1, param2) {
  return param1 - param2;
}

// an Alternate Function Declarations with Arrow Function
let multiple = (param1, param2) => {
  return param1 * param2;
}

// If you want to return immediately, use arrow function without curly brackets { }
let devide = (param1, param2) => param1 / param2;
```

## Module Export
In programming, we have to modularize the code that we have as much as possible, 
by breaking the code into several files.

in javascript, we can `export` and `import` our code to link them 
even if they are in different files.

Let's review the function we created in 
the arrow function section, then `export` and `import` the code.

[source file js](/source/4a-moduleExports.js)

```js
// we'll export it so it can be used in other files
// in order to accommodate multiple variables or functions, we will use object

// multiple variables / functions => assign to object or array
module.exports = {
  sum,
  subtract,
  multiple,
  devide
};

// for single variable / function
module.exports = sum
```


<br>


And For import those Functions we use :
[source file js](/source/4b-moduleExports.js)
```javascript
// Imported data (function)
const sum = require('./path/to/file/exported/fileName.js').sum;
const subtract = require('./path/to/file/exported/fileName.js').subtract;
const multiple = require('./path/to/file/exported/fileName.js').multiple;
const devide = require('./path/to/file/exported/fileName.js').devide;

// driver code
console.log(sum(10, 20));
console.log(subtract(20, 30));
```

## [Basic Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
[source file js](/source/5-destructuringObj.js)
Let's take a look our arithmetic functions code above.
When importing the codes, we wrote quite a lot of repetition of our code. Is there a way to shorten our code again?

Of course, there is!

Please welcome `destructuring`.

`destructuring` or `destructuring assignment` is a syntax in javascript
which allows us to output the entire contents of an array or object (in
our case means we will be outputting the contents of the object).

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

Then our **import code** will be :

```javascript
const { 
  sum,
  subtract,
  multiple,
  devide
} = require('./path/to/file/exported/fileName.js')

// driver code start here
console.log(sum(10, 20));
console.log(subtract(20, 30));
```


## [Process Argv](https://www.geeksforgeeks.org/node-js-process-argv-property/)
[source file js](/source/6-processArgv.js)

So far, we have used the .js file directly, we call it, for example `node index.js`
but how do we want to catch a value that is thrown at our time
call the node? for example `node index.js "Print me please"`

The solution? use built-in `process.argv` from nodejs

Code:
```javascript
let argv = process.argv;

// The output of argv is an array
// array0 => Node position called from where
// array1 => Position of .js file called from where
// array2..n ==> Data / Value we are casting
console.log(argv);
console.log(argv[2]);
```

**Warning**  
The captured values of argv are `String` even if our input is `Number`,
so if we want `Number`, don't forget to convert it manually.
the received input with the built-in function provided
by JavaScript.

Now, How to get 2 parameters input from process.argv?

Misal:  
Print `.` with total of `x` rows and `y` column, and separate it with `|`

Example input:
```javascript
// node index.js x y
node index.js 5 15
```

Example output
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
* [Difference between var,const,let - Medium](https://medium.com/coderupa/es6-var-let-const-apa-bedanya-1cd4daaee9f0)
* [Javascript Array Objects - TutorialsPoint](https://www.tutorialspoint.com/javascript/javascript_arrays_object.htm)
* [process.Argv - NodeJS](https://nodejs.org/docs/latest/api/process.html#process_process_argv)
* [Use Strict - W3Schools](https://www.w3schools.com/js/js_strict.asp)
* [Strict Mode - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
* [Destructuring - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Value vs Reference - Codeburst](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)
* [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
