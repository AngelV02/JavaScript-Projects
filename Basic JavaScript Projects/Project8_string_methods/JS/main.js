// This function concatenates four parts of a sentence and displays the result
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";

    var Whole_sentence = part_1.concat(part_2, part_3, part_4);

     // Display the concatenated sentence in the HTML element with id "Concatenate"
    document.getElementById("Concatenate").innerHTML = Whole_sentence;
}

// This function extracts a section of a sentence and displays it
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy."
    var Section = Sentence.slice(27,33);

    // Display the extracted section in the HTML element with id "Slice"
    document.getElementById("Slice").innerHTML = Section;
}

// This function converts a number to a string and displays it
function string_Method() {
    var X = 182;

    // Convert the number X to a string
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// This function rounds a number to a specified number of digits and displays it
function precision_Method() {
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}