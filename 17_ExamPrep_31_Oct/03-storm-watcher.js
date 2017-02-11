(function () {
    let globalID = 0;
    return class Report{
        constructor(temperature, humidity, pressure, windSpeed){
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
            this.id = globalID++;
            this.status = (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25)?'Stormy':'Not stormy';
        }
        toString(){
            return `Reading ID: ${this.id}\nTemperature: ${this.temperature}*C\nRelative Humidity: ${this.humidity}%\nPressure: ${this.pressure}hpa\nWind Speed: ${this.windSpeed}m/s\nWeather: ${this.status}`;
        }
    }})();


let record1 = new Record(32, 66, 760, 12);
let report1 = record1.toString();

let record2 = new Record(10, 40, 680, 30);
let report2 = record2.toString();
