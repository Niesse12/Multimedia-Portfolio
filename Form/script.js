function convert() {
  var weightInput = document.getElementById("weight");
  var weight = parseFloat(weightInput.value);
  var conversionType = document.querySelector('input[name="conversionType"]:checked').value;

  var result = document.getElementById("result");
  if (conversionType === "poundsToKilograms") {
    var kilograms = weight * 0.45359237;
    result.innerHTML = weight + " pounds is equal to " + kilograms.toFixed(2) + " kilograms.";
  } else if (conversionType === "kilogramsToPounds") {
    var pounds = weight * 2.20462;
    result.innerHTML = weight + " kilograms is equal to " + pounds.toFixed(2) + " pounds.";
  }
}

// Save entered weight value on page reload
window.onload = function() {
  var weightInput = document.getElementById("weight");
  if (localStorage.getItem("weightValue")) {
    weightInput.value = localStorage.getItem("weightValue");
  }

  weightInput.addEventListener("input", function() {
    localStorage.setItem("weightValue", weightInput.value);
  });
};