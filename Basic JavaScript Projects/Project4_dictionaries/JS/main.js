// Define the dictionary object
var myDictionary = {
    apple: "A fruit",
    car: "A vehicle",
    book: "A written work"
  };

// Define the function to output a random key-value pair from the dictionary
function outputRandomKeyValuePair() {

// Remove a random key from the dictionary using the delete operator
var keys = Object.keys(myDictionary);
var randomKey = keys[Math.floor(Math.random() * keys.length)];
delete myDictionary[randomKey];


 // Output a random key-value pair to the "myDictionary" HTML element
var outputElement = document.getElementById("myDictionary");
outputElement.innerHTML = "<strong>" + randomKey + ":</strong> " + myDictionary[randomKey];
}
