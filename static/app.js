

function round5(x)
{
    return (x % 5) >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5;
}


function updateWeights(weight) {
    var kg = weight / 2.20462;
    document.getElementById("loadKG").innerHTML = Math.round(kg * 10) / 10 + " kg";
    document.getElementById("loadLBS").innerHTML = weight + " lbs";  
}

function updateWeightsKG(weight) {
    var lbs = weight * 2.20462;
    document.getElementById("loadKG").innerHTML = weight + " kg";
    document.getElementById("loadLBS").innerHTML = Math.round(lbs * 10) / 10 + " lbs";  
}

function round25(x)
{
    return 2.5 * Math.ceil(x/2.5);
}



function changeImage()
{
    // var howmany = $("input[name='amt']").val();
    var weight = document.getElementById("weight").value;
    var units = document.getElementsByName("units");

    
    for (var i = 0, length = units.length; i < length; i++) {
        if (units[i].checked) {
            var label = units[i].value;
            break;
        }
    }

    // alert(label);

    if (label === "lbs") {
        weight = round5(weight);

        if (weight > 855) {
            weight = 855;
        }

        if (weight < 45) {
            weight = 45;
        }

        document.getElementById("barbell").src = "static/img/" + weight + ".png";

        updateWeights(weight);


    } else {

        weight = round25(weight);

        if (weight > 375) {
            weight = 375;
        }

        if (weight < 60) {
            weight = 60;
        }

        document.getElementById("barbell").src = "static/img/kg/" + weight + ".png";

        updateWeightsKG(weight)
    }

    // $("#barbell").attr("src","static/img/" + weight + ".png");


}

function tryMe(arg) {
    document.write(arg);
}