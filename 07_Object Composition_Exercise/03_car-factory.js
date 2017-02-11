function carFactory(obj) {
    let engine = {};
    let carriage = {};
    let wheels = [];

    function determineCarParts() {

        function determineEngine() {
            if (obj.power <= 90) {
                engine.power = 90;
                engine.volume = 1800;
            }
            else if (obj.power <= 120) {
                engine.power = 120;
                engine.volume = 2400;
            }
            else {
                engine.power = 200;
                engine.volume = 3500;
            }
            return engine;
        }

        function determineCarriage() {
            if (obj.carriage == 'hatchback') {
                carriage.type = 'hatchback';
            }
            else {
                carriage.type = 'coupe';
            }
            carriage.color = obj.color;
            return carriage;
        }

        function determineWheelsize() {
        let wheel = obj.wheelsize;
            if (wheel % 2 == 0) {
                wheel -= 1;
            }
            wheels.push(wheel, wheel, wheel, wheel);
            return wheels;
        }

        determineEngine();
        determineCarriage();
        determineWheelsize();
    }
    determineCarParts();

    let product = {
        model: obj.model,
        engine,
        carriage,
        wheels
    };
    return product;
}

console.log(carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }

));