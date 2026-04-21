/*
Camel Case (lowerCamelCase): 
The first letter is lowercase, and subsequent words are capitalized. 
Example: firstName, productCategory. 

Pascal Case (UpperCamelCase): 
The first letter of every word, including the first, is capitalized. 
Example: FirstName, ProductCategory. 

Snake Case: 
Words are separated by underscores.
 Example: first_name, product_category. 

Kebab Case: 
Words are separated by hyphens. 
Example: first-name, product-category. 

Flat Case: 
All lowercase letters, no separators. 
Used for package names in Java. 

Train Case: 
Words separated by hyphens, and all words are capitalized. 
Example: This-Is-A-Train-Case. 

Screaming Snake Case: 
Similar to snake case, but all uppercase. 
Example: MY_VARIABLE_NAME

*/

let str = "   Jay Ganesh !   ";
let str2 = "Success";
console.log(str.length); // length in not a method in js

console.log(str[4]);

console.log(typeof str);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.trim()); // trims only starting and ending whitespaces

console.log(str.charAt(7)); // gives character at specific index

// syntax str.slice(start,end) or str.slice(position1, position2)
console.log(str.slice(3,8)); // gives result within that indexes. here it will print "Jay G"
// and indexing from only left 

console.log(str2.concat(str)); // concats 2 strings // syntax : 1st_str.concat(2ndstr)

// str.replace(searchvalue, newvalue) // only replaces one letter
//console.log(str2.replace("s","1"));
console.log(str2.replace("s",1));
// both of above have same result

//template literals : way of string writing or expressions embedding with backtick i.e. (``)
let val = `This is special string`;
console.log(val);
console.log(typeof val);

// special string or template literals specially used for below syntax
let value = `${str.indexOf("G")}th letter of str is ${str[4]}`;
console.log(value);

console.log("\"java\" is vm based lang.")

// ${expression} is called as string interpolation 
/*
Escape characters:
\ : it escapes next character 
 e.g. if i want to print "java" is vm based lang. 
 this the code statement should be 
 console.log("\"java\" is vm based lang.")
\n : for new line
\t : for tab
*/

/*
output : 
strings.js:34 18
strings.js:36 a
strings.js:38 string
strings.js:40    JAY GANESH !   
strings.js:42    jay ganesh !   
strings.js:44 Jay Ganesh !
strings.js:46 G
strings.js:49 Jay G
strings.js:52 Success   Jay Ganesh !   
strings.js:56 Succe1s
strings.js:61 This is special string
strings.js:62 string
strings.js:66 7th letter of str is a
strings.js:68 "java" is vm based lang.

*/