
function addition(x, y) {
    return x + y;
}

function subraction(x, y) {
    return x - y;
}

function mulitplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}




function displayResult() {
    var x = 10; // assign value to  variable
    var y = 5; // assigns value to variable
    var sum = addition(x, y);
    var difference = subraction(x, y);
    var product = mulitplication(x, y);
    var quotient = division(x, y);
    var negatedProduct = -product; // add negation operator

    var incrementedX = ++x; // add increment operator
    var decrementedY = --y; // add decrement operator
    var sqrtX = Math.sqrt(x); // calculate square root of x

    var output = document.getElementById("Math");

    window.alert(Math.random());

    output.innerHTML = "The sum of " + x + " + " + y + " is " + sum + ".<br>"; // displays the sum
    output.innerHTML += "The difference of " + x + " - " + y + " is " + difference + ".<br>"; // display difference
    output.innerHTML += "The product of " + x + " * " + y + " is " + product + ".<br>"; //displays the product
    output.innerHTML += "The negation of the product is " + negatedProduct + ".<br>"; //displays negated product
    output.innerHTML += "The quotient of " + x + " / " + y + " is " + quotient + ".<br>"; // displays quotient
    output.innerHTML += "The value of x after incrementing is " + incrementedX + ".<br>"; //displays value of x after increment
    output.innerHTML += "The value of y after decrementing is " + decrementedY + ".<br>"; // displays value of y after decrement
    output.innerHTML += "The square root of " + x + " is " + sqrtX + ".<br>"; //display sqaure root of x
}
