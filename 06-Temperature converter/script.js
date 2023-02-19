const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    switch (input.name) {
      case "celsius":
        // console.log(e.target.value);
        let celsiusValue = Number(e.target.value);
        fahrenheit.value = ((celsiusValue * 9) / 5 + 32).toFixed(2);
        kelvin.value = (celsiusValue + 273.15).toFixed(2);
        break;

      case "fahrenheit":
        let fahrenheitValue = Number(e.target.value);
        celsius.value = (((fahrenheitValue - 32) * 5) / 9).toFixed(2);
        kelvin.value = (((fahrenheitValue + 459.67) * 5) / 9).toFixed(2);
        break;

      case "kelvin":
        let kelvinValue = Number(e.target.value);
        celsius.value = (kelvinValue - 273.15).toFixed(2);
        fahrenheit.value = ((kelvinValue * 9) / 5 - 459.67).toFixed(2);

      default:
        break;
    }
  });
});
