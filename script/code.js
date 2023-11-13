function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value / 100;
    var bmi = weight / (height * height);
    var result = document.getElementById("result");
    result.innerHTML = "Your BMI is: " + bmi.toFixed(2);
  }