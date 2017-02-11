function patientChart(name, age, weight, height) {
    let patient = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: calcBMI(weight, height),
        status: status
    };


    function calcBMI(weight, height) {
        let status = "";
        let w = weight;
        let h = height/100;
        let bmi = Math.round(w/(h*h));
        bmiStatus(bmi);
        return bmi;
    }

    function bmiStatus(bmi) {
        if (bmi < 18.5){
            status = "underweight";
        }
        else if (bmi >=18.5 && bmi <25){
            status = "normal";
        }
        else if (bmi >= 25 && bmi <30){
            status = "overweight";
        }
        else
        {
            status = "obese";
        }
        return status;
    }
    if(patient.status == "obese"){
        patient.recommendation = "admission required";
    }
    return patient;
}

console.log(patientChart("Honey Boo Boo", 9, 57, 137));