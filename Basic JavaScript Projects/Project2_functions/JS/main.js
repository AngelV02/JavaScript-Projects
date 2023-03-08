function text() {
     var name ="Robert"; // assigns a string value to variable name.
     var age = 25; // assigns number vlaue to variable age.
     var output = document.getElementById("output"); // get the html element with the ID "output"

     output.innerHTML += " My name is " + name + " and I am " + age + " years old."; //displays the text contents
}