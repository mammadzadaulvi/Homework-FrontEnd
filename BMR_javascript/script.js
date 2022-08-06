const name = prompt("Enter name");
const weight = prompt("Enter weight");
const height = prompt("Enter height( with meter)");
const bmr = parseFloat(weight) / (parseFloat(height) * parseFloat(height));

if (bmr < 18.5) {
    alert(name + ": Underweight")
}
else if (bmr >= 18.5 && bmr <= 24.9) {
    alert(name + ": Normal")
}
else if (bmr > 25 && bmr <= 29.9) {
    alert(name + ": Overweight")
}
else if (bmr > 30 && bmr <= 34.9) {
    alert(name + ": Obese")
}
else {
    alert(name + ": Extremely Obese")
}