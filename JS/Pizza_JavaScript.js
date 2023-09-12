function getReceipt() {
    // Initialize our string to build the receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");

    // Loop through the size options
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    // Calculate the price based on the selected size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 12;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Super Large Pizza") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;

    // Log and display the size and subtotal
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1:" + text1);
    console.log("subtotal: $" + runningTotal + ".00");

    // Pass variables to the next function
    getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");

    // Loop through the topping options
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("Selected Topping Item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }

    var toppingCount = selectedTopping.length;

    // Calculate the total topping cost (1 free topping)
    if (toppingCount > 1) {
        toppingTotal = toppingCount - 1;
    } else {
        toppingTotal = 0;
    }

    runningTotal = runningTotal + toppingTotal;

    // Log and display the total toppings and purchase total
    console.log("Total selected topping items: " + toppingCount);
    console.log(toppingCount + " Topping - 1 free topping = $" + toppingTotal + ".00");
    console.log("Topping text1:" + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");

    // Update the HTML with the receipt details
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong> $" + runningTotal + ".00" + "</strong></h3>";
}
