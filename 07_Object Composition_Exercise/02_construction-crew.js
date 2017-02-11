function constructionCrew(obj) {
    let alchIntake = 0;
    if(obj.handsShaking == true){
        isShaking();
    }
    function isShaking() {
        alchIntake += 0.1 * obj.weight * obj.experience;
        obj.handsShaking = false;
    }
    obj.bloodAlcoholLevel += alchIntake;
    return obj;
}
console.log(constructionCrew({ weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false }


));