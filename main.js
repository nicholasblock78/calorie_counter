function myBMIFunction(height, weight) {
    var userHeight = height;
    var userWeight = weight;
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

function myCalExpenditure() {
  
}

$(document).ready(function() {
  $('button').on('click', function() {

    //ON CLICK - save these variables to local or session storage so can easily access again
    //give the impression of a database but there really isn't any
    var gender = $("input[name='gender']").val();
    var age = $("input[name='age']").val();
    var height = parseInt($("input[name='ht-feet']").val()) * 12 + parseInt($("input[name='ht-inches']").val());
    var weight = $("input[name='wt']").val();
    console.log(height);
    myBMIFunction(height, weight);
  });

});
