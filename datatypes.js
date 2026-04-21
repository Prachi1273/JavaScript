console.log("There are 2 types of data types as 1. PRIMITIVE 2. NON-PREMITIVE");
console.log("Primitive : ");
console.log("1. Number , 2. Boolean, 3. String, 4. Undefined, 5. Null, 6. BigInt, 7. Symbol");
console.log("Javascript is dynamically typed programming language like python ");

/* By using 3 types of keywords we can define variables 
1. var
2. let
3. const

1. var : 
used before 2015 
only used in older files than 2015 
can be used for global scope
can be redeclared and reassigned 

2. var : 
used after 2015  
can be used for block(local) scope
cannot be redeclared but can be reassigned or updated

3. const : 
used after 2015 
can be used for block(local) scope
cannot be redeclared as well as reassigned ony in case of variables 
but if objects are const keys of objects can be reassigned 

//generally objects are const but we can use let also 

//Empty variable is by default Undefined 
*/

let iNo1 = 11;
// iNo1 = 21; //A
const fNo2 = 99.99;
// fNo2 = 1.23; // NA
let boolvar = true;
const boolvar1 = false;
let variable;
let val1 = null;
let x = BigInt("12345");
let y = Symbol("Hello!");

console.log(iNo1);
console.log(typeof(iNo1));
console.log(fNo2);
console.log(typeof(fNo2));
console.log(boolvar);
console.log(typeof(boolvar));
console.log(boolvar1);
console.log(typeof(boolvar1));
console.log(variable);
console.log(typeof(variable));
console.log(val1);
console.log(typeof(val1));
console.log(x);
console.log(typeof(x));
console.log(y);
console.log(typeof(y));

console.log("2. Non-Primitive : 1. objects, 2. array, 3. functions ");
console.log("Objects act like a structre in c means we can store diffrent data types in one object but they are represented as dict in python iNo1.toExponential. key : value pairs ");
console.log("Objects are collection of values");
const student = {
    fullName : "Prachi Barve",
    age : 21,
    gpa : 8.36,
    isPass : true
}

console.log(student);
console.log(typeof(student));

student["age"] = student["age"] + 1;
student["fullName"] = "Jay Ganesh ";

console.log(student.age);
console.log(student["age"]);
console.log(student["fullName"]);

// example of amazon product 
const product = {
    product_name : "Parker Jotter Standard CT Ball Pen",
    colour : "Black",
    price : 270,
    isDeal : true,
    ratings : 7002,
    offer : 5.00
};

let arr = ["Red", "White","blue", "green"];
console.log(arr);
console.log(typeof(arr))

function fun() 
{
    console.log("FUnction Demo");
}

fun.call()

/*
Output : 
There are 2 types of data types as 1. PRIMITIVE 2. NON-PREMITIVE
datatypes.js:2 Primitive : 
datatypes.js:3 1. Number , 2. Boolean, 3. String, 4. Undefined, 5. Null, 6. BigInt, 7. Symbol
datatypes.js:4 Javascript is dynamically typed programming language like python 
datatypes.js:37 11
datatypes.js:38 number
datatypes.js:39 99.99
datatypes.js:40 number
datatypes.js:41 true
datatypes.js:42 boolean
datatypes.js:43 false
datatypes.js:44 boolean
datatypes.js:45 undefined
datatypes.js:46 undefined
datatypes.js:47 null
datatypes.js:48 object
datatypes.js:49 12345n
datatypes.js:50 bigint
datatypes.js:51 Symbol(Hello!)
datatypes.js:52 symbol
2. Non-Primitive : objects 
datatypes.js:62 Objects act like a structre in c means we can store diffrent data types in one object but they are represented as dict in python iNo1.toExponential. key : value pairs 
datatypes.js:63 Objects are collection of values
datatypes.js:71 Object
datatypes.js:72 object
datatypes.js:77 22
datatypes.js:78 22
datatypes.js:79 
datatypes.js:79 Jay Ganesh 
datatypes.js:92 Array(4)0: "Red"1: "White"2: "blue"3: "green"length: 4[[Prototype]]: Array(0)at: ƒ at()length: 1name: "at"arguments: (...)caller: (...)[[Prototype]]: ƒ ()apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ arguments()set arguments: ƒ arguments()get caller: ƒ caller()set caller: ƒ caller()[[FunctionLocation]]: [[Prototype]]: Object[[Scopes]]: Scopes[0][[Scopes]]: Scopes[0]concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
datatypes.js:93 object
datatypes.js:97 FUnction Demo
*/