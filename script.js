// Setting up empty kilometers and miles variables
var km = "";
var mi = "";

// Storing all the getElementById calls into variables in one place
var convertSelect1 = document.getElementById("convertSelect1");
var convertSelect2 = document.getElementById("convertSelect2");
var inputValue = document.getElementById("inputValue");
var submitButton = document.getElementById("submitButton");
var conversionOutput = document.getElementById("conversionOutput");
var conversionOutputContent = document.getElementById("conversionOutputContent");

// This functions converts kilometers into miles
function kmToMiles(kilometers) {
    km = parseFloat(kilometers);
    // This checks if the user input is a valid numerical number, otherwise the app will warn him
    if (!isNaN(km)) {
        mi = km * 0.621371192; // 1 kilometer is 0.621371192 miles according to Google's conversion
        conversionOutputContent.innerHTML = km + " km is " + mi + " miles";
    } else {
        conversionOutputContent.innerHTML = "Enter a valid numerical value to get a conversion result.";
    }
    return kilometers;
}

// This functions converts miles into kiometers
function milesToKm(miles) {
    mi = parseFloat(miles);
    // This checks if the user input is a valid numerical number, otherwise the app will warn him
    if (!isNaN(km)) {
        km = mi * 1.609344; // 1 mile is 1.609344 kilometere according to Google's conversion
        conversionOutputContent.innerHTML = mi + " miles is " + km + " km";
    } else {
        conversionOutputContent.innerHTML = "Enter a valid numerical value to get a conversion result.";
    }
    return miles;
}

// This is a function provided by Animate.css library to handle animations
function animateCSS(element, animationName) {
    element.classList.add('animated', animationName);

    function handleAnimationEnd() {
        element.classList.remove('animated', animationName);
        element.removeEventListener('animationend', handleAnimationEnd);
    }
    element.addEventListener('animationend', handleAnimationEnd);
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    // The app will check if the select values are set correctly and then call the approriate function
    if ((convertSelect1.value == "kilometers") && (convertSelect2.value == "miles")) {
        kmToMiles(inputValue.value);
    } else if ((convertSelect1.value == "miles") && (convertSelect2.value == "kilometers")) {
        milesToKm(inputValue.value);
    } else {
        conversionOutputContent.innerHTML = "You are trying to convert the same unit into a same unit.";
    }
    // We call this function here, which will animate the conversion output text on each update.
    animateCSS(conversionOutputContent, 'fadeIn');
});


// jQuery fix to prevent the Bootstrap collapse to be opened/closed on each button click. It should open only once.
$('#conversionOutput').on('hide.bs.collapse', function (event) {
    event.preventDefault();
})