function bmiCalculator (weight, height) {
    let bmi = weight / (height ** 2);
    let interpretation;
    
    if(bmi < 15.5) {
        return interpretation = "Your BMI is " + bmi + ", so you are underweight."
    } else if(bmi < 24.9) {
        return interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
    } else {
        return interpretation = "Your BMI is " + bmi + ", so you are overweight."
    }
    
    return interpretation;
}

console.log(bmiCalculator(100, 2));