// script.js

document.getElementById("checkButton").addEventListener("click", function() {
    checkForCriancaIngredients();
});

function checkForCriancaIngredients() {
    var ingredientList = document.getElementById("ingredientList").value.trim().toLowerCase();

    if (!ingredientList) {
        displayResult("Please enter some ingredients.");
        return;
    }

    // List of ingredients not good for crianca
    var criancaIngredients = [
        "propyl e butylparaben",
        "ethylhexyl methoxycinnamate",
        "benzophenone-1",
        "benzophenone-3",
        "homosalate",
        "bha",
        "chumbo",
        "talc",
        "ftalatos",
        "petrolatos",
        "formaldeído",
        "triclosan",
        "sodium lauryl sulfato",
        "octocrylene"
    ];

    var foundCriancaIngredients = [];

    criancaIngredients.forEach(function(ingredient) {
        if (ingredientList.includes(ingredient)) {
            foundCriancaIngredients.push(ingredient);
        }
    });

    if (foundCriancaIngredients.length > 0) {
        displayResult("Este ingrediente não é seguro para crianças: " + foundCriancaIngredients.join(", "));
    } else {
        displayResult("This product does not contain any ingredients not good for crianca.");
    }
}

function displayResult(message) {
    document.getElementById("result").textContent = message;
}
