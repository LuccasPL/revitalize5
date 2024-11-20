document.getElementById("checkButton").addEventListener("click", function() {
    checkForPregIngredients();
});

function checkForPregIngredients() {
    var ingredientList = document.getElementById("ingredientList").value.trim().toLowerCase();

    if (!ingredientList) {
        displayResult("Please enter some ingredients.");
        return;
    }

    // List of ingredients not safe for pregnancy
    var pregnancyUnsafeIngredients = [
        "retinol",
        "retinyl palmitate",
        "retinyl acetate",
        "tretinoin",
        "isotretinoin",
        "tazarotene",
        "adapalene",
        "alitretinoin",
        "salicylic acid",
        "beta hydroxy acid (bha)",
        "hydroquinone",
        "phthalates",
        "dbp (dibutyl phthalate)",
        "dep (diethyl phthalate)",
        "dehp (di-2-ethylhexyl phthalate)",
        "formaldehyde",
        "dmdm hydantoin",
        "imidazolidinyl urea",
        "diazolidinyl urea",
        "quaternium-15",
        "bronopol (2-bromo-2-nitropropane-1,3-diol)",
        "5-bromo-5-nitro-1,3-dioxane",
        "tetracycline",
        "dihydroxyacetone (dha)",
        "oxybenzone",
        "methylparaben",
        "propylparaben",
        "butylparaben",
        "ethylparaben",
        "toluene",
        "ammonia",
        "benzoyl peroxide",
        "tea tree oil",
        "rosemary oil",
        "sage oil",
        "avobenzone",
        "homosalate",
        "octisalate",
        "octocrylene",
        "octinoxate",
        "lead"
    ];

    var foundPregnancyIngredients = [];

    pregnancyUnsafeIngredients.forEach(function(ingredient) {
        if (ingredientList.includes(ingredient)) {
            foundPregnancyIngredients.push(ingredient);
        }
    });

    if (foundPregnancyIngredients.length > 0) {
        displayResult("This product contains ingredients not safe for pregnancy: " + foundPregnancyIngredients.join(", "));
    } else {
        displayResult("This product does not contain any ingredients not safe for pregnancy.");
    }
}

function displayResult(message) {
    document.getElementById("result").textContent = message;
}