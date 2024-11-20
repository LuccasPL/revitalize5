// script.js

document.getElementById("checkButton").addEventListener("click", function() {
    checkForAcneIngredients();
});

function checkForAcneIngredients() {
    var ingredientList = document.getElementById("ingredientList").value.trim().toLowerCase();

    if (!ingredientList) {
        displayResult("Please enter some ingredients.");
        return;
    }

    // script.js

// List of ingredients not good for acne
var acneIngredients = [
    "acetylated lanolin",
    "acetylated lanolin alcohol",
    "acetylated wool fat",
    "acetylated wool wax",
    "adansonia digitata l.",
    "agar",
    "ahnfeltiopsis concinna extract",
    "alaria esculenta extract",
    "alga bladderwrack",
    "algae",
    "algae extract",
    "algin",
    "alginic acid",
    "algea",
    "aphanothece sacrum polysaccharide",
    "arthrospira plantensis",
    "ascophyllum nodosum extract",
    "asparagopsis armata extract",
    "baobab",
    "beeswax",
    "bismuth",
    "bryopsis africana",
    "butyl stearate",
    "butyrospermum",
    "cacao seed butter",
    "capea biruncinata var. denuda sonder",
    "capea biruncinata var. elongata sonder",
    "carageenan gum",
    "carastay c",
    "caulerpa lentillifera extract",
    "caulerpa filiformis",
    "carrageenan",
    "carrageenan moss",
    "cera alba",
    "cera bianca",
    "cera flava",
    "cera olea",
    "cetearyl alcohol + ceteareth 20",
    "chaetomorpha linum (aerea) cladophora radiosa",
    "chlamydomonas reinhardtii extract",
    "chlorella",
    "chlorophyceae",
    "chondrus crispus (aka irish moss or carageenan moss)",
    "cladophora cf. subsimplex",
    "cladosiphon okamuranus extract",
    "coal tar",
    "coco-caprylate",
    "cocoa butter",
    "coconut alkanes",
    "coconut butter",
    "coconut extract",
    "coconut nucifera extract",
    "coconut oil",
    "cocos nucifera oil",
    "cocos nucifera seed butter",
    "coenochloris signiensis extract",
    "colloidal sulfur",
    "cotton awws oil",
    "cotton seed oil",
    "corallina officinalis extract",
    "corn",
    "corn oil",
    "creosote",
    "cystoseira tamariscifolia extract",
    "d & c red # 17",
    "d & c red # 21",
    "d & c red # 3",
    "d & c red # 30",
    "d & c red # 36",
    "decyl oleate",
    "dictyopteris membranacea",
    "dictyopteris polypodioides",
    "dilsea carnosa extract",
    "dioctyl succinate",
    "disodium monooleamido",
    "dodecanoic acid",
    "dunaliella salina extract",
    "durvillaea antarctica extract",
    "ecklonia cava",
    "ecklonia cava extract",
    "ecklonia radiata",
    "enteromorpha compressa extract",
    "ethoxylated lanolin",
    "ethylhexyl palmitate",
    "eucheuma spinosum extract",
    "fucoxanthin",
    "fucus serratus",
    "fucus vesiculosus",
    "gamtae extract",
    "gelidiella acerosa extract",
    "gelidium amansii extract",
    "gigartina stellata extract",
    "glyceryl stearate se",
    "glyceryl-3 diisostearate",
    "glycine soja oil",
    "glycine max",
    "gracilariopsis chorda extract",
    "haematococcus pluvialis extract",
    "haematococcus pluvialis",
    "haslea ostrearia extract",
    "hexadecyl alcohol",
    "himanthalia elongata extract",
    "hizikia fusiforme extract",
    "hydrogenated vegetable oil",
    "hydrolyzed rhodophycea extract",
    "hydrous magnesium silicate",
    "hypnea musciformis extract",
    "hypneaceae extract",
    "irish moss",
    "isocetyl alcohol",
    "isocetyl stearate",
    "isodecyl oleate",
    "isopropyl isostearate",
    "isopropyl linolate",
    "isopropyl myristate",
    "isopropyl palmitate",
    "isostearyl isostearate",
    "isostearyl neopentanoate",
    "jania rubens extract",
    "jojoba wax",
    "kappaphycus alvarezii extract",
    "karite",
    "kelp",
    "kousou ekisu",
    "laminaria",
    "laminaria digitata extract",
    "laminaria saccharina extract (laminaria saccharine)",
    "laureth-23",
    "laureth-4",
    "lauric acid",
    "linolate",
    "liquor picis carbonis",
    "lithothamnium calcareum powder",
    "lpc",
    "macroalgae",
    "macrocystis pyrifera extract",
    "mangifera indica seed butter",
    "mango butter",
    "marula",
    "marula oil",
    "mink oil",
    "moringa oil",
    "moss",
    "myristate",
    "myristic acid",
    "myristyl",
    "myristyl lactate",
    "myristyl myristate",
    "myristyl propionate",
    "octyl stearate",
    "oleth-3",
    "oleyl alcohol",
    "palmaria palmata extract",
    "palm oil",
    "parkii",
    "peg 2 sulfosuccinate",
    "peg 16 lanolin",
    "peg 200 dilaurate",
    "peg 8 stearate",
    "pelvetia canaliculata extract",
    "phaeodactylum tricornutum extract",
    "phaeophyceae",
    "pix carbonis",
    "pg monostearate",
    "ppg-2 myristyl",
    "ppg 2 myristyl propionate",
    "ppg 2 myristyl ether propionate",
    "plankton",
    "polysiphonia elongata extract",
    "polyglyceryl-3 diisostearate",
    "polyglyceryl-3-disostearate",
    "porphyra umbilicalis",
    "porphyridium",
    "porphyridium cruentum extract",
    "potassium chloride",
    "potassium salt",
    "propylene glycol monostearate",
    "pyrene coal tar pitch",
    "red algae",
    "rhodophyta",
    "rhodophyceae extract",
    "sargassum filipendula extract",
    "sargassum fusiforme extract",
    "sclerocarya birrea",
    "sclerocarya birrea seed oil",
    "seaweed",
    "sea fern",
    "sesame",
    "sesamum indicum",
    "shark liver oil",
    "shark squalene",
    "shea",
    "shea butter",
    "sheep alcohol",
    "simmondsia chinensis seed wax",
    "sles",
    "sls",
    "sodium alginate",
    "sodium laureth sulfate",
    "sodium lauryl sulfate",
    "soja",
    "solulan 16",
    "sorbitan oleate",
    "soy",
    "soybean",
    "soybean oil",
    "sphacelaria",
    "spirulina",
    "squalene",
    "steareth 10",
    "stearic acid tea",
    "stearyl heptanoate",
    "starch",
    "sulfated castor oil",
    "sulfated jojoba oil",
    "sulfosuccinate",
    "sulphated castor oil",
    "talc",
    "talcum",
    "tea stearate",
    "tetradecyl myristate",
    "theobroma butter",
    "theobroma cocoa seed butter",
    "theobroma oil",
    "triticum aestivum",
    "triticum vulgare",
    "turkey red oil",
    "undaria pinnatifida",
    "ulva lactuca",
    "ulva fasciata",
    "ulva rhacodes",
    "vegetable gelatin",
    "vitellaria paradoxa",
    "wakame",
    "wheat",
    "wheat germ glyceride",
    "wheat germ oil",
    "wool alcohol",
    "wool fat",
    "xanthophyta",
    "xylene",
    "zea mays"]

    var foundAcneIngredients = [];

    acneIngredients.forEach(function(ingredient) {
        if (ingredientList.includes(ingredient)) {
            foundAcneIngredients.push(ingredient);
        }
    });

    if (foundAcneIngredients.length > 0) {
        displayResult("This product contains ingredients not good for acne: " + foundAcneIngredients.join(", "));
    } else {
        displayResult("This product does not contain any ingredients not good for acne.");
    }
}

function displayResult(message) {
    document.getElementById("result").textContent = message;
}
