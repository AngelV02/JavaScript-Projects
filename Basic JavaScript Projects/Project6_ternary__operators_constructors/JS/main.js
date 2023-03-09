
// This function is used to check if the user is tall enough to ride a particular ride.
function Ride_Function() {
    var Height, Can_ride;

    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."
}

// This function is used to create a Vehicle object.
function Vehicle(Make, Model, Year, Color) {

    // Assign the parameters to the Vehicle object properties.
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Created some Vehicle objects
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// This function is used to display Erik's vehicle details.
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// This function is used to demonstrate nested functions.
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();

     // This is a nested function that increments a Starting_point variable.
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}