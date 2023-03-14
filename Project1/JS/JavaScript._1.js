function Color_function() {
    var Color_Output;
    var Colors = document.getElementById("Color_input").value;
    var Color_String = " is a great color!";

    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;

        case "Yellow":
            Color_Output = "Yellow" +Color_String;
        break;

        case "Green":
            Color_Output = "Green" +Color_String;
        break;

        case "Blue":
            Color_Output = "Blue" +Color_String;
        break;

        case "Purple":
            Color_Output = "Purple" +Color_String;
        break;

        default:
        Color_Output = "Please enter a color exactly as written on the list above.";

    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

const canvas = document.getElementById("myCanvas");

const ctx = canvas.getContext("2d");

const gradient = ctx.createLinearGradient(0,0, canvas.width, canvas.height);
gradient.addColorStop(0, "white");
gradient.addColorStop(1, "blue");

ctx.fillStyle = gradient;

ctx.fillRect(0, 0 , canvas.width, canvas.height);
