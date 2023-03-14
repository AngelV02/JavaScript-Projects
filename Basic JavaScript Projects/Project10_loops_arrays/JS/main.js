function Call_loop() {
    var Digit ="";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }

    document.getElementById("Loop").innerHTML = Digit;
}

var Cars = ["BMW", "SUBARU", "FORD", "AUDI", "Kia", "Toyata"];
var Content = "";
var Y;

function for_loop() {
    for (Y = 0; Y < Cars.length; Y++) {
        Content += Cars[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Dog_Picture = [];

    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "barking";

    document.getElementById("Array").innerHTML = "In this picture, the dog is " +
    Dog_Picture[2] + ".";
}

const myObject = {
    property1: "Hello",
    property2 : "world!"

};

function constant_function(){

    myObject.property1 = "Hi";
    myObject.property3 = "Im a new property!";

    const element = document.getElementById("Constant");

    element.innerHTML = myObject.property1 + " " + myObject.property2 + " " + myObject.property3;
}