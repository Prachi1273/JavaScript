/*
alter : 
it gives a popup window with ok button 

prompt :
it prints the message that we have given 
takes input in text field with ok button 
*/

alert("Hello!");

// after executing prompt statement it will ask for value 
//when we enter it it will store in nNo variable
let nNo = prompt("Enter a number : ");

if(nNo % 5 == 0)
{
    console.log(nNo," is multiple of 5 ");
}
else {
    console.log("it is not multiple of 5");
}