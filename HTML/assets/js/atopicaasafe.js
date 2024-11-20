document.getElementById("checkButton").addEventListener("click", function() {
    checkForAtopicaIngredients();
});

function checkForAtopicaIngredients() {
    var ingredientList = document.getElementById("ingredientList").value.trim().toLowerCase();

    if (!ingredientList) {
        displayResult("Please enter some ingredients.");
        return;
    }

    // List of ingredients not safe for atopic skin conditions
    var atopicaUnsafeIngredients = [
        "fragrance",
        "dyes",
        "alcohol",
        "sodium lauryl sulfate",
        "parabens",
        "lanolin",
        "urea",
        "lactic acid",
        "salicylic acid",
        "benzoyl peroxide",
        "tea tree oil",
        "lavender oil",
        "propylene glycol"
    ];

    var foundAtopicaIngredients = [];

    atopicaUnsafeIngredients.forEach(function(ingredient) {
        if (ingredientList.includes(ingredient)) {
            foundAtopicaIngredients.push(ingredient);
        }
    });

    if (foundAtopicaIngredients.length > 0) {
        displayResult("This product contains ingredients not safe for atopic skin: " + foundAtopicaIngredients.join(", "));
    } else {
        displayResult("This product does not contain any ingredients not safe for atopic skin.");
    }
}

function displayResult(message) {
    document.getElementById("result").textContent = message;
}
