var myVariable = "Hello, World!"; // Declare a variable and assign it a value

// Use document.write() to display the variable's data type
document.write("The data type of myVariable is: " + typeof String(myVariable) +"<br>");

document.write(2E310);

document.write(-3E310);

// Use Boolean logic to display true and false
var x = 5;
var y = 10;
document.write("<br>Is ", x ," greater than " , y , "? " + (x > y) + "<br>");
document.write("Is ", x , " less than ",  y , "? " + (x < y) + "<br>");

// Perform a math operation and use console.log() to display the result
var z = x + y;
console.log("The sum of ", x , "and ", y , "is: " + z);

// Use the == operator to return true and false
var a = 10;
var b = "10";
document.write("Is ", a , " equal to ", b, "? " + (a == b) + "<br>");
document.write("Is ", x , " equal to ", y , "? " + (x == y)+ "<br> <br>");

// Use the === operator to return true and false
var c = 10;
var d = "10";
document.write("Is ", c , " equal to ", d , " using ===? " + (c === d) + "<br>");
document.write("Is ",c , " equal to 10 using ===? " + (c === 10)+ "<br>");
document.write("Is ", c , " equal to '10' using ===? " + (c === '10') + "<br>");
document.write("Is ", c , " equal to 5 using ===? " + (c === 5)+ "<br> <br>");

// Use the && operator to display true and false

document.write(5 > 2 && 10 > 4);
document.write("<br>");


// Use the || operator to display true and false

document.write(5 > 10 || 10 > 4);
document.write("<br>");
document.write(5 > 10 || 10 > 20);
document.write("<br>");


// use the ! operator to display a true or false statement.
function not_Function() {
    document.getElementById("Not").innerHTML = ! (20 > 10);
}