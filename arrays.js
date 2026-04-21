//same like c

let marks = [99,78,84,68,92];
console.log(marks);
console.log(marks.length);
console.log(typeof marks);
console.log(marks[2]);

//reinitialization is possible
marks[0] = 56;
console.log(marks[0]);

console.log("for");
for(let i = 0;i<marks.length;i++)
{
    console.log(marks[i]);
}

console.log("for of");
for(let j of marks)
{
    console.log(j);
}

let items = [250,645,300,900,50];

console.log("how to track indexing in for of");
let idx = 0;

for(let i of items)
{
    console.log(`index : ${idx} , value : ${i}`);
    idx++;
}

let food = ["potato", "apple", "litchi", "blueberry"];

console.log("pop() : deletes data from end and returns");
let deleted = food.pop();
console.log(deleted);
console.log(food);

console.log("push() : adds data at end");
food.push("tomato");
console.log(food);
food.push("panner","chips","burger");
console.log(food);

//push and pop makes changes in original array

console.log("toString() : converts array to string");
console.log(food.toString());

console.log("cancat() : concatenates 2 arrays in sequence we provided");
let concatarr = food.concat(marks);
console.log(concatarr);
let concatarr2 = marks.concat(food);
console.log(concatarr2);
let concatarr3 = food.concat(food);
console.log(concatarr3);

//shift() and unshift() changes original array

console.log("unshift() : adds data at start");
console.log(marks);
/*way 1
marks.unshift(120);
console.log(marks);
marks.unshift(150);
console.log(marks);*/
//way 2
marks.unshift(120);
marks.unshift(150);
console.log(marks);
// way 3
marks.unshift(145,186);
console.log(marks);

console.log("shift() : deletes data from start")
deleted = marks.shift()
console.log(deleted);
console.log(marks);

// slice,splice changes original array  
console.log("slice(startidx, endidx) : prints result between startidx and endindex prints startindx not endidx")
console.log(marks.slice(2,5));

console.log("splice() : changes original array (add, remove,replace)");
let arr  = [1,2,3,4,5,6,7,8];
console.log(arr);
arr.splice(2,2,101,102);
console.log(arr);

console.log("add ele");
arr.splice(2,0,101);
console.log(arr);

console.log("delete ele");
arr.splice(3,1);
console.log(arr);

console.log("replace ele");
arr.splice(3,1,101);
console.log(arr);