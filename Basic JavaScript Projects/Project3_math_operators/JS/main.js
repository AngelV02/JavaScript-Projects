function subraction(x, y) {
    return x - y;
}

function displayResult() {
    var x = 15;
    var y = 12;
    var result = subraction(x, y);
    var output = document.getElementById("Math");
    output.innerHTML = "The result of " + x + " - " + y + " is " + result;
}