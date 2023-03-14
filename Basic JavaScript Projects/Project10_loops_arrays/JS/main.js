//Defines loop function to display numbers 1 - 10 using while loop

function Call_loop() {
    var Digit ="";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }

    // Displays the result in HTML ELEMENT wiht id Loop
    document.getElementById("Loop").innerHTML = Digit;
}

// Defines function for_loop() to display elements of array "Cars" using a for loop
var Cars = ["BMW", "SUBARU", "FORD", "AUDI", "Kia", "Toyata"];
var Content = "";
var Y;

function for_loop() {
    for (Y = 0; Y < Cars.length; Y++) {
        Content += Cars[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Defines function array_Function() to display an element of array "Dog_Picture"
function array_Function() {
    var Dog_Picture = [];

    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "barking";

    document.getElementById("Array").innerHTML = "In this picture, the dog is " +
    Dog_Picture[2] + ".";
}

//Defines constant object "myObject" with two properties and values
const myObject = {
    property1: "Hello",
    property2 : "world!"

};

// Defines function constant_function() to modify "myObject" and display the new values in an HTML element
function constant_function(){

    myObject.property1 = "Hi";
    myObject.property3 = "Im a new property!";

    const element = document.getElementById("Constant");

    element.innerHTML = myObject.property1 + " " + myObject.property2 + " " + myObject.property3;
}

// Defines object "car" with properties and a method to describe the car
let car = {
    make: "Subaru ",
    model: "STI ",
    year: "2017 ",
    color: "white ",

    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};

document.getElementById("Car_Object").innerHTML = car.description();