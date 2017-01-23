function myBMIFunction() {
    // var userHeight = prompt("What is your height? (in inches)");
    // var userWeight = prompt("What is your weight? (in pounds)");
    var userHeight = 76;
    var userWeight = 200;
    var userBMI = userWeight * 703 / (userHeight * userHeight);
    var bmiClass;
    if (userBMI >= 40) {
    	bmiCLass = "Class III Obese";
    }
    else if (userBMI >= 35) {
    	bmiClass = "Class II Obese";
    }
    else if (userBMI >= 30) {
    	bmiClass = "Class I Obese";
    }
    else if (userBMI >= 25) {
    	bmiClass = "Overweight";
    }
    else if (userBMI >= 18.5) {
    	bmiClass = "Normal Weight";
    }
    else {
    	bmiClass = "Underweight!!";
    }
    document.getElementById("bmi").innerHTML = userBMI;
    document.getElementById("bmi-class").innerHTML = bmiClass;
}

$(document).ready(function() {
  console.log('hello world');

  $('button').on('click', function() {
    myBMIFunction();
  });

});
// def height_conversion(str)
// feet, inches = self.height.match(/(\d{1}).(\d{1,2})./).captures
// 12 * feet.to_i + inches.to_i
// end
//   def bmi
//     703 * self.weight.to_i / (height_conversion(self.height)**2)
//   end
//
//   def bmr
//     weight = self.weight.to_i * 0.453 #Convert to kg
//     height = height_conversion(self.height.to_i) * 2.54 #Conert to cm
//     if self.gender == "male"
//       10 * weight + 6.25 * height - 5 * self.age.to_i + 5
//     else #self.gender == "female"
//       10 * weight + 6.25 * height - 5 * self.age.to_i - 161
//     end
//   end
