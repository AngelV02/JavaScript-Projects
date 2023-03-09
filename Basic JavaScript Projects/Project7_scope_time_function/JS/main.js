// Declare variable x and assign it a value of 10.
var x = 10;

// Define a function named Add_numbers_1 which adds 20 and x, 
// then writes the result to the document.
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}

// Define a function named Add_numbers_2 which adds x and 100, 
//then writes the result to the document.
function Add_numbers_2() {
    document.write(x + 100 + "<br>");
}

// Call Add_numbers_1 and Add_numbers_2 functions to output their results.
Add_numbers_1();
Add_numbers_2();


// Define a function named Add_numbers_3 which declares a variable y with a value of 20 
//and writes the result of adding 20 and y to the document.
function Add_numbers_3() {
    var y = 20;
    document.write("<br>", 20 + y + "<br>");
}

// Define a function named Add_numbers_4 which tries to write the value of variable y to the document, 
//which will cause an error as y is not defined in the function scope.
function Add_numbers_4() {
    document.write(y + 100 + "<br>");
    
}

// Call Add_numbers_3 and Add_numbers_4 functions to output their results.
Add_numbers_3();
Add_numbers_4();


// Define a function named get_Date which checks if the current time is before 6pm and if so,
// writes "How are you today?" to an element with an id of "Greeting".
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML ="How are you today?";
    }
}
// Define a function named greetUser which retrieves a user's name from an input field with an id of "nameInput" 
//and writes a greeting to an element with an id of "Greeting_2" based on whether or not the name is present.

function greetUser() {
    var name = document.getElementById("nameInput").value;
    var grettingElement = document.getElementById("Greeting_2");

    if(name) {
        grettingElement.innerHTML = "Hello, " + name + "!";
    }
    else {
        grettingElement.innerHTML = "Please enter your name. ";
    }
}

// Define a function named Time_function which retrieves the current hour of the day 
//and writes a message to an element with an id of "Time_of_day" based on the time of day.
function Time_function() {
    var Time = new Date().getHours();
    var Reply;

    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply ="It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }

    document.getElementById("Time_of_day").innerHTML = Reply;
}