function convertTemp() {
  const input = document.getElementById("tempInput").value;
  const unit = document.getElementById("unitSelect").value;
  const resultDisplay = document.getElementById("resultDisplay");

  const temp = parseFloat(input);

  if (isNaN(temp)) {
    resultDisplay.innerHTML = "⚠️ Please enter a valid number.";
    return;
  }

  let celsius, fahrenheit, kelvin;

  switch (unit) {
    case "celsius":
      celsius = temp;
      fahrenheit = (temp * 9/5) + 32;
      kelvin = temp + 273.15;
      break;
    case "fahrenheit":
      celsius = (temp - 32) * 5/9;
      fahrenheit = temp;
      kelvin = (celsius + 273.15);
      break;
    case "kelvin":
      celsius = temp - 273.15;
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = temp;
      break;
  }

  resultDisplay.innerHTML = `
    ✅ <strong>Converted Temperatures:</strong><br>
    Celsius: <strong>${celsius.toFixed(2)} °C</strong><br>
    Fahrenheit: <strong>${fahrenheit.toFixed(2)} °F</strong><br>
    Kelvin: <strong>${kelvin.toFixed(2)} K</strong>
  `;
}

function resetForm() {
  document.getElementById("tempInput").value = "";
  document.getElementById("unitSelect").value = "celsius";
  document.getElementById("resultDisplay").innerHTML = "";
}
