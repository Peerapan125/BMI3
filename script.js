function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var heightInMeters = height / 100;
    var bmi = weight / (heightInMeters * heightInMeters);
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your BMI is: ' + bmi.toFixed(2);
}
