function mulitplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}

function displayResult() {
    var x = 10;
    var y = 5;
    var product = mulitplication(x, y);
    var quotient = division(x, y);
    var output = document.getElementById("Math");
    output.innerHTML = "The product of " + x + " * " + y + " is " + product + ".<br>";
    output.innerHTML += "The quotient of " + x + " / " + y + " is " + quotient + ".";
}