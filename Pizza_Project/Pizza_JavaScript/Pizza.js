// function gets the recipt for customer order

function getReceipt() {
    
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");

    //loop through the size array to get selected size
    for(var i = 0; i < sizeArray.length; i++) {

        if(sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 +selectedSize + "<br>";
        }
    }

    // assigns price based on size of pizza 

    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    }

    else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    }

    else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }

    else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }

    else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;

    //log the selected size and the total price
    console.log(selectedSize + " = $" +sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal+ ".00");

    getTopping(runningTotal, text1);
};

//get topping fucntion get the topping and calculate the total.
function getTopping(runningTotal, text1) {

    //initialize variables and get the selected toppings
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");

    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked){
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value + ")");
            text1 = text1 +toppingArray[j].value+"<br>";
        }
    }

    //get the selected veggie toppings

    var veggieToppings = 0;
    var veggieArray = document.getElementsByClassName("veggies")

    for (var k = 0; k < veggieArray.length; k++) {
        if (veggieArray[k].checked) {
            veggieToppings++
            text1= text1 + veggieArray[k].value + "<br>";
        }
    }

    var toppingCount = selectedTopping.length + veggieToppings;
    
    if(toppingCount > 1) {
        toppingTotal = (toppingCount -1 ) * 1;
    }

    else {
        toppingTotal = 0;
    }

    //adds total cost of everything 
    runningTotal = (runningTotal + toppingTotal);

    console.log("total selected toppings: " + toppingCount);
    console.log(toppingCount+ " topping - 1 free topping = "+ "$" +toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase total: " + "$" + runningTotal + ".00");

    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +
        runningTotal + ".00" +"</strong> </h3>";
}

