

function round5(x)
{
    return (x % 5) >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5;
}


function updateWeights(weight) {
    var kg = weight / 2.2;
    document.getElementById("loadKG").innerHTML = Math.round(kg * 10) / 10 + " kg";
    document.getElementById("loadLBS").innerHTML = weight + " lbs";  
}



function changeImage()
{
    // var howmany = $("input[name='amt']").val();
    var weight = document.getElementById("weight").value;

    weight = round5(weight);

    if (weight > 855) {
        weight = 855;
    }

    if (weight < 45) {
        weight = 45;
    }

    document.getElementById("barbell").src = "static/img/" + weight + ".png";

    // $("#barbell").attr("src","static/img/" + weight + ".png");

    updateWeights(weight);

}

function tryMe(arg) {
    document.write(arg);
}