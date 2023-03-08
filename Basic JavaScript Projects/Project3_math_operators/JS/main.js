function addition(x, y) {
    return x + y;
}

function displayResult() {
    var x = 3;
    var y = 12;
    var result = addition(x, y);
    var output = document.getElementById("Math");
    output.innerHTML = "The result of " + x + " x " + y + " is " + result;
}