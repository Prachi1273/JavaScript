/* for while do while are exactly same as c

added lopp types are 
for-of
for-in

for-of
used in arrays and strings 
syntax : for(let varname of str/arrname){}

for-in
used for objects
syntax : for(let varname in objname){}
*/

let str1 = "Prachi Barve";

for(let i of str1)
{
    console.log("i = ",i);
}

let arr = ["Red","white","blue","green"];

for(let i of arr)
{
    console.log("i = ",i);
}

const product = {
    product_name : "Parker Jotter Standard CT Ball Pen",
    colour : "Black",
    price : 270,
    isDeal : true,
    ratings : 7002,
    offer : 5.00
};

for(let key in product)
{
    console.log("key = ",key," value = ",product[key]);
}

for(let cnt = 0;cnt < 101;cnt++)
{
    if(cnt%2==0)
    {console.log(cnt);}
}

let gamenum = 25;
let userinp = prompt("Enter any number : ")
while(gamenum != userinp)
    {
userinp = prompt("you entered wrong  number try again : ")

}

console.log("congradulations!!!")